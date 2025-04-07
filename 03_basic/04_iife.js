// Immediately Invoked function expression(IIFE)
(function chai(){
    // named IIFE
    console.error(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('HITESH');
