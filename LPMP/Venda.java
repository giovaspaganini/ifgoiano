package rh2;

import java.util.Date;

public class Venda {
    double numero;
    Date data;
    double desconto;
    
    public calculeDesconto(){
        return desconto;
    }
    
    public double calculeValorTotal(){
        return 
    }
    
    public double calculeValorLiquido(){
        return 0.0;
    }

    public Venda(double numero, Date data, double desconto) {
        this.numero = numero;
        this.data = data;
        this.desconto = desconto;
    }

    public Venda() {
    }

    public double getNumero() {
        return numero;
    }

    public void setNumero(double numero) {
        this.numero = numero;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public double getDesconto() {
        return desconto;
    }

    public void setDesconto(double desconto) {
        this.desconto = desconto;
    }

    @Override
    public String toString() {
        return "Venda{" + "numero=" + numero + ", data=" + data + ", desconto=" + desconto + '}';
    }
}
