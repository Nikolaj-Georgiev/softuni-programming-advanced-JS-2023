class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = new Map;
        this.listOfHikes = [];
        this.resources = 100;

    }
    
    addGoal(peak, altitude){
        if (this.goals.has(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals.set(peak, altitude);
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if(!this.goals.has(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.goals.has(peak) && this.resources === 0) {
            throw new Error('You don\'t have enough resources to start the hike');
        }

        let difference = this.resources - (time * 10);
        if (difference < 0){
            return 'You don\'t have enough resources to complete the hike';
        }

        this.resources = difference;
        this.listOfHikes.push([peak, time, difficultyLevel]);

        return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`;
    }

    rest(time){
        let addedResources = time * 10;

        if (this.resources + addedResources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        this.resources += addedResources;
        return `You have rested for ${time} hours and gained ${addedResources}% resources`
    }
    
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === 'hard') {
            let hardPeaks = this.listOfHikes.filter(x => x[2] === 'hard');
            if (hardPeaks.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            return `${this.username}'s best ${criteria} hike is ${hardPeaks[0][0]} peak, for ${hardPeaks[0][1]} hours`
        }

        if (criteria === 'easy') {
            let easyPeaks = this.listOfHikes.filter(x => x[2] === 'easy');
            if (easyPeaks.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            return `${this.username}'s best ${criteria} hike is ${easyPeaks[0][0]} peak, for ${easyPeaks[0][1]} hours`
        }

        let allHikesPrintResult = 'All hiking records:\n';
        this.listOfHikes.forEach(hike => {
            allHikesPrintResult += `${this.username} hiked ${hike[0]} for ${hike[1]} hours\n`
        });

        return allHikesPrintResult.trim();
    }
}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));




