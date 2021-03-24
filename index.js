const escapeHtml = require('escape-html');
/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */

exports.page_fibonacci = (req, res) => {

  if (Number.isInteger(req.body.compute) !== true) {
    res.status(400).send('value is not integer');
  }
  else
  {
    let message = fibonacci(req.body.compute);

    res.send(`{"result" :` + message + `}`);
  }
};

function fibonacci(num){
  var a = 1, b = 0, temp;

  let odd_number = [];
  let sum_value = 0;

  while (num >= 0){
    if ( a%2 !== 0)
    {
      odd_number.push(a)
      sum_value = sum_value + a
    }
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return sum_value;
}
