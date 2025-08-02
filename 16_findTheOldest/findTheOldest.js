const findTheOldest = function(people) {
    const yearOfToday = new Date().getFullYear();
    let maxAge=0;
    let oldestPerson = {};
    for(let i=0;i< people.length;i++){
        const person= people[i];
        const yearOfDeath = person.yearOfDeath || yearOfToday;
        const age = yearOfDeath - person.yearOfBirth;
        if(age > maxAge){
            maxAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
