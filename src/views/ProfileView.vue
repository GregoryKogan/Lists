<template>
  <div class="profile">
    <h1>This is a profile page</h1>
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
  setup() {
    const store = usePocketbaseStore();
    return { store };
  },
  mounted() {
    console.log(this.store.getCurrentUser);
  },
});
</script>
