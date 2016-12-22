/**
 * Proccesses multi-line input and returns the number of ipv7 addresses that support TLS.
 * @param  {String}  input
 * @return {Integer}
 */
function process(input) {
  var result = 0
  input.split("\n").forEach(function(address) {
    if(address === "") {
      return
    }
    result += supportsTLS(address.trim()) ? 1 : 0
  })
  return result
}
/**
 * Returns true if this ipv7 address supports TLS.
 * @param  {String}  line
 * @return {Boolean}
 */
function supportsTLS(line) {
  var components = seperate(line)
   var hasABBAoutside = false;
   var hasABBAinside = false;
   for (var i = 0; i < components.length; i++) {
    if(i % 2 == 0) {
      if(containsABBA(components[i])) {
        hasABBAoutside = true;
      }
    } else {
      if(containsABBA(components[i])) {
        hasABBAinside = true;
      }
    }
  }

  return hasABBAoutside && !hasABBAinside
}
/**
 * Seperates a line into the three components
 * @param  {String}  line
 * @return {Boolean}
 */
function seperate(line) {
  var matches = line.match(/(\w+)/g)
  return matches
}
/**
 * Searches the text for an ABBA and returns true if it's found.
 * @param  {String}  text
 * @return {Boolean}
 */
function containsABBA(text) {
  if(text.length < 4) {
    return false;
  }
  for(var i = 0; i < text.length - 3; i++) {
    if(isABBA(text.substring(i, i + 4))) {
      return true;
    }
  }
  return false;
}
/**
 * Checks if a four-character string is an ABBA.
 * @param  {String}  text
 * @return {Boolean}
 */
function isABBA(text) {
  return (text.charAt(0) !== text.charAt(1)) && (text.charAt(0) === text.charAt(3)) && (text.charAt(1) === text.charAt(2))
}
module.exports = {process, supportsTLS, seperate, containsABBA, isABBA}
