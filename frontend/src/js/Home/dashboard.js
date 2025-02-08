





document.addEventListener("DOMContentLoaded", () => {
    const teacherDashboardUrl = "/api/teacher-dashboard/";
    const studentDashboardUrl = "/api/student-dashboard/";

    // Fetch teacher dashboard
    fetch(teacherDashboardUrl, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Teacher Dashboard:", data);
            // Render dashboard UI
        })
        .catch((error) => console.error("Error fetching teacher dashboard:", error));

    // Fetch student dashboard
    fetch(studentDashboardUrl, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Student Dashboard:", data);
            // Render dashboard UI
        })
        .catch((error) => console.error("Error fetching student dashboard:", error));
});