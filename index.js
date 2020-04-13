const replaceStream = require('replacestream');

function StripAnsiCs(input) {
  if (typeof input !== 'string' && (!input || typeof input !== 'object' || typeof input.pipe === 'function')) {
    throw new Error('StripAnsiCsi: Invalid input provided for ANSI striping');
  }

  const matcher = new RegExp('\\u001Bc*\\[*[0-9]*[HABCDEFGJKsu];*[0-9]*', 'gim');

  if (typeof input === 'string') {
    return input.replace(matcher, '');
  }

  return input.pipe(replaceStream(matcher, ''));
}

module.exports = StripAnsiCs;
