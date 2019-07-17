<template>
  <div class="message-list">
    <div class="message-list__inner">
      <MessageItem
        v-bind:key="message.timestamp"
        v-for="message in messages"
        v-bind:item="message"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MessageMetadata } from '../types';

import MessageItem from './MessageItem.vue';

@Component({
  components: {
    MessageItem,
  },
})
export default class MessageBox extends Vue {
  messages: MessageMetadata[] = [];

  handleAddMessage(e: any) {
    console.log('new message', e.detail);
    this.messages.push(e.detail);
  }

  mounted() {
    window.addEventListener('chat:message', this.handleAddMessage);
  }

  beforeDestroy() {
    window.removeEventListener('chat:message', this.handleAddMessage);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-list {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 4px 0;
  overflow-y: auto;
  transform: rotate(180deg);
}
.message-list__inner {
  transform: rotate(180deg);
}
</style>
