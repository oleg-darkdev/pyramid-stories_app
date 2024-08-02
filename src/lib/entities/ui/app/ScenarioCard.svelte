<script>
    export let scenario;
</script>


<div class="info-box background-color-schwarz">
    <div class="margin-bottom margin-xlarge">
      <div class="image-wrap">
          <img src="{scenario.avatar}" loading="lazy" alt="scenario {scenario.title} avatar" class="image">
      </div>
      <div class="margin-bottom margin-large">
          <!--  -->
          <h3 class="heading-style-h4 text-center text-black">{scenario.title}</h3>
      </div>
      <div class="margin-bottom margin-small">
          <div class="line text-black"></div>
      </div>
      {#each scenario.desc as desc}
          <p class="text-size-regular} text-black">
              {desc}
          </p>
      {/each}

      <div class="button-wrap">
          <button class="button button-color-black w-button">Play this scenario</button>
      </div>
    </div>

</div>
