const input = prompt(' Escriba una frase o una palabra: ')

const array = input.toLowerCase().split(' ')

if (array.includes('nemo')) {
    document.write(
        `<h1>Has encontrado a 🐠 en ${array.indexOf('nemo')} oportunidades</h1>`
    )
} else {
    document.write(
        `<h1>No has encontrado a 🐠 lo siento!!! </h1>`
    )
}