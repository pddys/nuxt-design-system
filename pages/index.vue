<template>
  <main id="app">
    <TheHeader />
    <TheMasthead />
    <div class="c-container c-container--1200">
      <div class="o-wrapper">
        <div class="o-grid">
          <div class="o-grid__cell u-1/3@desktop">
            <ConstruktCard />
          </div>
          <div class="o-grid__cell u-1/3@desktop">
            <ConstruktCard />
          </div>
          <div class="o-grid__cell u-1/3@desktop">
            <ConstruktCard class="c-col-card--overlay" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
</style>

<script>
</script>