document.addEventListener('DOMContentLoaded', function() {
    const appliances = document.querySelector('.appliances');
    const subContainer = document.querySelector('.appliance');

    appliances.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    appliances.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });

    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!appliances.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
            
document.addEventListener('DOMContentLoaded', function() {
    const supermarket = document.querySelector('.supermarket-items');
    const subContainer = document.querySelector('.supermarket');

    supermarket.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    supermarket.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });

    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!supermarket.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const health = document.querySelector('.beauty');
    const subContainer = document.querySelector('.health');

    health.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    health.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });

    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!health.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
            
document.addEventListener('DOMContentLoaded', function() {
    const home = document.querySelector('.office');
    const subContainer = document.querySelector('.home');
    
    home.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    home.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
    
    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!home.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const phone = document.querySelector('.tablets');
    const subContainer = document.querySelector('.phone');
    
    phone.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    phone.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });

    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!phone.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const computer = document.querySelector('.computing');
    const subContainer = document.querySelector('.computer');
    
    computer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    computer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });

    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!computer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const electronic = document.querySelector('.electronics');
    const subContainer = document.querySelector('.electronic');

    electronic.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });
    
    electronic.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });

    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });
    
    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!electronic.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const fashion = document.querySelector('.fashion-stuff');
    const subContainer = document.querySelector('.fashion');
    
    fashion.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });
    
    fashion.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });

    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!fashion.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
            
document.addEventListener('DOMContentLoaded', function() {
    const baby = document.querySelector('.baby-products');
    const subContainer = document.querySelector('.baby');

    baby.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });
    
    baby.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
    
    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });
    
    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!baby.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
            
document.addEventListener('DOMContentLoaded', function() {
    const game = document.querySelector('.gaming');
    const subContainer = document.querySelector('.game');

    game.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });
    
    game.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
    
    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!game.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sporting = document.querySelector('.sports');
    const subContainer = document.querySelector('.sporting');

    sporting.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });

    sporting.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
                      }
    });
    
    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
                });
    
    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!sporting.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });    
});   
                
document.addEventListener('DOMContentLoaded', function() {
    const other = document.querySelector('.others');
    const subContainer = document.querySelector('.other');
                    
    other.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    }); 
    
    other.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the sub-container
        if (!subContainer.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
    
    subContainer.addEventListener('mouseover', function() {
        subContainer.style.display = 'block';
    });
    
    subContainer.addEventListener('mouseout', function(event) {
        // Check if the mouse is still within the appliances element
        if (!other.contains(event.relatedTarget)) {
            subContainer.style.display = 'none';
        }
    });
});


var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime(); // Corrected `new date` to `new Date`

var x = setInterval(function() {
    var now = new Date().getTime(); // Corrected `new date().getTime` to `new Date().getTime()`
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Corrected `MAth.flooor` to `Math.floor`
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        // Optionally, display a message or take other action
    }
}, 1000); // Corrected to `1000` for 1-second intervals
