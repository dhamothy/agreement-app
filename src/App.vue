<template>
  <div id="app">
    <Layout>            
        <router-view/>      
    </Layout>
  </div>
</template>
<script>
import Layout from "./views/layout/Wrapper.vue";
  
export default{
  components: {
    Layout
  }
}
</script>
