enum Role { admin, readOnly, author };

const person: {
    name: string;
    age: number;
    hobbies: string[];
    random: [number, string, boolean]; // tuple
    role: Role
} = {
    name: "Florian",
    age: 34,
    hobbies: ["Climbing", "Cooking"],
    random: [2, "author", false], // tuple
    role: Role.admin
};

console.log(person.name);