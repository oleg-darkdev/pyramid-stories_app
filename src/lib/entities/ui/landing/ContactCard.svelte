<script>
    export let contact;
</script>

<a href="{contact.href}" target="_blank" class="kontakt-box slideup-1 w-inline-block">
    <div class="margin-bottom margin-medium">
    <div class="margin-bottom margin-small">
        <h4 class="heading-style-h4">{contact.title}</h4>
    </div>
    <div>
        <div>{contact.desc} </div>
    </div>
    </div>
    <!-- <h4 class="heading-style-h5">Lorem Ipsum is simply</h4> -->
    <div class="kontakt-arrow-wrap">
    <img src="images/656f06ca5eda1665d37cd036_kontakt-arrow-gelb.svg" loading="lazy" alt="">
    </div>
</a>