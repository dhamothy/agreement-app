<template>
  <div>
    <div class="ac-sections 2xl:w-11/12">
      <div class="text-xl text-indigo-700 mb-4 font-semibold">Edit {{ transfer.firstName.length !== 0 ? `${transfer.firstName}'s` : transfer.email }} transfer agreement</div>
      <div class="w-6/12">
        <div class="mb-4">
          <label>
            <span>Email</span>
            <input type="text" name="email" v-model="transfer.email" class="border border-gray-300 focus:border-indigo-300 bg-white  rounded-md px-3 py-2 w-full"/>
          </label>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <label>
            <span>First Name</span>
            <input type="text" name="firstName" v-model="transfer.firstName"  class="border border-gray-300 focus:border-indigo-300 bg-white  rounded-md px-3 py-2 w-full"/>
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" name="lastName" v-model="transfer.lastName" class="border border-gray-300 focus:border-indigo-300 bg-white  rounded-md px-3 py-2 w-full"/>
          </label>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <label>
            <span>Company</span>
            <input type="text" name="company" v-model="transfer.company"  class="border border-gray-300 focus:border-indigo-300 bg-white  rounded-md px-3 py-2 w-full"/>
          </label>
          <label>
            <span>Country</span>
            <input type="text" name="country" v-model="transfer.country" class="border border-gray-300 focus:border-indigo-300 bg-white  rounded-md px-3 py-2 w-full"/>
          </label>
        </div>
        <button class="py-2 px-8 bg-indigo-500 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-indigo-600">Update</button>
        <button class="py-2 px-8 ml-4 bg-white text-gray-500 font-semibold rounded-lg shadow-md focus:outline-none" @click="navigateTo(transfer.id)">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['id'],
  methods:{
    navigateTo(id) {
      this.$router.push({ name: 'TransferDetails', params: { id: id } });
    }
  },
  computed:{
    transfer(){
      return this.$store.state.transfer;
    }
  },
  mounted(){
    this.$store.dispatch('getTransfer', this.id);
  },
}
</script>
<style lang="scss" scoped>

</style>