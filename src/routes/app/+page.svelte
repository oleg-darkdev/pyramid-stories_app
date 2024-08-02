<script>
  import {FooterApp} from '$widgets';
  import {ScenarioCardApp} from '$entities';
  import {chinaScenario, pyramidsFullList, egyptScenario, indonesiaScenario, mesoamericaScenario, peruScenario, sudanScenario, scenariosFullList} from '$shared';

  $: screen = 0;
</script>


<svelte:head>
	<title>App - Puramids stories</title>
</svelte:head>

<div class="h-[85vh] overflow-y-scroll ">
  {#if screen == 0}
{#each scenariosFullList as scenario}
<section class=" {scenario.brandColor}">
    <div class="padding-global">
        <div class="container-main">
        <div class="padding-section-large w-full">

            <div class='bg-black'>
                <div class="margin-bottom margin-small  ">
                    <h3 class="heading-style-h2 {scenario.textColor}">
                        Pyramids from
                        <br>
                        {scenario.title} region
                    </h3>
                </div>
            </div>

          <div class="container-large">
                <div class="">
                  <div class="_3-columns-grid">
                    {#each scenario.pyramids as scenario}
                      <ScenarioCardApp {scenario}/>
                    {/each}
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
</section>
{/each}
  {:else if screen == 1}
    <section class="">
        <div class="padding-global">
          <div class="container-main">
          <div class="padding-section-large w-full">
            <div class='bg-black'>
                  <div class="margin-bottom margin-small  ">
                      <h3 class="heading-style-h2 text-white">
                        Play boardgame
                      </h3>
                  </div>
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


</style>
