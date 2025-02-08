


// Import images for the slideshow
import dataScienceImage1 from './pcstudent.jpg';
import dataScienceImage2 from './pcstudent.jpg';
import dataScienceImage3 from './pcstudent.jpg';
import heroimage1 from './13.png';

export function renderDataScienceSolutionsDeveloperPage() {
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
                                    <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Data Science Solutions Developer</h4>
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
                        <h2 class="mb-4">About the Data Science Solutions Developer Course</h2>
                        <p>
                            An increase in data in recent years has highlighted the importance of the processing and analyzing of data patterns. The Data Science Solutions Developer focuses on building and deploying data science, machine learning, and data analytics solutions. You will learn to program and develop object-oriented code in Python, and learn to use libraries for visualizing data, finding patterns in data, and the fundamental concepts of machine learning.
                        </p>

                        <h4>Job Opportunities</h4>
                        <ul>
                            <li>Data Analyst: R123 000 - R499 000</li>
                            <li>Software Engineer: R202 000 - R664 000</li>
                            <li>Data Scientist: R217 000 - R711 000</li>
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
                            <li>Highbury College Certificate: Data Science Solutions Developer</li>
                            <li>National Certificate: IT Systems Development, SAQA ID 48872, NQF Level 5</li>
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
