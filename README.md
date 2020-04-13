# strip-ansi-control-characters
Strips ANSI Control Characters from string or stream.

## Why?
If you spawn a child process in NodeJS with `inherit` or
`pipe` -> `process.std{out,err}` as `stdio`, the child process can clear
terminal screen or mangle information printed by your application.
This package allows you to show output from child process with all colors
and formatting but without those pesky clear screen or clear line
instructions.

## Usage
```js
const stripAnsiCc = require('strip-ansi-control-characters');
const child_process = require('child_process');

const ps = child_process.spawn('vuepress', ['dev'], {
  env: process.env,
  stdio: 'pipe',
});

ps.stdout.pipe(stripAnsiCc()).pipe(process.stdout);
ps.stderr.pipe(stripAnsiCc()).pipe(process.stderr);
``` 

## License
MIT license - file included in repo
