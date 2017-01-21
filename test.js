import test from "ava";
import match from "./index";

class TestClass {}

test("case", t => {
  const v = match(1).case(1).then(() => true).end();
  t.is(v, true);
});

test("if", t => {
  const v = match(1).if(i => i === 1).then(() => true).end();
  t.is(v, true);
});

test("instanceof", t => {
  const i = new TestClass();
  const v = match(i).instanceof(TestClass).then(() => true).end();
  t.is(v, true);
});

test("default", t => {
  const v = match(1)
    .case(2).then(() => false)
    .default(() => true);
  t.is(v, true);
});

test("unmatched end", t => {
  const v = match(1).case(2).then(() => true).end();
  t.is(v, null);
});
