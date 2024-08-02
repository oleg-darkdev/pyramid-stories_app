
<script>
  export let screen;
</script>

<footer class='absolute bottom-0 w-full bg-black flex flex-row justify-center itemns-center py-4'>
  <button class="mx-1" on:click={()=> screen = 0}>
      <figure class="w-20">
        <img src="/images/icons/pyramids.svg" alt='pyramids btn'  class='{screen == 0 ? 'bg-white': ''}'/>
        <figcaption class='text-white '>Pyramids</figcaption>
      </figure>
  </button>
  <button class="mx-1" on:click={()=> screen = 1}>
      <figure class="w-20">
        <img src="/images/icons/game.svg" alt='game btn'  class='{screen == 1 ? 'bg-white': ''}'/>
        <figcaption class='text-white '>Play</figcaption>
      </figure>
  </button>
  <button class="mx-1 " on:click={()=> screen = 2}>
      <figure class="w-20 ">
        <img src="/images/icons/manual.svg" alt='manual btn'  class='{screen == 2 ? 'bg-white': ''}'/>
        <figcaption class='text-white '>Manual</figcaption>
      </figure>
  </button>
</footer>
