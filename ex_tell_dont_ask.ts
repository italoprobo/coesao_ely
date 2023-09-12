class Item {
    public nome: string
    public preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
}

// Sem Tell Dont Ask

class PedidoNoTellDontASK {
    private itens: Item[];

    constructor(itens: Item[]) {
        this.itens = itens;
    }

    calcularPrecoTotal(): number {
        let total = 0;
        for (const item of this.itens) {
            total += item.preco;
        }
        return total;
    }

    pagar(caixa: Caixa): boolean {
        const precoTotal = this.calcularPrecoTotal();
        return caixa.verificarPagamento(precoTotal);
    }
}

class Caixa {
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    verificarPagamento(valor: number): boolean {
        return this.saldo >= valor;
    }
}

const itens = [new Item("Produto A", 50), new Item("Produto B", 30)];
const pedidontda = new PedidoNoTellDontASK(itens);
const caixa = new Caixa(100);

if (pedidontda.pagar(caixa)) {
    console.log("Pagamento aceito. Pedido concluído.");
} else {
    console.log("Pagamento recusado. Saldo insuficiente.");
}


// Com Tell Dont Ask

class PedidoComTellDontAsk {
    private itens: Item[];

    constructor(itens: Item[]) {
        this.itens = itens;
    }

    calcularPrecoTotal(): number {
        let total = 0;
        for (const item of this.itens) {
            total += item.preco;
        }
        return total;
    }

    pagar(caixa: Caixa): boolean {
        const precoTotal = this.calcularPrecoTotal();
        return caixa2.efetuarPagamento(precoTotal);
    }
}

class Caixa2 {
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    efetuarPagamento(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor; // Atualiza o saldo do caixa
            return true;
        }
        return false;
    }
}

const itens2 = [new Item("Produto A", 50), new Item("Produto B", 30)];
const pedidoctda = new PedidoComTellDontAsk(itens);
const caixa2 = new Caixa2(100);

if (pedidoctda.pagar(caixa)) {
    console.log("Pagamento aceito. Pedido concluído.");
} else {
    console.log("Pagamento recusado. Saldo insuficiente.");
}
