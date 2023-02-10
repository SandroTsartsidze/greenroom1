<script lang="ts">
  import no from "$assets/Images/icons/no.png";
  import yes from "$assets/Images/icons/yes.png";

  const products: any = [
    {
      type: "Basic",
      price: 50,
      description: "simple solution with essential features for beginners",
      features: [
        {
          status: yes,
          title: "2 free domain name",
        },
        {
          status: yes,
          title: "2 free domain name",
        },
        {
          status: no,
          title: "2 free domain name",
        },
        {
          status: no,
          title: "2 free domain name",
        }
      ],
    },
    {
      type: "Average",
      price: 70,
      description: "simple solution with essential features for beginners",
      features: [
        {
          status: yes,
          title: "2 free domain name",
          style: "color: white;"
        },
        {
          status: yes,
          title: "2 free domain name",
          style: "color: white;"
        },
        {
          status: yes,
          title: "2 free domain name",
          style: "color: white;"
        },
        {
          status: no,
          title: "2 free domain name",
          style: "color: black;"
        }
      ],
    },
    {
      type: "Pro",
      price: 100,
      description: "simple solution with essential features for beginners",
      features: [
        {
          status: yes,
          title: "2 free domain name",
        },
        {
          status: yes,
          title: "2 free domain name",
        },
        {
          status: yes,
          title: "2 free domain name",
        },
        {
          status: yes,
          title: "2 free domain name",
        }
      ],
    },
  ];
  
  const mainText =
    "Discover endless opportunities tailored specifically for you with a simple subscription.";
</script>

<div class="services">
  <h1 class="mainText">{mainText}</h1>
  {#each products as product}
    <div class="service">
      <h1 class="Type">{product.type}</h1>
      <h1 class="price">${product.price}</h1>
      <p class="serviceDescription">{product.description}</p>
      {#each product.features as feature}
      <div class="features">
        <img src={feature.status} alt="feature" />
        <p style={feature.style}>{feature.title}</p>
      </div>
      {/each}
    </div>
  {/each}
</div>

<style type="scss" global>
  @import "./services.scss";
</style>
