<script>
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'
    import {scenarios} from '$shared'; 
</script>



<section class="carousel background-color-orange">
    <div class="logo-carousel-wrap">
        <!-- {#if browser}
            <Carousel
            particlesToShow={3}
            particlesToScroll={1}
            duration={800}
            autoplay
            timingFunction="linear"
            dots={false}
            arrows={false}
            swiping={true}
            > -->
                {#each scenarios as scenario}
                    <img src="{scenario.icon}" loading="lazy" alt="{scenario.title} - Logo" class="kundenlogo">
                {/each}
            <!-- </Carousel>
        {/if} -->
    </div>
</section>



<style>
.kundenlogo {
  /* filter: invert(54%); */
  width: 12rem;
  /* margin-right: 1rem; */
}
.kundenlogo.large {
  width: 8rem;
}

@media screen and (max-width: 767px) {
  .kundenlogo {
    width: 6rem;
  }
  .kundenlogo.large {
    width: 6rem;
  }
}

@media screen and (max-width: 479px) {
  .kundenlogo {
    width: 8rem;
    /* margin-right: 3rem; */
  }
  .kundenlogo.large {
    width: 4rem;
  }
}
</style>