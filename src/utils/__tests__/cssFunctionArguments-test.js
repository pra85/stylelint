import test from "tape"
import cssFunctionArguments from "../cssFunctionArguments"

test("passes function arguments to callback", t => {
  cssFunctionArguments("calc(1 + 3)", "calc", args => {
    t.equal(args, "1 + 3")
  })
  cssFunctionArguments("4px 5px calc(1px + 3px)", "calc", args => {
    t.equal(args, "1px + 3px")
  })
  t.end()
})

test("works with nested functions", t => {
  const calcArgs = []
  cssFunctionArguments("4px 5px calc(calc(1px + 2px) + 3px)", "calc", args => {
    calcArgs.push(args)
  })
  t.deepEqual(calcArgs, [ "calc(1px + 2px) + 3px", "1px + 2px" ])

  const colorFuncValue = "color(red s(- 10%) s( - 10%))"
  cssFunctionArguments(colorFuncValue, "color", args => {
    t.equal(args, "red s(- 10%) s( - 10%)")
  })
  const sArgs = []
  cssFunctionArguments(colorFuncValue, "s", args => {
    sArgs.push(args)
  })
  t.deepEqual(sArgs, [ "- 10%", " - 10%" ])
  t.end()
})

test("ignores strings", t => {
  cssFunctionArguments("calc(1px)", "calc", args => {
    t.equal(args, "1px")
  })
  cssFunctionArguments("\"calc(1px)\"", "calc", args => {
    t.equal(args, null)
  })
  t.end()
})