/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes the application by setting up event listeners for the UI elements.
   */
  function init() {
    // Find the Encrypt button and attach click listener
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    // Find the Reset button and attach click listener
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Handles the click event for the encryption button.
   * Retrieves the message, runs it through the cipher, and displays the result.
   */
  function handleEncrypt() {
    console.log("Encrypt button clicked!");
    
    // 1. Get the text from the input textarea
    let textInput = document.getElementById("input-text").value;
    
    // 2. Generate the shift cipher string
    let encryptedText = shiftCipher(textInput);
    
    // 3. Output the result to the #result paragraph element
    document.getElementById("result").textContent = encryptedText;
  }

  /**
   * Handles the click event for the reset button.
   * Clears out both the user input text area and the previous results.
   */
  function handleReset() {
    console.log("Reset button clicked!");
    
    // Clear out the text area input
    document.getElementById("input-text").value = "";
    
    // Clear out the result paragraph text
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   * Non-alphabet characters (spaces, punctuation) are unchanged.
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();