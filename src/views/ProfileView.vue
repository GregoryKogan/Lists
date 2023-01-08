<template>
  <div class="profile">
    <h1>This is a profile page</h1>
    <h3>
      Signed in as
      {{
        store.getCurrentUser == null ? "Guest" : store.getCurrentUser.username
      }}
    </h3>
    <div style="height: 20px"></div>
    <log-out-button />
  </div>
</template>

<script lang="ts">
import { usePocketbaseStore } from "@/stores/pocketbase";
import { defineComponent } from "vue";
import LogOutButton from "@/components/LogOutButton.vue";

export default defineComponent({
  name: "ProfileView",
  components: { LogOutButton },
  // data: () => ({
  //   username: "" as string,

  // }),
  setup() {
    const store = usePocketbaseStore();
    return { store };
  },
  // created() {
  //   this.username =
  //     this.store.getCurrentUser == null
  //       ? "Guest"
  //       : this.store.getCurrentUser.username;
  // },
});
</script>
