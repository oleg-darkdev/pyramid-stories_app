<script>
    import {tagsLeft, tagsRight} from '$shared'; 
    import {scenarios} from '$shared'; 
</script>


<section class="section-words background-color-blue">
  <div class="words-container">
    <div class="carousel left">
      <div class="words-carousel-wrap left">
        {#each scenarios as scenario}
          <div class="marquee-text">{scenario.country}</div>
        {/each}
      </div>
      <!-- <div class="words-carousel-wrap left">
        {#each scenarios as scenario}
          <div class="marquee-text">{scenario.title}</div>
        {/each}
      </div> -->
    </div>
    <div class="carousel right">
      <div class="words-carousel-wrap right">
        {#each scenarios as scenario}
          <div class="marquee-text">{scenario.title}</div>
        {/each}
      </div>
      <!-- <div class="words-carousel-wrap right">
        {#each tagsLeft as tag}
          <div class="marquee-text">{tag}</div>
        {/each}
      </div> -->
  </div>
</section>



<style>
  .section-words {
  align-items: center;
  position: relative;
}
.words-container {
  z-index: 8;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
  display: flex;
  overflow: hidden;
}
  .carousel {
  flex-direction: row;
  width: 100%;
  display: flex;
  overflow: hidden;
}
.carousel.left {
  background-color: var(--darkGray);
  color: var(--blue);
  width: 102%;
  margin-bottom: 0.75rem;
  transform: rotate(1.5deg);
}
.carousel.right {
  background-color: var(--creme);
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
}

.words-carousel-wrap {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  flex: none;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  transform: perspective(1px);
}

@media screen and (max-width: 479px) {
  .words-carousel-wrap {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

@media screen and (max-width: 991px) {
  .words-container {
    padding-top: 6rem;
  }
}
@media screen and (max-width: 767px) {
  .words-container {
    padding-top: 4rem;
  }
}
</style>