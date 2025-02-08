import loginBackground from './slide1a.jpg';

export function loadLoginPage() {
    const main = document.querySelector('main');
    
    if (!main) {
        console.error('Main element not found');
        return;
    }

    // Clear existing content in the main container
    main.innerHTML = ''; 

    // Generate and set new HTML content for the login page
    main.innerHTML = `
    <div class="container-xxl" style="background-image: url('${loginBackground}'); background-size: cover; background-position: center; height: 100vh;">
        <div class="container py-2">
            <div class="row justify-content-center align-items-center" style="min-height: 100vh;">
                <div class="col-lg-6 col-md-8 text-center">
                    <div class="shadow-lg p-3 bg-white rounded" style="opacity: 0.85; max-width: 400px; margin: 0 auto;">
                        <h3 class="display-6 text-dark mb-2 font-weight-bold" style="font-size: 1.25rem;">Welcome to Our Platform</h3>
                        <p class="lead text-muted mb-2" style="font-size: 0.9rem;">Please enter your login details to continue.</p>

                        <!-- Login Form Section Start -->
                        <form id="loginForm" class="shadow p-3 bg-white rounded">
                            <h4 class="mb-3 text-center" style="font-size: 1rem;">Login to Your Account</h4>
                            <div class="form-floating mb-2">
                                <input type="text" class="form-control form-control-sm" id="username" placeholder="Username" required>
                                <label for="username">Username</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="password" class="form-control form-control-sm" id="password" placeholder="Password" required>
                                <label for="password">Password</label>
                            </div>

                            <!-- Role Dropdown positioned to the right of the label -->
                            <div class="row mb-2">
                                <div class="col-6 text-start">
                                    <label for="role" class="form-label" style="font-size: 0.85rem;">Role</label>
                                </div>
                                <div class="col-6 text-end">
                                    <select class="form-control form-control-sm" id="role" required>
                                        <option value="" disabled selected>Select Role</option>
                                        <option value="student">Student</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-check mb-2">
                                <input type="checkbox" class="form-check-input" id="rememberMe">
                                <label class="form-check-label" for="rememberMe" style="font-size: 0.85rem;">Remember Me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 btn-sm">Login</button>
                            <div class="mt-2 text-center">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission
    
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;
    
        // Make sure all fields are filled
        if (!username || !password || !role) {
            alert("Please fill in all fields.");
            return;
        }
    
        try {
            // Send POST request to the backend
            const response = await fetch("/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken"), // CSRF token for Django (if enabled)
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    role: role,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                // Handle successful login
                alert(data.message);
                window.location.href = data.redirect_url; // Redirect to the appropriate page
            } else {
                const errorData = await response.json();
                alert(errorData.error || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("An error occurred. Please try again later.");
        }
    });
    
    // Utility function to get CSRF token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith(name + "=")) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}