document.addEventListener('DOMContentLoaded', function() {
    const countButton = document.getElementById('countButton');
    const textInput = document.getElementById('textInput');
    const totalVowels = document.getElementById('totalVowels');
    const countA = document.getElementById('countA');
    const countE = document.getElementById('countE');
    const countI = document.getElementById('countI');
    const countO = document.getElementById('countO');
    const countU = document.getElementById('countU');
    
    // Function to count vowels in the input text
    function countVowels() {
        // Get the input text and convert to lowercase
        const text = textInput.value.toLowerCase();
        
        // Initialize vowel counters
        let aCount = 0;
        let eCount = 0;
        let iCount = 0;
        let oCount = 0;
        let uCount = 0;
        
        // Loop through each character in the text
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            // Check for each vowel
            switch(char) {
                case 'a':
                    aCount++;
                    break;
                case 'e':
                    eCount++;
                    break;
                case 'i':
                    iCount++;
                    break;
                case 'o':
                    oCount++;
                    break;
                case 'u':
                    uCount++;
                    break;
            }
        }
        
        // Calculate total vowels
        const total = aCount + eCount + iCount + oCount + uCount;
        
        // Update the UI
        totalVowels.textContent = total;
        countA.textContent = aCount;
        countE.textContent = eCount;
        countI.textContent = iCount;
        countO.textContent = oCount;
        countU.textContent = uCount;
        
        // Add animation effect on update
        animateCount();
    }
    
    // Add click event listener to the button
    countButton.addEventListener('click', countVowels);
    
    // Also count when user presses Enter key in the textarea
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && event.ctrlKey) {
            countVowels();
        }
    });
    
    // Simple animation for the results
    function animateCount() {
        document.querySelectorAll('.result-box, .vowel-count').forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = 'pulse 0.5s';
        });
    }
    
    // Add some sample text when the page loads
    textInput.value = "Type or paste your text here to count vowels. This tool will count A, E, I, O, U in your text.";
    
    // Count vowels for the sample text
    countVowels();
});

// Add a simple pulse animation using CSS
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}
`;
document.head.appendChild(style);
