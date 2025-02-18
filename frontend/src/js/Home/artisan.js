


import heroimage1 from './artisan.png';

export function renderMetalArtisanTrainingPage() {
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
                        <h4 class="display-3 text-white animated slideInDown" style="font-size: 2.5rem !important;">Artisan Training Program</h4>
                        <p>Nated N1-N3 </p>
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
                        <h2 class="mb-4">About Our Artisan Training Program</h2>
                        <p>
                            Our artisan training programs are designed to equip students with specialized skills in metalworking, fabrication, and industrial mechanics. 
                            We provide hands-on experience combined with theoretical knowledge to ensure graduates meet the highest industry standards.
                        </p>

                        <h4>Specialized Metal Trades</h4>
                        <ul>
                            <li>Welder</li>
                            <li>Boilermaker</li>
                            <li>Fitter and Turner</li>
                            <li>Millwright</li>
                            <li>Sheet Metal Worker</li>
                            <li>Tool and Die Maker</li>
                        </ul>

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
                    
                        <h4>What You Will Gain</h4>
                        <ul>
                            <li>Expertise in welding, metal cutting, shaping, and fabrication.</li>
                            <li>Hands-on experience with industrial-grade machinery and tools.</li>
                            <li>A nationally recognized qualification, enhancing employability in the metalworking industry.</li>
                        </ul>

                        <h4>Career Opportunities</h4>
                        <p>Graduates can pursue careers in manufacturing, construction, mining, and industrial maintenance, ensuring a stable and rewarding future.</p>
                    </div>
                </div>
            </div>
            <a href="/apply" class="btn btn-primary mt-3">Apply Now</a>
        </div>
        <!-- Main Content End -->
        `;
    }
}
