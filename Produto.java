package rh2;
public class Produto {
    String descricao;
    String valorUnitario;

    public Produto() {
    }

    public Produto(String descricao, String valorUnitario) {
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getValorUnitario() {
        return valorUnitario;
    }

    public void setValorUnitario(String valorUnitario) {
        this.valorUnitario = valorUnitario;
    }

    @Override
    public String toString() {
        return "Produto{" + "descricao=" + descricao + ", valorUnitario=" + valorUnitario + '}';
    }
}
