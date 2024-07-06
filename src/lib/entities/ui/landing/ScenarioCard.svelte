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
        <h3 class="heading-style-h4 text-center {scenario.textColor}">{scenario.title}</h3>
    </div>
    <div class="margin-bottom margin-small">
        <div class="line {scenario.brandColor}"></div>
    </div>
    {#each scenario.desc as desc}
    <!--  {scenario.textColor -->
        <p class="text-size-regular}">
            {desc}
        </p>
    {/each}
    </div>

</div>