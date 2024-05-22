#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to Maria's simple calculator\n");
let answers = await inquirer.prompt([
    { message: "Enter 1st number", type: "number", name: "firstnumber" },
    { message: "Enter 2nd number", type: "number", name: "secondnumber" },
    {
        message: "Select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"],
    }
]);
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Subraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("INVALID INPUT");
}
