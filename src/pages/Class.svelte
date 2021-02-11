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
</script>

<Navbar />
<Hero />
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
