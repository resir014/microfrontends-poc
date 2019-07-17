<template>
  <div class="message">
    <div class="message-item--text" v-show="item.type === 'text'">
      <p>
        <strong>{{ item.data.from }}:</strong>
        {{ item.data.message }}
      </p>
    </div>
    <div class="message-item--donation" v-show="item.type === 'donation'">
      <p class="donation-message">
        <strong>{{ item.data.from }}</strong>
        donated {{ item.data.amount }}!
      </p>
      <p>{{ item.data.message }}</p>
    </div>
    <div class="message-item--follow" v-show="item.type === 'follow'">
      <p class="donation-message">
        <strong>{{ item.data.from }}</strong>
        just followed!
      </p>
      <p>{{ item.data.message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MessageMetadata } from '../types';

@Component
export default class HelloWorld extends Vue {
  @Prop() private item!: MessageMetadata;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message > div {
  padding: 4px 16px;
}

.message-item--donation {
  background-color: rgba(255, 255, 255, 0.05);
}
.message-item--donation .donation-message {
  color: #42b983;
}

p {
  margin: 0;
}

p strong {
  color: #42b983;
}

a {
  color: #42b983;
}
</style>
