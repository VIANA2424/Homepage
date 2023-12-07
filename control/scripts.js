document.addEventListener("DOMContentLoaded", function () {
    const doors = document.querySelectorAll(".door");
    const mainRoom = document.querySelector(".main-room");

    doors.forEach((door, index) => {
        door.addEventListener("mouseover", function () {
            door.classList.add("open");
        });
        door.addEventListener("mouseout", function () {
            door.classList.remove("open");
        });
        door.addEventListener("click", function () {
            if (door.id === "door1") {
                window.location.href = "puzzle.html"; 
            } else if (door.id === "door2") {
                window.location.href = "room2.html"; 
            } else if (door.id === "door3") {
                window.location.href = "room3.html";
            } else {
                
            }
        });
    });
});

