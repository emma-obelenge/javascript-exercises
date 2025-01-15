const findTheOldest = function(peopleArray) {
    const currentYear = new Date().getFullYear();
    return(peopleArray.reduce((oldest, current) => {
        const oldestAge = oldest.yearOfDeath ? (oldest.yearOfDeath - oldest.yearOfBirth) : currentYear - oldest.yearOfBirth;
        const currentAge = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : currentYear - current.yearOfBirth;
        return(oldestAge >= currentAge ? oldest : current)
    }));
};

// Do not edit below this line
module.exports = findTheOldest;
