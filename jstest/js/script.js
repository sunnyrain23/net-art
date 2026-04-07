const Button = document.getElementById('color-button');
const Heading = document.getElementById('main-heading');

function updatePage() {
    Heading.textContent = "Boo!";
    
    Heading.classList.toggle('highlight');
    
    console.log("Click below for a surprise");
}
Button.addEventListener('click', updatePage);
