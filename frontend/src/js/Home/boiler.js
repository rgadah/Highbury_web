// Import images for the slideshow

import heroimage1 from './8.png';


export function renderBoilermakingPage() {
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
                                    <h4 class="display-3 text-white animated slideInDown">Boilermaker</h4>
                                    <p>NATED N1-N3 </p>
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
                        <h2 class="mb-4">About the Boilermaking Course</h2>
                        <p>
                            This NATED N1-N3 Boilermaker qualification is a pathway to becoming a skilled craftsman who works on 
                            steel fabrications, including boilers, bridges, and mining equipment. The program equips you to meet 
                            academic requirements for a trade test after acquiring the required practical hours.
                        </p>
                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 18 months</li>
                            <li>Credits: 120</li>
                            <li>Total Semesters: 3</li>
                            <li>Student Capacity: 35</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>N1 Entry:</strong> Grade 9 Certificate with Mathematics and Physical Science or age 23+ without formal qualifications.</p>
                        <p><strong>N3 Entry:</strong> Grade 11 Certificate with Mathematics and Physical Science or N2 qualification.</p>

                        <h4>Curriculum</h4>
                        <p>Compulsory N1-N3 theory subjects:</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Engineering Science</li>
                            <li>Plating & Structural Steelworkers Drawing</li>
                            <li>Metalworkers Trade Theory</li>
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
