"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["readOnly"] = 1] = "readOnly";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
;
var person = {
    name: "Florian",
    age: 34,
    hobbies: ["Climbing", "Cooking"],
    random: [2, "author", false],
    role: Role.admin
};
console.log(person.name);
