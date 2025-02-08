


// Import images for the slideshow
import heroimage1 from './solary.png';

export function renderSolarTrainingProgramPage() {
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
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Solar Training Program</h4>
                        <p>Comprehensive Training in Solar Energy Systems</p>
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
                        <h2 class="mb-4">About the Solar Training Program</h2>
                        <p>
                            Highbury College offers an intensive 6-day Solar Training Program designed to equip participants with the knowledge and practical skills necessary for the installation, maintenance, and inspection of solar energy systems. This program aligns with South Africa's growing emphasis on renewable energy and prepares individuals for roles in the expanding solar industry.
                        </p>

                        <h4>Course Content</h4>
                        <p>The program covers the following key areas:</p>
                        <ul>
                            <li><strong>Introduction to Renewable Energy:</strong> Overview of renewable energy sources with a focus on solar energy and its significance in the South African context.</li>
                            <li><strong>Photovoltaic (PV) Systems:</strong> Understanding the components, design, and operation of PV systems, including modules, inverters, and mounting structures.</li>
                            <li><strong>System Design and Sizing:</strong> Principles of designing and sizing solar power systems to meet specific energy requirements.</li>
                            <li><strong>Installation Practices:</strong> Hands-on training in the installation of solar panels and associated equipment, adhering to industry standards and safety protocols.</li>
                            <li><strong>Maintenance and Troubleshooting:</strong> Techniques for maintaining optimal system performance and diagnosing common issues.</li>
                            <li><strong>Regulations and Compliance:</strong> Insight into relevant norms, standards, and regulations governing solar installations in South Africa.</li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 6 days of intensive training.</li>
                            <li>Combination of theoretical instruction and practical application.</li>
                            <li>Training aligned with the latest industry standards and practices.</li>
                            <li>Experienced instructors with extensive knowledge in renewable energy technologies.</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p>Applicants should meet the following criteria:</p>
                        <ul>
                            <li>Possession of a Grade 12 certificate with Mathematics and Physical Science.</li>
                            <li>Basic understanding of electrical principles is advantageous but not mandatory.</li>
                            <li>Commitment to completing the intensive 6-day program.</li>
                        </ul>

                        <h4>Enrollment Process</h4>
                        <p>Interested candidates should:</p>
                        <ul>
                            <li>Book an appointment with us through our email by clicking the email below.</li>
                            
                            <li>Email to: <a href="mailto:info@highburycollege.co.za?subject=Solar%20Training%20Program=Name%20%26%20Surname:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.%0A%0ABooking%20for%20Month:" 
                                onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@highburycollege.co.za&su=Solar%20Training%20Program&body=Name%20%26%20Surname:%0A%0ABooking%20for%20Month:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.', '_blank');">info@highburycollege.co.za</a></li>
                        </ul>

                        <h4>Class Schedule</h4>
                        <p>Classes are held from 08:00 to 16:00, with a lunch break from 12:00 to 13:00. Tea and coffee are provided. Please contact the office for specific dates.</p>

                        <h4>Essentials to Bring</h4>
                        <ul>
                            <li>Valid ID document.</li>
                            <li>Notebook and pen.</li>
                            <li>Personal protective equipment (PPE) for practical sessions (details will be provided upon enrollment).</li>
                        </ul>

                        <h4>Certification Process</h4>
                        <p>Upon successful completion of the program and assessments, participants will receive a certificate of competence, enhancing their qualifications for roles in the solar energy sector.</p>

                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Graduates of the Solar Training Program can pursue various roles in the renewable energy industry. Here are some potential positions along with their estimated average earnings:</p>
                        <ul>
                            <li><strong>Solar PV Installer:</strong> Approximately R15,000 – R25,000 per month.</li>
                            <li><strong>Solar Energy Technician:</strong> Approximately R20,000 – R30,000 per month.</li>
                            <li><strong>Renewable Energy Consultant:</strong> Approximately R25,000 – R40,000 per month.</li>
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
