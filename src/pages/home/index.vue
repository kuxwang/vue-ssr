<template>
  <div class="home">
    <Button type="primary">主要按钮</Button>
    <div class="grid grid-cols-3">
      <div>1</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
    </div>
  </div>
</template>

<script>
// import {button}
// @ is an alias to /src
import { Button } from 'vant';

export default {
  name: 'HomeView',
  components: {
    Button
  }
}
</script>
