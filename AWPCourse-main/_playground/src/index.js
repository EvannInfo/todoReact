const { log } = require('./util');

const fc = (a, b) => a * b;

log('this a log', 'zetze', fc(21, 2));

log('this a second log');
