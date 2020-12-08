function MenorDistancia(str) {
	a = str.split(",").map(x => +x)
	return Number(Math.hypot(a[0]-a[2], a[1]-a[3]).toFixed(2))
}
