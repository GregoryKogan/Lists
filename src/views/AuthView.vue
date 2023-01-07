<template>
  <div class="auth">
    <v-container style="height: 100%">
      <v-row style="height: 100%" align="center">
        <v-spacer></v-spacer>
        <v-col cols="12" align="center">
          <v-img
            src="@/assets/logo.svg"
            max-width="100"
            style="margin-bottom: 20px; margin-top: 20px"
          ></v-img>
          <div v-if="mode == 'SignUp'">
            <sign-up />
            <a @click="mode = 'SignIn'">Already have an account? - Sign In</a>
          </div>
          <div v-else>
            <sign-in />
            <a @click="mode = 'SignUp'">Do not have an account? - Sign Up</a>
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";

export default defineComponent({
  name: "AuthView",
  components: { SignUp, SignIn },
  data: () => ({
    mode: "SignIn",
  }),
});
</script>

<style>
.auth a {
  color: white;
  text-decoration: none;
}
.auth a:hover {
  color: rgb(var(--v-theme-primary));
  text-decoration: underline;
}
.auth a:active {
  text-decoration: underline;
}
</style>
