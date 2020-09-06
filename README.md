# image-resize
Javascript client-side image resizer function using HTML Canvas object

This library makes client-side image resizing easy and simple, using the HTML Canvas object.

Supports recursive downsampling to reduce distortion and pixellation.

Usage:

    // Resize 'image' to 'width' x 'height' recursively
    result = imageResize(image, width, height, recursive_proportion)
    // image = either an <img> element or Canvas object
    // width, height = width and height of desired resulting image in pixels
    // Set either width or height to false to retain the image's original proportions
    // recursive_proportion = a value between 0 and 1 indicating the percentage size of each resize step.  For example, 0.1 = resize the image 10% at a time until the destination size is reached.  Set to false to disable recursion and resize in a single step.
    // Return value: a canvas object containing the resized image.


    // Display result in an <img> tag:
    document.querySelector('your-image-tag').src = result.toDataURL()




Browser support:

    Should work with all modern browsers that support the Canvas object.
