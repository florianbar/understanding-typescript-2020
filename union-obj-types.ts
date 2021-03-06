type numberOrString = number | string;

type person = {
    firstName: string;
    lastName: string;
    age: number;
    random: numberOrString;
};

// union types
function combine(input1: numberOrString, input2: numberOrString) {
    let result;

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combineAges = combine(34, 33);
console.log(combineAges);

const combineNames = combine("Florian", "Bar");
console.log(combineNames);