package bob

import (
	"strings"
)

// Hey returns Bob's responses
func Hey(remark string) string {
	remark = strings.TrimSpace(remark)
	switch {
	case remark == "":
		return "Fine. Be that way!"
	case isYelling(remark) && isQuestion(remark):
		return "Calm down, I know what I'm doing!"
	case isYelling(remark):
		return "Whoa, chill out!"
	case isQuestion(remark):
		return "Sure."
	default:
		return "Whatever."
	}
}

func isYelling(s string) bool {
	return s == strings.ToUpper(s) && s != strings.ToLower(s)
}

func isQuestion(s string) bool {
	return strings.HasSuffix(s, "?")
}
