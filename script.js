function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adiciona imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar para um tema claro.")
  } else {
    //se NÃO tiver light mode, adiciona imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Avatar Dark Mode.")
  }
}
