<template>
    <div class="container">
        <div class="wrapper">
            <div class="top-Avatar">
                <span>头像</span>
            </div>
            <div class="top-Avatar-detail">
                <div class="Avatar-detail">
                    <span class="detail-text">昵称:</span>
                    <span class="text">彭于晏</span>
                </div>
                <div class="Avatar-detail">
                    <span class="detail-text">性别:</span>
                    <span class="text">男</span>
                </div>
                <div class="Avatar-detail">
                    <span class="detail-text">号码:</span>
                    <span class="text">18668065402</span>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <button class="btn">添加数据</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Mine'
}
</script>

<style scoped lang="scss">
@import "../assets/styles/global.scss";

.container {
    width: 100%;

    .wrapper {
        width: 100%;
        border-radius: 0 0 px2rem(10) px2rem(10);
        background: #66B1FF;
        padding: px2rem(20);
        box-sizing: border-box;
        display: flex;

        .top-Avatar {
            width: px2rem(120);
            height: px2rem(120);
            border-radius: px2rem(5);
            border: #F2F6FC solid px2rem(1);
            @include center
        }

        .top-Avatar-detail {
            flex: 1;
            display: flex;
            padding: 0 0 0 px2rem(20);
            flex-direction: column;
            font-size: px2rem(16);

            .Avatar-detail {
                flex: 1;
                display: flex;
                align-items: center;

                .detail-text {
                    width: px2rem(60);
                    color: #000000;
                }

                .text {
                    flex: 1;
                    color: #303133;
                }
            }
        }
    }

    .btn-box {
        position: absolute;
        bottom: px2rem(20);
        right: px2rem(20);

        .btn {
            border: none;
            padding: px2rem(15);
            font-size: px2rem(14);
            border-radius: px2rem(5);
            outline: none;
        }
    }
}
</style>
