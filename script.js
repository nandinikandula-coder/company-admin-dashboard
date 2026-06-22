/* ==========================================
   PresenceTrack Enterprise Dashboard JS
========================================== */

// Sidebar Toggle
const menuToggle =
    document.getElementById(
        "menu-toggle"
    );

const sidebar =
    document.getElementById(
        "sidebar"
    );

menuToggle.addEventListener(
    "click",
    () => {

        if (
            window.innerWidth <= 768
        ) {

            sidebar.classList
                .toggle("show");

        } else {

            sidebar.classList
                .toggle("hide");

        }

    }
);

/* ==========================================
   Dark Mode Toggle
========================================== */

const themeToggle =
    document.getElementById(
        "theme-toggle"
    );

themeToggle.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("dark");

        const icon =
            themeToggle
                .querySelector("i");

        if (
            document.body
                .classList
                .contains("dark")
        ) {

            icon.classList
                .replace(
                    "fa-moon",
                    "fa-sun"
                );

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            icon.classList
                .replace(
                    "fa-sun",
                    "fa-moon"
                );

            localStorage.setItem(
                "theme",
                "light"
            );
        }

    }
);

// Load Saved Theme

if (
    localStorage.getItem(
        "theme"
    ) === "dark"
) {

    document.body
        .classList
        .add("dark");

    themeToggle
        .querySelector("i")
        .classList
        .replace(
            "fa-moon",
            "fa-sun"
        );
}

/* ==========================================
   Notification Dropdown
========================================== */

const notification =
    document.querySelector(
        ".notification"
    );

notification.addEventListener(
    "click",
    (e) => {

        e.stopPropagation();

        notification
            .classList
            .toggle("active");

    }
);

/* ==========================================
   Profile Dropdown
========================================== */

const profile =
    document.querySelector(
        ".profile"
    );

profile.addEventListener(
    "click",
    (e) => {

        e.stopPropagation();

        profile
            .classList
            .toggle("active");

    }
);

// Close dropdowns

document.addEventListener(
    "click",
    () => {

        notification
            .classList
            .remove("active");

        profile
            .classList
            .remove("active");

    }
);

/* ==========================================
   Full Screen Mode
========================================== */

const fullscreenBtn =
    document.getElementById(
        "fullscreen-btn"
    );

fullscreenBtn.addEventListener(
    "click",
    () => {

        if (
            !document
                .fullscreenElement
        ) {

            document
                .documentElement
                .requestFullscreen();

        } else {

            document
                .exitFullscreen();

        }

    }
);

/* ==========================================
   Search Table
========================================== */

const searchInput =
    document.querySelector(
        ".search-box input"
    );

searchInput.addEventListener(
    "keyup",
    function () {

        const value =
            this.value
                .toLowerCase();

        document
            .querySelectorAll(
                "tbody tr"
            )
            .forEach(row => {

                const text =
                    row.innerText
                        .toLowerCase();

                row.style.display =
                    text.includes(value)
                        ? ""
                        : "none";

            });

    }
);

/* ==========================================
   Live Clock
========================================== */

const header =
    document.querySelector(
        ".dashboard-header"
    );

const clock =
    document.createElement(
        "p"
    );

clock.style.marginTop =
    "10px";

clock.style.fontWeight =
    "600";

clock.style.color =
    "#2563eb";

header.appendChild(clock);

function updateClock() {

    const now =
        new Date();

    clock.innerHTML =
        "🕒 " +
        now.toLocaleString();

}

updateClock();

setInterval(
    updateClock,
    1000
);

/* ==========================================
   Welcome Message
========================================== */

const heading =
    document.querySelector(
        ".dashboard-header h1"
    );

const hour =
    new Date()
        .getHours();

if (hour < 12) {

    heading.innerHTML =
        "🌅 Good Morning Admin";

} else if (hour < 18) {

    heading.innerHTML =
        "☀️ Good Afternoon Admin";

} else {

    heading.innerHTML =
        "🌙 Good Evening Admin";

}

/* ==========================================
   Attendance Chart
========================================== */

new Chart(
    document.getElementById(
        "attendanceChart"
    ),
    {

        type: "bar",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],

            datasets: [{

                label:
                    "Attendance",

                data: [
                    220,
                    240,
                    235,
                    250,
                    245,
                    210
                ],

                backgroundColor: [
                    "#2563eb",
                    "#10b981",
                    "#7c3aed",
                    "#f59e0b",
                    "#06b6d4",
                    "#ef4444"
                ],

                borderRadius: 10

            }]
        },

        options: {
            responsive: true,
            animation: {
                duration: 1500
            }
        }

    }
);

/* ==========================================
   Department Chart
========================================== */

new Chart(
    document.getElementById(
        "departmentChart"
    ),
    {

        type: "doughnut",

        data: {

            labels: [
                "IT",
                "HR",
                "Finance",
                "Admin"
            ],

            datasets: [{

                data: [
                    40,
                    20,
                    25,
                    15
                ],

                backgroundColor: [
                    "#2563eb",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444"
                ]
            }]
        },

        options: {
            responsive: true,
            animation: {
                animateScale: true
            }
        }

    }
);

/* ==========================================
   Drag & Drop Cards
========================================== */

new Sortable(
    document.querySelector(
        ".cards"
    ),
    {
        animation: 150
    }
);

/* ==========================================
   Theme Switcher
========================================== */

document
    .querySelector(".theme-blue")
    .addEventListener(
        "click",
        () => {

            document
                .documentElement
                .style
                .setProperty(
                    "--primary",
                    "#2563eb"
                );

        }
    );

document
    .querySelector(".theme-purple")
    .addEventListener(
        "click",
        () => {

            document
                .documentElement
                .style
                .setProperty(
                    "--primary",
                    "#7c3aed"
                );

        }
    );

document
    .querySelector(".theme-green")
    .addEventListener(
        "click",
        () => {

            document
                .documentElement
                .style
                .setProperty(
                    "--primary",
                    "#10b981"
                );

        }
    );

/* ==========================================
   Quick Action Buttons
========================================== */

document
    .querySelectorAll(
        ".quick-actions button"
    )
    .forEach(btn => {

        btn.addEventListener(
            "click",
            () => {

                alert(
                    btn.innerText +
                    " clicked!"
                );

            }
        );

    });

/* ==========================================
   Notification Counter
========================================== */

const badge =
    document.querySelector(
        ".badge"
    );

setInterval(
    () => {

        let count =
            parseInt(
                badge.innerText
            );

        count++;

        if (
            count > 9
        ) {
            count = 1;
        }

        badge.innerText =
            count;

    },
    10000
);

/* ==========================================
   Page Animation
========================================== */

window.addEventListener(
    "load",
    () => {

        document.body
            .style.opacity =
            "1";

    }
);

document.body
    .style.opacity =
    "0";

document.body
    .style.transition =
    "opacity 0.5s";

/* ==========================================
   Dashboard Loaded
========================================== */

console.log(
    "🚀 PresenceTrack Loaded Successfully"
);