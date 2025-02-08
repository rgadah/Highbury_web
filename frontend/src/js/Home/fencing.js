

// Import images for the slideshow
import heroimage1 from './bfenc.png';

export function renderBasicElectricFencingTrainingPage() {
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
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Basic Electric Fencing Training</h4>
                        <p>Electric Fence Installer Training</p>
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
                        <h2 class="mb-4">About the Basic Electric Fencing Training Course</h2>
                        <p>
                            Whether you are starting out as an installer needing to know the basics, or a seasoned veteran looking to become a certified installer and issue Certificates of Compliance (COC), we have the training course for you!
                        </p>
                        <p>
                            This comprehensive program prepares individuals for the Electric Fence Installer role, focusing on practical skills development and theoretical knowledge essential for success in the field. It covers key areas of electric fence installation, maintenance, and safety, aligning with industry standards and regulations.
                        </p>
                        <p>
                            The program combines hands-on practical training in a workshop environment with theoretical instruction to ensure a well-rounded learning experience. Students will gain proficiency in installing both wall-top and free-standing electric fences, planning installations, choosing the correct products, and calculating costs. The course also introduces security energizers and covers topics such as multi-zone systems, networkable energizers, and their programming.
                        </p>
                        <p>
                            Successful completion of this training program, combined with passing the required assessments, leads to certification as a qualified Electric Fence Installer, enabling you to issue Certificates of Compliance (COC) and opening doors to a rewarding career in the electric fencing industry.
                        </p>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 1 day</li>
                            <li>Comprehensive coverage of both theoretical and practical aspects of electric fencing</li>
                            <li>Hands-on experience with installation and maintenance</li>
                            <li>Introduction to security energizers and advanced systems</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>Prerequisites:</strong> No formal qualifications are required. This course is suitable for beginners as well as experienced individuals looking to become certified installers.</p>

                        <h4>Curriculum</h4>
                        <p>The course covers the following topics:</p>
                        <ul>
                            <li>Introduction to Electric Fencing</li>
                            <li>Agricultural Electric Fencing</li>
                            <li>Wall-Top Electric Fencing</li>
                            <li>Free-Standing Electric Fencing</li>
                            <li>Game Electric Fencing (if required)</li>
                            <li>Current Laws and Regulations</li>
                            <li>Solar Powered Electric Fencing</li>
                            <li>Hands-on JVA Energizer and Fence Wiring</li>
                        </ul>

                        
                        <h4>Enrollment Process</h4>
                        <p>Interested candidates should:</p>
                        <ul>
                            <li>Book an appointment with us through our email by clicking the email below.</li>
                            
                            <li>Email to: <a href="mailto:info@highburycollege.co.za?subject=Basic%20Electric%20Fencing&body=Name%20%26%20Surname:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.%0A%0ABooking%20for%20Month:" 
                                onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@highburycollege.co.za&su=Basic%20Electric%20Fencing&body=Name%20%26%20Surname:%0A%0ABooking%20for%20Month:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.', '_blank');">info@highburycollege.co.za</a></li>
                        </ul>
                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Upon successful completion of the Basic Electric Fencing Training Course and obtaining certification, graduates can pursue various career paths in the electric fencing and broader security installation industry. Here are some potential roles along with their estimated average earnings:</p>
                        <ul>
                            <li><strong>Electric Fence Installer:</strong> Approximately R15,000 per month.</li>
                            <li><strong>Security Systems Technician:</strong> Approximately R20,000 per month. </li>
                            <li><strong>Maintenance Technician:</strong> Approximately R22,000 per month. </li>
                        </ul>
                        <p>Salaries can vary based on factors such as experience, location, and the specific demands of the role. Continuous professional development and gaining specialized certifications can further enhance earning potential in this field.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- Main Content End -->
        `;
    }
}
