


// Import images for the slideshow
import heroimage1 from './iruly.png';

export function renderInstallationRulesPreparationPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

        main.innerHTML = `
        <!-- Header Start -->
        <div class="container-fluid bg-light" 
            style="background-image: url('${heroimage1}'); background-size: cover; background-position: center; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; height: 80vh;">
            <style>
                @media (max-width: 767px) {
                    .container-fluid {
                        padding-top: 80px;
                        padding-bottom: 50px;
                        background-size: cover;
                        background-position: center center;
                    }
                    .display-3 {
                        font-size: 2.5rem;
                    }
                    .col-lg-10 {
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                }
                .text-center p {
                    margin: 0;
                    padding: 0;
                    font-size: 1.25rem;
                    color: rgb(221, 217, 235);
                    text-shadow: 1px 1px 3px rgba(211, 205, 205, 0.6);
                }
            </style>
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Installation Rules Preparation Course</h4>
                        <p>Comprehensive Training for Installation Rules Paper 1 and Paper 2</p>
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
                        <h2 class="mb-4">About the Installation Rules Preparation Course</h2>
                        <p>
                            This course is designed to prepare individuals for the Installation Rules examinations (Paper 1 and Paper 2), which are essential for becoming a qualified electrician in South Africa. The curriculum is based on the SANS 10142 electrical installation regulations and provides in-depth theoretical and practical knowledge required for certification.
                        </p>

                        <h4>Course Structure</h4>
                        <p>The course is divided into two parts, each dedicated to one of the examination papers:</p>

                        <h5>Part 1: Installation Rules Paper 1 Preparation (5 Weeks)</h5>
                        <p>This section focuses on theoretical aspects of electrical installations, including:</p>
                        <ul>
                            <li>Basic electrical theory and definitions</li>
                            <li>Safety regulations and compliance</li>
                            <li>Cable sizing and circuit protection</li>
                            <li>Understanding of SANS 10142-1 standards</li>
                        </ul>

                        <h5>Part 2: Installation Rules Paper 2 Preparation (5 Weeks)</h5>
                        <p>This section delves into practical applications and calculations, covering topics such as:</p>
                        <ul>
                            <li>Voltage drop calculations</li>
                            <li>Earth fault loop impedance</li>
                            <li>Conduit sizing</li>
                            <li>Application of installation rules in various scenarios</li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: Each part spans 5 weeks, totaling 10 weeks of comprehensive training.</li>
                            <li>In-depth coverage of both theoretical knowledge and practical applications.</li>
                            <li>Preparation aligned with the latest SANS 10142-1:2024 Edition 3.2 standards.</li>
                            <li>Interactive learning with practical examples and past examination papers.</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p>Applicants should meet the following criteria:</p>
                        <ul>
                            <li>Possession of a Grade 12 certificate with Mathematics and Physical Science.</li>
                            <li>At least 5 years of working experience in the electrical field.</li>
                            <li>For those aiming for a Three Phase Wireman's License, additional qualifications such as a Trade Test Certificate and N3 are required.</li>
                        </ul>

                        <h4>Enrollment Process</h4>
                        <p>Interested candidates should:</p>
                        <ul>
                            <li>Book an appointment with us through our email by clicking the email below.</li>
                            
                            <li>Email to: <a href="mailto:info@highburycollege.co.za?subject=Installation%20Rules%20Paper%201%20and%202&body=Name%20%26%20Surname:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.%0A%0ABooking%20for%20Month:" 
                                onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@highburycollege.co.za&su=COC%20Standard%20Three-Phase&body=Name%20%26%20Surname:%0A%0ABooking%20for%20Month:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.', '_blank');">info@highburycollege.co.za</a></li>
                        </ul>

                        <h4>Class Schedule</h4>
                        <p>Classes are held from 08:00 to 16:00, with a lunch break from 12:00 to 13:00. Tea and coffee are provided. There is at least one weekend class per month. Please contact the office for specific dates.</p>

                        <h4>Essentials to Bring</h4>
                        <ul>
                            <li>Valid ID document.</li>
                            <li>Notebook and pen.</li>
                        </ul>

                        <h4>Certification Process</h4>
                        <p>Upon successful completion of the course and passing both examinations, participants will be equipped to apply for the Wireman's License for Single Phase or Three Phase installations, as per their qualifications.</p>

                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Upon obtaining the Wireman's License, individuals can pursue various roles in the electrical industry. Here are some potential positions along with their estimated average earnings:</p>
                        <ul>
                            <li><strong>Installation Electrician:</strong> Approximately R25,000 per month.</li>
                            <li><strong>Electrical Inspector:</strong> Approximately R30,000 per month.</li>
                            <li><strong>Master Installation Electrician:</strong> Approximately R35,000 per month.</li>
                        </ul>
                        <p>Salaries can vary based on factors such as experience, location, and specific job requirements. Continuous professional development and obtaining additional certifications can further enhance earning potential in this field.</p>

                        
                    </div>
                </div>
            </div>
            
        </div>
        <!-- Main Content End -->
        `;
    }
}
