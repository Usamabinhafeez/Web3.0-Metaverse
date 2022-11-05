
// Userinput using Prompt (add Two numbers example)

import PromptSync from "prompt-sync";

const prompt = PromptSync();

let F_num = parseInt(prompt("Please Enter First Number "));
let S_num = parseInt(prompt("Please Enter Second Number "));

const sum = (num1, num2) => {

    let final = num1 + num2;
    return final;
}

console.log(`The sum of ${F_num} and ${S_num} is = ` + sum(F_num, S_num));
