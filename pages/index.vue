<template>
  <div>
    <login-form />
    <p>{{ getAuth }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RootState } from '~/store';

export default Vue.extend({
  computed: {
    getAuth(): boolean {
      return (this.$store.state as RootState).auth.auth;
    },
  },
});
</script>
