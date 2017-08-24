## Website Performance Optimization portfolio project

### Running the application

You have two options to run this application:
Option \#1: Download the repository, unzip and run the index.html file found at the root directory
            Note: Please ignore the gulpfile.js, package.json and package-lock.json files along with any related files. These are not               necessary to run the application and were for experimental reasons only.
Option /#2: Open this link <a href = "https://enoussair.github.io/optimization-project/"> Pizza.html</a>.

Whichever option you choose, you will be able to view the portfolio which will have a link to the Pizzaria website

#### Part 1: Optimize PageSpeed Insights score for index.html

To Optimize index.html (The portfolio), the following actions were taken:

1. Added media = "print" to the print.css link
2. added async attr to the google analytics script
3. Moved the google Open Sans font link to the very bottom of the body tag
4. minified and inlined the style.css file
5. Compressed all of the image files (this action made a huge impact on load time as I was able to compress over 85% of the images)
6. minified perfmatters.js, although the script had minimal impact to begin with.

###### Note: The google Open Sans font link has some trouble loading at times, and this causes a huge performance issue. This could be due to google's own server response.


#### Part 2: Optimize Frames per Second in pizza.html

To optimze the performance in pizza.html, the following actions were taken:
1. Replaced all document.querySelectorAll() with document.getElementbyId or document.getElementsbyClassName depending on the nature of the call. This is due to querySelectorAll() being slower and, at times, calling more items thea needed. For example, when changing the sizes of the pizza items, we do not need to call all of the pizzas because they all have the same size at any given moment.. Therefore, we can select any pizza item, read it, and then apply whatever size changes we want to all pizza items.
2. Implemented a requestAnimationFrame function to better control the updatePositions() function
3. Moved the dx and newwidth variable to outside the for-loop in the changePizzaSizes() function
4. Debounced the scroll event
5. modified the window.addEventListener('scroll) function to instead listen to the onScroll() function. The onScroll() function is a part of the requestAnimationFrame implementation and seeks to slow down how much requests the browser makes.
6. modified the 'DocContentLoaded' event listener to utitlize the document.createDocumentFragment method. I appended all of the background pizza images to a document fragment variable using the already provided for loop, then I appended the fragment into its respective container. Due to the nature of createDocumentFragment(), the browser only had to append one visible child into the page, thus reducing the amount of reflows the page initially experiences.
