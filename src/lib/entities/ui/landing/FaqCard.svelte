<script>
    export let faqData;
</script>

<div class="akkordeon-item">
    <div class="akkordeon-title-container" on:click={()=> {
        faqData.show != faqData.show;
        console.log(faqData.show)        
    }}>
        <div class="akkordeon-title-wrap">
            <div class="margin-right margin-medium">
                <div class="faq-nummer">0{faqData.id}</div>
            </div>
            <p class="heading-style-h5 text-left text-color-creme">
                {faqData.q}
            </p>
        </div>
        <div class="akkordeon-plus-wrap faq"></div>
    </div>
    {#if faqData.show}
        <div class="akkordeon-content-container">
            <div class="akkordeon-content-wrap">
                {#each faqData.a as answer}
                    <p class="text-size-regular text-left mb-2">
                        {answer}    
                    </p>
                {/each}
            </div>
        </div>
    {/if}

    <div class="whipe"></div>
</div>



<style>
    .akkordeon-plus-wrap {
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  transition: background-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  position: relative;
}
.akkordeon-plus-wrap.faq {
  background-image: url(/images/icon-gelb.svg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.akkordeon-content-wrap {
  flex-direction: column;
  padding-bottom: 2rem;
  padding-left: 4.4rem;
  padding-right: 4rem;
  display: flex;
}

.faq-nummer {
  color: var(--gelb);
  margin-top: 4px;
  font-family: din-2014-narrow, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 0.7;
}
.akkordeon-content-container {
  z-index: 1;
  background-color: var(--transparent);
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.akkordeon-title-wrap {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  padding-bottom: 2rem;
  display: flex;
  position: relative;
}
.akkordeon-item {
  border-top: 2.5px solid var(--schwarz);
  border-bottom: 2.5px none var(--schwarz);
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  display: flex;
  position: relative;
  overflow: hidden;
}
.akkordeon-item.last {
  border-bottom-style: solid;
}
.akkordeon-title-container {
  z-index: 1;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  position: relative;
}

.whipe {
  z-index: 0;
  background-color: var(--transparent);
  width: 100%;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

@media screen and (max-width: 991px) {
  .akkordeon-title-wrap {
    grid-column-gap: 2rem;
    grid-row-gap: 0rem;
  }
.faq-nummer {
    margin-top: 4px;
  }
    .akkordeon-plus-wrap:hover {
    background-color: #fff;
  }
  .akkordeon-plus-wrap:active {
    background-color: #ff5330;
  }
}

@media screen and (max-width: 767px) {
  .akkordeon-title-wrap {
    grid-column-gap: 1.25rem;
  }
.akkordeon-plus-wrap {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media screen and (max-width: 479px) {
  .akkordeon-title-wrap {
    grid-column-gap: 0rem;
    grid-row-gap: 1rem;
    flex-direction: column;
  }

.whipe {
    height: 30em;
  }

.akkordeon-plus-wrap {
    font-size: 0.5rem;
  }
  .akkordeon-plus-wrap.faq:hover {
    background-color: var(--transparent);
  }
}
</style>