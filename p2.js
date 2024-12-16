function upDate(previewPic) {
    // Log the event to check if it's triggering
    console.log("Hovering over an image!");
  
    // Log information about the `previewPic` element
    console.log("Image source:", previewPic.src);
    console.log("Image alt text:", previewPic.alt);
  
    // Update the background image of the div with id 'image'
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  
    // Update the text of the div with id 'image'
    imageDiv.textContent = previewPic.alt;
  }
  
  function undo() {
    // Reset the background image of the div with id 'image'
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
  
    // Reset the text of the div with id 'image'
    imageDiv.textContent = "Hover over an image below to display here.";
  }
  
  // Add event listeners to all images with the class 'preview'
  document.querySelectorAll('.preview').forEach(img => {
    img.addEventListener('mouseover', () => upDate(img));
    img.addEventListener('mouseout', undo);
  });
  