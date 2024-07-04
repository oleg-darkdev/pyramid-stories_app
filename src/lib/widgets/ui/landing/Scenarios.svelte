<script>
  import {ScenarioCard} from '$entities';
  import {scenarios} from '$shared'; 
</script>


<section class="section-work">
  <div class="padding-global">
    <div class="container-main">
      <div class="padding-section-large no-margin-bottom">
        <div class="margin-bottom margin-xhuge">
          <h2 class="heading-style-h0 text-align-center slideup-1">Scenarios</h2>
        </div>
      </div>
    </div>
    <div class="container-large">
      <div class="margin-bottom margin-xhuge">
        <div class="_3-columns-grid">
          {#each scenarios as scenario}
            <ScenarioCard {scenario}/>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

