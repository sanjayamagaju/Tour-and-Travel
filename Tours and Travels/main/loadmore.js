function myFunction() {
    var dots = document.getElementById("dots");
    var moreImage = document.getElementById("more");
    var btnImage = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnImage.innerHTML = "Load more"; 
      moreImage.style.display = "none";
    } else {
      dots.style.display = "none";
      btnImage.innerHTML = "Load less"; 
      moreImage.style.display = "inline";
    }
  }