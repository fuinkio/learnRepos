function sayHello(name) {
    return "hello "+name;
}

function sayBye(name) {
    return "Bye "+name;
}


//module.exports.simpleMessage = 'Hello world';
module.exports= {sayHello, sayBye};