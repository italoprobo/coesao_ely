/*
Classes utilitárias são muito comuns, pois elas agregam funcionalidades usadas
por outras classes para centralizar códigos de utilidade geral. A classe abaixo
entretanto possui problemas de coesão por ter diferentes aspectos de utilidades.
Refatore-a criando classes necessárias de forma a deixar as classes resultantes
coesas. Implemente os métodos e além disso, modifique os métodos para
acessarem atributos e não usar os parâmetros passados.
public class Utilitarios {
public void ordenar(int[] array) {
// lógica de ordenação
}
public void embaralhar(int[] array) {
// lógica de ordenação
}

public String removerEspacos(String texto) {
// lógica de remoção de espaços
}
public String[] quebrarEmPalavras(String texto) {
// lógica de remoção de espaços
}
public double calcularMedia(double[] numeros) {
// lógica de cálculo de média
}
public double calcularDesvioPadrão(double[] numeros) {
// lógica de cálculo de média
}

}*/

class UtilitariosArray {

    public ordenar(array: number[]): void {
        array.slice().sort((a, b) => a - b);
    }


    public embaralhar(array: number[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }

}

class UtilitariosString {
    public removerEspacos(texto: string): string{
        return texto.replace(" ", "")
    }

    public quebraEmPalavras(texto: string): string[] {
        return texto.split("")
    }
}

class UtilitariosNumeros {
    public calcularMedia(numeros: number[]): number {
        let media = 0
        for(let i = 0; i<numeros.length; i++){
            media += numeros[i];
        }
        return media/numeros.length
    }

    public calcularDesvioPadrao(numeros: number[]): number{
        let media = this.calcularMedia(numeros);

        let somaDiferencasQuadradas = 0.0;
        for (let i = 0; i < numeros.length; i++) {
            somaDiferencasQuadradas += Math.pow(numeros[i] - media, 2);
        }


        return Math.sqrt(somaDiferencasQuadradas / numeros.length);
    }
}