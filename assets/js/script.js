function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const emoji = document.querySelector("footer")

  if (html.classList.contains("light")) {
    emoji.innerHTML = `Feito com 🖤 pela <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>`
  } else {
    emoji.innerHTML = `Feito com 🤍 pela <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>`
  }

}