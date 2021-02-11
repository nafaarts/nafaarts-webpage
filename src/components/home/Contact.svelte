<section id="contact">
    <div class="container">
        <h3 class="mb-3"><b>Contact</b> Us</h3>
        <div class="row">
            <div class="col-lg-6">
                <iframe
                    title="Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7942.472159958118!2d95.3056706229007!3d5.5319571628521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403a0209034ee9%3A0x753824812ea8a01b!2sGeuceu%20Komp.%2C%20Kec.%20Banda%20Raya%2C%20Kota%20Banda%20Aceh%2C%20Aceh!5e0!3m2!1sid!2sid!4v1600931181817!5m2!1sid!2sid"
                    width="500"
                    height="344"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    data-aos="fade-right"
                    data-aos-delay="500"
                />
            </div>
            <div class="col-lg-6">
                <form method="POST">
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            data-aos="fade-top"
                            data-aos-delay="500"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            data-aos="fade-top"
                            data-aos-delay="600"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            data-aos="fade-top"
                            data-aos-delay="700"
                        />
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            id="message"
                            name="message"
                            rows="3"
                            placeholder="Message"
                            data-aos="fade-top"
                            data-aos-delay="800"
                        />
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        data-aos="fade-top"
                        data-aos-delay="900">Send</button
                    >
                </form>
            </div>
        </div>
    </div>
</section>

<style>
    /* contact */
    #contact {
        padding: 100px 0 100px 0;
    }

    #contact iframe {
        padding-bottom: 15px;
        border-radius: 15px;
    }

    #contact input {
        background-color: #f2f2f2;
        height: 50px;
        border: none;
        border-radius: 10px;
    }

    #contact textarea {
        background-color: #f2f2f2;
        border: none;
        border-radius: 10px;
    }

    #contact input::placeholder {
        font-size: 14px !important;
    }

    #contact button {
        background-color: #0c2e3e;
        border-radius: 10px;
        width: 275px;
        height: 50px;
    }

    @media screen and (max-width: 576px) {
        /* contact */
        #contact iframe {
            width: 98%;
        }
    }
</style>
