<script>
    function daftar() {
        let nama = document.getElementById("nama").value;
        let asal_sekolah = document.getElementById("asal_sekolah").value;
        let no_hp = document.getElementById("no_hp").value;
        let pesan = `*REGISTRATION*%0a%0aHallo, saya *${nama}* dari *${asal_sekolah}* ingin mendaftar di kelas koding ini.%0a%0aNomor HP saya : *${no_hp}*`;
        let link =
            "https://api.whatsapp.com/send?phone=6281367020213&text=" + pesan;
        window.open(link, "_blank");
        // 6281367020213 - Yuna
        // 6285760557702 - Saddam
    }
</script>

<div class="wrapper d-flex justify-content-center align-items-center">
    <div class="close">
        <a class="text-light" href="/class"><i class="fas fa-fw fa-times" /></a>
    </div>
    <div class="col-md-4 form">
        <h3 class="text-center">REGISTRATION</h3>
        <hr />
        <div class="form-group">
            <label for="nama">Nama Lengkap</label>
            <input
                type="text"
                class="form-control"
                id="nama"
                placeholder="Masukan Nama Lengkap"
            />
        </div>
        <div class="form-group">
            <label for="asal_sekolah">Asal Sekolah / Kampus</label>
            <input
                type="text"
                class="form-control"
                id="asal_sekolah"
                placeholder="Masukan Asal Sekolah"
            />
        </div>
        <div class="form-group mb-5">
            <label for="no_hp">No HP</label>
            <input
                type="text"
                class="form-control"
                id="no_hp"
                placeholder="Masukan No Handphone"
            />
        </div>

        <button on:click|once={daftar} class="btn btn-warning"
            ><i class="fas fa-fw fa-sticky-note" /> Daftar</button
        >
        <a href="/class" class="btn text-light" data-dismiss="modal">Batal</a>
    </div>
</div>

<style>
    .wrapper {
        color: #fff;
        background-color: #8c30f5;
        width: 100%;
        height: 100vh;
    }
    .wrapper .close {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    input {
        background-color: #8c30f5;
        border: 2px solid #fff;
        color: #fff;
    }

    input::placeholder {
        color: lightgray;
        font-size: 12px;
    }

    input:focus {
        background-color: #8c30f5;
        border: 2px solid yellow;
    }

    @media screen and (max-width: 576px) {
        .form {
            padding: 30px;
        }
    }
</style>
