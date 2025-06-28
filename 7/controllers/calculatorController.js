const Calculator =
require('../libraries/Calculator');
let myCalc = new Calculator()

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2)
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const subNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.sub(number1, number2)
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const divNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.div(number1, number2)
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const multiNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.multi(number1, number2)
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};


module.exports = {
  addNumbers,
  subNumbers,
  divNumbers,
  multiNumbers,
};
