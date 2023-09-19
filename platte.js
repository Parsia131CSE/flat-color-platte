
    var colors = document.querySelectorAll(".color");
    var copied = document.querySelector(".copied");
    var value = document.querySelector(".value h6");
  
    const comments = ["paste me!", "right one!", "got it!", "will do!"];
    var backgroundColor = 0;
    
    // Function to generate and set a random comment
    function setRandomComment() {
      var randomIndex = Math.floor(Math.random() * comments.length);
      var randomComment = comments[randomIndex];
      document.getElementById("comment").innerText = randomComment;
    }

    colors.forEach(color => {
      color.addEventListener("click", () => {
        backgroundColor = window.getComputedStyle(color).backgroundColor;
        navigator.clipboard.writeText(backgroundColor);
        value.innerHTML = backgroundColor;
        copied.style.backgroundColor = backgroundColor;
        copied.classList.remove("donot-show");
        window.setTimeout(function() {
          copied.classList.add("donot-show");
        }, 800);
        
        // Set a random comment when a color is clicked
        setRandomComment();
      });
    });

    // Set a random comment initially
    setRandomComment();