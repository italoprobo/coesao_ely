/*
public class Usuario {
private List<Post> posts;
private List<Comentario> comentarios;
public void criarPost(String conteudo) {
Post novoPost = new Post(conteudo);
posts.add(novoPost);
}
public void criarPost(String conteudo) {
Comentario novoComentario = new Comentario(conteudo);
comentarios.add(novoComentario);
}

}
*/

// Interface Conteudo que será implementada por Post, Comentario e outras classes de conteúdo
interface Conteudo {
    conteudo: string;
}

// Classe base ConteudoBase que implementa a interface Conteudo
abstract class ConteudoBase implements Conteudo {
    constructor(public conteudo: string) { }
}

// Implementação da classe Post que herda de ConteudoBase
class Post extends ConteudoBase {
    constructor(conteudo: string) {
        super(conteudo);
    }
}

// Implementação da classe Comentario que também herda de ConteudoBase
class Comentario extends ConteudoBase {
    constructor(conteudo: string) {
        super(conteudo);
    }
}

// Classe Usuario que usa uma lista de Conteudo para criar e gerenciar conteúdo
class Usuario1 {
    private conteudos: Conteudo[] = [];

    criarConteudo(novoConteudo: Conteudo): void {
        this.conteudos.push(novoConteudo);
    }

    // Outros métodos para gerenciar conteúdo
}

// Exemplo de uso
const usuario = new Usuario1();
const novoPost = new Post("Conteúdo do post");
const novoComentario = new Comentario("Conteúdo do comentário");

usuario.criarConteudo(novoPost);
usuario.criarConteudo(novoComentario);
