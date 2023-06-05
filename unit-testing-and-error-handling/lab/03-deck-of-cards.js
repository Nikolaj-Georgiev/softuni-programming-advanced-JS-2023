function printDeckOfCards(cards) {

    let deck = [];

    deck = cards.map(x => {
        face = x.slice(0, -1);
        suit = x.slice(-1);
        try {
            let card = playingCards(face, suit).toString();
            return card;
        } catch (ex) {
            console.log(`Invalid card: ${x}`);
            return;
        }
        
    })
    console.log(deck.join(' '));

    function playingCards(face, suit) {
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (faces.indexOf(face) === -1) {
            throw new Error(`Invalid card face`);
        }

        if (!(suit in suits)) {
            throw new Error(`Invalid card suit`);
        }
        const card = {
            f: face,
            s: suits[suit],
            toString() {
                return this.f + this.s;
            }
        }
        return card;
    }

}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
