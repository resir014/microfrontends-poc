<template>
  <div id="chat-widget" :class="['chat-widget', hasBorder ? 'has-border' : '']">
    <MessageList />
    <MessageBox />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import MessageList from './components/MessageList.vue';
import MessageBox from './components/MessageBox.vue';

@Component({
  components: {
    MessageList,
    MessageBox,
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
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.1);
}

.has-border {
  border: 4px solid var(--accent-green);
}
</style>
