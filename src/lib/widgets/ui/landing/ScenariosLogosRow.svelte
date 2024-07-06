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
                    <img src="{scenario.icon}" loading="lazy" alt="{scenario.title} - Logo" class="scenarion-logo">
                {/each}
            <!-- </Carousel>
        {/if} -->
    </div>
</section>



<style>
.scenarion-logo {
  /* filter: invert(54%); */
  width: 12rem;
  /* margin-right: 1rem; */
}
.scenarion-logo.large {
  width: 8rem;
}

@media screen and (max-width: 767px) {
  .scenarion-logo {
    width: 6rem;
  }
  .scenarion-logo.large {
    width: 6rem;
  }
}

@media screen and (max-width: 479px) {
  .scenarion-logo {
    width: 8rem;
    /* margin-right: 3rem; */
  }
  .scenarion-logo.large {
    width: 4rem;
  }
}
</style>