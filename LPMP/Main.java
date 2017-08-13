package rh2;

public class Main {
    public static void main(String[] args) {
    	    	
    	Endereco primeiroEndereco = new Endereco("Rua 14 Numero 52", "Jardim América", "Morrinhos", "GO", "Quadra 19");
    	Endereco segundoEndereco = new Endereco("Rua 45 Numero 99", "Jardim Goiás", "Morrinhos", "GO", "Quadra 29");
    	Endereco terceiroEndereco = new Endereco("Rua 34 Numero 23", "Centro", "Morrinhos", "GO", "Quadra 19");
    			
    	Cargo cargo = new Cargo("Pedreiro", 300.50);
    	
    	Funcionario f = new Funcionario("Jorginho Augusto Fernandes ", 974.00, cargo, primeiroEndereco);
    	
    	f.getEnderecos().add(segundoEndereco);
    	f.getEnderecos().add(terceiroEndereco);
    	
    	f.getDependentes().add(new Dependente("Larissa", "Esposa"));
    	f.getDependentes().add(new Dependente("Bianca", "Filha"));
    	
    	System.out.println(f);
    	
    	
       
       
    }
    
}
