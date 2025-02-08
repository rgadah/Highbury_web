import tradeImage from './COChead.png';
import engineering1 from './53.png';
import engineering2 from './57.png';
import engineering3 from './49.png';
import engineering4 from './41.png';
import engineering5 from './46.png';

import engineering7 from './31.png';
import engineering8 from './31.png';
import engineering9 from './37.png';


export function loadTradePage() {
    const main = document.querySelector('main');

    if (!main) {
        console.error('Main element not found');
        return;
    }

    main.innerHTML = `
    <!-- Header Start -->
    <div class="container-fluid bg-light" 
        style="background-image: url('${tradeImage}'); background-size: cover; background-position: center; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px; height: 80vh;">
        <style>
            @media (max-width: 767px) {
                .container-fluid {
                    padding-top: 80px;
                    padding-bottom: 50px;
                    background-size: cover;
                    background-position: center;
                }
                .display-3 {
                    font-size: 2.5rem;
                }
                .col-lg-10 {
                    padding-left: 15px;
                    padding-right: 15px;
                }
            }
        </style>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">Trade Programs</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->

    <!-- Introduction Section -->
    <div class="container my-5">
        <div class="row">
            <div class="col text-center">
                <h2 class="display-4">Empower Your Skills with Specialized Trade Training</h2>
                <p class="lead">Our trade programs are designed to equip you with the practical knowledge and certifications you need to excel in your industry. Explore our diverse range of courses and take the next step in your career.</p>
            </div>
        </div>
    </div>

    <!-- Courses Section -->
    <div class="container my-5">
        <h2 class="text-center" style="border-bottom: 2px solid #000; padding-top: 10px; padding-bottom: 10px; font-family: 'Poppins', sans-serif; color: #4CAF50; text-transform: uppercase; letter-spacing: 2px; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);">
            Available Training Programs
        </h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <!-- Trade Test Preparation -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering1}" class="card-img-top" alt="Trade Test Preparation" onclick="window.location.href='/tradetest';" style="cursor: pointer;" width="200px"  >
                    <div class="card-body">
                        <h5 class="card-title">Trade Test Preparation & Testing</h5>
                        <p class="card-text">Duration: 5 weeks</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            <!-- COC Unit Standard (Three Phase) -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering2}" class="card-img-top" alt="COC Unit Standard (Three Phase)" onclick="window.location.href='/threephase';" style="cursor: pointer;" width="200px" >
                    <div class="card-body">
                        <h5 class="card-title">COC Unit Standard (Three Phase)</h5>
                        <p class="card-text">Duration: 3 days</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            <!-- COC Unit Standard (Single Phase) -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering3}" class="card-img-top" alt="COC Unit Standard (Single Phase)" onclick="window.location.href='/singlephase';" style="cursor: pointer;" width="200px" >
                    <div class="card-body">
                        <h5 class="card-title">COC Unit Standard (Single Phase)</h5>
                        <p class="card-text">Duration: 3 days</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            <!-- Solar Training -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering4}" class="card-img-top" alt="Solar Training" onclick="window.location.href='/solar';" style="cursor: pointer;" width="200px" >
                    <div class="card-body">
                        <h5 class="card-title">Solar Training</h5>
                        <p class="card-text">Duration: 6 days</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            <!-- PLC Training Program 1 & 2 -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering5}" class="card-img-top" alt="PLC Training Program 1 & 2" onclick="window.location.href='/plc';" style="cursor: pointer;" width="200px" >
                    <div class="card-body">
                        <h5 class="card-title">PLC Training Program 1 & 2</h5>
                        <p class="card-text">Duration: 5 days</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            

            <!-- Basic Electric Fencing Training -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering7}" class="card-img-top" alt="Basic Electric Fencing Training" onclick="window.location.href='/fencing';" style="cursor: pointer;" width="200px" >
                    <div class="card-body">
                        <h5 class="card-title">Basic Electric Fencing Training</h5>
                        <p class="card-text">Duration: 1 day</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            <!-- COC Unit Standard for Fencing -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering8}" class="card-img-top" alt="COC Unit Standard for Fencing" onclick="window.location.href='/usfencing';" style="cursor: pointer;" width="200px" >
                    <div class="card-body">
                        <h5 class="card-title">COC Unit Standard for Fencing</h5>
                        <p class="card-text">Duration: 3 days</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            <!-- Installation Rules Paper 1 & 2 -->
            <div class="col">
                <div class="card h-100">
                    <img src="${engineering9}" class="card-img-top" alt="Installation Rules Paper 1" onclick="window.location.href='/p1&p2';" style="cursor: pointer;" width="200px" >
                    <div class="card-body">
                        <h5 class="card-title">Installation Rules Paper 1 & 2</h5>
                        <p class="card-text">Duration: 3 months</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><i class="material-icons">schedule</i> Full Time</p>
                        </div>
                        <a href="/contactus" class="apply-button">Enquire</a>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    <style>
        .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f8f9fa;
            padding: 15px;
        }
        .apply-button {
            background-color: #007BFF;
            color: white;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .apply-button:hover {
            background-color: #0056b3;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    </style>
    `;
}
