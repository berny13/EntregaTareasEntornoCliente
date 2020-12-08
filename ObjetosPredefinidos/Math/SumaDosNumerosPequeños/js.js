suma1 = prompt("Introduzca su primer numero a sumar " );
suma2 = prompt("Introduzca su segundo numero a sumar " );
suma3 = prompt("Introduzca su tercer numero a sumar " );
suma4 = prompt("Introduzca su cuarto numero a sumar " );
const sumTwoSmallestNums = (arr) => {
	let newArr=[suma1, suma2, suma3, suma4];
	for(let i=0;i<arr.length;i++)
		{
			if(arr[i]>0)
				newArr.push(arr[i])
		}
	newArr.sort((a, b) => (a > b) ? 1 : -1)
	return newArr[0]+newArr[1]	
}
document.write("<h1>La suma es: </h1>");
