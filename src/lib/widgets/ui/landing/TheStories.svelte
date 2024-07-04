<script>
  import {ScenarioCard} from '$entities';
  import {scenarios} from '$shared'; 

  
</script>

<section class="section-pain background-color-black">
    <div class="padding-global">
        <div class="container-main">
        <div class="padding-section-large">
            <div class="_12-columns-grid">
            <div class="margin-bottom margin-xhuge no-margin-mobile">
                <div class="margin-bottom margin-medium">
                <h2 class="heading-style-h1 text-color-blau">Lorem <br> dummy text of  </h2>
                </div>
            </div>

            <!-- check this id -->
            <div id="w-node-_73d74438-ab10-a082-7ea6-8d653619a1be-c0c55947" class="slideup-1">
                <div class="w-layout-grid _2-columns-grid">
                    {#each scenarios as boardgame}
                        <div class="pain-wrap">
                            <div class="margin-right margin-medium">
                            <div class="heading-style-h4 text-color-blau">01</div>
                            </div>
                            <h3 class="heading-style-h4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        </div>
                    {/each}

                    <div>
                        <a href="https://the-stories.vercel.app/" target="_blank" class="button button-color-blau w-button">More about THE Stories</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>