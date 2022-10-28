<template>
  <div
    class="
      c-col c-col-card
      u-transparent-bg
      c-col-card--normal c-col-card--has-link
    "
    :class="[
      { 'c-btn--primary': primary },
      { 'c-btn--secondary': secondary },
      { 'c-btn--ghost': ghost },
    ]"
  >
    <div class="c-col-card__wrap">
      <figure
        class="
          c-col-card__fig
          c-col-image__fig--crop c-col-image__fig--16x10-crop
          lazyloaded
        "
      >
        <img
          src="https://source.unsplash.com/random/1600x1000/?animal,landscape"
        />
      </figure>
      <a class="c-col-card__link" target="" href="" tabindex="0" role="button">
        <span class="u-hidden-visually">Link Title</span>
      </a>
      <div class="c-col-card__content">
        <div class="c-col-card__text">
          <div class="c-col-text-area">
            <h2 class="c-col-title">Lorem ipsum dolor sit amet</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div class="c-col-card__buttons">
          <BaseButton color="primary"></BaseButton>
          <span class="c-cta">More Info</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>

<script>
</script>