

// Import images for the slideshow
import heroimage1 from './usfenc.png';

export function renderCOCUnitStandardForFencingPage() {
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
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">COC Unit Standard for Fencing</h4>
                        <p>Electric Fence System Installer (EFSI) Certification</p>
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
                        <h2 class="mb-4">About the COC Unit Standard for Fencing Course</h2>
                        <p>
                            The legislation around the registration as an Electric Fence System Installer (EFSI) is contained in Regulations 12-15 of the Electrical Machinery Regulations. Electric fence installations may only be performed, and a Certificate of Compliance (COC) issued, by persons registered as EFSIs.
                        </p>
                        <p>
                            This Recognition of Prior Learning (RPL) course addresses the gap between Installation Electricians (IE) and Fence Installers. It is designed for individuals who have been in the electric fence installation field for over two years. The aim is to qualify Electric Fence Installers with the Energy and Water Sector Education and Training Authority (EWSETA) and assist them in registering with the Department of Labour.
                        </p>

                        <h4>Admission Requirements</h4>
                        <ul>
                            <li>Must be over 16 years of age.</li>
                            <li>Qualified Electrician who has passed the Trade Test.</li>
                            <li>Possession of a Red Seal certificate in the trade of Electrician.</li>
                        </ul>

                        <h4>Course Content</h4>
                        <ul>
                            <li>Install electric fencing.</li>
                            <li>Demonstrate an understanding of electric fencing.</li>
                            <li>Apply cabling methods.</li>
                            <li>Use elementary electronics as applied to electronic systems.</li>
                            <li>Configure an installation.</li>
                            <li>Determine installation requirements.</li>
                            <li>Explain the use of installed systems.</li>
                        </ul>

                        <h4>Included in This Course</h4>
                        <ul>
                            <li>Comprehensive training on electric fence installations.</li>
                            <li>Copy of the Electrical Machinery Regulations 2011.</li>
                            <li>Pre-assessment to determine existing knowledge.</li>
                            <li>Training on all required unit standards listed above.</li>
                        </ul>

                        <h4>Course Structure</h4>
                        <p>The 3-day course consists of:</p>
                        <ul>
                            <li><strong>Day 1 & Day 2:</strong> Continuous training sessions.</li>
                            <li><strong>Day 3:</strong> Assessment and compilation of Portfolio of Evidence (POE) on a later date.</li>
                        </ul>
                        <p><strong>Time:</strong> 08:00 – 16:00 daily</p>
                        <h4>Enrollment Process</h4>
                        <p>Interested candidates should:</p>
                        <ul>
                            <li>Book an appointment with us through our email by clicking the email below.</li>
                            
                            <li>Email to: <a href="mailto:info@highburycollege.co.za?subject=Unit%20Standard%20Fencing&body=Name%20%26%20Surname:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.%0A%0ABooking%20for%20Month:" 
                                onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@highburycollege.co.za&su=Unit%20Standard%20Fencing&body=Name%20%26%20Surname:%0A%0ABooking%20for%20Month:%0A%0AAttach%20necessary%20documents%20into%20mail%20and%20send.', '_blank');">info@highburycollege.co.za</a></li>
                        </ul>
                        <h4>Essentials to Bring</h4>
                        <ul>
                            <li>Valid ID document.</li>
                            <li>Mobile phone.</li>
                            <li>Notebook and pen.</li>
                        </ul>

                        <h4>Certification Process</h4>
                        <p>
                            Upon being found competent, an application will be made on your behalf for the Statement of Competency from EWSETA. Once received, you can apply to the Department of Labour to be registered as an EFSI, with guidance provided throughout the process.
                        </p>

                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Upon successful completion of the COC Unit Standard for Fencing Course and obtaining certification, graduates can pursue various career paths in the electric fencing industry. Here are some potential roles along with their estimated average earnings:</p>
                        <ul>
                            <li><strong>Electric Fence System Installer (EFSI):</strong> Approximately R20,000 per month.</li>
                            <li><strong>Electric Fence Compliance Inspector:</strong> Approximately R25,000 per month.</li>
                            <li><strong>Electric Fence Installation Trainer:</strong> Approximately R30,000 per month.</li>
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
