"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* range(startOrCount, end, step = 1, inclusive = false) {
	if (typeof end === 'undefined') {
		end = startOrCount;
		startOrCount = 0;
	}
	for (let i = startOrCount; (step < 0 ? i > end : i < end) || inclusive && i === end; i += step)
		yield i;
}
exports.default = range;
module.exports = range;
