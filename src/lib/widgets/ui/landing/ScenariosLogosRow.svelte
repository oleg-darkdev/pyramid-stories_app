<script>
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'
    import {pyramidsFullList} from '$shared';
</script>



<section class="carousel background-color-orange">
    <div class="logo-carousel-wrap h-40">
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
                {#each pyramidsFullList as pyramid}
                    <img src="{pyramid.icon}" loading="lazy" alt="{pyramid.title} - Logo" class="h-40 scenarion-logo">
                {/each}
            <!-- </Carousel>
        {/if} -->
    </div>
</section>



<style>
.logo-carousel-wrap {
  /* -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */
  flex: none;
  /* width: auto; */
  margin-top: 0;
  margin-bottom: 2rem;
  display: flex;
  /* transform: perspective(1px); */
}

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
