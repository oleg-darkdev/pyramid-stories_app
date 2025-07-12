<script>
    export let scenario;

     let showFullInfo = false;
</script>


<div class="info-box background-color-schwarz">
    <div class="margin-bottom margin-xlarge">
      <div class="image-wrap">
          <img src="{scenario.avatar}" loading="lazy" alt="scenario {scenario.title} avatar" class="image">
      </div>
      <div class="margin-bottom margin-large">
          <!--  -->
          <h3 class="heading-style-h4 text-center {scenario.textColor}">{scenario.title}</h3>
      </div>
      <div class="margin-bottom margin-small">
          <div class="line {scenario.brandColor}"></div>
      </div>

      
      
      {#each showFullInfo ? scenario.desc : scenario.desc.slice(0, 1 )as desc}
          <p class="text-size-regular {scenario.textColor}  mb-4">
              {desc}
          </p>
      {/each}

      <div class="flex flex-row flex-wrap justify-between mt-4">
            <a href='/app' class="button button-color-black w-button">Play scenario</a>
            <button class="button button-color-black w-button" on:click={()=> showFullInfo = !showFullInfo}>
                <img src="{scenario.avatar}" alt='{scenario.title} btn'  class='w-6  h-6 {showFullInfo ? '': 'rotate-180'}'/>
            </button>
      </div>
    </div>

</div>
