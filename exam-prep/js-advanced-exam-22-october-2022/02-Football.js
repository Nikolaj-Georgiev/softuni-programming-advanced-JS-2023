class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = new Map();
    }

    newAdditions(footballPlayersArr) {
        if (footballPlayersArr.length === 0 || (!Array.isArray(footballPlayersArr))) {
            return;
        }
        footballPlayersArr.forEach(player => {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            if (!this.invitedPlayers.has(name)) {
                this.invitedPlayers.set(name, { age, playerValue });
            }
            this.invitedPlayers.get(name).playerValue < playerValue ? this.invitedPlayers.get(name).playerValue = playerValue : '';
            // console.log(this.invitedPlayers)
            // console.log(this.invitedPlayers.get(name).playerValue);
        });
        let printedResult = `You successfully invite`;
        let playersNames = [...this.invitedPlayers.keys()];
        playersNames.forEach(p => printedResult += ` ${p},`);
        return printedResult = printedResult.slice(0,-1) + '.';
    }
    signContract(selectedPlayer) { 
        if (typeof selectedPlayer !== 'string' || selectedPlayer === ''){
            return;
        }

        let [name, offer] = selectedPlayer.split('/');
        offer = Number(offer);
        let invitedPlayer = this.invitedPlayers.get(name);
        if (!invitedPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (invitedPlayer.playerValue > offer) {
            let priceDifference = invitedPlayer.playerValue - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        invitedPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
    }
    ageLimit(name, age) { 
        let invitedPlayer = this.invitedPlayers.get(name);
        if (!invitedPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let ageDifference = age - invitedPlayer.age;
        if (ageDifference <= 0) {
            return `${name} is above age limit!`
        }
        
        if (ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
        }

        if (ageDifference >= 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
    }

    transferWindowResult() { 
        let result = ['Players list:'];
        this.invitedPlayers.forEach((value, key) => result.push(`Player ${key}-${value.playerValue}`));
        return result.join('\n');
    }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



