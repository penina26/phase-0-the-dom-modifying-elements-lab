// Write your code here!
// Find the <main> element with the id 'main'
const mainElement = document.querySelector('#main');

// Remove it from the document
mainElement.remove();

// Create a new <h1> element in memory
const newHeader = document.createElement('h1');

// Set the id of the new <h1> to 'victory'
newHeader.id = 'victory';

// Set its text content  "Penina" with your name
newHeader.textContent = 'Penina is the champion';

// Add the new <h1> to the end of the <body>
document.body.append(newHeader);