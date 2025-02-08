
import $ from 'jquery';
import '../scss/styles.scss';
import 'bootstrap';
import './Home/nav.js';
import axios from 'axios';



import { loadhomeContent,showContainer,} from './Home/homeContent.js' ;
import {loadTradePage} from './Home/trade.js';
import { loadtermspage } from './Home/privacy.js';
import { loadContactUs } from './Home/contact.js';
import { loadAboutPage } from './Home/about.js';
import { loadCarousel } from './Home/carousel.js';
import {loadApplicationPage } from './Home/applications.js';
import {loadRegistrationPage } from './Home/register.js'
import { loadCoursesPage } from './Home/courses.js';
import {renderBoilermakingPage } from './Home/boiler.js';
import {renderLightCurrentPage} from './Home/lightc.js';
import {renderCivilPage} from './Home/civil.js';
import {renderHeavycurrentPage} from './Home/heavyc.js';
import {renderFitterPage} from './Home/fitter.js';
import {renderChemicalPage} from './Home/chemical.js';
import {renderMotorPage} from './Home/motor.js';
import {rendermechengPage} from './Home/mechanical.js';
import {renderBrickPage} from './Home/brick.js';
import {renderplumbingPage} from './Home/plumbing.js';
import { renderFullStackWebDeveloperPage } from './Home/fullstackweb.js';
import { renderCyberSecuritySpecializationPage } from './Home/cyber.js';
import { renderServerNetworkTechnicianPage } from './Home/networktech.js';
import { renderITTechnicalSupportPage } from './Home/techsupport.js';
import { renderCloudComputingSpecializationPage } from './Home/cloudc.js';
import { renderDataScienceSolutionsDeveloperPage } from './Home/datascdev.js';
import { renderFullStackWebSoftwareDevPage } from './Home/websoft.js';
import { renderFullStackSoftwareDeveloperPage } from './Home/fullstacksoft.js';
import { loadLoginPage } from './Home/login.js';
import {loadengineeringpage} from './Home/engineeringfac.js';
import {loadcomppage} from './Home/IT.js'
import { loadMatricRewriteRegistrationPage } from './Home/matricapp.js';


const routes = {
    '/': loadhomeContent, 
    '/about': loadAboutPage,
    '/contactus': loadContactUs,
    '/apply': loadApplicationPage,
    '/register':loadRegistrationPage,
    '/courses': loadCoursesPage,
    '/boiler':renderBoilermakingPage,
    '/lightcurrent':renderLightCurrentPage,
    '/civil': renderCivilPage,
    '/heavycurrent':renderHeavycurrentPage,
    '/fitter':renderFitterPage,
    '/chemical':renderChemicalPage,
    '/motor':renderMotorPage,
    '/mechanical':rendermechengPage,
    '/bricklaying':renderBrickPage,
    '/plumbing':renderplumbingPage,
    '/fullstackweb': renderFullStackWebDeveloperPage,
    '/fullstacksoft':renderFullStackSoftwareDeveloperPage,
    '/datasc':renderDataScienceSolutionsDeveloperPage ,
    '/fullstack':renderFullStackWebSoftwareDevPage,
    '/ittech':renderITTechnicalSupportPage,
    '/server-network':renderServerNetworkTechnicianPage,
    '/cyber':renderCyberSecuritySpecializationPage,
    '/cloud':renderCloudComputingSpecializationPage,

    '/engfaculty':loadengineeringpage,
    '/ITfaculty' : loadcomppage,
    '/trade-courses':loadTradePage,
    '/terms': loadtermspage,
    '/matapp':loadMatricRewriteRegistrationPage, 
};


function router() {
    const path = window.location.pathname;
    const route = routes[path];
    let mainElement = document.querySelector('main');

    

    if (!mainElement) {
        mainElement = document.createElement('main');
        mainElement.className = 'container-fluid';
        document.body.appendChild(mainElement);
    }

    mainElement.innerHTML = ''; // Clear existing content

    if (route) {
        route();
    } else {
        mainElement.innerHTML = '<h1>404 Not Found</h1>';
    }
}

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    router(); // Initial route load

    // Select ALL links, including those in the footer
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPath = event.target.getAttribute('href');
            if (targetPath.startsWith('/')) { // Only handle internal links
                history.pushState({}, '', targetPath);
                router();
            } else {
                window.location.href = targetPath; // Handle external links
            }
        });
    });
});

window.verifyEmail = function () {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Email verified successfully!');
        goToStep(2);
    } else {
        alert('Please enter a valid email!');
    }
};

window.goToStep = function (stepNumber) {
    document.querySelectorAll('.application-step').forEach(step => step.classList.add('d-none'));
    document.getElementById(`step-${stepNumber}`).classList.remove('d-none');
};

window.resetApplication = function () {
    document.getElementById('applicationForm').reset();
    goToStep(1);
};


function generateUsername(fullName) {
    const timestamp = Date.now(); // Use the current timestamp
    const initials = fullName.split(' ').map(name => name.charAt(0)).join('').toLowerCase(); // Get initials
    return `${initials}${timestamp}`;
}

function storeApplicationDetails(data) {
    // This is a placeholder for storing application data
    console.log('Application Data Stored:', data);
    // In a real application, this should be replaced with an API call to a backend server.
}

function goToStep(stepNumber, fullName = '', email = '') {
    document.querySelectorAll('.application-step').forEach(step => step.classList.add('d-none'));
    const targetStep = document.getElementById(`step-${stepNumber}`);
    targetStep.classList.remove('d-none');

    // If on the final step (Step 5), generate and display the username
    if (stepNumber === 5) {
        const username = generateUsername(fullName);
        const usernameDisplay = document.getElementById('generatedUsername');
        usernameDisplay.textContent = username;

        // Store application details for the applicant
        const applicationData = {
            fullName,
            email,
            username,
            submittedAt: new Date().toISOString(),
        };
        storeApplicationDetails(applicationData);
    }
}
window.showContainer = showContainer;
window.startCounters();



window.startCounters = startCounters;














