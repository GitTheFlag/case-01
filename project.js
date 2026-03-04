// DevTeam main project
// Status: work in progress

function greet(name) {
  if (!name) return "Hello, stranger!";
  return "Hello, " + name + "!";
}

function farewell(name) {
  return "Goodbye, " + name + "!";
}

module.exports = { greet, farewell };
