


// Import images for the slideshow

import heroimage1 from './16.png';


export function renderITTechnicalSupportPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

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
                            .text-center p {
                                margin: 0; /* Remove margin between heading and paragraph */
                                padding: 0;
                                font-size: 1.25rem; /* Slightly larger paragraph text */
                                color:rgb(221, 217, 235);
                                text-shadow: 1px 1px 3px rgba(211, 205, 205, 0.6);
                            }
                        </style>
                        <div class="container py-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 text-center">
                                    <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">1.	IT Technical Support</h4>
                                    <p>FET Certificate: IT Support/PC Technician</p>
                                </div>
                            </div>
                        </div>
                    </div>
        <!-- Header End -->

        <!-- Main Content Start -->
        <div class="container-xxl py-4">
            <div class="container">
                <div class="row g-4">
                    <!-- Course Details -->
                    <div class="col-lg-8">
                        <h2 class="mb-4">About the IT Technical Support Course</h2>
                        <p>
                            An IT Support/PC Technician is a person who repairs and maintains computers and servers. The technician's responsibilities may extend to include building or configuring new hardware, installing and updating software packages, creating and maintaining computer networks, and providing end-user support. This course builds a solid foundation in the field of Computer Sciences and Information Technology.
                        </p>

                        <h4>Job Opportunities</h4>
                        <ul>
                            <li>Support Technician, Information Technology (IT): R59,399 - R241,080</li>
                            <li>Information Technology (IT) Support Specialist: R81,148 - R409,325</li>
                            <li>Support Analyst, Information Technology (IT): R106,423 - R423,910</li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 12 months</li>
                            <li>Credits: 163</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>NQF 3 or Grade 11:</strong> With English as your home/first language.</p>

                        <h4>What You Get</h4>
                        <p>This qualification has been designed to provide the student with a national certificate and multiple certifications, both locally and internationally recognized by industry for maximum employability.</p>

                        <h4>National Qualification</h4>
                        <ul>
                            <li>Highbury College Certificate: IT Technical Support</li>
                            <li>FET Certificate: IT Technical Support, SAQA ID: 78964, NQF Level 04</li>
                        </ul>
                    </div>

                    
                </div>
            </div>
            <a href="/apply" class="btn btn-primary mt-3">Apply</a>
        </div>
        <!-- Main Content End -->
        `;
    }
}
