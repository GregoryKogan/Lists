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
      <h4>Registration</h4>
    </v-card-title>
    <v-form
      v-model="form"
      @submit.prevent="onSubmit"
      @update:model-value="forceValidate"
    >
      <v-container>
        <v-text-field
          v-model="username"
          label="Username"
          :rules="[required]"
          :readonly="loading"
          @update:model-value="forceValidate"
          variant="underlined"
          prepend-inner-icon="mdi-account"
          color="primary"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="E-mail"
          hint="optional"
          :rules="[emailValidation]"
          :readonly="loading"
          @update:model-value="forceValidate"
          variant="underlined"
          prepend-inner-icon="mdi-at"
          color="primary"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          :rules="[required, passwordLength]"
          :readonly="loading"
          @update:model-value="forceValidate"
          variant="underlined"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          color="primary"
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          label="Password confirm"
          :rules="[required, passwordsMatching]"
          :readonly="loading"
          @update:model-value="forceValidate"
          variant="underlined"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPasswordConfirm ? 'text' : 'password'"
          @click:append-inner="showPasswordConfirm = !showPasswordConfirm"
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
          >Sign Up</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePocketbaseStore } from "@/stores/pocketbase";

export default defineComponent({
  name: "SignUp",
  data: () => ({
    form: false,
    loading: false,
    username: "" as string,
    email: "" as string,
    password: "" as string,
    passwordConfirm: "" as string,
    showPassword: false,
    showPasswordConfirm: false,
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
      this.signUp();
    },
    async signUp() {
      if (!this.store.getPb) {
        console.error("Can't get Pocketbase instance from storage");
        return;
      }

      const data = {
        username: this.username,
        email: this.email,
        emailVisibility: true,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      };
      try {
        await this.store.getPb.collection("users").create(data);
      } catch (error) {
        interface PocketbaseSignUpError extends Error {
          data: {
            code: number;
            data: {
              email: { code: string; message: string };
              username: { code: string; message: string };
              password: { code: string; message: string };
            };
          };
        }

        const errorData = (error as PocketbaseSignUpError).data.data;
        if (errorData.email)
          this.errors.push(
            "Email: " + errorData.email.message.toLocaleLowerCase()
          );
        if (errorData.username)
          this.errors.push(
            "Username: " + errorData.username.message.toLocaleLowerCase()
          );
        if (errorData.password)
          this.errors.push(
            "Password: " + errorData.password.message.toLocaleLowerCase()
          );
        this.loading = false;
        return;
      }

      this.login();
    },
    async login() {
      if (!this.store.getPb) {
        console.error("Can't get Pocketbase instance from storage");
        return;
      }

      await this.store.getPb
        .collection("users")
        .authWithPassword(this.username, this.password);
      this.loading = false;

      this.$router.push("profile");
    },
    forceValidate() {
      if (
        this.required(this.password) === true &&
        this.required(this.passwordConfirm) === true &&
        this.required(this.username) === true &&
        this.passwordsMatching(this.passwordConfirm) === true &&
        this.emailValidation(this.email) === true &&
        this.passwordLength(this.password) === true
      )
        this.form = true;
    },
    required(v: string) {
      return !!v || "Field is required";
    },
    passwordsMatching(v: string) {
      return v == this.password || "Passwords do not match";
    },
    emailValidation(v: string) {
      if (v.length == 0) return true;
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(v) || "Invalid e-mail";
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
