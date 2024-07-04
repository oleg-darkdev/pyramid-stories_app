<script>
    import {StatCard} from '$entities';
    import {tagsLeft, tagsRight} from '$shared'; 
</script>

<section class="section-words background-color-blau">
  <div class="words-container">
    <div class="carousel left">
      <div class="words-carousel-wrap left">
        {#each tagsLeft as tag}
          <div class="marquee-text">{tag}</div>
        {/each}
      </div>
      <div class="words-carousel-wrap left">
        {#each tagsLeft as tag}
          <div class="marquee-text">{tag}</div>
        {/each}
      </div>
    </div>
    <div class="carousel right">
      <div class="words-carousel-wrap right">
        {#each tagsLeft as tag}
          <div class="marquee-text">{tag}</div>
        {/each}
      </div>
      <div class="words-carousel-wrap right">
        {#each tagsLeft as tag}
          <div class="marquee-text">{tag}</div>
        {/each}
      </div>
  </div>
</section>