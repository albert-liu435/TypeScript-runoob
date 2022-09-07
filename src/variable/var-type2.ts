function f() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

var k=f(); // returns 2
console.log(k);



function f1(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f1(true);  // returns '10'
f1(false); // returns 'undefined'




for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}



for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

export {};