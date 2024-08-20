<template>
  <n-message-provider>
    <n-layout position="absolute" has-sider="true">
      <Sider />
      <n-layout class="main_container">
        <router-view />
      </n-layout>
    </n-layout>
  </n-message-provider>
</template>

<script>
import Sider from "@/components/sider.vue";
import { GameControllerOutline, GameController } from "@vicons/ionicons5";
export default {
  components: {
    Sider,
    GameController,
    GameControllerOutline,
  },
};
</script>

<style lang="scss" scoped>
.main_container {
  background-color: #f7f7f7;
  padding: 20px 10px 20px 0;
  box-sizing: border-box;
}
</style>
