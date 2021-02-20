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
          <div class="av-page">
            <div class="av-page__wrapper">
              <div class="av-page__header">
                <div class="bg-white px-8 py-4 text-right shadow-sm">
                  <span class="font-semibold">
                    <span class="bg-indigo-500 rounded-full inline-flex items-center justify-center text-sm text-white font-semibold" style="width:32px;height:32px;">NK</span>
                    <span class="ml-2">Nathan Keller</span>
                  </span>
                </div>
              </div>
              <div class="av-page__content py-6 px-8 md:px-16 2xl:px-20">
                <slot></slot>
              </div>
            </div>
          </div>
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