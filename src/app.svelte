<script lang="ts">
  import { interfaces } from "./services/interfaces";
  import Navbar from "$shared/navbar/navbar.svelte";
  import Contact from "$shared/contact/contact.svelte";
  import ThirdPart from "$shared/thirdPart/thirdPart.svelte";
  import Home from "$shared/home/home.svelte";
  import Footer from "$shared/footer/footer.svelte";
  import Services from "$shared/services/services.svelte";
  import SecondPart from "./shared/secondPart/secondPart.svelte";
  import Signup from "./signUp/signup.svelte";
</script>

<main>

  <Signup  />

  <!-- <Navbar menu={interfaces.navbar} />
  <Home home={interfaces.home} />
  <SecondPart />
  <ThirdPart  />
  <Services />
  <Contact />
  <Footer /> -->
</main>