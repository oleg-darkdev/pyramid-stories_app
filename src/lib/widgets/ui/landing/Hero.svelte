<section class="section-home-header background-color-gelb">
	<div class="w-full mx-auto ">
		<div class="w-full ">
			<div
				class="hero-heading-wrap background-color-gelb "
			>
				<h1 class="heading-style-hero w-full lg:mt-20">THE  Pyramid Stories</h1>
			</div>
			<div class="hero-muster-wrap">
				<div class="hero-muster" />
				<div class="overlay-muster" />
			</div>
		</div>
	</div>
</section>


<style>
.heading-style-hero {
  text-align: center;
  letter-spacing: -2px;
  text-indent: -8px;
  text-transform: uppercase;
  font-family: din-2014-narrow, sans-serif;
  font-size: 7svw;
  font-weight: 800;
  line-height: 0.9;

}

.hero-heading-wrap {
  justify-content: center;
  align-items: center;
}

.section-home-header {
  justify-content: space-between;
  align-items: flex-end;
  min-height: 100vh;
  display: flex;
  position: relative;
}

.overlay-muster {
  z-index: 30;
  background-color: var(--creme);
  /* display:block; */
  width:100%;
  height:100%;
  /* position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%; */
}

.hero-muster-wrap {
  background-color: var(--creme);
  padding-bottom: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  position: relative;
}



.hero-muster {
  aspect-ratio: 3;
  background-color: var(--blue);
  background-image: url(/images/hero.svg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  max-width: 100%;
}




@media screen and (min-width: 991px) {
  .heading-style-hero {
    height: 160px;
  }

}
@media screen and (max-width: 991px) {
  .hero-muster {
    aspect-ratio: auto;
    object-fit: none;
    background-image: url(/images/hero-tablet.svg);
    height: 50vh;
  }

.hero-heading-wrap {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    bottom: 50%;
  }
}

@media screen and (max-width: 767px) {
  .hero-muster-wrap {
    padding-bottom: 1.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .hero-heading-wrap {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
  
  .heading-style-hero {
    text-align: left;
    font-size: 25svw;
  }

}

@media screen and (max-width: 479px) {
  .hero-muster {
    aspect-ratio: 2/3;
    background-image: url(/images/hero-mobile-portrait.svg);
  }
  
  .hero-heading-wrap {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  .heading-style-hero {
    text-align: left;
    text-indent: 0;
    font-size: 5rem;
  }
}
</style>