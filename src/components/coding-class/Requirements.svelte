<script>
    import { each } from "svelte/internal";

    let requirements = [
        "Diutamakan usia 17 - 30 tahun",
        "Selama kegiatan mengenakan pakaian rapi dan sopan",
        "Bersedia mengikuti peraturan dan tata tertib",
        "Bersedia mengikuti pelatihan selamat 24 kali pertemuan",
        "Memiliki dan bisa mengoperasikan komputer / laptop",
        "Mematuhi Protokol 3M Kesehatan Covid-19"
    ];
</script>

<div id="requirements">
    <h1><b>Persyaratan</b></h1>

    <ol>
        {#each requirements as req}
            <li>{req}</li>
        {/each}
    </ol>
</div>

<style>
    #requirements h1 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 50px;
    }

    #requirements {
        margin-bottom: 100px;
    }

    ol {
        list-style: none;
        counter-reset: my-awesome-counter;
        width: 500px;
        margin: auto;
    }
    ol li {
        counter-increment: my-awesome-counter;
        position: relative;
        margin-bottom: 20px;
        padding-top: 5px;
    }
    ol li::before {
        content: counter(my-awesome-counter);
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        position: absolute;
        --size: 32px;
        left: calc(-1 * var(--size) - 10px);
        line-height: var(--size);
        width: var(--size);
        height: var(--size);
        top: 0;
        transform: rotate(-10deg);
        background: #ac69f8;
        border-radius: 50%;
        text-align: center;
        box-shadow: 1px 1px 0 #999;
    }

    @media screen and (max-width: 576px) {
        ol {
            width: 100%;
            /* padding: 20px; */
        }

        #requirements {
            padding-left: 30px;
            padding-right: 30px;
        }
    }
</style>
