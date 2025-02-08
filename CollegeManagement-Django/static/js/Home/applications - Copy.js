
import headimage1 from './20.png'

export function loadApplicationPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

        main.innerHTML = `
        <!-- Header Start -->
        <div class="container-fluid bg-light" 
            style="background-image: url('${headimage1}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; ">
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
                        <h1 class="display-3 text-white animated slideInDown">Application</h1>
                            
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    
        <!-- Application Process Start -->
        <div class="container-xxl py-2 mt-4">
            <div class="container">
                <div class="row g-4 wow fadeInUp" data-wow-delay="0.5s">
                    <center>
                        <form id="applicationForm" class="shadow p-4" style="max-width: 550px;">
                            <div id="step-1" class="application-step">
                                <h1 class="mb-4 bg-white text-center px-3">Personal Details</h1>
                                
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="fullName" placeholder="Full Name" required>
                                    <label for="fullName">Full Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="Email Address" required>
                                    <label for="email">Email Address</label>
                                </div>
                                <button type="button" class="btn btn-primary w-100" onclick="verifyEmail()">Verify Email</button>
                            </div>

                            <div id="step-2" class="application-step d-none">
                                <h1 class="mb-4 bg-white text-center px-3">Contact Details</h1>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="phone" placeholder="Phone Number" required>
                                    <label for="phone">Phone Number</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="nextOfKin" placeholder="Next of Kin Contact" required>
                                    <label for="nextOfKin">Next of Kin Contact</label>
                                </div>
                                <button type="button" class="btn btn-primary w-100" onclick="goToStep(3)">Next</button>
                            </div>

                            <div id="step-3" class="application-step d-none">
                                <h1 class="mb-4 bg-white text-center px-3">Academic Details</h1>
                                
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" id="qualifications" placeholder="Previous Qualifications (if any)" style="height: 100px;"></textarea>
                                    <label for="qualifications">Previous Qualifications</label>
                                </div>
                                <div class="mb-3">
                                    <label for="documents" class="form-label">Upload Supporting Documents</label>
                                    <input type="file" class="form-control" id="documents">
                                </div>
                                
                                <h5 class="mb-3">Subjects and Results</h5>
                                <div id="subjectsResultsContainer">
                                    <div class="row mb-2">
                                        <div class="col-6">
                                            <input type="text" class="form-control" id="subject1" placeholder="Subject" required>
                                        </div>
                                        <div class="col-6">
                                            <input type="number" class="form-control" id="result1" placeholder="Result (%)" min="0" max="100" required>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-secondary w-100 mb-3" onclick="addSubjectRow()">Add More Subjects</button>
                                <button type="button" class="btn btn-primary w-100" onclick="goToStep(4)">Next</button>
                            </div>

                            <div id="step-4" class="application-step d-none">
                                <h1 class="mb-4 bg-white text-center px-3">Course Selection</h1>
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="departmentSelect" onchange="updateCourses()" required>
                                        <option selected>Choose Department...</option>
                                        <option value="1">Engineering and Electrical Engineering</option>
                                        <option value="2">Building and Maintenance</option>
                                        <option value="3">Motor Mechanics</option>
                                        <option value="4">Metal Fabrication</option>
                                        <option value="5">Software, Web, Games & Database Developer / Programmer</option>
                                        <option value="6">Server, Networking & PC Technician</option>
                                    </select>
                                    <label for="departmentSelect">Select a Department</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <select class="form-select" id="courseSelect" required>
                                        <option selected>Choose Course...</option>
                                    </select>
                                    <label for="courseSelect">Select a Course</label>
                                </div>
                                <button type="button" class="btn btn-primary w-100" onclick="goToStep(5, document.getElementById('fullName').value, document.getElementById('email').value)">Submit</button>
                            </div>

                            <div id="step-5" class="application-step d-none">
                                <h1 class="mb-4 bg-white text-center px-3">Application Received</h1>
                                <p>Thank you for your application to the College of Engineering.</p>
                                <p>We have received your details, and a confirmation email will be sent shortly.</p>
                                <p>If you have any questions, contact our admissions office.</p>
                                <p>Your unique username is: <strong id="generatedUsername"></strong></p>
                                <p>Please save this username for future use to log in and check your application status.</p>
                                <button type="button" class="btn btn-secondary w-100" onclick="resetApplication()">Start Over</button>
                            </div>
                        </form>
                    </center>
                </div>
            </div>
        </div>
        <!-- Application Process End -->

        <!-- Footer Section -->
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

        // Add the function to dynamically add subject rows
        /* window.addSubjectRow = function() {
            const container = document.getElementById('subjectsResultsContainer');
            const rowCount = container.children.length + 1;
            
            const newRow = document.createElement('div');
            newRow.classList.add('row', 'mb-2');
            newRow.innerHTML = `
                <div class="col-6">
                    <input type="text" class="form-control" id="subject${rowCount}" placeholder="Subject" required>
                </div>
                <div class="col-6">
                    <input type="number" class="form-control" id="result${rowCount}" placeholder="Result (%)" min="0" max="100" required>
                </div>
            `;
            container.appendChild(newRow); */

            const departmentCourses = {
                "1": [
                    "National N Diploma: Chemical Engineering",
                    "Civil Engineering",
                    "National Diploma: Electrical Engineering / Heavy Current",
                    "Electrical Engineering / Light Current",
                    "National N Diploma: Mechanical Engineering"
                ],
                "2": [
                    "Bricklaying and Plastering",
                    "Plumbing"
                ],
                "3": [
                    "Motor Mechanics/Diesel Mechanics"
                ],
                "4": [
                    "Boilermaker",
                    "Fitter and Turner Trade"
                ],
                "5": [
                    "Full Stack Web Developer (NC: IT Systems Developer NQF5)",
                    "Full Stack Software Developer (NC: IT Systems Developer NQF5)",
                    "Data Science Solutions Developer (NC: IT Systems Developer NQF5)",
                    "Full Stack Web and Software Developer (NC: IT Systems Developer NQF5)"
                ],
                "6": [
                    "IT Technical Support (FET Certificate: IT Support/PC Technician)",
                    "Server/Network Technician (National Certificate: IT Systems Support NQF5)",
                    "Cybersecurity Specialization (National Certificate: IT Systems Support NQF5)",
                    "Cloud Computing Specialization (National Certificate: IT Systems Support NQF5)"
                ]
            };
    
            function updateCourses() {
                const departmentSelect = document.getElementById('departmentSelect');
                const courseSelect = document.getElementById('courseSelect');
                const departmentId = departmentSelect.value;
    
                courseSelect.innerHTML = `<option selected>Choose Course...</option>`;
    
                if (departmentCourses[departmentId]) {
                    departmentCourses[departmentId].forEach(course => {
                        const option = document.createElement('option');
                        option.value = course;
                        option.textContent = course;
                        courseSelect.appendChild(option);
                    });
                }
            }
    
            // Make updateCourses available globally if needed by inline handlers
            window.updateCourses = updateCourses;
    
            // Add event listener (BEST PRACTICE)
            const departmentSelect = document.getElementById('departmentSelect');
            if (departmentSelect) { // Check if the element exists
                departmentSelect.addEventListener('change', updateCourses);
            }
    
            window.addSubjectRow = function() {
                const container = document.getElementById('subjectsResultsContainer');
                const rowCount = container.children.length + 1;
    
                const newRow = document.createElement('div');
                newRow.classList.add('row', 'mb-2');
                newRow.innerHTML = `
                    <div class="col-6">
                        <input type="text" class="form-control" id="subject${rowCount}" placeholder="Subject" required>
                    </div>
                    <div class="col-6">
                        <input type="number" class="form-control" id="result${rowCount}" placeholder="Result (%)" min="0" max="100" required>
                    </div>
                `;
                container.appendChild(newRow);
                    
                
            };
        };
    };
