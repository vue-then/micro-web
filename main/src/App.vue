<template>
  <Header />
  <MainNav />
  <div class="sub-container">
    <Loading v-if="loading" />
    <div v-else class="sub-body" id="micro-container">子应用内容</div>
  </div>
  <Footer />
</template>
<script>
import Header from './components/Header.vue'
import MainNav from './components/MainNav.vue'
import Loading from './components/Loading.vue'
import Footer from './components/Footer.vue'


export default {
  name: "App",
  components: {
    Header,
    MainNav,
    Loading,
    Footer
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style lang="scss">
html,
body,
#micro_web_main_app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sub-container {
  min-height: 100%;
  position: relative;
}
.sub-body {
  min-height: 0;
  width: 100%;
}
</style>
