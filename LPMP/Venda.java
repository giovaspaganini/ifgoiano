package rh;
import java.util.ArrayList;

public class Venda {    
    private double numero;
    private String data;
    private double desconto;
        
    private ArrayList<Itens> item = new ArrayList<>();    
    private Produto produto;

    public Venda(double numero, String data, Itens item, Produto produto) {
        this.numero = numero;
        this.data = data;
        this.item.add(item);
        this.produto = produto;        
    }

    public Venda(double numero, String data, double desconto, Itens item, Produto produto) {
        this.numero = numero;
        this.data = data;
        this.desconto = desconto;
        this.item.add(item);
        this.produto = produto;        
    }

    public double getNumero() {
        return numero;
    }

    public void setNumero(double numero) {
        this.numero = numero;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public double getDesconto() {
        return desconto;
    }

    public void setDesconto(double desconto) {
        this.desconto = desconto;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public ArrayList<Itens> getItem() {
        if (item==null){
            item = new ArrayList<>();                  
        }
        return item;
    }

    public void setItem(ArrayList<Itens> item) {
        this.item = item;
    }
    
    public double calculeDesconto(){
        return this.calculeValorTotal()*this.desconto/100;
    }
    
    public double calculeValorTotal(){
        double valorTotal = 0;
        for (Itens item1 : item) {
            valorTotal += item1.calculeTotal();
        }
        return valorTotal;
    }
    
    public double calculeValorLiquido(){
        double valorLiq = 0;
        for (Itens item1 : item) {
            valorLiq = item1.calculeTotal();
        }
        return valorLiq;
    }

    @Override
    public String toString() {
        String aux;
        aux = "Venda" + "numero: " + numero + "\nData: " + data + "\nProduto: " + produto + "Item=" + item + '}';
        
        for (Itens avatar:item){
            aux = aux.concat("\n" + avatar);
        }
        
        return aux.concat("Salario Bruto=");
    }    
    
}
