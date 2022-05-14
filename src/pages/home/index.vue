<template>
  <div class="home">
    <Button type="primary">主要按钮</Button>
    <app-container></app-container>
    <div class="grid grid-cols-3">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  </div>
</template>

<script>
// import {button}
// @ is an alias to /src
import { Button } from 'vant';
import AppContainer from 'components/global/app-container'

export default {
  name: 'HomeView',
  components: {
    Button,
    AppContainer
  }
}
</script>
