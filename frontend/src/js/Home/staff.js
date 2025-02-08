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
                                    <h1 class="display-3 text-white animated slideInDown">T's & C's </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Header End -->



        
    `;
}
