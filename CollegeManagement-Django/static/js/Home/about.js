
import headimage from './Untitleddesign.png';
import chooseus from './Untitle.png';
import about from './course-3.jpg';
import engineering from './Untitled14design.png';
import it from './Untitled8.png';
import matric from './mat.png';

import image23 from './1a.png';
import image24 from './2a.png';
import image25 from './3a.png';
import image26 from './4a.png';
import image27 from './5a.png';
import image28 from './6a.png';

export function loadAboutPage() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.innerHTML = `
        <!-- Header Start -->
        <div class="container-fluid bg-light" 
            style="background-image: url('${headimage}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; height:80vh;">
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
                        <h1 class="display-3 text-white animated slideInDown">About Us</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->

        
        
        <style>
            
            .animated-title {
                transition: color 0.3s ease, transform 0.3s ease;
            }
            .animated-title:hover {
                color: #f59e0b; 
                transform: scale(1.05);
            }

            .hover-paragraph {
                position: relative;
                transition: background-color 0.3s ease, transform 0.3s ease;
            }
            .hover-paragraph:hover {
                background-color: #e0f2fe; 
                transform: translateY(-5px);
                border-radius: 8px;
            }

            
            .hover-image {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-image:hover {
                transform: scale(1.05);
                box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
            }

            
            .fade-in-section {
                opacity: 0;
                transform: translateY(20px);
                animation: fadeIn 1s ease forwards;
            }
            @keyframes fadeIn {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        </style>
        <div class="container-xxl py-5">
            <div class="container">
                <h2 class="text-center mb-4" style="color: #1e3a8a; text-decoration: underline; font-family: 'Roboto', sans-serif;">About Us</h2>
                <div class="row align-items-center g-4">
                    <div class="col-lg-6">
                        <p class="hover-paragraph" style="font-family: 'Roboto', sans-serif; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                            Highbury College is dedicated to empowering students with the skills, knowledge, and confidence to thrive in today's fast-evolving industries. 
                            Situated in the heart of Pretoria Central, we offer cutting-edge programs tailored to meet the needs of aspiring professionals in Engineering, 
                            IT, and Science.
                        </p>
                        <ul>
                            <li>State-of-the-art engineering and tech workshops</li>
                            <li>Practical, hands-on training guided by industry experts</li>
                            <li>Accreditation from DHET, Umalusi, and QCTO</li>
                            <li>Innovative learning methods with comprehensive support systems</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <img src="${about}" class="img rounded border border-primary hover-image" alt="About Us">
                    </div>
                </div>
            </div>
        </div>

        <!-- Mission and Vision Section -->
        <div class="container-xxl py-5 bg-light fade-in-section">
            <div class="container">
                <div class="row align-items-center g-4">
                    <div class="col-lg-6">
                        <h2 class="animated-title" style="color: #1e3a8a; font-family: 'Roboto', sans-serif;">Our Mission</h2>
                        <p class="hover-paragraph" style="font-family: 'Roboto', sans-serif; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                            To empower all our students to succeed by fostering learning for life, work, and global citizenship. 
                            We emphasize leadership, accountability, innovation, creativity, and sustainability.
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="animated-title" style="color: #1e3a8a; font-family: 'Roboto', sans-serif;">Our Vision</h2>
                        <p class="hover-paragraph" style="font-family: 'Roboto', sans-serif; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                            A world-class learning enterprise that transforms lives, pioneers innovation. Bridging the gap between learners and workplace through well
                            equipped engineering and tech workshop.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Why Choose Us Section -->
        <div class="container-xxl py-5">
            <div class="container">
                <h2 class="text-center mb-4 animated-title" style="color: #1e3a8a; text-decoration: underline; font-family: 'Roboto', sans-serif;">Why Choose Us?</h2>
                <div class="row align-items-center g-4">
                    <div class="col-lg-6">
                        <p class="hover-paragraph" style="font-family: 'Roboto', sans-serif; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                            At Highbury College, we pride ourselves on offering the highest standards of education. 
                            Our programs are designed to produce industry-ready professionals with the technical expertise and practical experience needed for success.
                        </p>
                        <ul>
                            <li>Comprehensive curriculum in Engineering, IT, and Science</li>
                            <li>Access to advanced learning facilities</li>
                            <li>Strong connections with industry leaders</li>
                            <li>Supportive academic environment</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <img src="${chooseus}" class="img-fluid rounded border border-primary hover-image" alt="Why Choose Us">
                    </div>
                </div>
            </div>
        </div>

        <!-- Programs Section -->
        <div class="container-xxl py-5">
            <div class="container">
                <h2 class="text-center mb-4" style="color: #1e3a8a; text-decoration: underline; font-family: 'Roboto', sans-serif;">Programs We Offer</h2>
                <div class="row g-4">
                    <div class="col-md-4">
                        <h4 style="font-family: 'Roboto', sans-serif; color: #1e3a8a;">Engineering Courses</h4>
                        <ul style="font-family: 'Roboto', sans-serif; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                            <li>Electrical Engineering (N3 - N6)</li>
                            <li>Mechanical Engineering (N3 - N6)</li>
                            <li>Civil Engineering (N3 - N6)</li>
                            <li>Chemical Engineering (N3 - N6)</li>
                        </ul>
                        <img src="${engineering}" class="img-fluid rounded mt-3 border border-primary hover-image" alt="Engineering">
                    </div>
                    <div class="col-md-4">
                        <h4 style="font-family: 'Roboto', sans-serif; color: #1e3a8a;">Information Technology</h4>
                        <ul style="font-family: 'Roboto', sans-serif; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                            <li>Cloud Administrator</li>
                            <li>Software Development</li>
                            <li>Cybersecurity Analyst</li>
                            <li>Data Science Practitioner</li>
                        </ul>
                        <img src="${it}" class="img-fluid rounded mt-3 border border-primary hover-image" alt="Information Technology">
                    </div>
                    <div class="col-md-4">
                        <h4 style="font-family: 'Roboto', sans-serif; color: #1e3a8a;">Matric Re-write</h4>
                        <ul style="font-family: 'Roboto', sans-serif; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                            <li>Mathematics</li>
                            <li>Physical Sciences</li>
                            <li>Accounting</li>
                            <li>Business Studies</li>
                        </ul>
                        <img src="${matric}" class="img-fluid rounded mt-3 border border-primary hover-image " alt="Matric Re-write">
                    </div>
                </div>
            </div>
        </div>

        <!-- Fun Facts Section -->
        <div class="container-xxl py-5 bg-light">
            <div class="container text-center">
                <h2 class="mb-5" style="color: #fb873f;">Our Achievements</h2>
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6">
                        <i class="fa fa-award fa-3x text-primary mb-3"></i>
                        <h2 id="awardCounter" class="text-primary">540</h2>
                        <p>Award Winning</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <i class="fa fa-graduation-cap fa-3x text-primary mb-3"></i>
                        <h2 id="graduateCounter" class="text-primary">300</h2>
                        <p>Graduates</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <i class="fa fa-users fa-3x text-primary mb-3"></i>
                        <h2 id="facultyCounter" class="text-primary">10</h2>
                        <p>Faculties</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <i class="fa fa-chalkboard-teacher fa-3x text-primary mb-3"></i>
                        <h2 id="staffCounter" class="text-primary">10</h2>
                        <p>Experienced Staff</p>
                    </div>
                    
                </div>
            </div>
        </div>
        



        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img src="${image23}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image24}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image25}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image26}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image27}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image28}" height="100" width="250" alt="" />
                </div>
            </div>
        </div>





        
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
}


import { CountUp } from 'countup.js';

export function startCounters() {
    const initializeCounter = (elementId, targetValue, options = {}) => {
        const counter = new CountUp(elementId, targetValue, options);
        if (!counter.error) {
            counter.start();
        } else {
            console.error(`Error initializing counter for ${elementId}:`, counter.error);
        }
    };

    const activateCounters = () => {
        const achievementSection = document.querySelector(".container-xxl");

        if (achievementSection && achievementSection.getBoundingClientRect().top < window.innerHeight) {
            // Start counters when the section is visible
            initializeCounter("awardCounter", 540, { duration: 20 });
            initializeCounter("graduateCounter", 300, { duration: 15 });
            initializeCounter("facultyCounter", 10, { duration: 5 });
            initializeCounter("staffCounter", 10, { duration: 5 });

            window.removeEventListener("scroll", activateCounters); // Remove listener after counters are started
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        window.addEventListener("scroll", activateCounters);
    });

    window.addEventListener("routeChange", () => {
        window.addEventListener("scroll", activateCounters);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = {
        awardCounter: 540,      
        graduateCounter: 300,  
        facultyCounter: 10,    
        staffCounter: 10       
    };

    Object.keys(counters).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = counters[id];
        }
    });
});
    

window.startCounters = startCounters
