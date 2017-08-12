package rh2;
public class Itens {
    double quantidade;    
    private String descricao;
    private Produto produto;
    
    public double calculeTotal(){
        
    }

    public Itens() {
        
    }

    public Itens(double quantidade) {
        this.quantidade = quantidade;
    }

    public double getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(double quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public String toString() {
        return "Itens{" + "quantidade=" + quantidade + '}';
    }
}
