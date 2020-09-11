<template>
    <div class="container">
        <scroll :bottom="45">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </scroll>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import Scroll from '@/components/public/Scroll'
import TabBar from '@/components/public/TabBar'

export default {
    components: {
        TabBar,
        Scroll
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global.scss";
</style>
