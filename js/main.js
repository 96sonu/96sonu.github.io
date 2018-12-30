jQuery(document).ready(function ($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');
    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });
    navigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    $('.cd-scroll-down').on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    $('.touch .cd-nav-trigger').on('click', function () {
        $('.touch #cd-vertical-nav').toggleClass('open');
    });
    $('.touch #cd-vertical-nav a').on('click', function () {
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
        contentSections.each(function () {
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate({
            'scrollTop': target.offset().top
        }, 600);
    }
});



function openNav() {
    if (document.getElementById("mySidenav").style.width == "0px") {
        document.getElementById("mySidenav").style.width = "250px";
    } else {
        document.getElementById("mySidenav").style.width = "0px";
    }
}

var i = 0;
var txt = 'An enthusiastic Software Developer, budding Data Scientist and self-motivated in learning new technologies in field of Computer Science. Passionate to develop broad skill set through continuous learning and adapting to company standards. I am a Graduate Student at University of Texas at Dallas, pursuing Master\'s in Computer Science. My Specialization Track is Data Science.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav mobileNav") {
        x.className += " responsive";
    } else {
        x.className = "topnav mobileNav";
    }
}