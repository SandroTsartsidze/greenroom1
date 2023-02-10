<script lang="ts">
    import "./home.scss";
    import Button from "$shared/button/button.svelte";
    import firstLandingImage from "$assets/Images/icons/firstLandingImage.png";
    import line from "$assets/Images/icons/line.png";
    export let home;

  </script>


  <div>
    <img class="firstLandingImage" src={firstLandingImage} />
    <div class="textArea">
      <h1 class="homeText">{home.title}</h1>
      <p class="description">{home.description}</p>
    </div>
    <Button><button class="getStarted">Get started</button></Button>
    <img class="line" src={line} />
  </div>