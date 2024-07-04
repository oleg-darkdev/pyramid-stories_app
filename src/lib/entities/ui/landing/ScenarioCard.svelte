<script>
    export let scenario;
</script>


<div class="info-box background-color-schwarz">
    <div class="margin-bottom margin-xlarge">
    <div class="margin-bottom margin-large">
        <h3 class="heading-style-h4 {scenario.brandColor}">{scenario.title}</h3>
    </div>
    <div class="margin-bottom margin-small">
        <div class="line background-color-creme"></div>
    </div>
    {#each scenario.desc as desc}
        <p class="text-size-regular">
            {desc}
        </p>
    {/each}
    </div>
    <div class="image-wrap">
    <img src="{scenario.avatar}" loading="lazy" alt="scenario {scenario.title} avatar" class="image">
    </div>
</div>