
    function wakeDog(dogName, dogBreed) {
        let s = (`Wake ${dogName} the ${dogBreed}`);
        console.log(s);
        return s;
    }

    function leashDog(dogName, dogBreed) {
        let s = (`Leash ${dogName} the ${dogBreed}`);
        console.log(s);
        return s;

    }

    function walkToPark(dogName, dogBreed) {
        let s = (`Walk to the park with ${dogName} the ${dogBreed}`);
        console.log(s);
        return s;
    }

    function throwFrisbee(dogName, dogBreed) {
        let s = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
        console.log(s);
        return s;
    }

    function walkHome (dogName, dogBreed) {
        let s = (`Walk home with ${dogName} the ${dogBreed}`);
        console.log(s);
        return s;
    }

    function unleashDog (dogName, dogBreed) {
        let s = (`Unleash ${dogName} the ${dogBreed}`);
        console.log(s);
        return s;
    }

const routine =[wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let arr = [];
    routine.forEach(function(task) {
        arr.push(task(dogName, dogBreed));
    });
    return arr;

}

    