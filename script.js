function delcontainer(event)
{
    event.target.parentNode.remove()
}


var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")

var blockaddpopup = document.getElementById("block-add-popup")



blockaddpopup.addEventListener("click", function(event)
{
    overlay.style.display="block"
    popup.style.display="block"
    

}


)

var cancel = document.getElementById("cancel")

cancel.addEventListener("click" , function(event)
{
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
   
})

var add = document.getElementById("add")
var container = document.querySelector(".container")
var bookname = document.getElementById("bookname")
var authorname = document.getElementById("authorname")
var textarea = document.getElementById("textarea")

add.addEventListener("click" , function(event)
{
    event.preventDefault()
   var div = document.createElement("div")
   div.setAttribute("class","box-container")
   div.innerHTML = `<h2>${bookname.value}</h2>
   <h5>${authorname.value}</h5>
   <p>${textarea.value}</p><button class="btn" onclick="delcontainer(event)">Delete</button>`
   container.append(div)
   overlay.style.display="none"
    popup.style.display="none"

   
})