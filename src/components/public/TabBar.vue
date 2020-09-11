<template>
    <div class="container">
        <router-link tag="div" class="container-item" to="/layOut/dataList">图表</router-link>
        <router-link tag="div" class="container-item" to="/layOut/Echert">数据</router-link>
        <router-link tag="div" class="container-item" to="/layOut/Mine">我的</router-link>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global.scss";

.container {
    width: 100%;
    height: px2rem(45);
    border-top: px2rem(1) solid #F2F6FC;
    box-sizing: border-box;
    background: rgb(179, 216, 255);
    @include center;

    .container-item {
        flex: 1;
        height: 100%;
        font-size: px2rem(14);
        color: #909399;
        transition: all 0.3s linear;
        @include center;

        &.router-link-active {
            background: #409EFF;
            color: white;
            transition: all 0.3s linear;
        }
    }
}
</style>
