<template>
  <div class="av-wrapper">
    <div class="av-container">
      <div class="av-aside">
        <div class="av-aside__content">
          <Nav />
        </div>
      </div>
      <div class="av-main">
        <div class="av-main__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '@/views/layout/Nav.vue'
export default{
  components:{
    Nav
  }
}
</script>
<style lang="scss">
@import "@/scss/layout/wrapper.scss";
</style>