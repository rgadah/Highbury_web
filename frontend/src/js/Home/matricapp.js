import headimage2 from './rehead.png';

export function loadMatricRewriteRegistrationPage() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = ''; // Clear existing content

        main.innerHTML = `
        <!-- Header Start -->
        <div class="container-fluid bg-light" 
            style="background-image: url('${headimage2}'); background-size: cover; background-position: relative; background-repeat: no-repeat; padding-top: 130px; padding-bottom: 70px; margin-bottom: 70px;height:80vh; ">
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h1 class="display-3 text-white animated slideInDown">Matric Rewrite Registration</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->

        <!-- Registration Form Start -->
        <div class="container-xxl py-2 mt-4">
            <div class="container">
                <div class="row g-4 wow fadeInUp" data-wow-delay="0.5s">
                    <center>
                        <form id="registrationForm" class="shadow p-4" style="max-width: 550px;">
                            <h1 class="mb-4 bg-white text-center px-3">Matric Rewrite Form</h1>

                            <!-- Personal Details -->
                            <h2 class="mb-3">Personal Details</h2>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Full Name" required>
                                <label for="fullName">Full Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required>
                                <label for="email">Email Address</label>
                            </div>

                            <!-- Subject Selection -->
                            <h2 class="mb-3">Subject Selection</h2>
                            <div class="form-floating mb-3">
                                <select id="subjectSelect" class="form-select">
                                    <option value="" selected disabled>Choose a Subject...</option>
                                    <option>English Home Language</option>
                                    <option>English 1st Additional Language</option>
                                    <option>Afrikaans Huistaal</option>
                                    <option>Afrikaans 1st Additional Language</option>
                                    <option>Other 1st Additional Language</option>
                                    <option>Mathematics</option>
                                    <option>Mathematics Literacy</option>
                                    <option>Life Science</option>
                                    <option>Physical Science</option>
                                    <option>Accounting</option>
                                    <option>Business Studies</option>
                                    <option>Economics</option>
                                    <option>Human and Social Studies</option>
                                    <option>Geography</option>
                                    <option>History</option>
                                </select>
                                <label for="subjectSelect">Select a Subject</label>
                            </div>
                            <button type="button" id="addSubjectBtn" class="btn btn-secondary w-100 mb-3">Add Subject</button>

                            <!-- Selected Subjects -->
                            <h3>Selected Subjects</h3>
                            <ul id="selectedSubjects" class="list-group mb-3"></ul>

                            <!-- Submit -->
                            <button type="submit" class="btn btn-primary w-100">Submit Registration</button>
                        </form>
                    </center>
                </div>
            </div>
        </div>
        <!-- Registration Form End -->
        `;

        // Add functionality to dynamically add subjects
        const subjectSelect = document.getElementById('subjectSelect');
        const addSubjectBtn = document.getElementById('addSubjectBtn');
        const selectedSubjects = document.getElementById('selectedSubjects');

        addSubjectBtn.addEventListener('click', () => {
            const selectedValue = subjectSelect.value;
            if (selectedValue && ![...selectedSubjects.children].some(li => li.textContent === selectedValue)) {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.textContent = selectedValue;
                const removeBtn = document.createElement('button');
                removeBtn.className = 'btn btn-danger btn-sm';
                removeBtn.textContent = 'Remove';
                removeBtn.addEventListener('click', () => li.remove());
                li.appendChild(removeBtn);
                selectedSubjects.appendChild(li);
            }
        });

        // Handle form submission
        const registrationForm = document.querySelector('#registrationForm');
        if (registrationForm) {
            registrationForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // Prepare form data
                const formData = new FormData(registrationForm);
                const selectedSubjectsArray = [...selectedSubjects.children].map(li => li.textContent.replace('Remove', '').trim());
                formData.append('subjects', selectedSubjectsArray.join(',')); // Convert subjects array to comma-separated string

                // Submit form data
                fetch('https://script.google.com/macros/s/AKfycbwGnM64LqP6hrGd0otVPBZ3u7ymnZgPTPuEyiO0zUnNTAOYc1RbEjwaHLIdTL4F7VAj/exec', {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Server Response:', data);
                        if (data.status === 'success') {
                            alert('Details submitted successfully!');
                            registrationForm.reset();
                            selectedSubjects.innerHTML = ''; // Clear selected subjects
                        } else {
                            alert(`Error: ${data.message}`);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert("There was an error. Please try again later.");
                    });
            });
        }
    }
}
