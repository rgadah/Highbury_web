
import image6 from './50.png';
import image7 from './51.png';
import image8 from './31.png';
import image9 from './54.png';
import image10 from './abou.jpg';
import image11 from './122.png';
import image12 from './322.png';
import image13 from './56.png';
import image14 from './60.png';
import image15 from './22.png';
import image16 from './522.png';
import image17 from './27.png';
import image18 from './24.png';
import image19 from './54.png';

import image21 from './testi1.png';
import image22 from './testi2.png';
import heroimage from './heroy.png';

import image23 from './1a.png';
import image24 from './2a.png';
import image25 from './3a.png';
import image26 from './4a.png';
import image27 from './5a.png';
import image28 from './6a.png';
import image29 from './47.png';
import image30 from './40.png';
import image31 from './41.png';
import image32 from './36.png';

export function loadhomeContent() {
    const mainElement = document.querySelector('main');

    if (mainElement) {
        // Clear existing content
        mainElement.innerHTML = '';

    

// Append the updated homepage content
mainElement.innerHTML += `
        <!-- Header Start -->
            <div class="container-fluid bg-light" id="cont1" justify-content-center
                style="background-image: url('${heroimage}'); 
                    background-size: cover; 
                    background-position: center center; 
                    background-repeat: no-repeat; 
                    padding-top: 130px; 
                    padding-bottom: 70px; 
                    margin-bottom: 70px; 
                    height: 100vh; 
                    ">

                
                <style>
                    
                    

                    #cont1 {
                        position: relative; /* Enables positioning of pseudo-element */
                        z-index: 0; /* Keeps the content on top of the overlay */
                    }

                    /* Adjustments for smaller screens */
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
                </style>

                <div class="container py-1" >
                    <div class="row justify-content-center align-items-center" id="row1">
                        
                        <div class="col-auto form-col">
                            <div class="form-wrapper" >
                                <div class="callback-form-container">
                                    <h3>Request a Callback</h3>


                                    <form id="callback-form"  >
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Name:</label>
                                            <input type="text" class="form-control" id="name" name="name" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="phone" class="form-label">Phone Number:</label>
                                            <input type="tel" class="form-control" id="phone" name="phone" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email:</label>
                                            <input type="email" class="form-control" id="email" name="email">
                                        </div>
                                        <button id="sub1" type="submit" class="btn btn-primary">Submit</button>
                                        </form>


                                </div>
                            </div>
                        </div>
                    </div>

                    <style>
                    #row1 {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        position: relative; 
                        padding-top: 30vh;
                    }

                    .image-col {
                        
                        position: absolute; /* Position the image */
                        left: 50%; /* Center horizontally */
                        transform: translateX(-50%); /* Adjust for the image's width */
                        z-index: 2;
                    }

                    .form-col {
                        
                        position: absolute;
                        right: 0; /* Position the form at the right edge */
                        z-index: 2;
                    }
                    .form-wrapper{
                        display: flex;
                        justify-content: flex-end;
                    }

                    .callback-form-container {
                        padding: 20px;
                        background-color: transparent;
                        border: none;
                    }

                    .callback-form-container h3 {
                        color: white;
                    }

                    .form-label {
                        font-weight: bold;
                        color: white;
                    }

                    .form-control {
                        display: block;
                        width: 100%;
                        padding: .375rem .75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #212529;
                        background-color: rgba(255, 255, 255, 0.7);
                        border: 1px solid rgba(206, 212, 218, 0.39);
                        appearance: none;
                        border-radius: .25rem;
                        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                    }

                    .form-control:focus {
                        background-color: rgba(255, 255, 255, 0.9);
                        border-color: rgba(13, 110, 253, 0.5);
                        outline: 0;
                        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
                    }

                    .btn {
                        display: inline-block;
                        padding: .375rem .75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #fff;
                        text-align: center;
                        text-decoration: none;
                        vertical-align: middle;
                        cursor: pointer;
                        user-select: none;
                        background-color: rgba(13, 110, 253, 0.7);
                        border: 1px solid rgba(13, 110, 253, 0.7);
                        border-radius: .25rem;
                        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                    }
                    .mb-3{
                        margin-bottom: 1rem;
                    }
                    </style>
                </div>
                <div>
                </div>

                </div>
            </div>

            <!-- Header End -->

            
        
        

        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-2 text-center">
                    <div class="col-12 wow fadeInUp" data-wow-delay="0.3s">
                        <h1 style="color: #fb873f;">Welcome to Highbury College</h1>
                        <p class="mb-5">Welcome to Highbury, your ultimate gateway to excellence 
                            and innovation in education! Situated in the heart of Pretoria Central, 
                            we proudly offer a diverse range of specialized programs across engineering, 
                            science, technology, and craftsmanship. Whether you're passionate about building a 
                            career in engineering, mastering modern IT solutions, exploring the mechanics of motor 
                            vehicles, or excelling in software development, Highbury is here to empower your 
                            ambitions and shape your future. Join us to unlock your potential and embrace a world 
                            of opportunities!
                        </p>
                    </div>
                </div>
                <div class="heading-container">
                    <h4 class="sliding-heading">Our Courses</h4>
                </div>
                <div id="container1" class="container row g-4">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <!-- Service Item 1: Engineering Programs -->
                        <div class="col">
                            <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image6}" class="card-img-top" alt="Engineering Studies" width="200px" onclick="showContainer(2)" >
                            <div class="card-body text-center">
                                <h5 class="card-title">Engineering Programs</h5>
                                <p class="card-text">Courses in Electrical, Mechanical, Civil, and Chemical Engineering.</p>
                                <button class="btn btn-primary " style="margin-top: 42px;" onclick="showContainer(2)">Explore Engineering</button>
                            </div>
                            </div>
                        </div>

                        <!-- Service Item 2: IT Solutions -->
                        <div class="col">
                            <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image7}" class="card-img-top" alt="Hands-on Training" width="200px" onclick="showContainer(3)" >
                            <div class="card-body text-center">
                                <h5 class="card-title">IT Solutions</h5>
                                <p class="card-text">Discover our IT solutions and earn occupational certificates to advance your skills!</p>
                                <button class="btn btn-primary" style="margin-top: 20px;" onclick="showContainer(3)">Explore IT</button>
                            </div>
                            </div>
                        </div>

                        <!-- Service Item 3: Practicals & Training -->
                        <div class="col">
                            <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image8}" class="card-img-top" alt="Hands-on Training" width="200px"  onclick="showContainer(5)" >
                            <div class="card-body text-center">
                                <h5 class="card-title">Practicals & Training</h5>
                                <p class="card-text">Industry-relevant skills with our engineering training, bridging theory and practicals.</p>
                                <button class="btn btn-primary" style="margin-top: 15px;" onclick="showContainer(5)">Explore Program</button>
                            </div>
                            </div>
                        </div>

                        <!-- Service Item 4: Matric Re-write -->
                        <div class="col">
                            <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image9}" class="card-img-top" alt="Matric Re-write" width="200px" onclick="showContainer(4)">
                            <div class="card-body text-center">
                                <h5 class="card-title">Matric Re-write</h5>
                                <p class="card-text">Helping individuals achieve their academic goals with a dedicated Matric Re-write program.</p>
                                <button class="btn btn-primary" style="margin-top: 15px;" onclick="showContainer(4)">Explore Program</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                <div id="container2" class="container row g-4" style="display: none;">
                    <!-- Back Button -->
                    <button class="btn btn-primary mt-3" onclick="showContainer(1)">Back</button>

                    <!-- Cards Row -->
                    <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                        <!-- Chemical Engineering -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image11}" class="card-img-top" alt="Chemical Engineering" width="200px" onclick="window.location.href='/chemical';" style="cursor: pointer;">
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;">
                            National N Diploma
                            </h6>
                            <h4><strong>Chemical Engineering</strong></h4>
                            <div class="mt-auto">
                                <a href="/chemical" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- Electrical Engineering -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image13}" class="card-img-top" alt="Electrical Engineering" width="200px" onclick="window.location.href='/heavycurrent';"style="cursor: pointer;" >
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;">
                            National N Diploma
                            </h6>
                            <h4><strong>Electrical Engineering</strong></h4>
                            <div class="mt-auto">
                                <a href="/heavycurrent" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- Civil Engineering -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image14}" class="card-img-top" alt="Civil Engineering" width="200px"  onclick="window.location.href='/civil';" style="cursor: pointer;" >
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;">
                            National N Diploma
                            </h6>
                            <h4><strong>Civil Engineering</strong></h4>
                            <div class="mt-auto">
                                <a href="/civil" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- Mechanical Engineering -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image12}" class="card-img-top" alt="Mechanical Engineering" width="200px" onclick="window.location.href='/mechanical';" style="cursor: pointer;"  >
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;">
                            National N Diploma
                            </h6>
                            
                            <h4><strong>Mechanical Engineering</strong></h4>
                            <div class="mt-auto">
                                <a href="/mechanical" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Explore Engineering Courses Button at the Bottom -->
                    <div class="d-flex justify-content-center mt-4">
                        <a 
                        href="/engfaculty" 
                        class="btn btn-outline-dark shadow-lg rounded-pill px-5 py-3" 
                        style="font-family: 'Roboto', sans-serif; font-size: 1.2rem;">
                        Explore Engineering Courses
                        </a>
                    </div>
                    </div>



                <div id="container3" class="container row g-4" style="display: none;">
                    <!-- Back Button -->
                    <button class="btn btn-primary mt-3" onclick="showContainer(1)">Back</button>

                    <!-- Cards Row -->
                    <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                        <!-- Cybersecurity Specialization -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image15}" class="card-img-top" alt="Cybersecurity Specialization" onclick="window.location.href='/cyber';" style="cursor: pointer;"  >
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;">
                            Occupational Certificate
                            </h6>
                            <h4><strong>Cyber Security</strong></h4>
                            <div class="mt-auto">
                                <a href="/cyber" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- Data Science Solutions Developer -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image16}" class="card-img-top" alt="Data Science Solutions Developer" onclick="window.location.href='/datasc';" style="cursor: pointer;"  >
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;">
                            Occupational Certificate
                            </h6>
                            <h4><strong>Data Science</strong></h4>
                            <div class="mt-auto">
                                <a href="/datasc" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- Full Stack Web and Software Developer -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image17}" class="card-img-top" alt="Full Stack Web and Software Developer" onclick="window.location.href='/fullstack';"  style="cursor: pointer;" >
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;"> Occupational Certificate</h6>
                            <h4><strong>Full Stack Web and Software Developer</strong></h4>
                            <div class="mt-auto">
                                <a href="/fullstack" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- IT Technical Support -->
                        <div class="col">
                        <div class="card h-100 shadow d-flex flex-column">
                            <img src="${image18}" class="card-img-top" alt="IT Technical Support" onclick="window.location.href='/ittech';" style="cursor: pointer;"  >
                            <div class="card-body text-center d-flex flex-column">
                            <h6 class="card-title fs-14" style="font-family: 'Lora', serif;">
                            Occupational Certificate
                            </h6>
                            <h4><strong>IT Technical Support </strong></h4>
                            <div class="mt-auto">
                                <a href="/ittech" class="btn btn-primary mt-3">Learn more</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Explore IT Courses Button at the Bottom -->
                    <div class="d-flex justify-content-center mt-4">
                        <a 
                        href="/ITfaculty" 
                        class="btn btn-outline-dark shadow-lg rounded-pill px-5 py-3" 
                        style="font-family: 'Roboto', sans-serif; font-size: 1.2rem;">
                        Explore IT Courses
                        </a>
                    </div>
                    </div>



                <div id="container4" class="container row g-4" style="display: none;">
                    <!-- Back Button -->
                    <button class="btn btn-primary mt-3" onclick="showContainer(1)">Back</button>

                    <!-- Cards Row -->
                    <div class="container mt-4">
                        <!-- Subjects Section -->
                        <div class="row justify-content-center">
                            <div class="col-12 text-center">
                                <h2 class="text-primary" style="font-family: 'Poppins', sans-serif; font-weight: bold;">Subjects</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-10">
                                <div class="row text" style="font-family: 'Poppins', sans-serif;">
                                    <div class="col-12 col-md-4">
                                        <p>&#9733; English Home Language</p>
                                        <p>&#9733; English 1st Additional Language</p>
                                        <p>&#9733; Afrikaans Huistaal</p>
                                        <p>&#9733; Afrikaans 1st Additional Language</p>
                                        <p>&#9733; Other 1st Additional Language</p>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <p>&#9733; Mathematics</p>
                                        <p>&#9733; Mathematics Literacy</p>
                                        
                                        <p>&#9733; Life Science </p>
                                        <p>&#9733; Physical Science </p>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        
                                        <p>&#9733; Accounting</p>
                                        <p>&#9733; Business Studies</p>
                                        <p>&#9733; Economics</p>
                                        <p>&#9733; Human and Social Studies</p>
                                        <p>&#9733; Geography</p>
                                        <p>&#9733; History</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Original Card Section -->
                        <div class="row justify-content-center g-4 mt-4"> 
                            <!-- Register to Rewrite in November -->
                            <div class="col-12 col-md-5 d-flex justify-content-center">
                                <div class="card h-100 shadow d-flex flex-column" style="width: 210px;">
                                    <img src="${image19}" class="card-img-top mx-auto mt-3" alt="November Matric Rewrite" width="200px" onclick="window.location.href='/matapp';" style="cursor: pointer;" >
                                    <div class="card-body text-center d-flex flex-column">
                                        <h5 class="card-title">Register to Rewrite in November</h5>
                                        <div class="mt-auto">
                                            <a href="/matapp" class="btn btn-primary mt-3">Register Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>
                        h2 {
                            margin-bottom: 20px;
                        }
                        p {
                            margin: 5px 0;
                            font-size: 16px;
                        }
                        .card {
                            border-radius: 15px;
                        }
                        .btn-primary {
                            background-color: #007bff;
                            border: none;
                            border-radius: 10px;
                        }
                        .btn-primary:hover {
                            background-color: #0056b3;
                        }
                    </style>


                    <!-- Register Button at the Bottom -->
                    <div class="d-flex justify-content-center mt-4">
                        <button 
                        class="btn btn-outline-dark shadow-lg rounded-pill px-5 py-3" 
                        style="font-family: 'Roboto', sans-serif; font-size: 1.2rem;">
                        Register with Us
                        </button>
                    </div>
                    </div>
                    <div id="container5" class="container row g-4" style="display: none;">
                        <!-- Back Button -->
                        <button class="btn btn-primary mt-3" onclick="showContainer(1)">Back</button>

                        <!-- Cards Row -->
                        <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                            <!-- Trade Test Preparation -->
                            <div class="col">
                                <div class="card h-100 shadow d-flex flex-column">
                                    <img src="${image29}" class="card-img-top" alt="Trade Test Preparation" width="200px" onclick="window.location.href='/tradetest';" style="cursor: pointer;"  >
                                    <div class="card-body text-center d-flex flex-column">
                                        <h5 class="card-title">Trade Test Preparation</h5>
                                        <p class="card-text">Prepare for your trade tests with expert-led courses and hands-on practice.</p>
                                        <a href="/contactus" class="btn btn-primary mt-auto">Enquire</a>
                                    </div>
                                </div>
                            </div>

                            <!-- CoC Unit Standard (Three Phase) -->
                            <div class="col">
                                <div class="card h-100 shadow d-flex flex-column">
                                    <img src="${image30}" class="card-img-top" alt="CoC Unit Standard (Three Phase)" width="200px" onclick="window.location.href='/threephase';" style="cursor: pointer;" >
                                    <div class="card-body text-center d-flex flex-column">
                                        <h5 class="card-title">CoC Unit Standard (Three Phase)</h5>
                                        <p class="card-text">Gain the skills for three-phase CoC certification in just three days.</p>
                                        <a href="/contactus" class="btn btn-primary mt-auto">Enquire</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Solar Training Program -->
                            <div class="col">
                                <div class="card h-100 shadow d-flex flex-column">
                                    <img src="${image31}" class="card-img-top" alt="Solar Training Program" width="200px" onclick="window.location.href='/solar';" style="cursor: pointer;" >
                                    <div class="card-body text-center d-flex flex-column">
                                        <h5 class="card-title">Solar Training Program</h5>
                                        <p class="card-text">Master solar system installation and maintenance in six days.</p>
                                        <a href="/contactus" class="btn btn-primary mt-auto">Enquire</a>
                                    </div>
                                </div>
                            </div>

                            <!-- PLC Training Program -->
                            <div class="col">
                                <div class="card h-100 shadow d-flex flex-column">
                                    <img src="${image32}" class="card-img-top" alt="PLC Training Program" width="200px" onclick="window.location.href='/plc';" style="cursor: pointer;" >
                                    <div class="card-body text-center d-flex flex-column">
                                        <h5 class="card-title">PLC Training Program</h5>
                                        <p class="card-text">Develop advanced skills in programmable logic controllers in five days.</p>
                                        <a href="/contactus" class="btn btn-primary mt-auto">Enquire</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Explore More Button -->
                        <div class="d-flex justify-content-center mt-4">
                            <a href="/trade-courses" class="btn btn-outline-dark shadow-lg rounded-pill px-5 py-3">
                                Explore All Trade & Testing Courses
                            </a>
                        </div>
                    </div>
            <style>
            .card {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .card:hover {
                        transform: translateY(-10px); /* Slightly lift the card */
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Add shadow to give depth */
                    }
            </style>

        
        

        <!-- About Us Section -->
        <div class="container-xxl py-5">
            <div class="container d-flex justify-content-center align-items-center">
                
                    <!-- Image Column -->
                    <div class="col-lg-6 wow fadeInUp text-center" data-wow-delay="0.1s">
                        <div class="position-relative" style="display: inline-block;">
                            <img class="img-fluid" src="${image10}" alt="Campus Image" style="object-fit: cover; min-height: 400px;" onclick="window.location.href='/about';" style="cursor: pointer;" >
                        </div>
                    </div>
                    <!-- Text Column -->
                    <div class="col-lg-6 wow fadeInUp text-start" data-wow-delay="0.3s" style="margin-left: 5px;">
                        <div>
                            <h6 class="section-title bg-light text-start pe-3"><strong>About Us</strong></h6>
                            <h1 class="mb-4" style="color: #fb873f;">Highbury College</h1>
                            <p class="mb-4">
                                At Highbury College, we pride ourselves on being a hub of excellence and innovation in education. 
                                Located in the vibrant heart of Pretoria Central, we offer a dynamic range of specialized programs designed 
                                to empower students with the knowledge and skills to thrive in diverse industries. From engineering and 
                                construction to cutting-edge IT and software development, we provide pathways to success tailored for every ambition.
                                <a href="/about" style="color: blue; text-decoration: underline;">Read More</a>
                            </p>
                        </div>
                    
                </div>
            </div>
        </div>

        <!-- Testimonials Section -->
        <div class="container-xxl py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5" style="color: #002366; text-decoration: underline;">What Our Students Say</h2>
                <div id="xCarousel1" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <!-- Testimonial 1 -->
                        <div class="carousel-item active">
                            <div class="row g-4 align-items-center">
                                <div class="col-lg-4">
                                    <img src="${image22}" alt="Student Testimonial 1" class="img-fluid rounded shadow">
                                </div>
                                <div class="col-lg-8">
                                    <div class="bg-white p-4 shadow rounded">
                                        <h4 style="color: #002366;">Thabiso</h4>
                                        <p>"Highbury College has transformed my career. The hands-on training facilities and dedicated staff gave me the skills I needed to succeed in the engineering field. I highly recommend it!"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Testimonial 2 -->
                        <div class="carousel-item">
                            <div class="row g-4 align-items-center">
                                <div class="col-lg-4">
                                    <img src="${image21}" alt="Student Testimonial 2" class="img-fluid rounded shadow">
                                </div>
                                <div class="col-lg-8">
                                    <div class="bg-white p-4 shadow rounded">
                                        <h4 style="color: #002366;">Refentse</h4>
                                        <p>"The Matric Re-write program at Highbury College helped me achieve my goals. The supportive environment and expert instructors made all the difference. Thank you, Highbury College!"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Carousel controls -->
                    <button class="carousel-control-prev xCarousel1-prev" type="button" data-bs-target="#xCarousel1" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next xCarousel1-next" type="button" data-bs-target="#xCarousel1" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>





        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img src="${image23}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image24}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image25}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image26}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image27}" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src="${image28}" height="100" width="250" alt="" />
                </div>
            </div>
        </div>








        <!-- Footer Section -->
        <footer class="container-fluid footer py-5" style="background-color: #002366; color: white;">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-3">Quick Links</h4>
                        <p><a class="text-light" href="/about">About Us</a></p>
                        <p><a class="text-light" href="/contactus">Contact Us</a></p>
                        
                        <p><a class="text-light" href="/terms">Terms & Conditions</a></p>
                        
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-3">Contact</h4>
                        <p style="margin-bottom: 0;">1st Floor, De Villiers Building,</p>
                        <p style="margin-bottom: 0;">27 Bureau Ln, Pretoria Central,</p>
                        <p style="margin-bottom: 1;">Pretoria, 0002</p>
                        <p style="margin-bottom: 0;">012 023 1932</p>
                        <p style="margin-bottom: 1;">info@highburycollege.co.za</p>
                        <!-- Social Media Icons -->
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn btn-outline-light btn-social mx-1" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="btn btn-outline-light btn-social mx-1" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="btn btn-outline-light btn-social mx-1" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-3">Newsletter</h4>
                        <form id="newsletterForm">
                            <input class="form-control w-100 py-3" name="email" type="email" placeholder="email" required>
                            <button type="submit" id="sub" class="btn btn-primary mt-3 mb-4">Subscribe</button>
                        </form>
                        <div id="formMessage" class="mt-3"></div>
                        
                        
                    </div>
                </div>
            </div>
        </footer>
        <div
            class="whatsapp-float"
            onclick="window.open('https://wa.me/+27782968095', '_blank')"
            style="cursor: pointer;"
        >
            <i class="fab fa-whatsapp"></i>
        </div>


                
        <!-- Footer End -->

        
        
    `;
    


    const contactform = document.querySelector("#callback-form");
        if (contactform) {
            contactform.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitButton = document.querySelector("#sub1");
                if (submitButton) {
                    submitButton.value = "Submitting...";
                }
                const data = new FormData(contactform);
                fetch('https://script.google.com/macros/s/AKfycbwGnM64LqP6hrGd0otVPBZ3u7ymnZgPTPuEyiO0zUnNTAOYc1RbEjwaHLIdTL4F7VAj/exec', {
                    method: "POST",
                    body: data
                })
                .then(res => res.json()) // Parse JSON response
                .then(data => {
                    if (data.status === "success") {
                        alert(data.message); // Show success message
                        contactform.reset(); // Reset the form
                        if (submitButton) {
                            submitButton.value = "Submit"; // Reset button text
                        }
                    } else {
                        alert(data.message); // Show error message
                        if (submitButton) {
                            submitButton.value = "Submit"; // Reset button text
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("There was an error. Please try again later.");
                });
            });
        } else {
            console.error("Contact form not found.");
        };
    

    const form = document.querySelector("#newsletterForm");
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitButton = document.querySelector("#sub");
                if (submitButton) {
                    submitButton.value = "Submitting...";
                }
                const data = new FormData(form);
                fetch('https://script.google.com/macros/s/AKfycbwGnM64LqP6hrGd0otVPBZ3u7ymnZgPTPuEyiO0zUnNTAOYc1RbEjwaHLIdTL4F7VAj/exec', {
                    method: "POST",
                    body: data
                })
                .then(res => res.json()) // Parse JSON response
                .then(data => {
                    if (data.status === "success") {
                        alert(data.message); // Show success message
                        form.reset(); // Reset the form
                        if (submitButton) {
                            submitButton.value = "Subscribe"; // Reset button text
                        }
                    } else {
                        alert(data.message); // Show error message
                        if (submitButton) {
                            submitButton.value = "Subscribe"; // Reset button text
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("There was an error. Please try again later.");
                });
            });
        } else {
            console.error("Newsletter form not found.");
        };
    

    }
};




export function showContainer(containerId) {
    // Hide all containers
    document.querySelectorAll('[id^="container"]').forEach(container => {
        container.style.display = 'none';
    });
    // Show the selected container
    document.getElementById(`container${containerId}`).style.display = 'block';
}

 // Define the showContainer function globally
/* window.showContainer = (containerId) => {
    // Hide all containers
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the selected container
    const selectedContainer = document.getElementById(`container${containerId}`);
    selectedContainer.style.display = 'block';
};

// Define the backToMain function globally
window.backToMain = () => {
    // Hide all containers
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the main container
    const mainContainer = document.getElementById('container1');
    mainContainer.style.display = 'block';
};  */




function updateCourses(category) {
    const courseData = {
        engineering: [
            { title: "Electrical Engineering", description: "Diploma in Electrical Systems.", link: "/loadengcourses" },
            { title: "Mechanical Engineering", description: "Certificate in Mechanical Design.", link: "/loadmechcourses" },
            { title: "Civil Engineering", description: "Diploma in Civil Structures.", link: "/loadcivilcourses" }
        ],
        it: [
            { title: "Web Development", description: "Learn full-stack development.", link: "/loadwebcourses" },
            { title: "Cybersecurity", description: "Master cybersecurity essentials.", link: "/loadcybercourses" },
            { title: "Data Science", description: "Data analysis and AI courses.", link: "/loaddatascience" }
        ],
        practicals: [
            { title: "Industry Training", description: "Hands-on engineering training.", link: "/loadpracticalcourses" },
            { title: "Technical Workshops", description: "Real-world technical skills.", link: "/loadworkshopcourses" },
            { title: "Internship Programs", description: "Gain real-world experience.", link: "/loadinterncourses" }
        ],
        matric: [
            { title: "Mathematics", description: "Matric re-write for Math.", link: "/loadmathcourses" },
            { title: "Physical Science", description: "Improve your Science marks.", link: "/loadsciencecourses" },
            { title: "Life Sciences", description: "Achieve excellence in Biology.", link: "/loadlifesciencecourses" }
        ]
    };

    const selectedCourses = courseData[category];
    const courseContainer = document.getElementById("courseContainer");

    courseContainer.innerHTML = selectedCourses.map(course => `
        <div class="col-lg-3 col-sm-6">
            <div class="service-item text-center pt-3 shadow">
                <div class="p-4">
                    <h5 class="mb-3">${course.title}</h5>
                    <p>${course.description}</p>
                    <a href="${course.link}" class="btn btn-primary mt-3">Learn More</a>
                </div>
            </div>
        </div>
    `).join('');
};


/* export function initializeFormSubmission(formId) {
    var form = document.getElementById(formId);

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const apiEndpoint = form.getAttribute("aria-description");
            if (!apiEndpoint) {
                console.error("Form is missing the 'aria-description' attribute with the API endpoint.");
                return;
            }

            fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: [Object.fromEntries(new FormData(form).entries())]
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`API responded with status ${response.status}`);
                    }
                    return response.json();
                })
                .then(() => {
                    window.open("/", "_blank");
                    console.log("Form submitted successfully.");
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                });
        });
    } else {
        console.error(`Form with ID "${formId}" not found.`);
    }
}
// Attach the function to the window object
window.initializeFormSubmission = initializeFormSubmission; */




