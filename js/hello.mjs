// ES6 syntax -> file name extension .mjs
// https://advancedweb.hu/how-to-use-es6-modules-and-top-level-await-in-aws-lambda/

// Lambda function always returns null -> add async to the function.
// https://stackoverflow.com/questions/51459783/aws-lambda-function-always-returns-null-node-javascript

export const handler = async event => {
  let message = `Hello, ${event.name}!`;
  console.log(message);
  return { message };
};
