<script>
  import {contacts, navigation} from '$shared'; 

  let showMenu = false;
</script>

<nav role="banner" class="nav w-nav">
  <div class="nav-wrap h-16">
    <a href="/" class="logo-link w-inline-block w--current">
      <img src="/images/logo.svg" loading="lazy" alt="Logo" class="w-[200px]">
    </a>

    <div class="navbar-social-wrap hide-tablet">
      <a href="/app" target="_blank" class="nav-social-link first">App</a>


      {#each navigation as nav}
        <a href="{nav.href}" class="nav-social-link">{nav.title}</a>
      {/each}

      <a href="#contact"  class="nav-social-link last"> Contact</a>     
    </div>
      <div class="mobile-menu-toggle" on:click={()=> showMenu = !showMenu}>
        <div class="mobile-menu-toggle-line _01" />
        <div class="mobile-menu-toggle-line _02" />
        <div class="mobile-menu-toggle-line _03" />
      </div>

    <!-- <div class="nav-wrap-right">
      <div class="nav---menu-button w-nav-button">
        <div class="nav---menu-open-text">Lorem  <br> Ipsum is <br>
        </div>
        <div class="nav---menu-close-text">Lorem  <br> Ipsum is </div>
      </div>
    </div> -->
  </div>
{#if showMenu}
  <nav role="navigation" class=" nav---menu w-nav-menu">
    <div class="nav---menu-inner">
      <div class="menu-bg"></div>
      <div class="nav-items">

        <a href="/app" target="_blank" class="nav-link w-inline-block">
          <div class="nav-link-text">App</div>
        </a>
      {#each navigation as nav}
        <a href="{nav.href}" class="nav-link w-inline-block" on:click={()=> showMenu = !showMenu}>
          <div class="nav-link-text">{nav.title}</div>
        </a>
      {/each}
        <a href="#contact" class="nav-link w-inline-block" on:click={()=> showMenu = !showMenu}>
          <div class="nav-link-text">Contact</div>
        </a>
      </div>

      <div>
        <div class="menu-social-wrap">
          <div class="nav-social-links-title mr-6 text-color-yellow">Get in <br /> Touch</div>
          
          {#each contacts as contact}
            <a href="{contact.href}" class="nav-social-link">{contact.title}</a>
          {/each}
        </div>
      </div>
    </div>
  </nav>
{/if}
</nav>


<style>
.nav-social-links-title {
  letter-spacing: 3px;
  text-transform: uppercase;
  flex: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: 'din-2014-narrow', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

.nav-social-link {
  border-right: 2.5px solid var(--darkGray);
  letter-spacing: 3px;
  text-transform: uppercase;
  flex: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: 'din-2014-narrow', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
}
.nav-social-link:hover {
  text-decoration: underline;
}
.nav-social-link.last {
  border-right-style: none;
  padding-right: 0;
}
.nav-social-link.first {
  padding-left: 0;
}

.mobile-menu-toggle {
  display: none;
}

.mobile-menu-toggle-line._03 {
  bottom: 0;
}
.mobile-menu-toggle-line._02 {
  margin-top: -1px;
}

@media screen and (max-width: 991px) {
  .mobile-menu-toggle {
    position: relative;
    display: block;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }
  .mobile-menu-toggle-line {
    position: absolute;
    right: 0;
    width: 30px;
    height: 1.5px;
    padding-right: 0;
    padding-bottom: 0;
    background-color: #191919;
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  .mobile-menu-toggle-line._02 {
    top: 50%;
  }
  .mobile-menu-toggle-line._01 {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  .mobile-menu-toggle {
    position: relative;
    display: block;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }
}

@media screen and (max-width: 479px) {
  .nav-social-link {
    font-size: 0.85rem;
  }
}
</style>