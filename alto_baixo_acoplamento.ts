class Livro {
    private titulo: string;
    public estaEmprestado: boolean = false;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    public emprestar() {
        if (!this.estaEmprestado) {
            this.estaEmprestado = true;
            console.log(`Livro "${this.titulo}" emprestado.`);
        } else {
            console.log(`Livro "${this.titulo}" já está emprestado.`);
        }
    }

    public devolver() {
        if (this.estaEmprestado) {
            this.estaEmprestado = false;
            console.log(`Livro "${this.titulo}" devolvido.`);
        } else {
            console.log(`Livro "${this.titulo}" não estava emprestado.`);
        }
    }
}

class Usuario {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }
}

// Exemplo de Classe com Alto Acoplamento:

class Biblioteca {
    private livros: Livro[] = [];
    private usuarios: Usuario[] = [];

    constructor() { }

    public adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    public adicionarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    public emprestarLivro(livro: Livro, usuario: Usuario) {
        if (this.livros.includes(livro) && this.usuarios.includes(usuario)) {
            if (!livro.estaEmprestado) {
                livro.emprestar();
            } else {
                console.log("Livro já emprestado.");
            }
        } else {
            console.log("Livro ou usuário não encontrado.");
        }
    }
}

// Refatoração para Reduzir o Acoplamento:

class Biblioteca2 {
    private livros: Livro[] = [];
    private usuarios: Usuario[] = [];

    constructor() { }

    public adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    public adicionarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    public emprestarLivro(livro: Livro, usuario: Usuario) {
        if (this.possuiLivro(livro) && this.possuiUsuario(usuario)) {
            if (!livro.estaEmprestado) {
                livro.emprestar();
            } else {
                console.log("Livro já emprestado.");
            }
        } else {
            console.log("Livro ou usuário não encontrado.");
        }
    }

    private possuiLivro(livro: Livro): boolean {
        return this.livros.includes(livro);
    }

    private possuiUsuario(usuario: Usuario): boolean {
        return this.usuarios.includes(usuario);
    }
}
