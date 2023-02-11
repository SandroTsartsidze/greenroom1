<script>
  import Button from "$shared/button/button.svelte";
  import logo from "$assets/Images/icons/logo.png";
  import Signup from "../../signUp/signup.svelte";
  export let menu;
</script>

<div class="main">
  <div class="navbar">
    <img class="logo" src={logo} />
    <div class="navItems">
      {#each menu as item}
        <a href={item.path}>{item.name}</a>
      {/each}
    </div>
    <a href="#" class="login">Login</a>
    <Button><button class="join"><a>Join now</a></button></Button>
  </div>
</div>

<style type="scss" global>
  @import "./navbar.scss";
</style>
