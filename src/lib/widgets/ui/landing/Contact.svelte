<script>
    import {ContactCard} from '$entities';
    import {features} from '$shared'; 

const contacts = [ 
   {
    title: 'Website',
    href: 'https://oleg-darkdev.vercel.app/',
    desc: 'See my other historical projects and educational board games on my website.'
  },
  {
    title: 'Github',
    href: 'https://github.com/oleg-darkdev',
    desc: 'My open sorce projects are available on github.'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/oleg-darkdev',
    desc: 'Say me Hello from Linkedin.'
  },
]
</script>

<section  class="section-contact background-color-blue">
  <div class="padding-global">
    <a name="contact" />

    <div class="container-main">
      <div class="padding-section-large">
        <div class="margin-bottom margin-xhuge">
          <div class="_12-columns-grid">
            <div class="margin-bottom margin-xhuge no-margin-mobile">
              <h2 class="heading-style-h0 text-color-black">Contact</h2>
            </div>
            
            <div class="get-in-touch slideup-1">
              <div class="margin-bottom margin-xlarge">
                <h3 class="heading-style-h4">
                  If you have ideas for collaboration 
                   <br> 
                  - I'd be glad to communicate.
                </h3>
              </div>
              <div class="image-wrap">
                <img src="images/oleg-archaeo.JPG" loading="lazy" alt="Oleg Medvedev archaeology photo" class="frame-image-landscape rotate-left">
              </div>
            </div>

          </div>
        </div>
        <div>
          <div class="_3-columns-grid">            
            {#each contacts as contact}
              <ContactCard {contact}/>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
.get-in-touch {
  grid-area: 2/1/3/5;
}
@media screen and (max-width: 991px) {
 .get-in-touch {
    grid-column-end: 3;
  }
}
</style>