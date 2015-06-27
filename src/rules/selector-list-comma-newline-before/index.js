import {
  ruleMessages,
  whitespaceChecker
} from "../../utils"

import { selectorListCommaWhitespaceChecker } from "../selector-list-comma-space-after"

export const ruleName = "selector-list-comma-newline-before"

export const messages = ruleMessages(ruleName, {
  expectedBefore: () => `Expected newline before ","`,
  expectedBeforeMultiLine: () => `Expected newline before "," in a multi-line list`,
  rejectedBeforeMultiLine: () => `Unexpected whitespace before "," in a multi-line list`,
})

/**
 * @param {"always"|"always-multi-line"|"never-multi-line"} expectation
 */
export default function (expectation) {
  const checker = whitespaceChecker("\n", expectation, messages)
  return selectorListCommaWhitespaceChecker(checker.beforeAllowingIndentation)
}
