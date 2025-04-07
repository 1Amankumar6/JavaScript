let newDate = new Date();
console.log(newDate)

newDate.toLocaleString('default',{
    weekday: "long",
})
// console.log(newDate.getDate())
// console.log(newDate.toDateString())
// console.log(newDate.toLocaleDateString())

console.table([newDate.toLocaleString(), newDate.getDate(), newDate.getDay(), newDate.getMonth()])