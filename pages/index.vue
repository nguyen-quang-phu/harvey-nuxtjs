<template>
  <div>
    <!-- <login-form /> -->
    <p>{{ getAuth }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    getAuth(): boolean {
      return this.$store.getters.getAuth;
    },
  },
});
</script>
