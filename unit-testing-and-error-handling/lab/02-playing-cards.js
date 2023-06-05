function playingCards(face, suit) {

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (faces.indexOf(face) === -1) {
        throw new Error('Error');
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

console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('J', 'C').toString());
console.log(playingCards('2', 'D').toString());
console.log(playingCards('1', 'C').toString())