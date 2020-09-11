<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {}
document.addEventListener('DOMContentLoaded', () => {
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    const html = document.querySelector('html')
    html.style.fontSize = fontSize + 'px'
})
</script>
<style lang="scss">
</style>
