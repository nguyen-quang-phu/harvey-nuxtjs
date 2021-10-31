<template lang="">
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text class="pb-0">
        <v-form>
          <v-text-field v-model="email" name="email" label="Email" prepend-icon="mdi-account-circle" outlined />
          <v-text-field
            v-model="password"
            name="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            outlined
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="info" class="rounded-pill pa-4 ml-auto" @click="signin">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);

    function signin(): void {
      alert('sign in');
    }
    return {
      email,
      password,
      showPassword,
      signin,
    };
  },
});
</script>
