//Missing values and indes number in Array

let arr = [12, 13, 16, 19];

let F_Value = arr[0];
let L_Value = arr[arr.length - 1];
let newArray = [];
let result = [];

for (let i = F_Value; i <= L_Value; i++) {
    newArray.push(i);
}
newArray.forEach((item, i_missing) => {
    if (!arr.includes(item)) {
        result.push(`${item} is missing on index ${i_missing}`);
    }
});
console.log(result.join("\n"));