alert("This is not a real 'Fan Page' is a project for people who want to learn how to create a page like this in HTML, make sure you have readed the 'README.md' if you want to know the concept i used to explain here ");

function second() {
    document.getElementById('first').style.visibility = 'hidden';
    document.getElementById('second').style.visibility = 'visible';
    
  }
  
function first(){
    document.getElementById('second').style.visibility = 'hidden';
    document.getElementById('first').style.visibility = 'visible';
  }