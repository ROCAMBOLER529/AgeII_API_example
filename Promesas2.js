setTimeout(() => console.log("UNO"), 0);
sPromise.resolve().then(() => console.log("DOS"));
console.log("TRES");