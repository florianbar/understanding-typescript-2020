const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string, boolean]; // tuple
} = {
    name: "Florian",
    age: 34,
    hobbies: ["Climbing", "Cooking"],
    role: [2, "author", false] // tuple
};

console.log(person.name);