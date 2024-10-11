function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const emoji = document.querySelector("footer")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    emoji.innerHTML = `Feito com 🖤 pela <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>`
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    emoji.innerHTML = `Feito com 🤍 pela <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>`
  }

}