<script>
  import {ScenarioCard} from '$entities';
  import {scenarios} from '$shared'; 
</script>



<section class="carousel background-color-orange">
    <div class="logo-carousel-wrap">
        {#each scenarios as scenario}
            <img src="images/65660e2a8b95661643a2455c_arralyze.svg" loading="lazy" alt="{scenario.title} - Logo" class="kundenlogo">
        {/each}
    </div>
    <div class="logo-carousel-wrap">
        {#each scenarios as scenario}
            <img src="images/65660e2a8b95661643a2455c_arralyze.svg" loading="lazy" alt="{scenario.title} - Logo" class="kundenlogo">
        {/each}
    </div>
</section>