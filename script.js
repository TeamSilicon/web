// super important variables
const texts = ["where teens anywhere in the world can get involved in computer science", "where teens can get technology and computer science supplies for free", "where teens can learn to build the world", "where VEX Robotics Resources are accessible"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

// typewriter function
(function type() {
    if (count === texts.length) {
        count = 0;
    }

    // count of letters in text
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById('typewriter').textContent = letter;

    // Logic behind typewriter effect
    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000); 
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        setTimeout(type, 500); 
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}());
