import Icon from './logo.png';
import Icon2 from './logo.png';

const nav = document.createElement('nav');
nav.className = 'navbar fixed-top'; // Keep fixed-top for sticky behavior
nav.innerHTML = `
    <div class="container">
        <a class="navbar-brand desktop-logo" >
            <img src="${Icon}" alt="desktop-logo" class="navbar-logo" onclick="navigateToHome()" style="cursor: pointer;" >
        </a>
        <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    Admissions
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/apply">Apply</a></li>
                    <li><a class="dropdown-item" href="/register">Register</a></li>
                    
                </ul>
            </li>
            
            <li class="nav-item">
                <a class="nav-link" href="/about">About Us</a>
            </li>
            <div
          class="btn btn-outline-success ms-2"
          style="cursor: pointer;"
          onclick="window.open('http://127.0.0.1:8001/', '_blank')"
        >
          Login
        </div>
        </ul>
    </div>

    <div class="toggle_btn">
      <a class="navbar-brand mobile-logo" >
        <img src="${Icon2}" alt="mobile-logo" class="navbar-logo" onclick="navigateToHome()" style="cursor: pointer;" >
      </a>
      <button class="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
            Admissions
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/apply">Apply</a></li>
            <li><a class="dropdown-item" href="/register">Register</a></li>
            <li><a class="dropdown-item" href="/courses">Explore</a></li>
          </ul>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
      </ul>
      <div class="d-flex"
        <div
          class="btn btn-outline-success ms-2"
          style="cursor: pointer;"
          onclick="window.open('http://127.0.0.1:8001/', '_blank')"
        >
          Login
        </div>
      </div>
    </div>
`;

document.body.prepend(nav);

// Get references to elements
const toggleButton = document.querySelector('.navbar-toggler');
const collapseMenu = document.querySelector('.collapse');

// Toggle collapse menu when the button is clicked
toggleButton.addEventListener('click', function() {
    collapseMenu.classList.toggle('show'); // Toggle visibility of the menu
});

// Close the menu when a link (but not dropdown toggle) is clicked
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Only close the menu if the clicked link is not a dropdown-toggle
        if (window.innerWidth <= 768 && !link.classList.contains('dropdown-toggle')) {
            collapseMenu.classList.remove('show'); // Close menu on link click
        }
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Close the menu when any dropdown item is clicked
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            collapseMenu.classList.remove('show'); // Close menu on dropdown item click
        }
    });
});

const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(135, 206, 250, 0.7)'; // More opaque
                navbar.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)'; // Stronger shadow
            } else {
                navbar.style.backgroundColor = 'rgb(255,255,255)'; // back to default
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Default shadow
            }
        });



