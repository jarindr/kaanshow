export function shuffle (array) {
  let j, x, i
  for (i = array.length; i; i--) {
    j = Math.floor(Math.random() * i)
    x = array[i - 1]
    array[i - 1] = array[j]
    array[j] = x
  }
  return array
}
