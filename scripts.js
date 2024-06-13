// scripts.js
document.getElementById('process-button').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const inputWindow = document.getElementById('input-window');
    const outputWindow = document.getElementById('output-window');

    // Dummy response text
    const responseText = "This is a dummy response. This text matches some part of the input text.";

    // Display input and response texts
    inputWindow.innerHTML = highlightMatches(textInput, responseText);
    outputWindow.innerHTML = responseText;

    // Add click event to highlights
    document.querySelectorAll('.highlight').forEach(element => {
        element.addEventListener('click', function() {
            const matchText = element.textContent;
            const outputContent = outputWindow.innerHTML;
            const index = outputContent.indexOf(matchText);
            outputWindow.scrollTop = outputWindow.scrollHeight * (index / outputContent.length);
        });
    });
});

function highlightMatches(input, response) {
    // Simple highlighting logic (can be improved)
    const words = response.split(' ');
    let highlightedText = input;
    words.forEach(word => {
        if (input.includes(word)) {
            const regex = new RegExp(`(${word})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
        }
    });
    return highlightedText;
}

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
