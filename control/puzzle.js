document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const hiddenWord = document.getElementById("hiddenWord");

  items.forEach((item) => {
      let isDragging = false;

      item.addEventListener("mousedown", function (e) {
          isDragging = true;
          item.style.zIndex = "2";
      });

      document.addEventListener("mousemove", function (e) {
          if (isDragging) {
              item.style.left = e.clientX - item.offsetWidth / 2 + "px";
              item.style.top = e.clientY - item.offsetHeight / 2 + "px";

              const rect1 = item.getBoundingClientRect();
              const rect2 = hiddenWord.getBoundingClientRect();

              if (
                  rect1.right > rect2.left &&
                  rect1.left < rect2.right &&
                  rect1.bottom > rect2.top &&
                  rect1.top < rect2.bottom
              ) {
                  hiddenWord.style.display = "block";
                  
                  item.style.backgroundColor = "green";
              } else {
                  hiddenWord.style.display = "none"; 
                  item.style.backgroundColor = "red"; 
              }
          }
      });

      document.addEventListener("mouseup", function () {
          isDragging = false;
          item.style.zIndex = "1";
      });
  });
});

