/* example of promise chaining */
Promise.resolve('ta-da!').then(
  function step2(result) {
    console.log('Step 2 received ' + result);
    return 'Greetings from step 2';
    //explicit return value
  }
).then(
  function step3(result) {
    console.log('Step 3 received ' + result);
    //no explicit return value
  }
).then(
  function step4(result) {
    console.log('Step 4 received ' + result);
    return Promise.resolve('fulfilled value');
    //return a promise
  }
).then(
  function step5(result) {
    console.log('Step 5 received ' + result);
  }
);

// Console output:
// Step 2 received ta-da!
// Step 3 received Greetings from step 2
// Step 4 received undefined
// Step 5 received fulfilled value
// Explicit return value
// No explicit return value
// Return a promise
