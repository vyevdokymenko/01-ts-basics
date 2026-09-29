function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const result1 = getFirstElement<number>([1, 2, 3]);           // 1
const result2 = getFirstElement<string>(["a", "b", "c"]);     // "a"
const result3 = getFirstElement<boolean>([true, false, true]); // true

console.log(typeof result1);
console.log(typeof result2);
console.log(typeof result3);