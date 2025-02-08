


// Import images for the slideshow
import fullStackWebSoftwareDevImage1 from './pcstudent.jpg';
import fullStackWebSoftwareDevImage2 from './pcstudent.jpg';
import fullStackWebSoftwareDevImage3 from './pcstudent.jpg';
import heroimage1 from './19.png';


export function renderFullStackWebSoftwareDevPage() {
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
                                    <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Full Stack Web and Software Developer </h4>
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
                        <h2 class="mb-4">About the Full Stack Web and Software Developer Course</h2>
                        <p>
                            A full-stack web and software developer is a programmer who builds a variety of web-based software solutions to solve business problems. The Full-Stack Developer’s scope of work includes the development of apps, websites, databases, and desktop solutions. Highbury College students following this track will learn to use a variety of tools and languages to develop both front-end and back-end (server) software components.
                        </p>
                        <p>
                            These languages include Java, HTML, CSS, JavaScript, jQuery, VueJs, NodeJs, SQL, and MongoDB. Java remains one of the most common, in-demand computer programming languages used today, used to develop cross-platform coding solutions that run on the web, desktop, and mobile devices. Building interactive web applications involves programming the browser application, the server-side functions, and communicating online with a database to store and retrieve data.
                        </p>

                        <h4>Job Opportunities</h4>
                        <ul>
                            <li>Full Stack Web Developer: R66 000 - R433 000</li>
                            <li>Senior Web Developer: R260 000 - R551 000</li>
                            <li>Front End Developer/Engineer: R119 000 - R489 000</li>
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
            </div>
            <a href="/apply" class="btn btn-primary mt-3">Apply</a>
        </div>
        <!-- Main Content End -->
        `;
    }
}
