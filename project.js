// DevTeam main project
// Status: stable

function greet(name) {
  if (!name) return "Hello, stranger!";
  return "Hello, " + name + "!";
}

function farewell(name) {
  if (!name) return "Goodbye, stranger!";
  return "Goodbye, " + name + "!";
}

module.exports = { greet, farewell };
