const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
  panel.addEventListener('click' , () => {
      RemoveActiveClasses()
      panel.classList.toggle('active')
  })
})

function RemoveActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}


// END 