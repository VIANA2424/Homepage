$(document).ready(function () {
  const pages = ['page1', 'page2', 'page3', 'page4', 'page5'];
  let currentPage = 0;

  function showNextPage() {
    document.getElementById(pages[currentPage]).style.display = 'none';
    currentPage = (currentPage + 1) % pages.length;
    document.getElementById(pages[currentPage]).style.display = 'block';
  }

  // Show the first page initially
  showNextPage();

  // Add an event listener for showing the next page on click
  document.getElementById('flipbook').addEventListener('click', showNextPage);

  // Make the photo placeholders draggable
  $('.photo-placeholder').draggable({
    containment: 'parent'
  });

  // Make flipbook pages droppable
  $('.page .content').droppable({
    accept: '.sticker',
    drop: function (event, ui) {
      const droppedSticker = ui.helper.clone();

      // Set the position of the dropped sticker relative to the page content
      const offsetX = ui.offset.left - $(this).offset().left;
      const offsetY = ui.offset.top - $(this).offset().top;

      droppedSticker.css({
        top: offsetY,
        left: offsetX,
        'z-index': '1000', // Set a high z-index to bring the sticker to the front
      });

      $(this).append(droppedSticker);

      // Make the new sticker draggable and resizable within the page content
      droppedSticker.draggable({
        // Do not specify containment to allow dragging throughout the page
        scroll: false // Disable scrolling while dragging
      }).resizable();
    }
  });

  // Make stickers draggable and resizable
  $('.sticker').draggable({
    helper: 'clone',
    revert: 'invalid',
    scroll: false, // Disable scrolling while dragging
    start: function (event, ui) {
      $(this).css('z-index', '1000');
    },
    stop: function (event, ui) {
      $(this).css('z-index', '');
    }
  }).resizable(); // Enable resizable behavior

  // Make the trash can droppable
  $('#trash-can').droppable({
    accept: '.sticker',
    drop: function (event, ui) {
      ui.helper.remove(); // Remove the dragged sticker when dropped into the trash can
    }
  });

  $('.pen').draggable({
    containment: 'body',
    scroll: false // Disable scrolling while dragging
  });

  const canvas = document.getElementById('pen-canvas');
  const context = canvas.getContext('2d');
  let isDrawing = false;

  canvas.addEventListener('mousedown', (e) => {
    console.log('mousedown event');
    isDrawing = true;
    draw(e);
  });

  canvas.addEventListener('mousemove', (e) => {
    console.log('mousemove event');
    if (isDrawing) {
      draw(e);
    }
  });

  canvas.addEventListener('mouseup', () => {
    console.log('mouseup event');
    isDrawing = false;
    context.beginPath();
  });

  function draw(e) {
    if (!isDrawing) return;

    context.lineWidth = 5; // Set the line width as needed
    context.lineCap = 'round';
    context.strokeStyle = 'black'; // Set the line color

    // Calculate the position relative to the canvas
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  }
});
