$(document).ready(function () {
  $(".btn-close").css("display", "none");

  $(".hamburger-icon").on("click", function () {
    $(".header-right").addClass("active");
    $(".hamburger-icon").css("display", "none");
    $(".btn-close").css("display", "block");
  });

  $(".btn-close").on("click", function () {
    $(".header-right").removeClass("active");
    $(".hamburger-icon").css("display", "block");
    $(".btn-close").css("display", "none");
  });

  if (innerWidth <= 991) {
    $(".footer__top-box h5").on("click", function () {
      // Close all other open ULs
      $(".footer__top-box h5")
        .not(this)
        .removeClass("active")
        .next("ul")
        .slideUp();

      // Toggle the current UL
      $(this).toggleClass("active").next("ul").slideToggle();
    });
  }
  $(".owl-carousel-decisions").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".owl-carousel-banner").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    loop: true,
    smartSpeed: 8000,
    dots: false,
    nav: false,
    margin: 5,
    autoplay: true,
    autoplaySpeed: 8000,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
});

// faq javascript logic
document.querySelectorAll(".faq-heading").forEach((heading) => {
  heading.addEventListener("click", function () {
    const faqWrapper = this.parentElement;

    // Toggle the 'active' class to show/hide the body
    faqWrapper.classList.toggle("active");
  });
});

// Create a WaveSurfer instance
var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: " rgba(0, 0, 0, 0.3)",
  progressColor: " rgba(148, 86, 72, 1)",
  height: 50,
  responsive: true,
  // Set a bar width
  barWidth: 1,
  // Optionally, specify the spacing between bars
  barGap: 1,
  // And the bar radius
  barRadius: 2,
});

// Load an audio file
wavesurfer.load("audio.mp3");

// Play/pause button functionality
var playPauseBtn = document.getElementById("playPauseBtn");
var playIcon =
  '<img loading="lazy" src="src/images/play.svg" alt="Play" title="Play" />';
var pauseIcon =
  '<img loading="lazy" src="src/images/play.svg" alt="Play" title="Play" />';
playPauseBtn.addEventListener("click", function () {
  wavesurfer.playPause();
  if (wavesurfer.isPlaying()) {
    playPauseBtn.innerHTML = playIcon;
  } else {
    playPauseBtn.innerHTML = playIcon;
  }
});
