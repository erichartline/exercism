const alphabet = "abcdefghijklmnopqrstuvwxyz"

export const isPangram = (str) => {
  let validStr = true
  const parsedStr = str.replace(/[^a-z]/gi, "").toLowerCase()

  for (let letter of alphabet) {
    if (!parsedStr.includes(letter)) {
      validStr = false
    }
  }

  return validStr
}
