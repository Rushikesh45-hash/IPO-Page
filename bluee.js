document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Create mobile menu if it doesn't exist
            if (!document.querySelector('.mobile-nav')) {
                const mobileNav = document.createElement('div');
                mobileNav.className = 'mobile-nav';
                
                // Clone navigation links
                const navClone = navLinks.cloneNode(true);
                mobileNav.appendChild(navClone);
                
                // Add sign-in link for mobile
                const signInLink = document.createElement('a');
                signInLink.href = '#';
                signInLink.className = 'mobile-sign-in';
                signInLink.textContent = 'Sign In';
                mobileNav.appendChild(signInLink);
                
                document.body.appendChild(mobileNav);
            }
            
            // Toggle mobile menu visibility
            const mobileNav = document.querySelector('.mobile-nav');
            mobileNav.classList.toggle('active');
        });
    }
    
    // Dropdown functionality for navigation items
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Toggle dropdown indicator
            const arrow = this.querySelector('.dropdown-arrow');
            if (arrow) {
                arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
            }
            
            // Toggle dropdown menu visibility
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                e.preventDefault();
                dropdownMenu.classList.toggle('show');
                
                // Close other open dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const otherMenu = otherDropdown.querySelector('.dropdown-menu');
                        const otherArrow = otherDropdown.querySelector('.dropdown-arrow');
                        
                        if (otherMenu && otherMenu.classList.contains('show')) {
                            otherMenu.classList.remove('show');
                        }
                        
                        if (otherArrow) {
                            otherArrow.style.transform = 'rotate(0deg)';
                        }
                    }
                });
            }
        });
    });
    
    // Close dropdown menus when clicking outside
    document.addEventListener('click', function(e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                const arrow = dropdown.querySelector('.dropdown-arrow');
                
                if (dropdownMenu && dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                }
                
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
});


//signup and signin
document.querySelector(".sign-in").addEventListener("click", function () {
  alert("Sign In Clicked!");
});

document.querySelector(".sign-up-btn").addEventListener("click", function () {
  alert("Sign Up Clicked!");
});

document.querySelector(".breadcrumb").addEventListener("click", function () {
  alert("Bluestock Clicked!");
});


//cardss
function Nova_Agritech(event) {
  alert("RHP Button Clicked");
}
function Nova_Agritechdrhp(event) {
  alert("DRHP Button Clicked");
}
document.querySelectorAll(".card-footer .btn.rhp").forEach(button => {
  button.addEventListener("click", Nova_Agritech);
});
document.querySelectorAll(".card-footer .btn.drhp").forEach(button => {
  button.addEventListener("click", Nova_Agritechdrhp);
});
//2 card
function EPAC(event) {
  alert("RHP Button Clicked");
}

function EPAC(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-footer .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-footer .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//3 card
function RK_Swamy(event) {
  alert("RHP Button Clicked");
}

function  RK_Swamy(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-footer .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-footer .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//4card
function Oravel(event) {
  alert("RHP Button Clicked");
}

function Oravel(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-footer .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-footer .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
// 5 card
function Imagine(event) {
  alert("RHP Button Clicked");
}

function Imagine(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//6 card
function Kids_clinic(event) {
  alert("RHP Button Clicked");
}

function Kids_clinic(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//7 card
function OLA_electric(event) {
  alert("RHP Button Clicked");
}

function OLA_electric(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//8 card
function ONE_mobile(event) {
  alert("RHP Button Clicked");
}

function ONE_mobile(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//9card
function LE_Tranvenues(event) {
  alert("RHP Button Clicked");
}

function LE_Tranvenues(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//10 card
function CMR_Green(event) {
  alert("RHP Button Clicked");
}

function CMR_Green(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//11 card
function Wellness(event) {
  alert("RHP Button Clicked");
}

function Wellness(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});
//12 card
function PKH(event) {
  alert("RHP Button Clicked");
}

function PKH(event) {
  alert("DRHP Button Clicked");
}

document.querySelectorAll(".card-container .btn.rhp").forEach(button => {
  button.addEventListener("click", handleRHPClick);
});

document.querySelectorAll(".card-container .btn.drhp").forEach(button => {
  button.addEventListener("click", handleDRHPClick);
});


































  function toggleFAQ(element) {
    const faqBox = element.parentElement;
    faqBox.classList.toggle('active');
}
