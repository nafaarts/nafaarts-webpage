<script>
    import Carousel from "@beyonk/svelte-carousel";

    let testimonials = [
        {
            name: "Muhammad Naufal Alfadhil",
            profesion: "Back-end Developer",
            photo:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            testi: "Sangat asik kerja di Nafaarts, hari saya berasa indah",
        },
        {
            name: "Ouzy Maulana",
            profesion: "Front-End Developer",
            photo:
                "https://images.pexels.com/photos/5944321/pexels-photo-5944321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            testi: "Man Jadda Wa Jadda. Good luck Nafaarts!!",
        },
        {
            name: "Putri Handayani",
            profesion: "Design Graphics",
            photo:
                "https://images.pexels.com/photos/5606414/pexels-photo-5606414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            testi: "Sangat Profesional dan sangat baik pelayanannya",
        },
        {
            name: "Daffaq SP",
            profesion: "Marketing",
            photo:
                "https://i0.wp.com/widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-3.png",
            testi: "Sangat Impresif",
        },
    ];
</script>

<!-- <section id="testimonial">
    <div class="container">
        <div id="testimonials" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li
                    data-target="#testimonials"
                    data-slide-to="0"
                    class="active"
                />
                <li data-target="#testimonials" data-slide-to="1" />
                <li data-target="#testimonials" data-slide-to="2" />
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="text-center testimonial-item">
                        <div
                            class="photo rounded-circle mx-auto mb-4"
                            style="background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"
                        />
                        <h5><b>Husni</b></h5>
                        <p>Chief Executive BKK</p>
                        <h4 class="mt-2">
                            <q
                                >Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam</q
                            >
                        </h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="text-center testimonial-item">
                        <div
                            class="photo rounded-circle mx-auto mb-4"
                            style="background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"
                        />
                        <h5><b>Husni</b></h5>
                        <p>Chief Executive BKK</p>
                        <h4 class="mt-2">
                            <q
                                >Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam</q
                            >
                        </h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="text-center testimonial-item">
                        <div
                            class="photo rounded-circle mx-auto mb-4"
                            style="background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"
                        />
                        <h5><b>Husni</b></h5>
                        <p>Chief Executive BKK</p>
                        <h4 class="mt-2">
                            <q
                                >Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam</q
                            >
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->

<section id="testimonial">
    <Carousel perPage={{ 576: 1 }} autoplay="5000" dots={false}>
        {#each testimonials as testimonial}
            <div class="slide-content">
                <div class="text-center testimonial-item">
                    <div
                        class="photo rounded-circle mx-auto mb-4"
                        style="background-image: url({testimonial.photo});"
                    />
                    <h5><b>{testimonial.name}</b></h5>
                    <p>{testimonial.profesion}</p>
                    <h4 class="mt-2">
                        <q>{testimonial.testi}</q>
                    </h4>
                </div>
            </div>
        {/each}
    </Carousel>
</section>

<style>
    #testimonial {
        height: 560px;
        padding: 120px 0 100px 0;
        background: #f2f2f2;
    }

    #testimonial .photo {
        height: 130px;
        width: 130px;
        background-size: cover;
        background-position: center center;
    }

    #testimonial .testimonial-item {
        width: 50%;
        margin: auto;
    }

    /* #testimonial .carousel-indicators {
        top: 350px;
    }

    #testimonial .carousel-indicators li {
        height: 15px !important;
        width: 15px !important;
        border-radius: 50%;
        background-color: #c4c4c4;
    } */

    @media screen and (max-width: 576px) {
        /* testimonial */
        #testimonial {
            padding: 20px 0 100px 0;
        }

        #testimonial .photo {
            height: 100px;
            width: 100px;
        }

        #testimonial .testimonial-item {
            width: 80%;
            margin: auto;
        }
    }
</style>
