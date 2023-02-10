<script lang="ts">
  import headphones from "$assets/Images/icons/headphones.png";
  import Ask from "$assets/Images/icons/ask.png";
  import socials from "$assets/Images/icons/socials.png";
  const call =
    "Need Help? Don't worry. Please call us and our dedicated team will help you. Call: (+356) 356 356 356";
  const ask =
    "Please feel free to ask any questions  before making the purchase.Ask:gnroom@supp.com";
</script>

<div class="contact">
  <h1 class="contactText">Contact us</h1>
  <div class="contactItems">
    
    <div class="call">
      <img src={headphones} />
      <p>{call}</p>
    </div>

    <div class="ask">
      <img src={Ask} />
      <p>{ask}</p>
    </div>

  </div>
  <img class="socials" src={socials} />
</div>

<style type="scss" global>
  @import "./contact.scss";
</style>
