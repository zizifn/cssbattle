let res = null;
let time = Date.now();
let bar = new Promise(resolve => {
    res = resolve;
});
bar.then(() => {
    console.log('gap is ', Date.now() - time);
});
setTimeout(
    () => {
        res()
    }, 100
);
