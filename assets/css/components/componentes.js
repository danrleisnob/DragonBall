class CardDragon extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = " "
    }
}

customElements.define('card-dragon', CardDragon)
