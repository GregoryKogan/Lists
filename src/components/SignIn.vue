<template>
  <v-card :loading="loading" color="background" border max-width="500">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="primary"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>
      <h4>Login</h4>
    </v-card-title>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-container>
        <v-text-field
          v-model="authKey"
          label="Username or email"
          :rules="[required]"
          :readonly="loading"
          variant="underlined"
          prepend-inner-icon="mdi-account"
          color="primary"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          :rules="[required, passwordLength]"
          :readonly="loading"
          variant="underlined"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          color="primary"
        ></v-text-field>
        <v-alert
          v-for="error in errors"
          v-bind:key="error"
          :text="error"
          type="error"
          variant="tonal"
          density="compact"
          style="margin-top: 5px"
        ></v-alert>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="loading"
          type="submit"
          append-icon="mdi-arrow-right-circle"
          variant="text"
          color="primary"
          >Sign In</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePocketbaseStore } from "@/stores/pocketbase";

export default defineComponent({
  name: "SignIn",
  data: () => ({
    form: false,
    loading: false,
    authKey: "" as string,
    password: "" as string,
    showPassword: false,
    errors: [] as string[],
  }),
  setup() {
    const store = usePocketbaseStore();
    return { store };
  },
  methods: {
    onSubmit() {
      if (!this.form) return;
      this.errors = [];
      this.loading = true;
      this.signIn();
    },
    async signIn() {
      if (!this.store.getPb) {
        console.error("Can't get Pocketbase instance from storage");
        return;
      }

      try {
        await this.store.getPb
          .collection("users")
          .authWithPassword(this.authKey, this.password);
      } catch (error) {
        this.errors.push("User with these credentials does not exist");
        this.loading = false;
        return;
      }

      this.loading = false;
      this.$router.push("profile");
    },
    required(v: string) {
      return !!v || "Field is required";
    },
    passwordLength(v: string) {
      return (
        (v.length >= 8 && v.length <= 72) ||
        "The length must be between 8 and 72"
      );
    },
  },
});
</script>
