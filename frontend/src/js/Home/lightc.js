
import heroimage1 from './4.png';

export function renderElectricalEngineeringArtisanTrainingPage() {
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
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Electrical Engineering with Artisan Training</h4>
                        <p>National Diploma: NATED N1-N6</p>
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
                        <h2 class="mb-4">About the Artisan Electrician Training Course</h2>
                        <p>
                            This comprehensive program prepares individuals for the Artisan Electrician Trade Test, focusing on practical skills development and theoretical knowledge essential for success in the field. It covers key areas of electrical installation, maintenance, and safety, aligning with industry standards and regulations.
                        </p>
                        <p>
                            The program combines hands-on practical training in a workshop environment with theoretical instruction to ensure a well-rounded learning experience. Students will gain proficiency in wiring, fault finding, electrical systems, and the use of tools and equipment.
                        </p>
                        <p>
                            Successful completion of this training program, combined with passing the required Trade Test, leads to certification as a qualified Artisan Electrician, opening doors to a rewarding career in the electrical industry.
                        </p>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 3 years</li>
                            <li>Credits: 240</li>
                            <li>Total Semesters: 6</li>
                            <li>Student Capacity: 73</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>N1 Entry:</strong> Grade 9 Certificate with Mathematics and Physical Science or age 23+ without formal qualifications.</p>
                        <p><strong>N3 Entry:</strong> Grade 11 (Std 9) Certificate with a pass in Mathematics and Physical Science or N2.</p>
                        <p><strong>N4 Entry:</strong> Matric/Grade 12 (with full mathematics and science 40%+ pass rate), or N3 Pass (with mathematics and science).</p>

                        <h4>Curriculum</h4>
                        <p>Compulsory N1-N6 theory subjects:</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Engineering Science</li>
                            <li>Electrical Trade Theory</li>
                            <li>Electrotechnology</li>
                            <li>Industrial Electronics</li>
                            <li>Electro-Technics</li>
                            <li>Power Machines</li>
                        </ul>

                        <h4>Career Opportunities and Estimated Earnings in South Africa</h4>
                        <p>Upon successful completion of the Artisan Electrician Training Course and obtaining certification, graduates can pursue various career paths in the electrical industry. Here are some potential roles along with their estimated average monthly earnings:</p>
                        <ul>
                            <li><strong>Qualified Electrician:</strong> Approximately R17,972 per month. <a href="https://za.indeed.com/career/electrician/salaries" target="_blank">[Source]</a></li>
                            <li><strong>Industrial Electrician:</strong> Approximately R29,500 per month. <a href="https://www.glassdoor.com/Salaries/south-africa-electrician-salary-SRCH_IL.0%2C12_IN211_KO13%2C24.htm" target="_blank">[Source]</a></li>
                            <li><strong>Electrical Technician:</strong> Approximately R25,000 per month. <a href="https://za.talent.com/salary?job=qualified+electrician" target="_blank">[Source]</a></li>
                            <li><strong>Maintenance Electrician:</strong> Approximately R20,000 per month. <a href="https://www.jobted.co.za/salary/electrician" target="_blank">[Source]</a></li>
                        </ul>
                        <p>Salaries can vary based on factors such as experience, location, and the specific demands of the role. Continuous professional development and gaining specialized certifications can further enhance earning potential in this field.</p>
                    </div>
                </div>
            </div>
            <a href="/apply" class="btn btn-primary mt-3">Apply</a>
        </div>
        <!-- Main Content End -->
        `;
    }
}
