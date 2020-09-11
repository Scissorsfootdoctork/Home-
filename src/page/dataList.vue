<template>
    <div class="container">
        <div class="container-item">
            <div class="item">时间</div>
            <div class="item">峰</div>
            <div class="item">谷</div>
            <div class="item">总</div>
        </div>
        <div class="container-list-item" v-for="(user, index) in list" :key="index">
            <div class="list-item">{{ index }}</div>
            <div class="list-item">{{ user[0].value }}</div>
            <div class="list-item">{{ user[1].value }}</div>
            <div class="list-item">{{ user[2].value }}</div>
        </div>
    </div>
</template>

<script>
import FakeJson from '@/dataJs'

export default {
    name: 'dataList',
    data () {
        return {
            list: FakeJson
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/global.scss";

.container {
    width: 100%;

    .container-item {
        width: 100%;
        height: px2rem(45);
        font-size: px2rem(15);
        background: #E4E7ED;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 10;
        @include center;
        .item {
            flex: 1;
            @include center
        }
    }

    .container-list-item {
        width: 100%;
        height: px2rem(45);
        font-size: px2rem(16);
        border-bottom: #F2F6FC solid px2rem(1);
        @include center;
        &.container-list-item:nth-child(2n+1) {
            background: #F2F6FC;
        }
        .list-item {
            flex: 1;
            @include center
        }
    }
}
</style>
