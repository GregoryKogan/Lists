<template>
  <div class="profile">
    <h1>This is a profile page</h1>
  </div>
</template>

<script lang="ts">
import { usePocketbaseStore } from "@/stores/pocketbase";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileView",
  setup() {
    const store = usePocketbaseStore();
    return { store };
  },
  mounted() {
    console.log(this.store.getCurrentUser);
  },
});
</script>
