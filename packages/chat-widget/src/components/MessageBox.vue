<template>
  <form class="message-box" @submit="handleSubmit">
    <input type="text" id="message" name="message" autocomplete="off" v-model="message" />
    <button type="submit">
      <span class="visually-hidden">Send Message</span> &#9166;
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MessageMetadata, TextMetadata } from '../types';

@Component
export default class MessageBox extends Vue {
  message = '';

  handleSubmit(e: any) {
    e.preventDefault();

    console.log('submit', this.message);
    const event = new CustomEvent<MessageMetadata<TextMetadata>>('chat:message', {
      detail: {
        timestamp: new Date().toISOString(),
        type: 'text',
        data: {
          from: 'resir014',
          message: this.message,
        },
      },
    });
    window.dispatchEvent(event);
    this.message = '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-box {
  display: flex;
  flex-direction: row;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

input {
  flex: 1 1 auto;
  margin-right: 16px;
  height: 40px;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  width: 40px;
  height: 40px;
}

.visually-hidden {
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
