// Coesão funcional

class Pedido {
    constructor(public id: number, public total: number) {}
  }
  
  class PagamentoService {
    processarPagamento(pedido: Pedido): void {
      // Lógica para processar o pagamento do pedido
      console.log(`Processando pagamento do Pedido #${pedido.id} no valor de R$ ${pedido.total}`);
    }
  }
  
const pedido = new Pedido(1, 100);
const pagamentoService = new PagamentoService();
pagamentoService.processarPagamento(pedido);


// Coesão Sequencial

class Pedido2 {
    constructor(public id: number) {}
  }
  
  class PedidoService {
    processarPedido(pedido: Pedido): void {
      this.validarPedido(pedido);
      this.prepararPedido(pedido);
      this.enviarPedido(pedido);
    }
  
    private validarPedido(pedido: Pedido): void {
      // Lógica para validar o pedido
    }
  
    private prepararPedido(pedido: Pedido): void {
      // Lógica para preparar o pedido
    }
  
    private enviarPedido(pedido: Pedido): void {
      // Lógica para enviar o pedido
    }
  }
  
const pedido2 = new Pedido2(1);
const pedidoService = new PedidoService();
pedidoService.processarPedido(pedido);
  

// Coesão comunicacional

class NotificacaoService {
    enviarEmail(destinatario: string, mensagem: string): void {
      // Lógica para enviar um email
      console.log(`Enviando email para ${destinatario}: ${mensagem}`);
    }
  
    enviarSMS(destinatario: string, mensagem: string): void {
      // Lógica para enviar uma mensagem SMS
      console.log(`Enviando SMS para ${destinatario}: ${mensagem}`);
    }
  }
  
const notificacaoService = new NotificacaoService();
notificacaoService.enviarEmail('usuario@example.com', 'Olá, este é um email de teste.');


// Coesão Temporal

class AgendamentoService {
    agendarTarefa(tarefa: string, dataExecucao: Date): void {
      // Lógica para agendar uma tarefa para execução em uma data específica
      console.log(`Agendando a tarefa "${tarefa}" para ${dataExecucao}`);
    }
  
    executarTarefasAgendadas(): void {
      // Lógica para executar tarefas agendadas
      console.log('Executando tarefas agendadas...');
    }
  }
  
const agendamentoService = new AgendamentoService();
agendamentoService.agendarTarefa('Limpar cache', new Date('2023-09-15'));
agendamentoService.executarTarefasAgendadas();
  

// Coesão Procedural

class RelatorioService {
    gerarRelatorio(dados: any): void {
      // Lógica para gerar um relatório a partir dos dados fornecidos
      console.log('Gerando relatório...');
    }
  }
  
const relatorioService = new RelatorioService();
const dados = { /* Dados para o relatório */ };
relatorioService.gerarRelatorio(dados);


// Coesão Funcional (Alta)

class Calculadora {
    somar(a: number, b: number): number {
      return a + b;
    }
  
    subtrair(a: number, b: number): number {
      return a - b;
    }
  
    multiplicar(a: number, b: number): number {
      return a * b;
    }
  
    dividir(a: number, b: number): number {
      if (b === 0) {
        throw new Error('Divisão por zero não é permitida.');
      }
      return a / b;
    }
}
  
const calculadora = new Calculadora();
console.log('Soma:', calculadora.somar(5, 3));
console.log('Subtração:', calculadora.subtrair(10, 7));
console.log('Multiplicação:', calculadora.multiplicar(4, 6));
console.log('Divisão:', calculadora.dividir(8, 2));
  