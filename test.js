const range = require('./index').default

console.log(range)
console.log(require('./index').default === require('./index'))

console.log(range(3))
if ([
	[...range(3)].length === 3,
	[...range(3, 5, -1)].length === 0
].every(Boolean)) console.log('success')
else {
	console.error('failed')
	process.exit(1)
}
