<template>
  <div class="py-16 px-8">
    <div class="bg-white rounded-md px-5 shadow-sm">
      <div class="text-lg">
        Home {{ message }}
      </div>
    </div>
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