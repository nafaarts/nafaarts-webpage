<script>
  import * as animateScroll from "svelte-scrollto";
  import * as AOS from "aos";

  AOS.init({
    // offset: 200,
    // duration: 600,
    // easing: "ease-in-sine",
    // delay: 100,
  });

  (function () {
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;

      let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${
        50 - (_mouseY - _h) * 0.01
      }%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.007}% ${
        50 - (_mouseY - _h) * 0.03
      }%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.009}% ${
        50 - (_mouseY - _h) * 0.06
      }%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;

      const elem = document.querySelector("#hero");
      elem.style.backgroundPosition = x;
    }
  })();

  document.addEventListener("DOMContentLoaded", function (event) {
    // array with texts to type in typewriter
    var dataText = [
      "Hey, This is our space..",
      "Let's do something !",
      "Web Development?",
      "Mobile Application?",
      "UI/UX Design?",
      "or Video Production??",
      "Oh Yeahh.. We did that :) ",
      "Regards.. Nafaarts ♥ ",
    ];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.querySelector(".text-hero").innerHTML = text.substring(
          0,
          i + 1
        );

        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 80);
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 700);
      }
    }
    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 20000);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
</script>

<div class="gradient">
  <section id="hero">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/">
        <img
          src="./img/Nafaarts_logo.png"
          height="80"
          class="d-inline-block align-top m-0"
          alt=""
        />
      </a>
      <button
        class="navbar-toggler text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-fw fa-bars" />
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-3"><a class="nav-link" href="/">Home</a></li>
          <!-- <li class="nav-item mx-3">
            <a
              class="nav-link"
              on:click={() =>
                animateScroll.scrollTo({
                  element: "#developers",
                  offset: -100,
                })}>Developer</a
            >
          </li> -->
          <li class="nav-item mx-3">
            <span
              class="nav-link"
              on:click={() =>
                animateScroll.scrollTo({
                  element: "#services",
                  offset: -100,
                })}>Service</span
            >
          </li>
          <li class="nav-item mx-3">
            <span
              class="nav-link"
              on:click={() =>
                animateScroll.scrollTo({
                  element: "#testimonial",
                  offset: -100,
                })}>Clients</span
            >
          </li>

          <li class="nav-item mx-3">
            <a
              href="/class"
              class="nav-link rounded-pill bg-warning px-5"
              style="color: #000 !important">Coding Class</a
            >
          </li>

        </ul>
      </div>
    </nav>

    <div class="content" data-aos="fade-up">
      <h2 class="text-hero">Hey, This is our space.</h2>
      <hr style="border: 1px solid #fff; width: 300px;" />
      <!-- <button class="btn btn-outline-light mt-3 rounded-pill"
        >let's discuss</button
      > -->
      <a href="/class" class="btn btn-outline-light mt-3 rounded-pill"
        >Coding Class Here :)</a
      >
    </div>
  </section>
</div>

<style>
  /* hero */
  #hero {
    background-image: url(../img/orang-biru.png), url(../img/orang-kuning.png),
      url(../img/orang-merah.png), url(../img/planet-merah.png),
      url(../img/planet-biru.png), url(../img/planet-kuning.png),
      url(../img/Bintang-blur.png);
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-attachment: fixed;
  }

  .gradient {
    background: linear-gradient(
      90deg,
      rgba(27, 23, 48, 1) 0%,
      rgba(9, 51, 65, 1) 100%
    ) !important;
    background-attachment: fixed;
  }

  li .nav-link {
    color: #fff !important;
    /* font-weight: bold; */
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70%;
  }

  .content h2 {
    color: #fff;
    font-size: 40px;
    text-align: center;
  }

  .content h2 span {
    font-weight: bold;
  }

  .content .btn {
    /* width: 170px; */
    margin: 0 15px 0 15px;
    color: #fff;
  }

  @media screen and (max-width: 576px) {
    /* hero */
    #hero {
      background-image: url(../img/bg-space.gif);
      background-position: center center;
    }

    .content h2 {
      font-size: 32px;
    }
  }
  .text-hero {
    font-size: 5em;
    color: white;
    /* text-transform: uppercase; */
  }

  .garis {
    border-right: 0.05em solid;
    animation: caret 1s steps(1) infinite;
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }

  .nav-link {
    cursor: pointer;
  }

  .text-hero {
    border-right: solid 3px rgba(255, 255, 255, 0.75);
    white-space: nowrap;
    overflow: hidden;
    font-size: 28px;
    color: rgba(255, 255, 255, 0.7);
  }

  .text-hero {
    animation: animated-cursor 600ms steps(29, end) infinite;
  }

  @keyframes animated-cursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
      white-space: nowrap;
    }
    to {
      border-right-color: transparent;
    }
  }
</style>
