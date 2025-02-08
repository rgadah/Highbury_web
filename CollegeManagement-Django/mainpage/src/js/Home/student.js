export function loadStudentDashboard(studentData = {}) {
    const main = document.querySelector('main');

    if (!main) {
        console.error('Main element not found');
        return;
    }

    // Clear existing content
    main.innerHTML = '';

    // Default dummy data if no `studentData` is provided
    const {
        name = "John Doe",
        grade = "Grade 10",
        subjects = ["Mathematics", "Science", "History"],
        attendance = "85%",
        performance = {
            Mathematics: "A",
            Science: "B",
            History: "A",
        },
    } = studentData;

    // Render the dashboard
    main.innerHTML = `
        <div class="container mt-200">
            <h1 class="text-center">Welcome, ${name}!</h1>
            <div class="card mt-200">
                <div class="card-header bg-primary text-white text-center">
                    Student Dashboard
                </div>
                <div class="card-body">
                    <p><strong>Grade:</strong> ${grade}</p>
                    <p><strong>Attendance:</strong> ${attendance}</p>
                    <div>
                        <h5>Subjects:</h5>
                        <ul class="list-group">
                            ${subjects.map(subject => `<li class="list-group-item">${subject}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="mt-4">
                        <h5>Performance:</h5>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(performance).map(([subject, grade]) => `
                                    <tr>
                                        <td>${subject}</td>
                                        <td>${grade}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}
