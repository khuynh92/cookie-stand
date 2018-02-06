'use strict';

var newTestimonial = document.getElementById('testimonialsForm');

function testimonialsHandler(event) {
  console.log(event);
  event.preventDefault();


  if (!event.target.userComment.value) {
    return alert('You must enter a comment!');
  }
  var userComment = event.target.userComment.value;
  var testimonialsPageEl = document.getElementById('testimonialsPage');
  var newDivEl = document.createElement('div');
  newDivEl.className = 'box quote';
  var newPEl = document.createElement('p');
  newPEl.textContent = userComment;
  newDivEl.appendChild(newPEl);
  testimonialsPageEl.appendChild(newDivEl);

  event.target.userComment.value = null;
}

newTestimonial.addEventListener('submit', testimonialsHandler, false);