package main

import "fmt"

func main() {

	var num = []int{}
	for i := 1; i <= 10; i++ {
		num = append(num, i)
		println("")
		for i := 1; i <= 10; i++ {
			println("")
			fmt.Printf("%v x %v = %v ", len(num), i, (len(num) * i))

		}
	}
}
