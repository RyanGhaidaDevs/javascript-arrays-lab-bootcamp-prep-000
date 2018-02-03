
var kittens = ['Milo', 'Otis', 'Garfield']
// global variable

function destructivelyAppendKitten(name) {

kittens.push(name)

  return kittens
}


function destructivelyPrependKitten(name) {

kittens.unshift(name)

return kittens
}
