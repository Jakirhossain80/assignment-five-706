// Redirect HTML pages

document.getElementById('board-tab').addEventListener('click', function(){
    window.location.href = 'blogs.html';
});




// Selecting button dynamically.

  const buttons = document.querySelectorAll(".complete-btn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert('Board updated Successfully');
    });
  });

