<script>
    import Navbar from "../components/coding-class/Navbar.svelte";
    import Hero from "../components/coding-class/Hero.svelte";
    import Supporter from "../components/coding-class/Supporter.svelte";
    import Timeline from "../components/coding-class/Timeline.svelte";
    import Requirements from "../components/coding-class/Requirements.svelte";
    import Amenities from "../components/coding-class/Amenities.svelte";
    import CTA from "../components/coding-class/CTA.svelte";
    import Theory from "../components/coding-class/Theory.svelte";
    import Maps from "../components/coding-class/Maps.svelte";
    import Footer from "../components/coding-class/Footer.svelte";

    function daftar(){
        let nama = document.getElementById("nama").value;
        let asal_sekolah = document.getElementById("asal_sekolah").value;
        let no_hp = document.getElementById("no_hp").value;
        let pesan = `*REGISTRATION*%0a%0aHallo, saya *${nama}* dari *${asal_sekolah}* ingin mendaftar di kelas koding ini.%0a%0aNomor HP saya : *${no_hp}*`;
        let link = "https://api.whatsapp.com/send?phone=6281367020213&text=" + pesan;
        window.open(link, '_blank');
        // 6281367020213 - Yuna
        // 6285760557702 - Saddam
    }
</script>

<Navbar />
<Hero />
<!-- Modal -->
<div class="modal fade" id="daftar" tabindex="-1" role="dialog" aria-labelledby="daftarTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="daftarTitle">Daftar Kelas</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="nama">Nama Lengkap</label>
          <input type="text" class="form-control" id="nama" placeholder="Masukan Nama Lengkap">
        </div>
        <div class="form-group">
          <label for="asal_sekolah">Asal Sekolah / Kampus</label>
          <input type="text" class="form-control" id="asal_sekolah" placeholder="Masukan Asal Sekolah">
        </div>
        <div class="form-group">
          <label for="no_hp">No HP</label>
          <input type="text" class="form-control" id="no_hp" placeholder="Masukan No Handphone">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button on:click|once={daftar} class="btn btn-color">Daftar</button>
      </div>
    </div>
  </div>
</div>

<Supporter />
<Timeline />
<Requirements />
<Amenities />
<CTA />
<Theory />
<Maps />
<Footer />

  <style>
  .btn-color {
        background-color: #8c30f5;
        color: white;
        transition: 0.3s;
    }

  .btn-color:hover {
        background-color: #7521d4;
    }
    
    /* .modal-content {
      width: 380px;
      margin: auto;
    } */
  </style>

<!-- <h5 class="text-center m-3">~ on progress ~</h5> -->
