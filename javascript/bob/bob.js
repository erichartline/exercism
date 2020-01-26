export const hey = message => {
  // replace all whitespace characters, including tabs and new lines
  let msg = message.replace(/\s/g, "");
  // set up variables representing each scenario
  const yellingQuestion =
    msg === msg.toUpperCase() && msg.endsWith("?") && /^[a-zA-Z?]+$/.test(msg);
  const normalQuestion = msg.endsWith("?");
  const yellingStatement =
    msg === msg.toUpperCase() && msg !== msg.toLowerCase();
  const emptyMsg = msg === "";

  switch (true) {
    case yellingQuestion:
      return "Calm down, I know what I'm doing!";
    case normalQuestion:
      return "Sure.";
    case yellingStatement:
      return "Whoa, chill out!";
    case emptyMsg:
      return "Fine. Be that way!";
    default:
      return "Whatever.";
  }
};
