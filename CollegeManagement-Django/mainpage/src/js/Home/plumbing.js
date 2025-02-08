


// Import images for the slideshow
import plumImage1 from './slide1a.jpg';
import plumImage2 from './slide1a.jpg';
import plumImage3 from './slide1a.jpg';
import heroimage1 from './9.png';

export function renderplumbingPage() {
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
                                    <h1 class="display-3 text-white animated slideInDown">Plumbing</h1>
                                    <p>NATED N1-N3</p>
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
                        <h2 class="mb-4">About the Plumbing Course</h2>
                        <p>
                            The NATED N1-N3 Plumbing qualification is a qualification from Levels N1-N3 
                            focusing on the theory of plumbing. This qualification meets the academic requirements for you to write your trade test once you have acquired the required practical hours. This qualification consists of one compulsory part (N1-N3 theory) and two optional practical parts, 
                            beginners level (done between N1-N3) and advanced (can be done after N3)
                        </p>
                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 18 months</li>
                            <li>Credits: 120</li>
                            <li>Total Semesters: 3</li>
                            <li>Student Capacity: 15</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>N1 Entry:</strong> Grade 9 Certificate with Mathematics and Physical Science or age 23+ without formal qualifications.</p>
                        

                        <h4>Curriculum</h4>
                        <p>Compulsory N1-N3 theory subjects:</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Building Drawing</li>
                            <li>Building Science</li>
                            <li>Plumbing Theory</li>
                            <li>Building and Civil Technology</li>
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
