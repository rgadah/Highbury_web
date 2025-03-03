import Icon from"./logo.png";import Icon2 from"./logo.png";const nav=document.createElement("nav");nav.className="navbar fixed-top",nav.innerHTML=`\n    <div class="container">\n        <a class="navbar-brand desktop-logo" >\n            <img src="${Icon}" alt="desktop-logo" class="navbar-logo" onclick="navigateToHome()" style="cursor: pointer;" >\n        </a>\n        <ul class="nav nav-tabs justify-content-center">\n            <li class="nav-item">\n                <a class="nav-link " aria-current="page" href="/">Home</a>\n            </li>\n            <li class="nav-item dropdown">\n                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">\n                    Admissions\n                </a>\n                <ul class="dropdown-menu">\n                    <li><a class="dropdown-item" href="/apply">Apply</a></li>\n                    <li><a class="dropdown-item" href="/register">Register</a></li>\n                    \n                </ul>\n            </li>\n            \n            <li class="nav-item">\n                <a class="nav-link" href="/about">About Us</a>\n            </li>\n            <div\n          class="btn btn-outline-success ms-2"\n          style="cursor: pointer;"\n          onclick="window.open('http://127.0.0.1:8001/', '_blank')"\n        >\n          Login\n        </div>\n        </ul>\n    </div>\n\n    <div class="toggle_btn">\n      <a class="navbar-brand mobile-logo" >\n        <img src="${Icon2}" alt="mobile-logo" class="navbar-logo" onclick="navigateToHome()" style="cursor: pointer;" >\n      </a>\n      <button class="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n      </button>\n    </div>\n\n    <div class="collapse navbar-collapse" id="navbarNav">\n      <ul class="navbar-nav ml-auto">\n        <li class="nav-item">\n          <a class="nav-link active" aria-current="page" href="/">Home</a>\n        </li>\n        <li class="nav-item dropdown">\n          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">\n            Admissions\n          </a>\n          <ul class="dropdown-menu">\n            <li><a class="dropdown-item" href="/apply">Apply</a></li>\n            <li><a class="dropdown-item" href="/register">Register</a></li>\n            \n          </ul>\n        </li>\n        \n        <li class="nav-item">\n          <a class="nav-link" href="/about">About Us</a>\n        </li>\n      </ul>\n      <div class="d-flex"\n        <div\n          class="btn btn-outline-success ms-2"\n          style="cursor: pointer;"\n          onclick="window.open('http://127.0.0.1:8001/', '_blank')"\n        >\n          Login\n        </div>\n      </div>\n    </div>\n`,document.body.prepend(nav);const toggleButton=document.querySelector(".navbar-toggler"),collapseMenu=document.querySelector(".collapse");toggleButton.addEventListener("click",(function(){collapseMenu.classList.toggle("show")}));const navLinks=document.querySelectorAll(".navbar-nav .nav-link");navLinks.forEach((n=>{n.addEventListener("click",(function(a){window.innerWidth<=768&&!n.classList.contains("dropdown-toggle")&&collapseMenu.classList.remove("show"),navLinks.forEach((n=>n.classList.remove("active"))),this.classList.add("active")}))}));const dropdownItems=document.querySelectorAll(".dropdown-item");dropdownItems.forEach((n=>{n.addEventListener("click",(function(){window.innerWidth<=768&&collapseMenu.classList.remove("show")}))}));const navbar=document.querySelector(".navbar");window.addEventListener("scroll",(()=>{window.scrollY>50?(navbar.style.backgroundColor="rgba(135, 206, 250, 0.7)",navbar.style.boxShadow="0 6px 8px rgba(0, 0, 0, 0.2)"):(navbar.style.backgroundColor="rgb(255,255,255)",navbar.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)")}));