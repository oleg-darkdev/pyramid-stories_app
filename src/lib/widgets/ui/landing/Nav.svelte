<script>
  const navigation = [
      {
      title: 'About',
      href: '#about'
    },
    {
      title: 'Features',
      href: '#features'
    },
    {
      title: 'Pyramids',
      href: '#pyramids'
    },
    {
      title: 'F.A.Q.',
      href: '#faq'
    },

  ]
</script>

<!-- check this id -->
<div data-w-id="a51ee839-f4ad-c6ae-0996-866b5789b4ff" role="banner" class="nav w-nav">
  <div class="nav-wrap h-16">
    <a href="/" class="logo-link w-inline-block w--current">
      <img src="" loading="lazy" alt="Logo" class="logo">
    </a>

    <div class="navbar-social-wrap hide-tablet">
      <a href="/app" target="_blank" class="nav-social-link first">App</a>
      

      {#each navigation as nav}
        <a href="{nav.href}" class="nav-social-link">{nav.title}</a>
      {/each}

      <a href="#contact"  class="nav-social-link last"> Contact</a>
    </div>


    <div class="nav-wrap-right">
      <div class="nav---menu-button w-nav-button">
        <div class="nav---menu-open-text">Lorem  <br> Ipsum is <br>
        </div>
        <div class="nav---menu-close-text">Lorem  <br> Ipsum is </div>
      </div>
    </div>
  </div>
  <!-- side menu, mobile -->
  <!-- <nav role="navigation" class=" nav---menu w-nav-menu">
    <div class="nav---menu-inner">
      <div class="menu-bg"></div>
      <div class="nav-items">

        <a href="/" class="nav-link w-inline-block">
          <div class="nav-link-text">Lorem Ipsum </div>
        </a>

      </div>
      <div class="menu-social-wrap">

        <a href="/" target="_blank" class="nav-social-link">is simply</a>

      </div>
    </div>
  </nav> -->

</div>
