

let modal = document.querySelector('.modal')
let conB = document.querySelector('.conB')



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
conB.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// EVENT LISTENER FOR WORK AND ABOUT ME SECTION

let about = document.querySelector('.aboot')
let work = document.querySelector('.werk')
let gallery = document.querySelector('.gallery')
let footer = document.querySelector('.footy')
let wrap = document.querySelector('.wrapper')



about.addEventListener('click', function(){
gallery.classList.add('hide')
footer.classList.remove('bottom')
footer.classList.add('fixed-bottom')
if (wrap.classList.contains('hide')){
  wrap.classList.remove('hide')

}
})

work.addEventListener('click', function(){
gallery.classList.remove('hide')
wrap.classList.add('hide')
footer.classList.remove('fixed-bottom')
footer.classList.add('bottom')

})

// On hover, set opacity to .8 in css. hover item1, event listener('hover'). .style.opacity = .8;

// Swup up gallary and model as well as header and footer. swup up about and modal as well as header and footer. Fix footer
// two html pages

// Refactor hovers by adding a class called item, .item:hover will encompass all hover effects. item.addeventlistener('hover', function(){remove.class item, replace class itemCurrent})