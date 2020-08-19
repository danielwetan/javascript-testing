const capitalize = (string) => {
  let name = string.toLowerCase();
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const greet = (name) => {
  if (name == undefined) return 'Hello, Stranger'
  if (typeof name !== 'string') return 'Wrong Name'
  if (name.trim() == '') return 'Hello, Stranger'

  let names = name.split(' ');
  if (names.length > 1) {
    return 'Hello, ' + capitalize(names[0])
  }
  return 'Hello, ' + capitalize(name);
}

module.exports = greet;