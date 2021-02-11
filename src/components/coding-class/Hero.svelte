<script>
    import * as animateScroll from "svelte-scrollto";
    import * as AOS from "aos";

    AOS.init({
        // offset: 200,
        // duration: 600,
        // easing: "ease-in-sine",
        // delay: 100,
    });
</script>

<div id="main">
    <div>
        <h3 data-aos="fade-up" data-aos-delay="200">
            Pelatihan dan Sertifikasi Bidang TIK
        </h3>
        <h1 data-aos="fade-up" data-aos-delay="400">
            <b>Basic PHP <br class="d-md-none" /> Web Development</b>
        </h1>
        <button
            data-toggle="modal"
            data-target="#daftar"
            data-aos="fade"
            data-aos-delay="1000"
            class="btn btn-color mt-3">Daftar Sekarang</button
        >
    </div>
    <img
        data-aos="fade-up"
        data-aos-delay="600"
        class="mt-5 img-fluid"
        src="../img/class/iPhone X.png"
        alt="Iphone X"
    />
</div>

<style>
    #main {
        margin-top: 100px;
        padding-bottom: 20px;
        text-align: center;
        position: relative;
        background-image: url("../img/class/Circle BG.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        /* height: 100vh; */
    }

    #main h3 {
        font-size: 1.2rem;
    }

    #main h1 {
        font-size: 2rem;
    }

    #main .btn-color {
        background-color: #8c30f5;
        color: white;
        transition: 0.3s;
    }

    #main .btn-color:hover {
        background-color: #7521d4;
    }
</style>
