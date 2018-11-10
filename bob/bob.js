const replies = {
  question: 'Sure.',
  loud: 'Whoa, chill out!',
  loudQuestion: 'Calm down, I know what I\'m doing!',
  blank: 'Fine. Be that way!',
  default: 'Whatever.',
};

class Bob {
  hey(message) {
    if (!message.trim()) {
      return replies.blank;
    }

    const isLoud = message.toUpperCase() === message && message.match(/[A-Z]+/);
    const isAQuestion = message.endsWith('?')

    if (isLoud && isAQuestion) {
      return replies.loudQuestion;
    }
    if (isLoud) {
      return replies.loud;
    }
    if (isAQuestion) {
      return replies.question;
    }

    return replies.default;
  }
}

export default Bob;