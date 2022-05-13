// const containers = document.querySelectorAll('.block')

// const droppable = new Draggable.Swappable(containers, {
//   draggable: '.draggable',
//   droppable: '.droppable',
//   swappable: '.swappable',
// });

// let item1 = document.querySelector('.self')

// item1.addEventListener("dblclick", function(event) {
//     // Prevent defualt action of event:
//     event.preventDefault();
  
//     // Do your extra stuff here...
   
//     location.hash = event.target.getAttribute('href').substr(1);
//   })


let modal = document.querySelector('.modal')
let conB = document.querySelector('.conB')

// conB.addEventListener('click', function () {
//     modal.trigger('focus')
//   })



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



let buttonboy = document.querySelector('.clickme')


buttonboy.addEventListener('click', ()=>location.replace('./original.html'))