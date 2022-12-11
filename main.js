let links = document.querySelectorAll(".g-links ul")
let nav_links = document.querySelectorAll(".g-links .arrow input")
let clickon = document.querySelectorAll(".g-links .arrow")



function removeChecked() {
  nav_links.forEach(link => {
    link.removeAttribute("checked")
  });
}

function displayList() {
  for (let i = 0; i < nav_links.length; i++) {
    if (nav_links[i].hasAttribute("checked")) {
      links[i].style.display = "grid"
    } else {
      links[i].style.display = "none"
    }
  }
}

document.body.onclick = (e) => {
  if (!e.target.classList[0] == "" || e.target.classList[0] == "head-contaner") {
    nav_links.forEach(link => {
      link.removeAttribute("checked")
      displayList()
    })
  }
}

function setCheck() {
  removeChecked()
  nav_links.forEach(link => {
    link.onclick = () => {
      removeChecked()
      link.setAttribute("checked", "")
      displayList()
    }
  });
}
setCheck()


// Moble links

let burger = document.querySelector('.mobile-bumbo')
let MoLinks = document.querySelector(".mobile-links")
let MoContaner = document.createElement("div")
let MOHeader = document.querySelector(".up-head")
let butns = document.querySelector(".btns")
let hr = document.createElement("hr")
let borger = document.querySelector(".borger")
let x = document.querySelector(".x")
MoContaner.setAttribute("class" , "Mo-contaner")




burger.onclick = (e) => {
  if (e.target.classList == "bumbu") {
    borger.classList.add("none")
    borger.classList.remove("flex")
    x.classList.add("flex")
    x.classList.remove("none")
    MoLinks.classList.remove("links")
    MoContaner.appendChild(MoLinks)
    MoContaner.appendChild(hr)
    MoContaner.appendChild(butns)
    MOHeader.appendChild(MoContaner)
  } else if (e.target.classList == "close") {
    borger.classList.remove("none")
    borger.classList.add("flex")
    x.classList.remove("flex")
    x.classList.add("none")
    MoLinks.classList.add("links")
    MoContaner.removeChild(MoLinks)
    MoContaner.removeChild(hr)
    MoContaner.removeChild(butns)
    MOHeader.removeChild(MoContaner)
  }
}