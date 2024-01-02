class heroi {
    constructor(nome, idade, tipoHeroi) {
        this.nome = nome
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }

    atacar() {
        let ataqueTipo = " ";

        switch (this.tipoHeroi) {
            case "mago":
                ataqueTipo = "Magia";
                break;

            case "guerreiro":
                ataqueTipo = "Espada";
                break;

            case "monge":
                ataqueTipo = "Artes Marciais";
                break;

            case "ninja":
                ataqueTipo = "Shuriken";
                break;
        }
        console.log(`O ${this.tipoHeroi} ${this.nome} atacou usando ${ataqueTipo}`)
    }
}

let ataqueMago = new heroi("El Valdívia", 101, "mago")
let ataqueGuerreiro = new heroi("GladiStone", 35, "guerreiro")
let ataqueNinja = new heroi("NinjaRino", 40, "ninja")
let ataqueMonge = new heroi("Miyagui", 87, "monge")

ataqueMago.atacar()
ataqueGuerreiro.atacar()
ataqueNinja.atacar()
ataqueMonge.atacar()