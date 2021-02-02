class Bob {
  hey(msg: string) {
    const cleanMsg = msg.replace(/\s/g, "")
    const question = cleanMsg.endsWith("?")
    const yelling =
      cleanMsg === cleanMsg.toUpperCase() && /[A-Z]/.test(cleanMsg)
    const empty = cleanMsg === ""

    if (question && yelling) {
      return "Calm down, I know what I'm doing!"
    } else if (question) {
      return "Sure."
    } else if (yelling) {
      return "Whoa, chill out!"
    } else if (empty) {
      return "Fine. Be that way!"
    } else {
      return "Whatever."
    }
  }
}

export default Bob
