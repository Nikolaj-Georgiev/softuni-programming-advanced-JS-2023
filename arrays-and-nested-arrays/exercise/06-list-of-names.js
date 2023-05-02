function listOfNames(input) {
    const sorted = input.sort((a, b) => a.localeCompare(b));
    sorted.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);