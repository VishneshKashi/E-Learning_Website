document.addEventListener("DOMContentLoaded", function () {
    const enrollButtons = document.querySelectorAll(".enroll-button");
    const courseSections = document.querySelectorAll(".course");
    function handleEnrollClick() {
        alert("You have successfully enrolled in this course!");
    }

    enrollButtons.forEach((button) => {
        button.addEventListener("click", handleEnrollClick);
    });
    function showCourseDetails(courseId) {
        console.log(`Course details for course ID: ${courseId}`);
    }

    courseSections.forEach((course) => {
        course.addEventListener("click", () => {
            const courseId = course.getAttribute("data-course-id");
            showCourseDetails(courseId);
        });
    });
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});
