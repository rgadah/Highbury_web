


// Import images for the slideshow
import heroimage1 from './singley.png';

export function renderCOCUnitStandardSinglePhasePage() {
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
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">COC Unit Standard (Single Phase)</h4>
                        <p>Certificate of Compliance Training for Single Phase Wireman's License</p>
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
                        <h2 class="mb-4">About the COC Unit Standard (Single Phase) Course</h2>
                        <p>
                            This course is designed to provide comprehensive training for individuals aiming to obtain the Certificate of Compliance (COC) for Single Phase installations. The program covers essential aspects of electrical installations, ensuring participants are well-versed in the necessary regulations and practical applications.
                        </p>

                        <h4>Course Content</h4>
                        <p>The course is structured into several key sections:</p>
                        <ul>
                            <li><strong>Section 1:</strong> Occupational Health and Safety (OHS) Act and Regulations, General Concepts Regulation, SANS 10142-1-2020 Edition 3, and Completion of COC.</li>
                            <li><strong>Section 2:</strong> General Responsibilities, Basic Principles, Required Tests for COC, Correct Use of Instruments, Understanding Section 4 of the COC, and Interpreting Correct Values.</li>
                            <li><strong>Section 3:</strong> Department of Labour Occupational Health and Safety Act 1993, and Sample Certificate of Compliance Document.</li>
                            <li><strong>Section 4:</strong> Occupational Health and Safety Act 1993 Electrical Installation Regulations.</li>
                            <li><strong>Section 5:</strong> SAQA Unit Standards:
                                <ul>
                                    <li>Single Phase: 113898, 258966</li>
                                </ul>
                            </li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 2 days of assessment, followed by 3 weeks (200 hours) of homework, and a final 1-day assessment.</li>
                            <li>Class Size: Limited to a maximum of 8 learners per class to ensure personalized attention.</li>
                            <li>Interactive Learning: Emphasis on practical use of documentation and instruments, with interactive participative presentations.</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p>To enroll in the Single Phase course, applicants must:</p>
                        <ul>
                            <li>Possess a Grade 12 certificate.</li>
                            <li>Have at least 5 years of working experience in the electrical field.</li>
                        </ul>

                        <h4>Enrollment Process</h4>
                        <p>Interested candidates should:</p>
                        <ul>
                            <li>Book an appointment with us through our email by clicking the email below.</li>
                            
                            <li>Email to: <a href="mailto:info@highburycollege.co.za?subject=COC%20Standard%20Single-Phase&body=Name%20%26%20Surname:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.%0A%0ABooking%20for%20Month:" 
                                onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@highburycollege.co.za&su=COC%20Standard%20Single-Phase&body=Name%20%26%20Surname:%0A%0ABooking%20for%20Month:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.', '_blank');">info@highburycollege.co.za</a></li>
                        </ul>

                        

                        <h4>Class Schedule</h4>
                        <p>Classes are held from 08:00 to 16:00, with a lunch break from 12:00 to 13:00. Tea and coffee are provided. There is at least one weekend class per month. Please contact the office for specific dates.</p>

                        <h4>Essentials to Bring</h4>
                        <ul>
                            <li>Valid ID document.</li>
                            <li>Notebook and pen.</li>
                        </ul>

                        <h4>Certification Process</h4>
                        <p>Upon successful completion of the course and assessments, participants will be equipped to apply for the Wireman's License for Single Phase installations.</p>

                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Upon obtaining the Single Phase Wireman's License, individuals can pursue various roles in the electrical industry. Here are some potential positions along with their estimated average earnings:</p>
                        <ul>
                            <li><strong>Electrical Tester for Single Phase:</strong> Approximately R15,000 per month.</li>
                            <li><strong>Residential Electrician:</strong> Approximately R18,000 per month.</li>
                            <li><strong>Maintenance Electrician:</strong> Approximately R20,000 per month.</li>
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
