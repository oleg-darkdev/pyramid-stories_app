<script>
    import {ContactCard} from '$entities';
    import {features} from '$shared'; 

const contacts = [ 
   {
    title: 'Website',
    href: 'https://oleg-darkdev.vercel.app/',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
  },
  {
    title: 'Github',
    href: 'https://github.com/oleg-darkdev',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/oleg-darkdev',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
  },
]
</script>

<section  class="section-kontakt background-color-blue">
  <div class="padding-global">
    <a name="contact" />

    <div class="container-main">
      <div class="padding-section-large">
        <div class="margin-bottom margin-xhuge">
          <div class="_12-columns-grid">
            <div class="margin-bottom margin-xhuge no-margin-mobile">
              <h2 class="heading-style-h0 text-color-black">Contact</h2>
            </div>
            <!-- check this id -->
            <div id="w-node-f173ea2b-b5de-f2e3-9784-7f1b4c13ea9d-c0c55947" class="slideup-1">
              <div class="margin-bottom margin-xlarge">
                <h3 class="heading-style-h4">
                  Lorem Ipsum is simply dummy text of 
                   <br> 
                  Lorem Ipsum is simply dummy text of 
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