export const transform = (values) => {
  const newValues = {}

  // loop over the object's entries
  for (const [key, value] of Object.entries(values)) {
    // if the value is an array then we need to add each element to the new obj;
    // otherwise just add the new value
    if (Array.isArray(value)) {
      value.forEach((item) => {
        newValues[item.toLowerCase()] = Number(key)
      })
    } else {
      newValues[value.toLowerCase()] = Number(key)
    }
  }

  return newValues
}
