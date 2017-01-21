# Match

Typed switch for flow.

## Example

```js
import match from "@mizchi/match";
const v1: string = match(~~(Math.random() * 10))
  .is(0).then(() => "zero")
  .case(i => i > 5).then(() => "over 5")
  .dafault(() => "others");

const v2: ?string = match(~~(Math.random() * 2))
  .is(0).then(() => "zero")
  .end();
```

## license

MIT
