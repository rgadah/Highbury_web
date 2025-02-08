

// Import images for the slideshow
import fullStackSoftwareImage1 from './pcstudent.jpg';
import fullStackSoftwareImage2 from './pcstudent.jpg';
import fullStackSoftwareImage3 from './pcstudent.jpg';
import heroimage1 from './20.png';


export function renderFullStackSoftwareDeveloperPage() {
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
                                    <h1 class="display-3 text-white animated slideInDown">Full Stack Software Developer </h1>
                                    <p>NC: IT Systems Developer NQF5</p>
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
                        <h2 class="mb-4">About the Full Stack Software Developer Course</h2>
                        <p>
                            A Full Stack Software Developer is a programmer who analyses user needs and develops solutions to solve business problems. Develop your programming abilities using Java as you learn Object-Oriented Programming, as well as the creation of Graphical User Interfaces using Java libraries. Java remains one of the most common, in-demand computer programming languages used today, utilized to develop cross-platform coding solutions that run on web, desktop, and mobile devices.
                        </p>

                        <h4>Job Opportunities</h4>
                        <ul>
                            <li>Full Stack Software Developer: R110 000 - R566 000</li>
                            <li>Software Developer: R143 000 - R551 000</li>
                            <li>Junior Software Developer: R118 000 - R331 000</li>
                        </ul>

                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 12 months</li>
                            <li>Credits: 131</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>National Senior Certificate (Grade 12):</strong> With Foundational Mathematics and English as your home/first language, OR</p>
                        <p><strong>No coding background:</strong> No coding background is required but would be beneficial.</p>

                        <h4>What You Get</h4>
                        <p>This qualification has been designed to provide the student with a national certificate built on a solid foundation consisting of industry-relevant programmer skills, together with the option to obtain an international validation certificate for maximum employability.</p>

                        <h4>National Qualification</h4>
                        <ul>
                            <li>Highbury College Certificate: Full Stack Software Developer</li>
                            <li>National Certificate: IT Systems Development, SAQA ID 48872, NQF Level 5</li>
                        </ul>
                    </div>

                    
                </div>
                <a href="/apply" class="btn btn-primary mt-3">Apply</a>
            </div>
        </div>
        <!-- Main Content End -->
        `;
    }
}
