

// Import images for the slideshow

import heroimage1 from './5.png';


export function renderHeavycurrentPage() {
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
                                    <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Electrical Engineering </h4>
                                    <p>National Diploma: NATED N3-N6 </p>
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
                        <h2 class="mb-4">About the Electrical Engineering Heavy/Light Current  Course</h2>
                        <p>
                            The NATED N3-N6 Electrical Engineering Heavy/Light Current qualification covers levels N1-N6 and is designed to provide the theory of Electrical Engineering and an optional practical component. 
                            You can attain a National Certificate or Diploma once you have worked 24 months (2000 working hours) in your field of study.
                        </p>
                        <p>
                            This programme is ideal for students who wish to enhance their employability and enable students to experience and gain knowledge of Electrical Engineering. 
                            Engineers are the inventors and problem-solvers of our everyday world, they shape our society and they influence and develop the environment and technology of our future.
                        </p>
                        <p>
                            This qualification consists of  and two optional practical parts, beginners level and advanced (done between N3-N6).
                        </p>
                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 18 </li>
                            <li>Credits: 120 </li>
                            <li>Total Semesters: 4 </li>
                            <li>Student Capacity: 32</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        
                        <p><strong>N3 Entry:</strong> Grade 11 (Std 9) Certificate with a pass in Mathematics and Physical Science or N2</p>
                        <p><strong>N4 Entry:</strong> Matric/Grade 12 (with full mathematics and science 40%+ Passrate), or N3 Pass (with mathematics and science)</p>
                        
                        <h4>Curriculum</h4>
                        <p>Compulsory N3-N6 theory subjects:</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Engineering Science</li>
                            <li>Electrical Trade Theory</li>
                            <li>Electrotechnology</li>
                            <li>Industrial Electronics</li>
                            <li>Electro-Technics</li>
                            <li>Power Machines</li>
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
