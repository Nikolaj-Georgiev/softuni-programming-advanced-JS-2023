function constructionCrew(object) {
    if (!(object.hasOwnProperty('dizziness'))) {
        return object;
    }

    if (object.dizziness === false) {
        return object;
    }

    object.levelOfHydrated += 0.1 * object.weight * object.experience;
    object.dizziness = false;
    return object;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));
console.log('+++++++++++++++++++');
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));
console.log('+++++++++++++++++++');
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));