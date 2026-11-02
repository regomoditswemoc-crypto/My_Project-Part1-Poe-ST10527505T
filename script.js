// Sunrise Bakery JavaScript File

// 1. FORM VALIDATION AND POPUP
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stops page reload
            
            let name = document.getElementById("name").value.trim();
            let phone = document.getElementById("contact").value.trim();
            
            // Validate Name
            if (name.length < 2) {
                alert("Error: Please enter a valid Full Name (at least 2 letters).");
                return; 
            }
            
            // Validate Phone
            if (phone.length < 10) {
                alert("Error: Please enter a valid Contact Number (at least 10 digits).");
                return; 
            }

            // Show Popup
            document.getElementById("thankYouPopup").style.display = "flex"; 
            this.reset(); 
        });
    }
});

// 2. CLOSE POPUP
function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
}

// 3. BACK TO TOP BUTTON
var mybutton = document.getElementById("topBtn");
if (mybutton) {
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    
    mybutton.onclick = function() { 
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    };
}

