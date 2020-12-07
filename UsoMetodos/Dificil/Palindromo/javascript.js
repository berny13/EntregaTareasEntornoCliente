const input = prompt('Frase o palabra: ')
const derecha = input.split('');
const revez = derecha.reverse();

if (derecha === revez) {
    document.write(`<h2>${input}:  Es un palindromo 😊😉</h2>`)
} else {
    document.write(`<h2>${input}:  No es un palindromo 😒🤔</h2>`)
}
console.log() //derecha
console.log() //revez