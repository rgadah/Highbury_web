import tradeImage from './ho5.png';



export function loadtermspage() {
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
                    <h1 class="display-3 text-white animated slideInDown">T's & C's</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->

    <!-- Terms and Conditions Start -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Terms and Conditions of Use for Highbury College</h2>
                <p class="text-justify">
                    The Highbury College website located at www.highburycolege.co.za is a copyrighted work 
                    belonging to Highbury College. Certain features of the Site may be subject to additional 
                    guidelines, terms, or rules, which will be posted on the Site in connection with such features.
                </p>
                <p class="text-justify">
                    All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                </p>
                <p class="text-justify">
                    These Terms of Use describe the legally binding terms and conditions that oversee your use of the Site. 
                    BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the 
                    authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. 
                    IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
                </p>

                <h3>Access to the Site</h3>
                <p class="text-justify">
                    Subject to these Terms. Company grants you a non-transferable, non-exclusive, revocable, limited license 
                    to access the Site solely for your own personal, noncommercial use.
                </p>

                <h3>Certain Restrictions</h3>
                <p class="text-justify">
                    The rights approved to you in these Terms are subject to the following restrictions:
                    <ul>
                        <li>you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site;</li>
                        <li>you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site;</li>
                        <li>you shall not access the Site in order to build a similar or competitive website; and</li>
                        <li>except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site must be retained on all copies thereof.</li>
                    </ul>
                </p>
                <p class="text-justify">
                    Company reserves the right to change, suspend, or cease the Site with or without notice to you. 
                    You approved that Company will not be held liable to you or any third-party for any change, interruption, 
                    or termination of the Site or any part.
                </p>
                <p class="text-justify">
                    No Support or Maintenance. You agree that Company will have no obligation to provide you with any support in connection with the Site.
                </p>

                <h3>User Content</h3>
                <p class="text-justify">
                    "User Content" means any and all information and content that a user submits to the Site. 
                    You are exclusively responsible for your User Content. You bear all risks associated with use of your User Content. 
                    You hereby certify that your User Content does not violate our Acceptable Use Policy. You may not represent or imply 
                    to others that your User Content is in any way provided, sponsored or endorsed by Company. Because you alone are responsible 
                    for your User Content, you may expose yourself to liability. Company is not obliged to backup any User Content that you post; 
                    also, your User Content may be deleted at any time without prior notice to you. You are solely responsible for making your own 
                    backup copies of your User Content if you desire.
                </p>

                <h3>Acceptable Use Policy</h3>
                <p class="text-justify">
                    The following terms constitute our "Acceptable Use Policy":
                    <ul>
                        <li>You agree not to use the Site to collect, upload, transmit, display, or distribute any User Content that violates any third-party right or any intellectual property or proprietary right; that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another’s privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual; that is harmful to minors in any way; or that is in violation of any law, regulation, or obligations or restrictions imposed by any third party.</li>
                        <li>In addition, you agree not to upload, transmit, or distribute to or through the Site any software intended to damage or alter a computer system or data; send through the Site unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of duplicative or unsolicited messages; use the Site to harvest, collect, gather or assemble information or data regarding other users without their consent; interfere with, disrupt, or create an undue burden on servers or networks connected to the Site, or violate the regulations, policies or procedures of such networks; attempt to gain unauthorized access to the Site, whether through password mining or any other means; harass or interfere with any other user’s use and enjoyment of the Site; or use software or automated agents or scripts to produce multiple accounts on the Site, or to generate automated searches, requests, or queries to the Site.</li>
                    </ul>
                </p>

                <h3>Third-Party Links & Ads; Other Users</h3>
                <p class="text-justify">
                    The Site may contain links to third-party websites and services, and/or display advertisements for third-parties. 
                    Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads. 
                    Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, 
                    endorse, warrant, or make any representations with respect to Third-Party Links & Ads. You use all Third-Party Links & Ads at 
                    your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.
                </p>

                <h3>Disclaimers</h3>
                <p class="text-justify">
                    The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. We and our suppliers make no guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe. If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.
                </p>

                <h3>Limitation on Liability</h3>
                <p class="text-justify">
                    To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages. Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom.
                </p>

                <h3>Term and Termination</h3>
                <p class="text-justify">
                    Subject to this Section, these Terms will remain in full force and effect while you use the Site. We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately. You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases. Company will not have any liability whatsoever to you for any termination of your rights under these Terms. Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10.
                </p>

                <h3>Copyright Policy</h3>
                <p class="text-justify">
                    Company respects the intellectual property of others and asks that users of our Site do the same. In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights. If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:
                    <ul>
                        <li>Your physical or electronic signature;</li>
                        <li>Identification of the copyrighted work(s) that you claim to have been infringed;</li>
                        <li>Identification of the material on our services that you claim is infringing and that you request us to remove;</li>
                        <li>Sufficient information to permit us to locate such material;</li>
                        <li>Your address, telephone number, and e-mail address;</li>
                        <li>A statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and</li>
                        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.</li>
                    </ul>
                </p>

                <h3>General</h3>
                <p class="text-justify">
                    These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site. You are responsible for providing us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. Any changes to these Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site. These changes will be effective immediately for new users of our Site. Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.
                </p>

                <h3>Contact Information</h3>
                <p class="text-justify">
                    Address: First Floor, De Villiers Building, 27 Bureau Ln, Pretoria Central, Pretoria, 0001
                </p>
                <p class="text-justify">
                    Email: info@highburycollege.co.za
                </p>
            </div>
        </div>
    </div>
    <!-- Terms and Conditions End -->
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