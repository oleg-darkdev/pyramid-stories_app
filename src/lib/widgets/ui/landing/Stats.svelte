<script>
    import {StatCard} from '$entities';
    import {stats} from '$shared'; 
</script>

<section class="section-zahlen background-color-gr-n">
    <div class="_50-50-container">
        <div class="_50-wrap">
        
        <img src="images/6581a1d36e128dea2b90e1d1_CK1-2.webp" loading="lazy" alt="" class="zahlen-image">
        </div>
        <div  class="_50-wrap">
        <div  class="zahlen-wrap slideup-2">
            <div class="margin-bottom margin-medium">
                <h2 class="heading-style-h1 text-color-creme">Lorem <br> Ipsum </h2>
            </div>
                <div class="width-50">
                    <p class="text-size-regular slideup-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                {#each stats as stat}
                    <StatCard {stat} />
                {/each}
        </div>
        <div class="muster-bg zahlen"></div>
        </div>
    </div>
</section>