
// Prototype method in JavaScript (Smallest to Largest)

Array.prototype.ascendVal = function () {

    let left = 0;
    let right = this.length - 1;
    let temp;

    for (let i = left; i <= right; i++) {

        for (let j = i + 1; j <= right; j++) {

            if (this[i] > this[j]) {
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
const output = [23, 15, 16, 10, 55, 86, 2];
console.log(output.ascendVal());