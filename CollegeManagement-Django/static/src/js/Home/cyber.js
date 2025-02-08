



// Import images for the slideshow
import cyberSecurityImage1 from './pcstudent.jpg';
import cyberSecurityImage2 from './pcstudent.jpg';
import cyberSecurityImage3 from './pcstudent.jpg';
import heroimage1 from './12.png';


export function renderCyberSecuritySpecializationPage() {
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
                                    <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Cyber Security Specialization</h4>
                                    <p>NC: IT Systems Support NQF5</p>
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
                        <h2 class="mb-4">About the Cyber Security Specialization Course</h2>
                        <p>
                            A Network or Server Technician is responsible for setting up and maintaining computer hardware and software systems that make up a computer network and its servers. With the growing importance of securing digital infrastructure, technicians must have knowledge in networking, operating systems, system administration, virtualization, cloud-based platforms, and security related to networks and servers. This program prepares students to specialize in Cybersecurity with CISCO, focusing on core skills in server and networking infrastructure.
                        </p>

                        <h4>Job Opportunities</h4>
                        <ul>
                            <li>Cyber Security Analyst: R94,000 - R622,000</li>
                            <li>Information Security Analyst: R120,000 - R498,000</li>
                            <li>Information Security Officer: R408,000 - R1 million</li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 18 months</li>
                            <li>Credits: 131</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>National Senior Certificate (Grade 12):</strong> With Foundational Mathematics and English as your home/first language.</p>

                        <h4>What You Get</h4>
                        <p>This qualification provides a strong foundation in IT systems support, coupled with industry-relevant certifications, both locally and internationally recognized, ensuring maximum employability for students.</p>

                        <h4>National Qualification</h4>
                        <ul>
                            <li>Highbury College Certificate: Cyber Security Specialization</li>
                            <li>National Certificate: IT Systems Support, SAQA ID 48573, NQF Level 5</li>
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
