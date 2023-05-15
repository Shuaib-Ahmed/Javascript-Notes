const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);

// Mousedown - fire when u keep holding the mouse
clearBtn.addEventListener('mousedown', runEvent);

// Mouseup - fire when u let go of mouse
clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter - fire when u enter in the parent element
card.addEventListener('mouseenter', runEvent);

// Mouseleave - fire when u leave in the parent element
card.addEventListener('mouseleave', runEvent);

// Mouseover - fire when u enter the child of the parent
card.addEventListener('mouseover', runEvent);

// Mouseout - fire when u leave the child of the parent
card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}