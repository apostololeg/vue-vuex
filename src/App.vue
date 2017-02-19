<template>
    <div id="app" class="container">
        <div class="header">
            <div class="logo"></div>
            <div class="title">Vue + Vuex</div>
        </div>
        <div class="content">
            <Game />
        </div>
    </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
    components: {
        Game
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
}

#app .header {
    display: flex;
    background-color: #eee;
    height: 80px;
    padding: 20px;
    align-items: center;
}

#app .logo {
    height: 80px;
    width: 80px;
    margin: 0 20px;
    background-image: url(assets/logo.png);
    background-size: 100%;
    animation: App-logo-fly infinite 2s ease-in-out;
}

#app .title {
    font-size: 30px;
}

#app .content {
    margin: 0;
    padding: 50px;
}

@keyframes App-logo-fly {
    0% { transform: translateY(0px); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0px); }
}
</style>
