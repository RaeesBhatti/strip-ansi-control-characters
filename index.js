const replaceStream = require('replacestream');

function StripAnsiCs(input) {
  const matcher = new RegExp('\\u001Bc*\\[*[0-9]*[HABCDEFGJKsu];*[0-9]*', 'gim');

  if (typeof input === 'string') {
    return input.replace(matcher, '');
  }

  return replaceStream(matcher, input || '');
}

module.exports = StripAnsiCs;
