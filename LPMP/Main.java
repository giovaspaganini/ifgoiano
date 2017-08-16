package rh;
public class Main {
    public static void main(String[] args) {
        
        /*Funcionario f = new Funcionario("Pedro", 
                2500, 
                new Dependente("Lucas", "Filho"), 
                new Endereco("Rua Tal", "St Tal", "Mhs", "GO"), 
                new Cargo("Gerente", 400));
        
        Dependente d = new Dependente("Joana", "Esposa");//instaciacao declarativa
        
        f.getDependentes().add(d);//passada por referencia
        f.getDependentes().add(new Dependente("Lia", "Filha"));//instaciacao anonima
        
        f.getEndereco().add(new Endereco("Rua Fulano", "St Ciclano", "Gyn", "GO")); */       
        
        Venda v1 = new Venda(1, "s", 5, new Itens(1, new Produto("hue", 15)));
        
       
        System.out.println(v1);
    }    
}
