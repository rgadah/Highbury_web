


// Import images for the slideshow
import heroimage1 from './tradey.png';

export function renderTradeTestPreparationAndTestingPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

        main.innerHTML = `
        <!-- Header Start -->
                            <div class="container-fluid bg-light" 
                                style="background-image: url('${heroimage1}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px;height:80vh; ">
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
                                            <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Trade Test Preparation and Testing</h4>
                                            <p>Comprehensive Training for Aspiring Qualified Electricians</p>
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
                        <h2 class="mb-4">About the Trade Test Preparation & Testing Course</h2>
                        <p>
                            Highbury College offers an intensive Trade Test Preparation and Testing program designed for individuals aiming to become qualified electricians in South Africa. This program provides comprehensive training in inspection, testing, installation work, fault finding, motor and starter operations, and panel wiring, ensuring participants are well-prepared for the national trade test.
                        </p>

                        <h4>Course Content</h4>
                        <p>The course covers the following key areas:</p>

                        <h5>Inspection and Testing</h5>
                        <ul>
                            <li>Installation tests for single and three-phase systems</li>
                            <li>Single-phase and three-phase motor testing</li>
                        </ul>

                        <h5>Installation Work</h5>
                        <ul>
                            <li>Utilization of various materials including steel, PVC conduit, surflex, trunking, flexible conduit, and armoured cable</li>
                        </ul>

                        <h5>Fault Finding</h5>
                        <ul>
                            <li>Troubleshooting three-phase star/delta configurations</li>
                            <li>Three-phase sequence starting</li>
                            <li>Three-phase forward and reverse operations</li>
                            <li>Single-phase forward and reverse operations</li>
                        </ul>

                        <h5>Motor and Starter Operations</h5>
                        <ul>
                            <li>Auto star/delta starters</li>
                            <li>Two-speed motors</li>
                            <li>Autotransformers</li>
                        </ul>

                        <h5>Panel Wiring</h5>
                        <ul>
                            <li>Metering (energy meters for single-phase and three-phase systems)</li>
                            <li>Sequence starting</li>
                            <li>Load balancing</li>
                            <li>Single-phase forward and reverse operations</li>
                            <li>Three-phase forward and reverse operations</li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Comprehensive coverage of both theoretical knowledge and practical skills essential for the trade test</li>
                            <li>Hands-on training with industry-standard equipment and materials</li>
                            <li>Instruction by experienced professionals in the electrical field</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p>Applicants should meet the following criteria:</p>
                        <ul>
                            <li>Possession of a Grade 12 certificate with Mathematics and Physical Science</li>
                            <li>Minimum of 3 years relevant work experience in the electrical field</li>
                            <li>Completion of relevant trade theory subjects (e.g., N2 Certificate) is advantageous</li>
                        </ul>

                        <h4>Enrollment Process</h4>
                        <p>Interested candidates should:</p>
                        <ul>
                            <li>Book an appointment with us through our email by clicking the email below.</li>
                            
                            <li>Email to: <a href="mailto:info@highburycollege.co.za?subject=Trade%20Test%20Training&body=Name%20%26%20Surname:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.%0A%0ABooking%20for%20Month:" 
                                onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@highburycollege.co.za&su=Trade%20Test%20Training&body=Name%20%26%20Surname:%0A%0ABooking%20for%20Month:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.', '_blank');">info@highburycollege.co.za</a></li>
                        </ul>

                        <h4>Class Schedule</h4>
                        <p>Classes are held from 08:00 to 16:00, with a lunch break from 12:00 to 13:00. Tea and coffee are provided. Please contact the office for specific dates.</p>

                        <h4>Essentials to Bring</h4>
                        <ul>
                            <li>Valid ID document</li>
                            <li>Notebook and pen</li>
                            <li>Personal protective equipment (PPE) for practical sessions (details will be provided upon enrollment)</li>
                        </ul>

                        <h4>Certification Process</h4>
                        <p>Upon successful completion of the program and passing the trade test, participants will receive a nationally recognized qualification, enabling them to work as qualified electricians in South Africa.</p>

                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Graduates of the Trade Test Preparation and Testing program can pursue various roles in the electrical industry. Here are some potential positions along with their estimated average earnings:</p>
                        <ul>
                            <li><strong>Qualified Electrician:</strong> Approximately R20,000 – R30,000 per month</li>
                            <li><strong>Electrical Technician:</strong> Approximately R25,000 – R35,000 per month</li>
                            <li><strong>Electrical Supervisor:</strong> Approximately R30,000 – R45,000 per month</li>
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

