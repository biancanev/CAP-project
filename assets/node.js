//DO NOT TOUCH!
var http = require('http');
var x = require("port");
const(x) = function(a,b){
  while(a<b){
    http.createServer(function (req, res) {
      if(req == 'payment'){
        res.write('Payement Succesful!'); //write a response to the client
        res.end;
      }else{
      window.location.href('https://biancanev.github.io/pay');
      res.write(err-msg);
      res.end(); //end the response
      }
    }).listen(8080); //the server object listens on port 8080
  }
};
