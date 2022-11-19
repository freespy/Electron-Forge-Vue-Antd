<template>
    <div class="home">
        <HelloWorld msg="Electron Forge Vue Demo"/>
        <a-button type="primary" @click="showDrawer">Open</a-button>
        <a-drawer v-model:visible="visible" class="custom-class" style="color: #42b983" title="Basic Drawer" placement="right" @after-visible-change="afterVisibleChange">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-drawer>
        <a-button type="primary" @click="onClick">send</a-button>
    </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {HelloWorld},
    setup() {
        const visible = ref(false);
        const afterVisibleChange = bool => {
            console.log('visible', bool);
        };
        const showDrawer = () => {
            visible.value = true;
        };
        const onClick = (e) => {
            console.log('onClick');
            window.API.doThing(new Date().getTime());
        };
        return {
            visible,
            afterVisibleChange,
            showDrawer,
            onClick
        };
    },
});
</script>
<style scoped less>
    button{
        margin: 10px;
    }
</style>