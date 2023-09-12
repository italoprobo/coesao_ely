/*
Questão 3
public class Cliente {
    private int id;
    private String nome;
    private String endereco;
    private double valorCompra;
    private String numeroConta;
    private double saldo;
    
    public void exibirInformacoes() {
    // exibir informações do cliente
    }
    public void realizarCompra() {
    // lógica de compra
    }
    public void atualizarSaldo() {
    
    // atualizar saldo do cliente
    }
}
Refatore o código criando classes Conta, Compra e Cliente de forma que cada
uma fique coesa.
*/

class Conta {
    private numeroConta: number;
    private saldo: number;
        
    constructor(numeroConta: number, saldo: number){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    public getSaldo(): number{
        return this.saldo;
    }

    getNumeroConta(): number {
        return this.numeroConta
    }

    public atualizarSaldo(valor: number): void{
        this.saldo = valor;
    }
}

class Compra {
    private valorCompra: number;

    constructor(valorCompra: number) {
        this.valorCompra = valorCompra;
    }

    public getvalorCompra(): number{
        return this.valorCompra
    }
}

class Cliente {
    private id: number;
    private nome: string;
    private endereco: string;
    private conta: Conta

    constructor(id: number, nome: string, endereco: string, conta: Conta) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.conta = conta;
      }
    
      public exibirInformacoes(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`Número da Conta: ${this.conta.getNumeroConta()}`);
        console.log(`Saldo: ${this.conta.getSaldo()}`);
      }
    
      public realizarCompra(compra: Compra): void {
        const valorCompra = compra.getvalorCompra();
        const saldoAtual = this.conta.getSaldo();
    
        if (saldoAtual >= valorCompra) {
          const novoSaldo = saldoAtual - valorCompra;
          this.conta.atualizarSaldo(novoSaldo);
          console.log(`Compra de ${valorCompra} realizada com sucesso.`);
        } else {
          console.log('Saldo insuficiente para realizar a compra.');
        }
      }
}