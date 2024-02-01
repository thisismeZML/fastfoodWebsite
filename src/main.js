// humberger menu
const humbergerMenu = document.querySelector("#humbergerMenu");
const navContainer = document.querySelector(".nav_container");
const close = document.querySelector("#closeIcon");

close.addEventListener("click", () => {
    navContainer.classList.add("hidden");
})

humbergerMenu.addEventListener("click", () => {
    navContainer.classList.remove("hidden");
})

// tab select 
const tabs = document.querySelectorAll(".warp-container ul li");
const all = document.querySelectorAll(".text-warp");
const food = document.querySelectorAll(".food");
const snack = document.querySelectorAll(".snack");
const beverage = document.querySelectorAll(".beverage");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })

        tab.classList.add("active")

        const dataTabs = tab.getAttribute("data-tabs");

        all.forEach(item => {
            item.style.display = "none";
        })
        
        if (dataTabs === 'Food') {
            food.forEach(item => {
                item.style.display = "block"
            });
        } else if (dataTabs === 'Snack') {
            snack.forEach(item => {
                item.style.display = 'block'
            });
        } else if (dataTabs === "Beverage") {
          beverage.forEach((item) => {
            item.style.display = "block";
          });
        } else {
          all.forEach((item) => {
            item.style.display = "block";
          });
        }
    })
});

// scroll up
const scrollUpbtn = document.getElementById("scrollUpbtn");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 350) {
        scrollUpbtn.classList.remove("-bottom-1/2");
        scrollUpbtn.classList.add("bottom-4")
    } else {
        scrollUpbtn.classList.add("-bottom-1/2");
        scrollUpbtn.classList.remove("bottom-4");
    }
})

// dark mode

const html = document.querySelector("html");
const themeBtn = document.getElementById("toggle");

const darkMode = () => {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
};

const lightMode = () => {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}

if (localStorage.getItem("mode") === 'dark') {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener("click", () => {
    if (localStorage.getItem("mode") === "light") {
      darkMode();
    } else {
        lightMode();
    }
})