


// Import images for the slideshow

import heroimage1 from './mechblack.png';


export function rendermechengPage() {
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
                                    <h1 class="display-3 text-white animated slideInDown">Mechanical Engineering</h1>
                                    <p>National Diploma: NATED N4-N6 </p>
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
                        <h2 class="mb-4">About the Mechanical Engineering Course</h2>
                        <p>
                            This programme NATED N4-N6 Mechanical Engineering qualification 
                            covers levels N4-N6 and is designed to provide the theory of Mechanical Engineering and 
                            an optional practical component. You can attain a National Certificate or Diploma once you have worked 
                            24 months (2000 working hours) 
                            in your field of study. 
                        </p>
                        <p>
                        This programme is ideal for students who wish to enhance their employability and enable 
                        students to experience and gain knowledge of Mechanical Engineering. 
                        Engineers are the inventors and problem-solvers of our everyday world, 
                        they shape our society and they influence and 
                        develop the environment and technology of our future.
                        </p>
                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 18 months</li>
                            <li>Credits: 120</li>
                            <li>Total Semesters: 3</li>
                            <li>Student Capacity: 32</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        
                        <p><strong>N4 Entry:</strong> Matric/Grade 12 (with full mathematics and science 40%+ Pass rate), or N3 Pass (with mathematics and science)</p>

                        <h4>Curriculum</h4>
                        <p>Compulsory N4-N6 theory subjects:</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Engineering Science</li>
                            <li>Mechanotechnics</li>
                            <li>Fluid Mechanics</li>
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
