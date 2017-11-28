$( function() {
    var dialog, form,            
    nome = $("#nome"),
    peso = $("#peso"),
    altura = $("#altura"),
    imc = $("#imc"),
    imcResult = $("#imcResult");
    allFields = $( [] ).add( nome ).add( peso ).add( altura ).add( imc ).add( imcResult ),
    tips = $(".validateTips");

    $.ajax({
        url: "json/imcData.json",
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (response) {                  
            window.resultadosIMC = response;
        },
        error: function (xhr, status) {
            alert("Erro ao carregar o arquivo");
            console.log("xhr, status");
        }
    });

    function calcularImcDoArquivo(valor) {
        for (let i = 0; i < window.resultadosIMC.length; i++) {
            if (valor >= window.resultadosIMC[i].minimo && valor <= window.resultadosIMC[i].maximo) {
                return window.resultadosIMC[i];
            }                   
        }

        return {erro: "Nao foi encontrado nenhum valor compativel"};
    }

    function updateTips( t ) {
        tips
        .text( t )
        .addClass( "ui-state-highlight" );
        setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
        }, 500 );
    }

    function imcCalc() {
        imc = peso.val() / (altura.val() * altura.val());               
        return imc;
    }

    function resultImc() {              
        let resultado = calcularImcDoArquivo(imc);

        if(resultado.erro){
            return resultado.erro;
        }
        
        return resultado.descricao;             
    }           

    function addUser() {
        var valid = true;
        allFields.removeClass( "ui-state-error" );

        if (nome.val() == "" || peso.val() == "" || altura.val() == ""){
            $( function() {
                $( "#dialog" ).dialog();

            } );
            valid = false;
        }

        var regex = /^[a-záàâãéèêíïóôõöúçñ A-Z ]+$/;

        if (regex.test(nome.val())) {
            valid = true;
        } else {
            $( function() {
                $( "#dialogNome" ).dialog();
            } );
            valid =  false;
        }

        if ( valid ) {
            $( "#users tbody" ).append( "<tr>" +
                "<td>" + nome.val() + "</td>" +
                "<td>" + peso.val() + "</td>" +
                "<td>" + altura.val() + "</td>" +
                "<td>" + imcCalc().toFixed(2) + "</td>" +
                "<td>" + resultImc() + "</td>" +
                "</tr>" );
            dialog.dialog( "close" );
        }
        return valid;
    }

    dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Adicionar Pessoa": addUser,
            Cancelar: function() {
                dialog.dialog( "close" );
            }
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        addUser();
    });

    $( "#create-user" ).button().on( "click", function() {
        dialog.dialog( "open" );
    });
} );