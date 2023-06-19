class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            let oldCandidate = this.jobCandidates.filter(x => x.name === name)[0];
            if (oldCandidate === undefined) {
                this.jobCandidates.push({ name, education, yearsExperience });
            }
            if (oldCandidate) {
                if (oldCandidate.yearsExperience < yearsExperience) {
                    oldCandidate.yearsExperience = yearsExperience;
                }
            }
        });

        let resultString = `You successfully added candidates: `;
        let candidateNames = this.jobCandidates.map(x => x.name);
        resultString += candidateNames.join(', ') + '.';
        return resultString;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        let currentCandidate = this.jobCandidates.filter(x => x.name === name)[0];

        if (!currentCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (currentCandidate.yearsExperience < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        currentCandidate.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let currentCandidate = this.jobCandidates.filter(x => x.name === name)[0];
        if (!currentCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (currentCandidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }

        if (currentCandidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }

        if (currentCandidate.education !== 'Bachelor' && currentCandidate.education !== 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error (`Candidate Database is empty!`);
        }

        let sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        let resultString = `Candidates list:\n`;
        sortedCandidates.forEach(candidate => resultString += `${candidate.name}-${candidate.yearsExperience}\n`);

        return resultString.trim();
    }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());
