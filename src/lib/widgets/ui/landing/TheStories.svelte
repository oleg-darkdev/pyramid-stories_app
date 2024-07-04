<script>
  import {ScenarioCard} from '$entities';
  import {boardgamesList} from '$shared'; 

  
</script>

<section class="section-pain background-color-black">
    <div class="padding-global">
        <div class="container-main">
        <div class="padding-section-large">
            <div class="_12-columns-grid">
            <div class="margin-bottom margin-xhuge no-margin-mobile">
                <div class="margin-bottom margin-medium">
                <h2 class="heading-style-h1 text-color-yellow">Part of <br> THE-Stories  </h2>
                </div>
            </div>

            <!-- check this id -->
            <div id="w-node-_73d74438-ab10-a082-7ea6-8d653619a1be-c0c55947" class="slideup-1">
                <div class="w-layout-grid _2-columns-grid">
                    {#each boardgamesList as boardgame, i}
                        <a href='{boardgame.link}' target="_blank" class='no-underline'>
                            <div class="pain-wrap">
                                <div class="margin-right margin-medium">
                                <div class="heading-style-h4 text-color-yellow">0{i + 1}</div>
                                </div>
                                <div>
                                    <h3 class="heading-style-h4 text-neutral-400 mb-4">{boardgame.title}</h3>
                                    <p class="text-size-regular text-neutral-400  slideup-3">
                                        {boardgame.desc}
                                    </p>
                                </div>
                            </div>
                        </a>
                    {/each}

                    <div>
                        <a href="https://the-stories.vercel.app/" target="_blank" class="button button-color-yellow w-button">More about THE Stories</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>