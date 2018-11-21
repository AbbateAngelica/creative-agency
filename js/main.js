window.onload = function () {
    // ------------ SWIPER ----------------
    var imageSwiper = new Swiper('#image-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1000
    });
    testimonialSwiper = new Swiper('#testimonial-swiper', {
        loop: true,
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        speed: 600,
        breakpoints: {
            1020: {
                slidesPerView: 1,
            },
        },
    });

    // ----------- SCROLL SPY -----------------
    var scrollSpy = new MenuSpy(document.querySelector('#scroll-spy'), {
        threshold: 120,
    });

    // -------- SMOOTH SCROLLING SETUP ---------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        if (anchor.getAttribute('href') === '#') {
            return;
        }
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });

    // ------------ SCROLL EVENTS ---------------
    function addNavWhite() {
        document.getElementById('header').classList.add('nav--scrolled');
        document.getElementById('logo').setAttribute('src', 'https://colorlib.com/etc/creative-agency/img/logo.png');
    }

    function addNavTransparent() {
        document.getElementById('header').classList.remove('nav--scrolled');
        document.getElementById('logo').setAttribute('src', 'https://colorlib.com/etc/creative-agency/img/logo-alt.png');
    }

    function onScrollWindow() {
        if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) || window.innerWidth < 731) {
            addNavWhite();
        }
        else {
            addNavTransparent();
        }

        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById('back-to-top').classList.add('back-to-top--visible');
        }
        else {
            document.getElementById('back-to-top').classList.remove('back-to-top--visible');
        }
    }
    window.onscroll = onScrollWindow;
    onScrollWindow();

    // ------------ RESIZE EVENTS ---------------
    function onWindowResize() {
        if (window.innerWidth < 731 || (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)) {
            addNavWhite();
        }
        else {
            addNavTransparent();
        }
    }
    window.onresize = onWindowResize;
    onWindowResize();

    // --------------- MENU SETUP -----------------
    document.getElementById('menu-btn').onclick = function () {
        if (document.getElementById('header').classList.contains('nav--open')) {
            document.getElementById('menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
            document.getElementById('header').classList.remove('nav--open');
        }
        else {
            document.getElementById('menu-btn').innerHTML = '<i class="fas fa-times"></i>';
            document.getElementById('header').classList.add('nav--open');
        }
    }
}