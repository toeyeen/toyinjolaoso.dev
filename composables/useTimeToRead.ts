export function useTimeToRead(value) {

  let untreatedText = [];

  const children = value.body.children

  for (let child of children) {
    for (let innerChild of child.children) {
      untreatedText.push(innerChild.value)
    }

  }
  const treatedText = untreatedText.toString().replace('undefined', '')

  // The amount of word an average adult can read in a minute.
  const averageWPM = 225;


  const words = treatedText.trim().split(/\s+/).length;
  const time = Math.ceil(words / averageWPM)

  return time;
}
