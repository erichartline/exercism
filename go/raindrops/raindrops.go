package raindrops

import (
	"strconv"
	"strings"
)

// Convert returns string based on int
func Convert(n int) string {
	words := strings.Builder{}
	if n%3 == 0 {
		words.WriteString("Pling")
	}
	if n%5 == 0 {
		words.WriteString("Plang")
	}
	if n%7 == 0 {
		words.WriteString("Plong")
	}
	if words.String() != "" {
		return words.String()
	}
	return strconv.Itoa(n)
}
