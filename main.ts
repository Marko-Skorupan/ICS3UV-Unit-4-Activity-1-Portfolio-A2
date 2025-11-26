/**
 * @author Marko Skorupan
 * @version 1.0.0
 * @date 2025-11-26
 * @fileoverview Print even numbers between 3 and 21.
 */

const startString: string = prompt("Enter an odd starting value: ") || "0";
const endString: string = prompt("Enter an odd ending value: ") || "0";

const start: number = parseInt(startString);
const end: number = parseInt(endString);

console.log(`Even numbers between ${start} and ${end}:`);

for (let counter: number = start; counter <= end; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}
console.log("\nDone.");
