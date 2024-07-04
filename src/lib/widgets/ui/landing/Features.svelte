<script>
    import {FeatureCard} from '$entities';
    import {features} from '$shared'; 
</script>

<section class="section-card background-color-gelb">
    <div class="padding-global">
                        <a name="features" />

        <div class="container-main">
        <div class="padding-section-large">
            <div class="card-container hide-tablet">
                <div class="katie-caiger-slide-wrap">
                    <h2 class="heading-style-h0 text-color-orange">Pyramid Stories Features </h2>
                </div>

            </div>

            <div>

                <div class="margin-bottom margin-xhuge">
                    <h3 class="heading-style-h2">
                        Lorem Ipsum is simply  
                        <br>
                        dummy text of the printing 
                    </h3>
                </div>
            </div>
            
            <div class="w-layout-grid _3-columns-grid">
                {#each features as feature}
                    <FeatureCard {feature} />
                {/each}

            <!-- check this id -->
            <div id="w-node-_05f20edc-f65a-f3e0-75a5-784e0b1deca7-c0c55947">
                <div class="margin-bottom margin-small">
                <div class="heading-style-h4">
                    Lorem Ipsum is simply
                </div>
                </div>
                <div class="text-size-regular">
                    Lorem Ipsum is simply  
                    <br>
                    dummy text of the printing </div>
                <div class="button-wrap">
                <a href="/" class="button button-color-orange w-button">Lorem Ipsum is simply </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>