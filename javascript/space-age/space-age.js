export const age = (planet, seconds) => {
  const earthSeconds = 31557600;
  let value;
  switch (planet) {
    case "mercury":
      value = seconds / (earthSeconds * 0.240846);
      break;
    case "venus":
      value = seconds / (earthSeconds * 0.61519726);
      break;
    case "earth":
      value = seconds / earthSeconds;
      break;
    case "mars":
      value = seconds / (earthSeconds * 1.8808158);
      break;
    case "jupiter":
      value = seconds / (earthSeconds * 11.862615);
      break;
    case "saturn":
      value = seconds / (earthSeconds * 29.447498);
      break;
    case "uranus":
      value = seconds / (earthSeconds * 84.016846);
      break;
    case "neptune":
      value = seconds / (earthSeconds * 164.79132);
      break;
    default:
      return;
  }
  return Number(value.toFixed(2));
};
