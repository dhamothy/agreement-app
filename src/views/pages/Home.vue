<template>
  <div class="bg-white rounded-md px-8 py-12 shadow-sm text-lg">
    Home    
  </div>
</template>
<script>
export default{
  computed:{
    message(){
      return this.$store.state.Transfer
    }
  }
}
</script>