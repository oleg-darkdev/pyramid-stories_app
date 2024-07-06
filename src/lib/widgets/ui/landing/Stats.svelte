<script>
    import {StatCard} from '$entities';
    import {stats} from '$shared'; 
</script>

<section class="section-zahlen background-color-creme">
    <div class="_50-50-container">
        <div class="_50-wrap">
        <!-- zahlen-image -->
        <!-- <img src="images/stats.svg" loading="lazy" alt="Stats image" class="w-full"> -->
        </div>


        <div  class="_50-wrap">
        <div  class="zahlen-wrap slideup-2 bg-black">
            <a name="about" />
            <div class="margin-bottom margin-medium">
                <h2 class="heading-style-h1 text-color-creme">In <br> numbers. </h2>
            </div>
                <div class="width-50 mb-10">
                    <p class="text-size-regular text-neutral-300 slideup-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                {#each stats as stat}
                    <StatCard {stat} />
                {/each}
        </div>
        <div class="muster-bg "></div>
        </div>
    </div>
</section>

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

</style>
