function imageResize(image, width, height, recursive_proportion) {
	// Recursively resize an image using HTML canvas. 
	
  // Clean up inputs:
	if (typeof height == 'undefined') { height = false }
	if (typeof recursive_proportion == 'undefined') { recursive_proportion = 0.1 }

	resize_width_proportion = (width / image.width)
	if (!height) {
		height = image.height * resize_width_proportion	// Retain proportions based on width.
	}

	resize_height_proportion = (height / image.height)
	if (!width) {
		width = image.width * resize_height_proportion
		resize_width_proportion = resize_height_proportion
	}
	
	width = Math.ceil(width)
	height = Math.ceil(height)



  // If new image (width) is > x% different, recursively resize y% of change, then complete by resizing final x%
	if (recursive_proportion && resize_width_proportion < (1 - recursive_proportion))
	{
		image = resizeImage(image, width * (1 + recursive_proportion), height * (1 + recursive_proportion), recursive_proportion)
	}

	if (recursive_proportion && resize_width_proportion > (1 + recursive_proportion))
	{
		image = resizeImage(image, width * (1 - recursive_proportion), height * (1 - recursive_proportion), recursive_proportion)
	}

	// Image is now within x% of desired size. Resize the final step.

	let canvas = document.createElement('canvas')
	let context = canvas.getContext('2d')

	// Resize the image to width x height 
	canvas.width = width
	canvas.height = height
	context.drawImage(image, 0,0, width, height)


	// Return the new image
	return canvas
}
