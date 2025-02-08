


// Import images for the slideshow

import heroimage1 from './chemistry.png'




export function renderChemicalPage() {
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
                                    <h1 class="display-3 text-white animated slideInDown">Chemical Engineering </h1>
                                    <p>National Diploma: NATED N1-N6 </p>
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
                        <h2 class="mb-4">About the Chemical Engineering</h2>
                        <p>
                            Chemical Engineering N3 - N6 is an area of engineering that applies physical sciences (physics and chemistry), 
                            life sciences (microbiology and biochemistry), together with applied mathematics and economics to produce, 
                            transform, transport, and properly use chemicals, materials and energy. This qualification is designed to 
                            provide the theory of Chemical Engineering. 
                            You can attain a National Certificate or Diploma once you have worked 24 months.
                        </p>
                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 18 months</li>
                            <li>Credits: 120</li>
                            <li>Total Semesters: 4</li>
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
                            <li>Plant Operating Theory</li>
                            <li>Water and Waste Water Treatment Practice</li>
                            <li>Power Machines</li>
                            <li>Chemistry</li>
                            <li>Chemical Plant Operations</li>
                            <li>Chemical Technology</li>
                            
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


