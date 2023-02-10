<script lang="ts">
  import secondPart from "$assets/Images/icons/secondPart.png";
  import Star from "$assets/Images/icons/Star.png";
  const mainText =
    "Unlock Your Potential and Realize Your Dreams with the Perfect Startup Discovery";
  const description =
    "Unleash Your Investment Potential: Easily Identify the Right Startup Match from Thousands of Pre-Screened Options, Make Informed Decisions with Critical Financial Metrics, and Be Prepared to Invest in Just a Month";
  const stars = [
    "Smart Investment Strategy: Assess Web, Customer, and Financial Metrics",
    "Narrow Down Options with Filterable Listings.",
    "Effortlessly Generate and Send LOIs",
    "Secure Financing with Boopos Support",
  ];
  const underSecondPartText =
    "Empowered Voices: Testimonials from Satisfied Customers";
</script>

<div class="secondPart">
  <img class="secondPartImg" src={secondPart} />
  <div class="secondPart-textArea">
    <h1 class="secondPart-mainText">{mainText}</h1>
    <p class="secondPart-description">{description}</p>
  </div>
  
  {#each stars as star}
    <div class="stars">
      <img src={Star} />
      <p>{star}</p>
    </div>
  {/each}
  <h1 class="underSecondPartText">{underSecondPartText}</h1>
</div>

<style type="scss" global>
  @import "./secondPart.scss";
</style>
