function listOfNames(input) {
    let counter = 1;
    const sorted = input.sort((a, b) => a.localeCompare(b));
    sorted.forEach(element => {
        console.log(`${counter}.${element}`);
        counter++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);