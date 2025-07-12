<script>
  import {FooterApp} from '$widgets';
  import {ScenarioCardApp} from '$entities';
  import {chinaScenario, pyramidsFullList, egyptScenario, indonesiaScenario, mesoamericaScenario, peruScenario, sudanScenario, scenariosFullList} from '$shared';

  $: screen = 0;

    import {FeatureCard, StatCard} from '$entities';
    import {features, stats} from '$shared';

    let selectedScenarioId = 0;
  let screenGame = 0;
</script>

<svelte:head>
	<title>App - Puramids stories</title>
</svelte:head>

<div class="h-[85vh] overflow-y-scroll ">
  {#if screen == 0}
{#each scenariosFullList as scenario}
<section class=" {scenario.brandColor}">
        <div class="container-main pr-10">
        <div class=" w-full">

            <div class='bg-black max-w-6xl '>
                <div on:click={()=> (selectedScenarioId == scenario.id) ? selectedScenarioId = 0: selectedScenarioId = scenario.id} class="p-2 flex flex-row justfy-between w-full items-center">
                    <h3 class="heading-style-h2  w-full {scenario.textColor}">
                        Pyramids from
                        <br>
                        {scenario.title} region
                    </h3>

                      <button class="w-40" >
                        <figure class="w-20">
                          <img src="{scenario.icon}" alt='{scenario.title} btn'  class=' {selectedScenarioId == scenario.id ? 'bg-white': 'rotate-180'}'/>
                          <!-- <figcaption class='text-white '>{selectedScenarioId == scenario.id ? 'Hide' : 'Show' } scenarios</figcaption> -->
                        </figure>
                    </button>
                </div>
            </div>

            {#if selectedScenarioId == scenario.id}
          <div class="container-large">
                  <div class="_3-columns-grid">
                    {#each scenario.pyramids as scenario}
                      <ScenarioCardApp {scenario}/>
                    {/each}
                  </div>
              </div>
            {/if}

        </div>
      </div>
</section>
{/each}
  {:else if screen == 1}
    <section class="">
        <div class="padding-global">
          <div class="container-main">
          <div class=" w-full">
            <div class='bg-black'>
              <div class="padding-global">
                <div class="w-full flex justify-center items-center my-10">
                    <button on:click={()=> screenGame = screenGame + 1} class=" button button-color-orange w-button">Na przod</button>
                </div>


                  <div class="container-main">
                  <div class="w-full">
                    {#if screenGame == 0}

                  <div class="w-layout-grid _3-columns-grid ">
                      {#each features as feature}
                          <FeatureCard {feature} />
                      {/each}
                  </div>

                 
                  {:else if screenGame == 1}
                  <div class="_50-50-container">
                    <div class="_50-wrap ">
                      {#each stats as stat}
                                <StatCard {stat} />
                            {/each}
                      </div>
                  </div>
                {/if}
                
              </div>
               

            </div>
          </div>
        </div>
    </section>
  {:else if screen == 2}
    <section class="">
        <div class="padding-global">
          <div class="container-main">
          <div class="padding-section-large w-full">
            <div class='bg-black'>
                  <div class="margin-bottom margin-small  ">
                      <h3 class="heading-style-h2 text-white">
                        Manual
                      </h3>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>

  {/if}
</div>

<FooterApp bind:screen/>



<style>
.muster-bg {
  z-index: 0;
  background-color: #000;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.scenarion-stats.background-color-gr-n {
  position: relative;
}

@media screen and (max-width: 479px) {
  .scenarion-stats {
    flex-direction: column;
    display: flex;
  }
}
</style>
