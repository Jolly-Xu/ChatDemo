<template>
  <n-layout-sider
    @update:collapsed="handleCollapsedUpdate"
    collapse-mode="width"
    :collapsed-width="70"
    :width="250"
    class="sider_container"
    show-trigger="bar"
    :native-scrollbar="false"
  >
    <!-- logo -->
    <div class="logo">
      <n-icon
        class="icon"
        size="40"
        color="#4a2a94"
        :component="ColorFilterSharp"
      />
      <span v-show="!collapsed" class="name">ChatDemo</span>
    </div>

    <!-- 菜单 -->
    <n-menu
      :collapsed-width="70"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :value="currentSelect"
      @update:value="selectChange"
      class="menuBox"
    />

    <n-layout-footer position="absolute" class="footerBox" bordered>
      <div class="userBox">
        <div class="userInfo">
          <div class="userAvatar" @click="showLoginPage">
            <n-popselect
              v-model:value="value"
              :options="userOptions"
              trigger="click"
            >
              <n-avatar
                round
                size="medium"
                src="https://img0.baidu.com/it/u=1450269893,1819089861&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800"
                fallback-src="https://img0.baidu.com/it/u=1450269893,1819089861&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800"
              />
            </n-popselect>
          </div>
          <div class="userName" v-if="!collapsed">
            <p>JollyXu</p>
          </div>
        </div>

        <div class="userOpt" v-if="!collapsed">
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon
                class="icon"
                size="18"
                color="#1d0d43"
                :component="ExitOutline"
              />
            </template>
            退出登录
          </n-tooltip>

          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon
                class="icon"
                size="18"
                color="#1d0d43"
                :component="AlertCircleOutline"
              />
            </template>
            问题反馈
          </n-tooltip>

          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon
                class="icon"
                size="18"
                color="#1d0d43"
                :component="MailOutline"
              />
            </template>
            联系我们
          </n-tooltip>

          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon
                class="icon"
                size="18"
                color="#1d0d43"
                :component="SettingsOutline"
              />
            </template>
            设置
          </n-tooltip>
        </div>
      </div>
    </n-layout-footer>
  </n-layout-sider>

  <n-modal v-model:show="showModal" >
    <n-card
      class="login_box"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-tabs
        class="card-tabs"
        default-value="signin"
        size="large"
        animated
        pane-wrapper-style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
      >
        <n-tab-pane name="signin" tab="登录">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input round  clearable placeholder="请输入用户名" />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input
              round 
                placeholder="请输入密码"
                type="password"
                show-password-on="click"
              />
            </n-form-item-row>
          </n-form>
          <div class="forgetPassword">
            <span>忘记密码</span>
          </div>
          <div style="display:flex; justify-content: center;">
             <n-button style="width:20%" tertiary type="primary" round block> 登录 </n-button>
          </div>
         
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input round clearable placeholder="请输入用户名"/>
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input round placeholder="请输入密码"  type="password" show-password-on="click" />
            </n-form-item-row>
            <n-form-item-row label="重复密码">
              <n-input round  placeholder="请确认密码" type="password" show-password-on="click" />
            </n-form-item-row>
          </n-form>
          <div style="display:flex; justify-content: center;">
             <n-button style="width:20%" tertiary type="primary" round block> 注册 </n-button>
          </div>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-modal>
</template>

<script>
import { h, defineComponent, ref } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  BookOutline as BookIcon,
  ChatbubbleEllipsesOutline,
  SettingsOutline,
  MailOutline,
  AlertCircleOutline,
  ExitOutline,
  ColorFilterSharp,
  Settings,
} from "@vicons/ionicons5";
// 菜单选项
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "home",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "聊天" }
      ),
    key: "chat",
    icon: renderIcon(ChatbubbleEllipsesOutline),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "about",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "关于" }
      ),
    key: "a-wild-sheep-chase",
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "settings",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "设置" }
      ),
    key: "settings",
    icon: renderIcon(SettingsOutline),
  },
];

const userOptions = [
  {
    label: "个人中心",
    value: "Drive My Car",
  },
  {
    label: "个人设置",
    value: "Norwegian Wood",
  },
];

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const showModal = ref(false);

const collapsed = ref(false);

const currentSelect = ref("chat");

const handleCollapsedUpdate = (newCollapsedState) => {
  collapsed.value = newCollapsedState;
};

const showLoginPage = () => {
  showModal.value = true;
};

const selectChange = (key) => {
  currentSelect.value = key;
};

// 菜单折叠状态

export default defineComponent({
  setup() {
    return {
      menuOptions,
      ColorFilterSharp,
      handleCollapsedUpdate,
      collapsed,
      currentSelect,
      showModal,
      showLoginPage,
      selectChange,
      SettingsOutline,
      ExitOutline,
      MailOutline,
      AlertCircleOutline,
      userOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../css/sider.scss";
</style>
