const printHello = () => console.log('hello');

exports.printHello = printHello;

exports.printMessage = (message) => {
  console.log(message);
};

exports.ex = function(message){
  console.log(message);
}

//exports.printHello();
//exports.printMessage('123')