class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    get competitionName() {
        return this._competitionName;
    }

    set competitionName(name) {
        this._competitionName = this.stringChecker(name);
    }

    addParticipant(participantName, participantGender) {
        participantName = this.stringChecker(participantName);
        participantGender = this.stringChecker(participantGender);

        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
        return `${participantName} has already been added to the list`;
    }

    completeness(participantName, condition) {
        participantName = this.stringChecker(participantName);
        condition = this.numberChecker(condition);

        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        let completedCount = condition / 30 | 0;
        if (completedCount <= 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }
        let participantGender = this.participants[participantName]
        const finalist = { participantName, participantGender };
        this.listOfFinalists.push(finalist);

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        participantName = this.stringChecker(participantName);
        let message = this.listOfFinalists.find(el => el.participantName === participantName)
            ? `${participantName} was rewarded with a trophy for his performance`
            : `${participantName} is not in the current finalists list`;

        return message;
    }

    showRecord(criteria) {
        criteria = this.stringChecker(criteria);
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        if (!this.listOfFinalists.find(p => p.participantGender === criteria) && criteria !== 'all'){
            return `There are no ${criteria}'s that finished the competition`
        }

        if (criteria !== 'all') {
            for (const element of this.listOfFinalists) {
                if (element.participantGender === criteria) {
                    return `${element.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            }
        }

        let finalResult = `List of all ${this.competitionName} finalists:\n`;
        this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName)).forEach(player => {
            finalResult += `${player.participantName}\n`;
        });

        return finalResult.trim();
    }

    stringChecker(someString) {
        if (typeof someString === 'string' && someString !== '') {
            return someString;
        }
        throw new Error('Invalid input!');
    }

    numberChecker(someNumber) {
        if (typeof someNumber === 'number' && someNumber >= 0 && someNumber <= 100) {
            return someNumber;
        }
        throw new Error('Invalid input!');
    }
}


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Gosho", "male"));
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Gosho", 100));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Gosho"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));



