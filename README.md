# Javascript range utility

Features

- Use iterator internally.
- Have optional `step` and `inclusive` parameter.

## Install

```bash
yarn add rrjx
```

```javascript
import range from 'rrjx'
// or
const range = require('rrjx').default
```

## Usage

### Exported type

```typescript
declare function range(startOrCount: number, end?: number, step?: number, inclusive?: boolean): Generator<number, void, unknown>;
export default range;
```

### Supported call patterns:

```typescript
range(count) // [0, count - 1)
range(start, end) // [start, end)
range(start, end, step, false) // [start, start + step, start + 2 * step, ..., end)
range(start, end, step, true) // [start, start + step, start + 2 * step, ..., end]
```

### Usage Samples

- For all elements of an array: `for (const idx of range(arr.length)) console.log(arr[idx])`.
- Same as above but in the reversed order: `for (const idx of range(arr.length -1, 0, -1, true)) console.log(arr[idx])`.
- Generate an array `[0, 1, 2, 3]`: `[...range(4)]`.
- Forever loop: `for (const _ of range(Infinity)) if (cond()) break`.
- If `end > start` (`step >= 0`), do nothing: `for (const i of range(2, 1)) console.log(i)`.
