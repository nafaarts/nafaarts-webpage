<script>
    import { each, text } from "svelte/internal";

    let teams = [
        {
            name: "Muhammad Naufal Alfadhil",
            devition: "Back-end Developer",
            photo: "/img/team/naufal.jpg",
            instagram: "",
            telegram: "",
            email: "",
        },
        {
            name: "Reza Fahlevi",
            devition: "Front-end Developer",
            photo: "/img/team/reza.jpg",
            instagram: "",
            telegram: "",
            email: "",
        },
        {
            name: "Faruq Miqdad",
            devition: "UI/UX Design",
            photo: "/img/team/miqdad.jpg",
            instagram: "",
            telegram: "",
            email: "",
        },
        {
            name: "Nabil Mukhtar Harahap",
            devition: "Nafalorant",
            photo: "/img/team/nabil.jpg",
            instagram: "",
            telegram: "",
            email: "",
        },
    ];
</script>

<style>
    #developers {
        /* height: 500px; */
        padding: 100px 0 100px 0;
        background: #132337;
        color: #fff;
    }

    #developers .developer-photo {
        height: 130px;
        width: 130px;
        background: #fff;
        background-size: cover;
        background-position: center center;
        position: relative;
    }

    #developers .developer-social-media {
        height: 130px;
        width: 130px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
        opacity: 0;
        transition: 0.3s;
    }

    #developers .developer:hover .developer-social-media {
        opacity: 1;
    }

    #developers .developer-social-media ul {
        list-style-type: none;
        display: inline;
        padding: 0;
        margin: 0;
    }

    #developers .developer-social-media ul li {
        display: inline;
    }

    #developers .developer-social-media ul a {
        transition: 0.3s;
        color: #fff;
    }

    #developers .developer-social-media ul a:hover {
        color: #132337;
    }
</style>

<section id="developers">
    <div class="container">
        <div class="row">
            {#each teams as team}
                <div
                    class="col-md-2 mx-auto mx-1 my-2 text-center developer"
                    data-aos="fade-left"
                    data-aos-delay="1000">
                    <div
                        class="developer-photo rounded-circle mx-auto mb-4"
                        style="background-image: url({team.photo});">
                        <div class="developer-social-media">
                            <ul>
                                <li>
                                    <a href={team.telegram}><i
                                            class="far fa-paper-plane" /></a>
                                </li>
                                <li>
                                    <a href={team.instagram}><i
                                            class="fab fa-fw fa-instagram" /></a>
                                </li>
                                <li>
                                    <a href={team.email}><i
                                            class="far fa-fw fa-envelope" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <small>{team.devition}</small>
                    <p><b>{team.name}</b></p>
                </div>
            {/each}
        </div>
    </div>
</section>
