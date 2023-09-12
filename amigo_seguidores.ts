/*
public class Usuario {
private List<Usuario> amigos;
public void adicionarAmigo(Usuario amigo) {
amigos.add(amigo);
}
}
*/

enum TipoRelacionamento {
    AMIGOS,
    SEGUIDOR
}

class Relacionamento {
    constructor(
        public iniciador: Usuarioa,
        public tipo: TipoRelacionamento
    ) { }
}

class Usuarioa {
    private relacionamentos: Relacionamento[] = [];

    adicionarRelacionamento(amigo: Usuarioa, tipo: TipoRelacionamento): void {
        const relacionamento = new Relacionamento(amigo, tipo);
        this.relacionamentos.push(relacionamento);
    }

}

const usuario1 = new Usuarioa();
const usuario2 = new Usuarioa();

usuario1.adicionarRelacionamento(usuario2, TipoRelacionamento.AMIGOS);