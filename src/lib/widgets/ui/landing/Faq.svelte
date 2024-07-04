<script>
    import {FaqCard} from '$entities';
    import {faq} from '$shared'; 
</script>

<section class="section-faq background-color-gr-n min-h-screen">
  <div class="padding-global">
    <div class="container-main">
       <a name="faq" />
      <div class="padding-section-large">
        <div  class=" w-tabs">            

          <div class="tab-wrap tabs-menu slideup-1 w-tab-menu">
              <div class="tab-link-tab-1  w-inline-block  w-tab-link w--current">
                <div class="margin-bottom margin-medium">
                  <h2 class="heading-style-h1 text-color-gelb">F.A.Q.</h2>
                </div>
                <div>
                  <h3 class="heading-style-h6 text-color-creme">Lorem Ipsum is simply dummy text of the printing</h3>
                </div>
              </div>

          </div>

          <div class="tabs-content slideup-2 w-tab-content">
            <div class=" w--tab-active">
              {#each faq as faqData }
                <FaqCard {faqData} />
              {/each}
            </div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
  .section-faq {
  /* position: relative; */
}
.section-faq.background-color-gr-n {
  background-color: var(--green);
}

  

.tab-wrap {
  grid-area: 1/2/2/6;
}
.w-tabs {
  position: relative;
}
.w-tabs:before,
.w-tabs:after {
  content: " ";
  grid-area: 1/1/2/2;
  display: table;
}
.w-tabs:after {
  clear: both;
}

  .tabs-menu {
  background-color: var(--transparent);
  flex-direction: column;
  flex: 0 25%;
  display: flex;
}

  .w-tab-menu {
  position: relative;
}

  .w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}
.w-tab-link.w--current {
  background-color: #c8c8c8;
}
.w-tab-link:focus {
  outline: 0;
}


  .w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.tab-link-tab-1 {
  border-left: 2.5px solid var(--transparent);
  opacity: 0.6;
  background-color: transparent;
  margin-bottom: 8rem;
  padding: 0 0 0 2rem;
  transition: all 0.3s;
}
.tab-link-tab-1:hover {
  opacity: 1;
}
.tab-link-tab-1.w--current {
  border-left: 2.5px solid var(--schwarz);
  background-color: var(--transparent);
  opacity: 1;
}

.tabs-content {
  background-color: var(--transparent);
  flex: 0 75%;
  grid-area: 1/6/2/12;
}

@media screen and (max-width: 991px) {
  .tabs-content {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
    .tab-link-tab-1,
  .tab-link-tab-1.w--current {
    margin-bottom: 2rem;
  }
    .tabs-menu.slideup-1 {
    grid-column-gap: 4rem;
    flex-direction: row;
  }
  .tab-wrap {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }

}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
    .tabs-menu.slideup-1 {
    flex-direction: column;
  }
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w--tab-active {
  display: block;
}
</style>