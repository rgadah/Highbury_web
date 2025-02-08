// Import images for the slideshow
import CivilImage1 from './slide1a.jpg';
import CivilImage2 from './slide1a.jpg';
import CivilImage3 from './slide1a.jpg';
import heroimage1 from './civb.png';



export function renderCivilPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

        main.innerHTML = `
        <!-- Header Start -->
                            <div class="container-fluid bg-light" 
                                style="background-image: url('${heroimage1}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; height:80vh; ">
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
                                            <h1 class="display-3 text-white animated slideInDown">Civil Engineering</h1>
                                            <p>NATED N1-N6</p>
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
                        <h2 class="mb-4">About the Civil Engineering</h2>
                        <p>
                            The NATED N1-N6 Civil/Building Engineering qualification covers levels N1-N6 and is designed to provide the theory of Civil/Building Engineering and an optional practical component.
                            You can attain a National Certificate or Diploma once you have worked 24 months (2000 working hours) in your field of study. 
                            This qualification consist of one compulsory part (N1-N6 theory) and two optional practical parts, 
                            beginners level (done between N1-N3) and advanced (done between N4-N6). 
                        </p>
                        <h4>Course Highlights</h4>
                        <ul>
                            <li>Duration: 18 months</li>
                            <li>Credits: 120</li>
                            <li>Total Semesters: 3</li>
                            <li>Student Capacity: 27</li>
                        </ul>

                        <h4>Admission Requirements</h4>
                        <p><strong>N1 Entry:</strong> Grade 9 Certificate with Mathematics and Physical Science or age 23+ without formal qualifications.</p>
                        <p><strong>N3 Entry:</strong> Grade 11 (Std 9) Certificate with a pass in Mathematics and Physical Science or N2</p>
                        <p><strong>N4 Entry:</strong> Matric/Grade 12 (with full mathematics and science 40%+ Passrate), or N3 Pass (with mathematics and science)</p>

                        <h4>Curriculum</h4>
                        <p>Compulsory N1-N6 theory subjects:</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Building Drawing</li>
                            <li>Building Science</li>
                            <li>Building & Civil Technology</li>
                            <li>Building Administration</li>
                            <li>Quantity Surveying</li>
                            <li>Building & Structural Construction</li>
                            <li>Building & Structural Surveying</li>
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
