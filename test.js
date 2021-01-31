

let array = [];
function test() {
    for (var index = 0; index < 10; index++) {
        (function f() {
            console.log(f.a);
        }).a = 1;
        setTimeout(() => {
            array.push(test1)
        }, 100)

    }
}

test()

console.log(array[1] === array[0]);