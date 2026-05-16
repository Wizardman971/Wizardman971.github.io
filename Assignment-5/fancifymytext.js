function makeBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function toggleStyle() {
    var textArea = document.getElementById("userText");
    var fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function applyMoofication() {
    var textArea = document.getElementById("userText");
    
    var text = textArea.value.toUpperCase();
    
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-MOO";
    }
    
    textArea.value = sentences.join(". ");
}