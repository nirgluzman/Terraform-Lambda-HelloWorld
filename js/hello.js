export const handler = (event, context) => {
  message = `Hello, ${event.name}!`;
  return { message };
};
