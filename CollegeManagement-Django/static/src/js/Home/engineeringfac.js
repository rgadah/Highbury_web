
import engineering from './boilerm.png';

import heroimage from './engfac.png'
import engineering1 from './chem.png';
import engineering2 from './light.png';
import engineering3 from './heavy.png';
import engineering4 from './mech.png';
import engineering5 from './civ.png';
import engineering6 from './boiler.png';
import engineering7 from './fitter.png';
import engineering8 from './motor.png';
import engineering9 from './plumber.png';
import engineering10 from './brick.png';



export function loadengineeringpage() {
    const main = document.querySelector('main');

    if (!main) {
        console.error('Main element not found');
        return;
    }

    main.innerHTML = `
    <!-- Header Start -->
            <div class="container-fluid bg-light" 
                style="background-image: url('${heroimage}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px;height:80vh; ">
                <style>
                    @media (max-width: 767px) {
                        .container-fluid {
                            padding-top: 80px; /* Reduce padding for smaller screens */
                            padding-bottom: 50px;
                            background-size: cover;
                            background-position: center center; /* Adjust background position */
                        }
                        .display-3 {
                            font-size: 2.5rem; /* Make the header text smaller */
                        }
                        .col-lg-10 {
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                    }
                </style>
                <div class="container py-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-10 text-center">
                            <h1 class="display-3 text-white animated slideInDown">Engineering</h1>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header End -->


    <!-- Engineering Expertise Section -->
    <div class="container my-5">
        <div class="row">
            <div class="col text-center">
                <h2 class="display-4">Engineering Expertise at Highbury</h2>
                <p class="lead">Highbury is known for its exceptional engineering faculty. All of our engineering courses are taught on campus by highly qualified instructors with years of industry experience. Our state-of-the-art facilities provide an immersive learning environment where you can thrive.</p>
            </div>
        </div>
    </div>

    <!-- Pick Your Course Section -->
    <div class="container-fluid bg-primary text-white text-center py-3">
        <h3>Pick your course from our well-varied courses</h3>
    </div>

    <!-- National N Diplomas Section -->
    <div class="container my-5">
        <h2 class="text-center" style=" border-bottom: 2px solid #000; padding-top: 10px; padding-bottom: 10px; font-family: 'Poppins', sans-serif; color: #4CAF50; text-transform: uppercase; letter-spacing: 2px; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);">
            National N Diplomas
        </h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <!-- Chemical Engineering -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering1}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/chemical';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">National N Diploma</h6>
                        <p class="card-text">Chemical Engineering</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 3 Years</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
            <!-- Electrical Engineering Light Current -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering2}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/lightcurrent';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">National N Diploma</h6>
                        <p class="card-text">Electrical Engineering Light Current</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 3 Years</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
            <!-- Electrical Engineering Heavy Current -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering3}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/heavycurrent';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">National N Diploma</h6>
                        <p class="card-text">Electrical Engineering Heavy Current</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 3 Years</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
            <!-- Mechanical Engineering -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering4}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/mechanical';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">National N Diploma</h6>
                        <p class="card-text">Mechanical Engineering</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 3 Years</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
            <!-- Civil Engineering -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering5}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/civil';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">National N Diploma</h6>
                        <p class="card-text">Civil Engineering</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 3 Years</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container my-5">
        <h2 class="text-center" style=" border-bottom: 2px solid #000; padding-top: 10px; padding-bottom: 10px; font-family: 'Poppins', sans-serif; color: #4CAF50; text-transform: uppercase; letter-spacing: 2px; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);">
            Occupational Ceritificates
        </h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <!-- Boiler Making -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering6}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/boiler';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>
                        <p class="card-text">Boilermaker</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 18 Months</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
            <!-- Fitter and Turner -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering7}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/fitter';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>
                        <p class="card-text">Fitter and Turner Trade</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 18 months</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
            <!-- Motor Mechanics -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering8}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/motor';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>
                        <p class="card-text">Motor mechanics/ Diesel Mechanics</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 18 months</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>

            <!-- Plumbing -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering9}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/plumbing';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>
                        <p class="card-text">Plumbing</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 18 months</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
            <!-- Bricklaying and Plastering -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering10}" class="card-img-top" alt="Civil Engineering" onclick="window.location.href='/bricklaying';" style="cursor: pointer;">
                    <div class="card-body">
                        <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>
                        <p class="card-text">Bricklaying and Plastering</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-1"><i class="material-icons">schedule</i> 18 months</p>
                            <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                            <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                        </div>
                        <a href="/apply" class="apply-button">Apply</a>
                    </div>
                </div>
            </div>
        </div>
    </div>



            <style>
                .card {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .card:hover {
                        transform: translateY(-5px); /* Slightly lift the card */
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Add shadow to give depth */
                    }
                    .card-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #f8f9fa; /* Light background for footer */
                        padding: 15px;
                    }
    
                    .card-footer p {
                        margin: 0;
                        font-size: 0.9rem; /* Slightly smaller text for details */
                        color: #555; /* Muted text color for subtlety */
                    }
    
                    .card-footer .material-icons {
                        font-size: 1.1rem;
                        vertical-align: middle;
                        margin-right: 5px; /* Spacing between icon and text */
                        color: #007BFF; /* Match Apply button color */
                    }
    
                    .apply-button {
                        display: inline-block;
                        background-color: #007BFF;
                        color: white;
                        font-size: 1rem;
                        font-weight: bold;
                        padding: 10px 20px;
                        border-radius: 5px;
                        text-decoration: none;
                        transition: background-color 0.3s ease, box-shadow 0.3s ease;
                    }
    
                    .apply-button:hover {
                        background-color: #0056b3;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
            </style>
    <!-- Footer Section -->
        <footer class="container-fluid footer py-5" style="background-color: #002366; color: white;">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-3">Quick Links</h4>
                        <p><a class="text-light" href="/about">About Us</a></p>
                        <p><a class="text-light" href="/contactus">Contact Us</a></p>
                        
                        <p><a class="text-light" href="/terms">Terms & Conditions</a></p>
                        
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-3">Contact</h4>
                        <p style="margin-bottom: 0;">1st Floor, De Villiers Building,</p>
                        <p style="margin-bottom: 0;">27 Bureau Ln, Pretoria Central,</p>
                        <p style="margin-bottom: 1;">Pretoria, 0002</p>
                        <p style="margin-bottom: 0;">012 023 1932</p>
                        <p style="margin-bottom: 1;">info@highburycollege.co.za</p>
                        <!-- Social Media Icons -->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn btn-outline-light btn-social mx-1" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="btn btn-outline-light btn-social mx-1" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="btn btn-outline-light btn-social mx-1" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-3">Newsletter</h4>
                        <form id="newsletterForm">
                            <input class="form-control w-100 py-3" name="email" type="email" placeholder="email" required>
                            <button type="submit" id="sub" class="btn btn-primary mt-3 mb-4">Subscribe</button>
                        </form>
                        <div id="formMessage" class="mt-3"></div>
                        
                        
                    </div>
                </div>
            </div>
        </footer>
        <div
            class="whatsapp-float"
            onclick="window.open('https://wa.me/+27782968095', '_blank')"
            style="cursor: pointer;"
        >
            <i class="fab fa-whatsapp"></i>
        </div>
        <!-- Footer End -->

        
    `;
    const form = document.querySelector("#newsletterForm");
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitButton = document.querySelector("#sub");
                if (submitButton) {
                    submitButton.value = "Submitting...";
                }
                const data = new FormData(form);
                fetch('https://script.google.com/macros/s/AKfycbwGnM64LqP6hrGd0otVPBZ3u7ymnZgPTPuEyiO0zUnNTAOYc1RbEjwaHLIdTL4F7VAj/exec', {
                    method: "POST",
                    body: data
                })
                .then(res => res.json()) // Parse JSON response
                .then(data => {
                    if (data.status === "success") {
                        alert(data.message); // Show success message
                        form.reset(); // Reset the form
                        if (submitButton) {
                            submitButton.value = "Subscribe"; // Reset button text
                        }
                    } else {
                        alert(data.message); // Show error message
                        if (submitButton) {
                            submitButton.value = "Subscribe"; // Reset button text
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("There was an error. Please try again later.");
                });
            });
        } else {
            console.error("Newsletter form not found.");
        };
}
