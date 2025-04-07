const myArr = [0,1,2,3,4,5]

myArr.push(6);
myArr.push(6);
myArr.pop();

myArr.unshift();
myArr.shift();

myArr.join();
myArr.includes(5);
myArr.indexOf(5);


console.log(myArr)
console.log('A', myArr);
console.log("Slice:", myArr.slice(1,3));

console.log('B', myArr);
console.log("Splice:", myArr.splice(1,3));

console.log('C', myArr);