const findTheOldest = function(peopleArray) {
    const currentDate = new Date();

    peopleArray.sort((personA,personB)=>{
        let agePersonA = (personA.yearOfDeath ? personA.yearOfDeath : currentDate.getFullYear()) -personA.yearOfBirth;
        let agePersonB = (personB.yearOfDeath ? personB.yearOfDeath : currentDate.getFullYear()) -personB.yearOfBirth;
        
        if (agePersonA > agePersonB) {
            return -1;
        } else if (agePersonA < agePersonB) {
            return 1;
        }
        return 0;
    })
    return peopleArray[0]
};

console.log(findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
    ]));

// Do not edit below this line
module.exports = findTheOldest;

/*
sort by age -> take first instance O(n)

*/ 
