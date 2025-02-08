



import it from './cyber.png';
import it1 from './datas.png';
import it2 from './cloud2.png';
import it3 from './fsweb.png';
import it4 from './fssoft.png';
import it5 from './datas1.png';
import it6 from './techs.png';
import it7 from './servtec.png';


import heroimage1 from './ho5.png'

export function loadcomppage() {
    const main = document.querySelector('main');

    if (!main) {
        console.error('Main element not found');
        return;
    }

    main.innerHTML = `
    <!-- Header Start -->
            <div class="container-fluid bg-light" 
                style="background-image: url('${heroimage1}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; height:80vh;">
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
                            <h1 class="display-3 text-white animated slideInDown">IT Solutions</h1>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header End -->


    <!-- IT Expertise Section -->
        <div class="container my-5">
            <div class="row">
                <div class="col text-center">
                    <h2 class="display-4">Welcome to Highbury College's IT Solutions Faculty</h2>
                    <p class="lead">At Highbury College, our new Computer Lab is designed to provide students with the skills needed to succeed in the tech industry. We offer occupational certificates that focus on programming, giving students the hands-on experience necessary for career growth. Starting with these courses, students can build a solid foundation for various career paths in IT, from software development to system administration, and gain the qualifications that employers seek in today’s competitive digital job market.</p>
                </div>
            </div>
        </div>
    
        <!-- Pick Your Course Section -->
        <div class="container-fluid bg-primary text-white text-center py-3">
            <h3>Pick your course from our well-varied courses</h3>
        </div>
    
        <!-- Occupational Certificates Diplomas Section -->
        <div class="container my-5">
            <h2 class="text-center" style=" border-bottom: 2px solid #000; padding-top: 10px; padding-bottom: 10px; font-family: 'Poppins', sans-serif; color: #4CAF50; text-transform: uppercase; letter-spacing: 2px; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);">
                Occupational Certificates
            </h2>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <!-- Cyber Security -->
                <div class="col">
                    <div class="card h-100">
                        <img src="${it}" class="card-img-top" alt="Civil it" onclick="window.location.href='/cyber';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">Cyber Security Analyst</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i> 12 months</p>
                                <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                                <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                            </div>
                            <a href="/apply" class="apply-button">Apply</a>
                        </div>
                    </div>
                </div>
                <!-- Data Science Solutions Developer -->
                <div class="col">
                    <div class="card h-100">
                        <img src="${it1}" class="card-img-top" alt="Civil it" onclick="window.location.href='/datasc';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">Data Science Solutions Developer</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i> 12 months</p>
                                <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                                <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                            </div>
                            <a href="/apply" class="apply-button">Apply</a>
                        </div>
                    </div>
                </div>
                <!-- Cloud Computing Specialization -->
                <div class="col">
                    <div class="card h-100">
                        <img src="${it2}" class="card-img-top" alt="Civil it" onclick="window.location.href='/cloud';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">Cloud Computing Specializationr</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i> 12 months</p>
                                <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                                <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                            </div>
                            <a href="/apply" class="apply-button">Apply</a>
                        </div>
                    </div>
                </div>
                <!-- Full Stack Web Developer  -->
                <div class="col">
                    <div class="card h-100">
                        <img src="${it3}" class="card-img-top" alt="Civil it" onclick="window.location.href='/fullstackweb';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">Full Stack Web Developer</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i> 12 motnhs</p>
                                <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                                <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                            </div>
                            <a href="/apply" class="apply-button">Apply</a>
                        </div>
                    </div>
                </div>
                <!-- Full Stack Software Developer -->
                <div class="col">
                    <div class="card h-100">
                        <img src="${it4}" class="card-img-top" alt="Civil it" onclick="window.location.href='/fullstacksoft';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">Full Stack Software Developer</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i>12 months</p>
                                <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                                <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                            </div>
                            <a href="/apply" class="apply-button">Apply</a>
                        </div>
                    </div>
                </div>
                <!-- Full Stack Web and Software Developer  -->
                <div class="col">
                    <div class="card h-100">
                        <img src="${it5}" class="card-img-top" alt="Civil it" onclick="window.location.href='/fullstack';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">Full Stack Web and Software Developer </p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i>12 months</p>
                                <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                                <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                            </div>
                            <a href="/apply" class="apply-button">Apply</a>
                        </div>
                    </div>
                </div>
                <!-- IT Technical Support -->
                <div class="col">
                    <div class="card h-100">
                        <img src="${it6}" class="card-img-top" alt="Civil it" onclick="window.location.href='/ittech';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">IT Technical Support</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i> 12 months</p>
                                <p class="mb-1"><i class="material-icons">location_on</i> On Campus</p>
                                <p class="mb-0"><i class="material-icons">school</i> Full Time</p>
                            </div>
                            <a href="/apply" class="apply-button">Apply</a>
                        </div>
                    </div>
                </div>
                <!-- Server/Network Technician -->
                <div class="col">
                    <div class="card h-100" >
                        <img src="${it7}" class="card-img-top" alt="Civil it" onclick="window.location.href='/server-network';" style="cursor: pointer;">
                        <div class="card-body">
                            <h6 class="card-title" style="font-weight: bold; font-size: 0.8em; font-family: 'Lora', serif; margin-bottom: 0;">Occupational Certificate</h6>

                            <p class="card-text">Server/Network Technician</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-1"><i class="material-icons">schedule</i> 12 months</p>
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
                            <p><a class="text-light" href="privacy.html">Privacy Policy</a></p>
                            <p><a class="text-light" href="terms.html">Terms & Conditions</a></p>
                            <p><a class="text-light" href="faqs.html">FAQs & Help</a></p>
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
                            <form>
                                <input class="form-control w-100 py-3" type="email" placeholder="Your email" required>
                                <button class="btn btn-primary mt-3 mb-4">Subscribe</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </footer>
    
        `;
    }
    