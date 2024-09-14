import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  // create naive ui
  create,
  // component
  NSpace,
  NSwitch,
  NLayout,
  NLayoutSider,
  NMenu,
  NIcon,
  NInfiniteScroll,
  NInput,
  NTag,
  NAvatar,
  NTabs,
  NTabPane,
  NFloatButton,
  NScrollbar,
  NPopselect,
  NLayoutFooter,
  NButton,
  NTooltip,
  NCarousel,
  NCarouselItem,
  NMessageProvider,
  NUpload,
  NModal,
  NUploadTrigger,
  NForm,
  NFormItem,
  NFormItemRow,
  NUploadFileList,
  NSelect,
  NCard,
  NTree,
  NUploadDragger,
  NSpin,
} from "naive-ui";

const naive = create({
  components: [
    NSpace,
    NSwitch,
    NLayout,
    NSelect,
    NCard,
    NSpin,
    NForm,
    NFormItem,
    NFormItemRow,
    NLayoutSider,
    NMenu,
    NIcon,
    NButton,
    NInfiniteScroll,
    NInput,
    NTag,
    NLayoutFooter,
    NAvatar,
    NMessageProvider,
    NTabs,
    NTabPane,
    NFloatButton,
    NScrollbar,
    NPopselect,
    NTooltip,
    NCarousel,
    NCarouselItem,
    NUpload,
    NTree,
    NUploadDragger,
    NModal,
    NUploadTrigger,
    NUploadFileList,
  ],
});

const app = createApp(App);
app.use(naive);

app.use(store).use(router).mount("#app");
