
import tradeImage from './contact.png';

export function loadContactUs() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.innerHTML = `
            <!-- Header Start -->
                <div class="container-fluid bg-light" 
                    style="background-image: url('${tradeImage}'); background-size: cover; background-position: center; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; height: 80vh;">
                    <style>
                        @media (max-width: 767px) {
                            .container-fluid {
                                padding-top: 80px;
                                padding-bottom: 50px;
                                background-size: cover;
                                background-position: center;
                            }
                            .display-3 {
                                font-size: 2.5rem;
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
                                <h1 class="display-3 text-white animated slideInDown">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Header End -->

            <div class="touch">
                <h2>Get in Touch</h2>
                <hr class="redline">
            </div>

            <form  id="contactus-form">
                <div class="container form-margin">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name" name="firstname" required>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Phone" name="phone" required>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name" name="lastname" required>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="E-mail" name="email" required>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Course of Interest" name="course" required>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                        <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="form-group">
                                <textarea class="form-control" rows="6" placeholder="Message" name="message" required></textarea>
                            </div>
                            <div class="pager">
                                <button id="subus" type="submit" class="btn btn-success">SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                </div>
            </form>

            <div class="container address">
                <div class="row d-flex align-items-center">
                    <!-- Address Section -->
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <h3>Our Address</h3>
                        <div class="redline-address"></div>
                        <p><i class="fas fa-map-marker-alt"></i> 1st Floor, De Villiers Building</p>
                        <p><i class="fas fa-map-marker-alt"></i> 27 Bureau Ln, Pretoria Central</p>
                        <p><i class="fas fa-city"></i> Pretoria, 0002</p>
                        <div class="contact-info">
                            <p><i class="fas fa-envelope"></i> info@highburycollege.co.za</p>
                            <p><i class="fas fa-phone"></i> 012 023 1932</p>
                        </div>
                    </div>

                    <!-- Map Section with a Professional Border -->
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.915666599301!2d28.18703781550203!3d-25.74607858163322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9562f427d29b79%3A0xf3ddfbd8337605f9!2s27%20Bureau%20Ln%2C%20Pretoria%20Central%2C%20Pretoria%2C%200002%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1619175810225"
                                width="100%" 
                                height="350"
                                frameborder="0" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add some CSS for styling -->
            <style>
                .address p {
                    font-size: 16px;
                    margin-bottom: 5px;
                }

                .contact-info p {
                    margin: 10px 0;
                }

                .map-container {
                    border: 3px solid #ccc; 
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    padding: 5px;
                }

                .map-container iframe {
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                }

                i {
                    margin-right: 8px;
                    color: #d9534f;
                }
</style>

            <style>
            .touch h2 {
                padding-top: 20px;
                text-align: center;
            }
            .form-margin {
                margin-top: 40px;
            }
            .redline-address {
                border: none;
                height: 3px;
                background-color: orangered;
                width: 140px;
                margin-bottom: 20px;
            }
            .address {
                padding-top: 50px;
            }
            .address p {
                font-weight: bold;
                color: #676565;
                margin: 3px;
            }
            .phone-e {
                padding: 15px 0;
            }
            input.ng-valid {
                background-color: #dff0d8;
            }
            input.ng-invalid {
                background-color: #f2dede;
            }
            textarea.ng-valid {
                background-color: #dff0d8;
            }
            textarea.ng-invalid {
                background-color: #f2dede;
            }
            </style>
            <div class="bottom-gap"></div>


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

        const form1 = document.querySelector("#contactus-form");
        if (form1) {
            form1.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Find the submit button to change its text during submission
                const submitButton = document.querySelector("#subus");
                if (submitButton) {
                    submitButton.textContent = "Sending..."; // Change button text
                }
        
                const data = new FormData(form1);
        
                // Send the form data to the Google Apps Script endpoint
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
                            submitButton.textContent = "SEND MESSAGE"; // Reset button text
                        }
                    } else {
                        alert(data.message); // Show error message
                        if (submitButton) {
                            submitButton.textContent = "SEND MESSAGE"; // Reset button text
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("There was an error. Please try again later.");
                    if (submitButton) {
                        submitButton.textContent = "SEND MESSAGE"; // Reset button text in case of error
                    }
                });
            });
        } else {
            console.error("Contact us form not found.");
        }
        
    
    }
}




// ... (validatejs function remains the same)