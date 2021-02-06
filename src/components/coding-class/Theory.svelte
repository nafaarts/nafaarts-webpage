<script>
        let materi = [[ 
                "Apa itu HTML?",
                "Paragraf",
                "Heading",
                "List",
                "HyperLink",
                "Image/Video/Audio",
                "Table",
                "Form" 
            ],[ 
                "Pengenalan CSS",
                "Display",
                "Dimensi dan Overflow",
                "Box Model",
                "Float",
                "Position",
                "Border Radius",
                "Opacity",
                "Box Shadow",
                "Text Shadow",
                "Linear Gradient",
                "Radial Gradient",
                "Filter",
                "Transform",
                "Transition"
            ],[ 
                "Struktur Dasar PHP",
                "Struktur Kodisi Dan Pengulangan",
                "Array dan Fungsi",
                "String dan Tanggal",
                "File dan Direktori",
                "Pengenalan DBMS dan Mysql"
            ]]
</script>

<section id="materi" class="materi mt-5">
    <div class="container">
        <h1>Materi</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link btn-block text-left pt-2"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    HTML
                                </button>
                            </h2>
                        </div>

                        <div
                            id="collapseOne"
                            class="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                {#each materi[0] as item}
                                <button
                                    class="btn btn-block text-left bg-light pt-3 pb-3 pl-4"
                                    type="button">{item}</button
                                >
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link btn-block text-left collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    CSS
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseTwo"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                {#each materi[1] as item}
                                <button
                                    class="btn btn-block text-left bg-light pt-3 pb-3 pl-4"
                                    type="button">{item}</button
                                >
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link btn-block text-left collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    PHP
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseThree"
                            class="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                {#each materi[2] as item}
                                <button
                                    class="btn btn-block text-left bg-light pt-3 pb-3 pl-4"
                                    type="button">{item}</button
                                >
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img
                    class="img-fluid img-materi"
                    src="./img/class/materi.svg"
                    alt="by Undraw"
                    width="350"
                />
            </div>
        </div>
    </div>
</section>

<style>
    #materi h1 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 50px;
    }

    #materi {
        margin-bottom: 80px;
    }

    #materi .img-materi {
        margin: 20px;
        /* background-color: orange; */
    }

    .materi .card {
        border: none;
        /* width: 540px; */
    }
    .materi .card-header {
        border: none;
    }

    .materi .card-header h2 button {
        color: #18191f;
        text-decoration: none;
        font-weight: 700;
    }
    @media screen and (max-width: 576px) {
        body {
            overflow-x: hidden;
        }

        .materi .card {
            width: 460px;
        }
    }
</style>
