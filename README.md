# Match

Typed switch case for flowtype.

## How to use

```sh
npm install @mizchi/match -S
# or
yarn add @mizchi/match
```

This includes index.js.flow to give type definition to flow.

## API

- `match<T, U>(value: T): Match<T, U>`
- Matcher
  - `.case(v: T): Match<T, U>`
  - `.if(func: (t: T) => boolean): Match<T, U>`
  - `.instanceof(klass: typeof Object): Match<T, U>`
- `.then(next: () => U)`
- `.end(): ?U`
- `.default(next: () => U): U`

You should finish by `.end` or `.default`.

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
