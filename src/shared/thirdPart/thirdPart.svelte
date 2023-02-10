<script lang="ts">
  import firstUser from "$assets/Images/icons/firstUser.jpg";
  import secondUser from "$assets/Images/icons/secondUser.jpg";
  import thirdUser from "$assets/Images/icons/thirdUser.jpg";
  $: comments = [
    {
      comment:
        "I was impressed by the innovative approach this platform takes to connect entrepreneurs and investors. The user-friendly interface ...",
      image: firstUser,
      name: "John mark",
      type: "CEO",
    },
    {
      comment:
        "I was impressed by the innovative approach this platform takes to connect entrepreneurs and investors. The user-friendly interface ...",
      image: secondUser,
      name: "Mark white",
      type: "CEO",
    },
    {
      comment:
        "I was impressed by the innovative approach this platform takes to connect entrepreneurs and investors. The user-friendly interface ...",
      image: thirdUser,
      name: "Bob cayman",
      type: "CEO",
    },
  ];
</script>

<div class="thirdPart">
  {#each comments as comment}
    <div class="card">
      <p class="comment">{comment.comment}</p>
      <img src={comment.image} />
      <h1 class="name">{comment.name}</h1>
      <h1 class="type">{comment.type}</h1>
    </div>
  {/each}
</div>

<style type="scss" global>
  @import "./thirdPart.scss";
</style>
