<script>
    import {FeatureCard} from '$entities';
    import {features} from '$shared';
</script>

<section class="section-card background-color-yellow">
    <div class="padding-global">
        <a name="features" />

        <div class="container-main">
        <div class="padding-section-large w-full">
            <div class="card-container hide-tablet">
                <div class="the-stories-wrap">
                    <h2 class="heading-style-h0 text-color-orange">Pyramid Stories Features </h2>
                </div>

            </div>

            <div>

                <div class="margin-bottom margin-xhuge">
                    <h3 class="heading-style-h2">
                        Educational boardgame
                        <br>
                        with mega features
                    </h3>
                </div>
            </div>

            <div class="w-layout-grid _3-columns-grid mb-20">
                {#each features as feature}
                    <FeatureCard {feature} />
                {/each}
            </div>

              <div class='w-full flex flex-col  content-end items-end'>
                <div class="margin-bottom margin-small">
                <div class="heading-style-h4">
                    It's time to get started!
                </div>
                </div>
                <div class="text-size-regular">
                    That's already
                    <br>
                    enough to start playing </div>
                <div class="button-wrap">
                    <a href="/app" class="button button-color-orange w-button">Go to app</a>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>


<style>


</style>
