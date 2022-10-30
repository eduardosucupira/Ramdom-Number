const RandomNumber = (interval, duration) => {
    const elementNumber = document.querySelector("div.generator-container h1")
    const btn = document.querySelector("div.generator-container button")
    let animation

    btn.onclick = () => {
    
        btn.classList.toggle("sort")
        animation = setInterval(() => {
            //Math.random gera um numero aleatorio no intervalo de ]0 a 1[
            elementNumber.innerHTML = Math.floor(Math.random() * 10 + 1)
       }, 20)

       setTimeout(() => {
            clearInterval(animation)
            btn.classList.toggle("sort")
       }, 1000)
    }
}
window.onload = RandomNumber(10, 1000)
