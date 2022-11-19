<template>
    <a-config-provider :locale="locale">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

export default {
    data() {
        return {
            locale: zhCN,
        };
    },
};
</script>
<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;

}

nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #333;
        &.router-link-exact-active {
            color: #ff6900;
        }
    }
}
</style>