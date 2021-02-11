<section id="banner">
    <!-- <div class="container"> -->
    <div
        class="banner d-flex justify-content-center"
        data-aos="flip-down"
        data-aos-delay="500"
    >
        <div class="text-center text-white align-self-center">
            <h1><b>Tertarik ?</b></h1>
            <p>ayo ikuti kelasnya</p>
            <a
                href="/registration"
                class="btn btn-outline-light mt-3 rounded-pill text-light"
                >Daftar Sekarang</a
            >
        </div>
    </div>
</section>

<style>
    #banner {
        height: 430px;
    }

    #banner .banner {
        height: 300px;
        width: 86%;
        border-radius: 20px;
        background-image: url(../img/class/CTA.png);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        margin-left: auto;
        margin-right: auto;
    }

    #banner .btn {
        width: 170px;
        margin-top: 15px;
    }

    @media screen and (max-width: 576px) {
        /* banner */
        #banner .banner {
            height: 360px;
            width: 100%;
            border-radius: 0;
        }

        .banner h1 {
            font-size: 2em;
        }
    }
</style>
