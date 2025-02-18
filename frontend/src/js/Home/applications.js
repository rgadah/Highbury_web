import headimage1 from './20.png';

export function loadApplicationPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

        main.innerHTML = `
        <!-- Header Start -->
        <div class="container-fluid bg-light" 
            style="background-image: url('${headimage1}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; height: 80vh;">
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
                        <form  id="applicationForm" class="shadow p-4" style="max-width: 550px;">
                            <h1 class="mb-4 bg-white text-center px-3">Application Form</h1>

                            <!-- Personal Details -->
                            <h2 class="mb-3">Personal Details</h2>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="fullName" placeholder="Full Name" required>
                                <label for="fullName">Full Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" name="email" placeholder="Email Address" required>
                                <label for="email">Email Address</label>
                            </div>

                            <!-- Contact Details -->
                            <h2 class="mb-3">Contact Details</h2>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="phone" placeholder="Phone Number" required>
                                <label for="phone">Phone Number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="nextOfKin" placeholder="Next of Kin Contact" required>
                                <label for="nextOfKin">Next of Kin Contact</label>
                            </div>

                            <!-- Academic Details -->
                            <h2 class="mb-3">Academic Details</h2>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" name="qualifications" placeholder="Previous Qualifications (if any)" style="height: 100px;"></textarea>
                                <label for="qualifications">Last Grade Passed/Previous Qualifications</label>
                            </div>
                            

                            <!-- Course Selection -->
                            <h2 class="mb-3">Course Selection</h2>
                            <div class="form-floating mb-3" >
                                <select type="text" class="form-select" id="departmentSelect" name="department" onchange="updateCourses()" required>
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
                            <div class="form-floating mb-3" type="text">
                                <select type="text" class="form-select" id="courseSelect" name="course" required>
                                    <option selected>Choose Course...</option>
                                </select>
                                <label for="courseSelect">Select a Course</label>
                            </div>

                            <!-- Submission -->
                            <button id="sub3" type="submit" class="btn btn-primary w-100">Submit Application</button>
                        </form>
                    </center>
                </div>
            </div>
        </div>
        <!-- Application Process End -->

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

        const appform = document.querySelector("#applicationForm");
if (appform) {
    appform.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitButton = document.querySelector("#sub3");
        if (submitButton) {
            submitButton.textContent = "Submitting..."; // Change button text
        }

        const formData = new FormData(appform); // Collect form data

        fetch('https://script.google.com/macros/s/AKfycbwGnM64LqP6hrGd0otVPBZ3u7ymnZgPTPuEyiO0zUnNTAOYc1RbEjwaHLIdTL4F7VAj/exec', {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json()) // Parse JSON response
            .then((data) => {
                if (data.status === "success") {
                    alert(data.message); // Show success message
                    appform.reset(); // Reset the form
                } else {
                    alert(data.message); // Show error message
                }
                if (submitButton) {
                    submitButton.textContent = "Submit Application"; // Reset button text
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("There was an error. Please try again later.");
                if (submitButton) {
                    submitButton.textContent = "Submit Application"; // Reset button text
                }
            });
    });
} else {
    console.error("Application form not found.");
}


        
        
        

        const departmentCourses = {
            "1": [
                "National N Diploma: Chemical Engineering",
                "Civil Engineering",
                "National Diploma: Electrical Engineering",
                "Electrical Engineering plus Artisan Training",
                "National N Diploma: Mechanical Engineering"
            ],
            "2": [
                "Artisan",
                "Bricklaying and Plastering",
                "Plumbing"
            ],
            "3": [
                "Motor Mechanics/Diesel Mechanics"
            ],
            "4": [
                "Atrisan",
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

        window.updateCourses = updateCourses;

        const departmentSelect = document.getElementById('departmentSelect');
        if (departmentSelect) {
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
    }
}
