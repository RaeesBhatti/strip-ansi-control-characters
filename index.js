const replaceStream = require('replacestream');

const REGEXP = /\u001Bc*\[*[0-9]*[HABCDEFGJKsu];*[0-9]*/gi;

function StripAnsiCs(input) {
  if (typeof input !== 'undefined') {
    if (typeof input === 'string') {
      return input.replace(REGEXP, '');
    }
    throw new Error(`Expected input to be string, got: ${typeof input}`);
  }

  return replaceStream(matcher, '');
}

module.exports = StripAnsiCs;
