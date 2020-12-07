const image = document.getElementById('image');
function cambio () {
    const random = Math.floor(Math.random()*100)
    image.setAttribute('src', `https://picsum.photos/200/300?random=${random}`)
}