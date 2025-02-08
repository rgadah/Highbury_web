// Import images for departments and courses
import boilerMakingImg from './coc.jpg';
import bricklayingImg from './coc.jpg';
import chemicalEngImg from './coc.jpg';
import civilEngImg from './coc.jpg';
import heavyCurrentImg from './coc.jpg';
import lightCurrentImg from './coc.jpg';
import fitterTurnerImg from './coc.jpg';
import mechEngImg from './coc.jpg';
import motorMechanicsImg from './coc.jpg';
import plumbingImg from './coc.jpg';

export function loadCoursesPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

        main.innerHTML = `
        <!-- Header Start -->
        <div class="container-fluid bg-primary py-5 mb-5 page-header">
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h1 class="display-3 text-white animated slideInDown">Courses</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><a class="text-white" href="/courses">Departments</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Courses</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->

        <!-- Departments Start -->
        <div class="container-xxl py-4">
            <div class="container">
                <div class="row g-4" id="departmentContainer">
                    <!-- Cards for Departments will load here dynamically -->
                </div>
            </div>
        </div>
        <!-- Departments End -->
        `;

        loadDepartments(); // Dynamically load department cards
    }
}

function loadDepartments() {
    const departments = [
        {
            id: 1,
            name: "Engineering and Electrical Engineering",
            description: "Comprehensive courses in engineering fields including Mechanical, Civil, Electrical, and more.",
            img: boilerMakingImg,
            
        },
        {
            id: 2,
            name: "Building and Maintance",
            description: "Master the art of masonry and plastering.",
            img: bricklayingImg,
            
        },
        {
            id: 3,
            name: "Motor Mechanics",
            description: "Repair and maintain vehicle systems.",
            img: motorMechanicsImg,
            
        },
        {
            id: 4,
            name: "Metal Fabrication",
            description: "Construct and maintain metallic structures, at industrial scale.",
            img: motorMechanicsImg,
            
        },
        
        {
            id: 5,
            name: "Software, Web, Games & Database Developer / Programmer",
            description: "This department focuses on Industry 4.0 technologies and programming languages, offering diverse specializations",
            img: plumbingImg,
            
        },
        {
            id: 6,
            name: "Server, Networking & PC Technician",
            description: "This department prepares students for essential IT support and networking roles",
            img: plumbingImg,
            
        },
    ];

    const container = document.getElementById('departmentContainer');
    container.innerHTML = `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            ${departments.map(dept => `
                <div class="col">
                    <div class="card h-100">
                        <img src="${dept.img}" class="card-img-top" alt="${dept.name}">
                        <div class="card-body">
                            <h5 class="card-title">${dept.name}</h5>
                            <p class="card-text">${dept.description}</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-primary w-100" onclick="showCourses(${dept.id})">Show Courses</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}


window.showCourses = function (departmentId) {
    
    const courses = {
        1:[ 
            { name: "National N Diploma: Chemical Engineering ", description: "Chemical Engineering N1 - N6 is an area of engineering that applies physical sciences (physics and chemistry), life sciences (microbiology and biochemistry), together with applied mathematics and economics to produce, transform, transport, and properly use chemicals, materials and energy. ", img: chemicalEngImg, route: '/chemical' },
            { name: "Civil Engineering", description: "The NATED N1-N6 Civil/Building Engineering qualification covers levels N1-N6 and is designed to provide the theory of Civil/Building Engineering and an optional practical component. You can attain a National Certificate or Diploma once you have worked 24 months (2000 working hours) in your field of study. ", img: civilEngImg, route: '/civil' },
            { name: "National Diploma: Electrical Engineering / Heavy Current ", description: "The NATED N1-N6 Electrical Engineering / Heavy Current qualification covers levels N1-N6 and is designed to provide the theory of Electrical Engineering / Heavy Current and an optional practical component. You can attain a National Certificate or Diploma once you have worked 24 months (2000 working hours) in your field of study. ", img: heavyCurrentImg, route: '/heavycurrent' },
            { name: "Electrical Engineering / Light Current ", description: "The NATED N1-N6 Electrical Engineering / Light Current  qualification covers levels N1-N6 and is designed to provide the theory of Electrical Engineering / Light Current and an optional practical component. You can attain a National Certificate or Diploma once you have worked 24 months (2000 working hours) in your field of study. ", img: lightCurrentImg, route: '/lightcurrent' },
            { name: "National N Diploma: Mechanical Engineering", description: "This programme NATED N4-N6 Mechanical Engineering qualification covers levels N4-N6 and is designed to provide the theory of Mechanical Engineering and an optional practical component. You can attain a National Certificate or Diploma once you have worked 24 months (2000 working hours) in your field of study.", img: mechEngImg, route: '/mechanical' },
            ],
        2:[ { name: "Bricklaying and Plastering", description: "The NATED N1-N3 Bricklayer & Plastering qualification is a qualification from Levels N1-N3 focusing on the theory of bricklayering and plastering. This qualification meets the academic requirements for you to write your trade test once you have acquired the required practical hours.  This qualification consists of one compulsory part (N1-N3 theory) and two optional practical parts, beginners level (done between N1-N3) and advanced (can be done after N3).", img: bricklayingImg, route: '/bricklaying' },
            { name: "Plumbing ", description: "The NATED N1-N3 Plumbing qualification is a qualification from Levels N1-N3 focusing on the theory of plumbing. This qualification meets the academic requirements for you to write your trade test once you have acquired the required practical hours. ", img: plumbingImg, route: '/plumbing' },

            ],
        3:[ { name: "Motor Mechanics/Diesel Mechanics", description: "This programme offers NATED N1-N3 Motor Mechanics qualification is a qualification from Levels N1-N3 focussing on the theory of motor mechanics in motor trade and diesel theory. You will gain theoretical understanding of motor mechanics; how to locate and assess mechanical issues; how to fix and maintain motor vehicles.", img: motorMechanicsImg, route: '/motor' },
            ],   
        4:[ { name: "Boilermaker", description: "NATED N1-N3 Boilermaker qualification is a qualification from Levels N1-N3. This qualification meets the academic requirements for you to write your trade test once you have aquired the required practical hours.", img: boilerMakingImg, route: '/boiler' },
            { name: "Fitter and Turner Trade ", description: "NATED N1-N3 Fitter & Turner qualification is a qualification from N1-N3 focusing on the theory of fitting and turning. If you consider yourself good with metal and repairing parts, able to take exact measurements, able to work accurately, mathematically minded and strategic? then a career in Fitting & Turner may be just for you!", img: fitterTurnerImg, route: '/fitter' },
            ],
        5: [{ name: "Full Stack Web Developer (NC: IT Systems Developer NQF5)", description: "Client and server programming with JavaScript, PHP, Python, Node.js, and database management (SQL, SQLite, MongoDB).", img: plumbingImg, route: '/fullstackweb' },
            {name: "Full Stack Software Developer (NC: IT Systems Developer NQF5)", description: "Object-Oriented Programming with Java, GUI development, and cross-platform coding solutions.", img: plumbingImg, route: '/fullstacksoft'},
            {name: "Data Science Solutions Developer (NC: IT Systems Developer NQF5)", description: "Python programming, data visualization, machine learning, and analytics.", img: plumbingImg, route: '/datascsol'},
            {name: "Full Stack Web and Software Developer (NC: IT Systems Developer NQF5)", description: "Combines web and software development using Java, HTML, CSS, JavaScript, SQL, and MongoDB.", img: plumbingImg, route: '/fullstack'},
            ],
        6: [{ name: "IT Technical Support (FET Certificate: IT Support/PC Technician)", description: "PC repairs, software maintenance, network setup, and end-user support.", img: plumbingImg, route: '/ittech' },
            {name: "Server/Network Technician (National Certificate: IT Systems Support NQF5)", description: "Networking, system administration, virtualization, cloud platforms, and CISCO certifications.", img: plumbingImg, route: '/server-network'},
            {name: "Cybersecurity Specialization (National Certificate: IT Systems Support NQF5)", description: "Networking, operating systems, cybersecurity tools, and CISCO specialization.", img: plumbingImg, route: '/cyber'},
            {name: "Cloud Computing Specialization (National Certificate: IT Systems Support NQFCombine5)", description: "Networking, system administration, virtualization, and cloud platforms with Microsoft Azure.", img: plumbingImg, route: '/cloud'},
            ], 
    };

    const selectedCourses = courses[departmentId] || [];
    const container = document.getElementById('departmentContainer');

    if (!selectedCourses.length) {
        container.innerHTML = `<p>No courses available for this department.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="row row-cols-1 row-cols-md-3 g-4">
            ${selectedCourses.map(course => `
                <div class="col">
                    <div class="card h-100">
                        <img src="${course.img}" class="card-img-top" alt="${course.name}">
                        <div class="card-body">
                            <h5 class="card-title">${course.name}</h5>
                            <p class="card-text">${course.description}</p>
                        </div>
                        <div class="card-footer text-center">
                            <button class="btn btn-outline-secondary w-100" onclick="window.location.href='${course.route}'">Read More</button>
                            <button class="btn btn-primary w-100 mt-2" onclick="window.location.href='/apply'">Apply</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="col-12 text-center mt-4">
            <button class="btn btn-secondary" onclick="window.location.href='/courses'">Back to Departments</button>

        </div>
    `;
};    
