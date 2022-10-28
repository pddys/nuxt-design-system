<template>
  <button
    class="c-btn"
    :class="[
      { 'c-btn--primary': primary },
      { 'c-btn--secondary': secondary },
      { 'c-btn--ghost': ghost },
    ]"
  >
    <slot>Event Info & Book Tickets</slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },

  computed: {
    primary() {
      return this.color === "primary";
    },
    secondary() {
      return this.color === "secondary";
    },
    ghost() {
      return this.color === "ghost";
    },
  },
};
</script>