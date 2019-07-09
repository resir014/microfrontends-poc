<template>
  <div id="chat-widget" :class="['chat-widget', hasBorder ? 'has-border' : '']">
    <img alt="Vue logo" :src="`${publicPath}/logo.png`" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  publicPath = 'http://localhost:3002';

  hasBorder = false;

  handleSetBorder(e: any) {
    this.hasBorder = e.detail;
  }

  mounted() {
    window.addEventListener('core:setBorder', this.handleSetBorder);
  }

  beforeDestroy() {
    window.removeEventListener('core:setBorder', this.handleSetBorder);
  }
}
</script>

<style>
.chat-widget {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white);
  background-color: var(--background);
}

.has-border {
  border: 4px solid var(--accent-green);
}
</style>
