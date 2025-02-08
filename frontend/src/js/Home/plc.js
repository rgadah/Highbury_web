

// Import images for the slideshow
import heroimage1 from './plcy.png';

export function renderPLCTrainingPage() {
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
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">PLC Training at Highbury College</h4>
                        <p>Comprehensive Programmable Logic Controller Courses</p>
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
                        <h2 class="mb-4">About the PLC Training Courses</h2>
                        <p>
                            Highbury College offers comprehensive training in Programmable Logic Controllers (PLCs), designed for students, technicians, and engineers aiming to enhance their knowledge and skills in PLC operations. Our courses provide a blend of theoretical knowledge and practical application to ensure participants are well-equipped for the demands of industrial automation.
                        </p>
                        <p>
                            A PLC is a specialized computer used to control various machinery and processes in industrial environments. Understanding the functions and capabilities of specific PLCs is essential for operators to ensure optimal performance and effective control.
                        </p>

                        <h4>Course Structure</h4>
                        <p>Our PLC training is divided into two comprehensive parts, each spanning 5 days:</p>

                        <h5>Part 1: PLC Fundamentals and Maintenance (5 Days)</h5>
                        <ul>
                            <li>Number systems and data types</li>
                            <li>Boolean algebra</li>
                            <li>Basic PLC hardware and configuration</li>
                            <li>Programming fundamentals</li>
                            <li>Applying Boolean logic in programs</li>
                            <li>Analog signals</li>
                            <li>Timers: on-delay, off-delay, and pulse</li>
                            <li>Edge detection</li>
                            <li>Software installation</li>
                            <li>Practical hardware configuration</li>
                            <li>Program setup and expansion</li>
                            <li>Connecting to PLCs</li>
                            <li>Maintenance and troubleshooting considerations</li>
                        </ul>

                        <h5>Part 2: Advanced PLC Development (5 Days)</h5>
                        <ul>
                            <li>Hardware revision</li>
                            <li>Programming in function blocks and ladder logic</li>
                            <li>Sequential flow chart programming</li>
                            <li>Communication with HMI/SCADA systems</li>
                            <li>Practical sessions on developing and advancing programs</li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: Each part is 5 days</li>
                            <li>Comprehensive coverage of both theoretical and practical aspects of PLCs</li>
                            <li>Hands-on experience with real-world applications</li>
                            <li>Instruction by industry experts</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>Prerequisites:</strong> No formal qualifications are required. These courses are suitable for beginners as well as experienced individuals looking to enhance their PLC knowledge and skills.</p>

                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Upon successful completion of the PLC Training Courses, graduates can pursue various career paths in the automation and control systems industry. Here are some potential roles along with their estimated average earnings:</p>
                        <ul>
                            <li><strong>PLC Programmer:</strong> Approximately R297,500 per year. <a href="https://coursetakers.com/south-africa/professional/engineering/plc-scada-training" target="_blank">[Source]</a></li>
                            <li><strong>Automation Engineer:</strong> Approximately R350,000 per year.</li>
                            <li><strong>Control Systems Technician:</strong> Approximately R320,000 per year.</li>
                        </ul>
                        <p>Salaries can vary based on factors such as experience, location, and the specific demands of the role. Continuous professional development and gaining specialized certifications can further enhance earning potential in this field.</p>

                        <h4>Enrollment Process</h4>
                        <p>Interested candidates should:</p>
                        <ul>
                            <li>Book an appointment with us through our email by clicking the email below.</li>
                            
                            <li>Email to: <a href="mailto:info@highburycollege.co.za?subject=PLC%20Training%20Program=Name%20%26%20Surname:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.%0A%0ABooking%20for%20Month:" 
                                onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@highburycollege.co.za&su=PLC%20Training%20Program&body=Name%20%26%20Surname:%0A%0ABooking%20for%20Month:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.', '_blank');">info@highburycollege.co.za</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- Main Content End -->
        `;
    }
}
