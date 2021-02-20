<template>
  <div>    
    <div class="ac-sections 2xl:w-11/12">
      <div class="text-xl text-indigo-700 mb-4 font-semibold">Create your first transfer agreement</div>
      <div class="ac-section bg-gray-100 shadow-lg" v-if="transfer">
        <div class="bg-white font-semibold rounded-t-sm shadow-md lg:shadow-lg rounded-b-lg py-4 px-6 z-10">
          <div class="text-black font-medium text-xl mb-3">Transfer Agreement #{{ id }}</div>
          <hr class="border-dotted border-gray-400">
          <div class="grid md:grid-cols-2 xl:grid-cols-3 mt-3">
            <div>
              <div class="text-indigo-500 mt-4 xl:mt-0">Buyer's Email</div>
              <div class="mt-1">{{ transfer.email || '&mdash;' }} </div>
            </div>
            <div>
              <div class="text-indigo-500 mt-4 xl:mt-0">Exporting To</div>
              <div class="mt-1">{{ transfer.country || '&mdash;'}}</div>
            </div>
            <div>
              <div class="text-indigo-500 mt-4 xl:mt-0">Invoice Amount</div>
              <div class="mt-1">{{ transfer.price || '&mdash;'}}</div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 bg-opacity-25 shadow-lg pb-6 pt-8 px-6 -mt-4">
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3 text-gray-400">
            <div>
              <div class="font-semibold mt-4 xl:mt-0">Buyer Details</div>
              <span class="text-indigo-500 text-sm font-bold cursor-pointer" @click="navigateTo(transfer.id)">Edit</span>
            </div>
            <div>
              <div class="font-semibold mt-4 xl:mt-0">Company</div>
              <div>
                <div>{{ transfer.company || '&mdash;' }}</div>
                <div>{{ transfer.country || '&mdash;' }}</div>
              </div>
            </div>
            <div>
              <div class="font-semibold mt-4 xl:mt-0">Contact Person</div>
              <div>
                <div>{{ transfer.firstName }} {{ transfer.lastName }}</div>
                <div>{{ transfer.email || '&mdash;' }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-4 pt-6 px-6 xl:max-w-xl">
          <div class="text-xl text-indigo-700 mb-3 font-semibold">Product Details</div>
          <div class="text-sm text-gray-500 font-semibold mb-3">Placeholder for subtitle</div>
          <hr class="border-gray-200 mb-4">
          <div class="text-xl font-semibold text-gray-600 mb-2">Upload your Proforma Invoice</div>
          <div class="ac-upload font-semibold bg-yellow-400 bg-opacity-10 py-10 px-6 rounded-md border-gray-400 border border-dashed">
            <div class="text-xl text-indigo-500">
              <i class="mdi mdi-cloud-upload"></i>
              <span class="ml-2">Drop Proforma Invoice Here</span>
            </div>
            <div class="text-sm text-gray-500 mt-2">or Browse from your computer</div>
            <div class="text-xs text-gray-400 mt-1">Acceptable formats - pdf, .jpg. png, .csv, excel</div>
          </div>
          <div class="my-6 mx-2 text-indigo-500">
            <i class="mdi mdi-plus"></i>
            <span class="ml-2">Upload another document</span>
          </div>
          <hr class="border-gray-300 mb-6">
          <div class="text-right">
            <button class="py-2 px-8 bg-indigo-500 text-white font-semibold rounded-lg shadow-md focus:outline-none">Next</button>              
          </div>
        </div>
        <div class="ac-paper py-4 px-6">
          <div class="text-xl text-gray-400 font-semibold">Shipping Information</div>
        </div>
        <div class="ac-paper py-4 px-6">              
          <div class="text-xl text-gray-400 font-semibold">Release Conditions</div>
        </div>
        <div class="ac-paper py-4 px-6">              
          <div class="text-xl text-gray-400 font-semibold">Payment Details</div>
        </div>
        <div class="py-12"></div>
      </div>
      <div v-else>
        <button class="py-2 px-8 bg-indigo-500 text-white font-semibold rounded-lg shadow-md focus:outline-none">Create</button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['id'],
  methods:{
    navigateTo(id) {
      this.$router.push({ name: 'TransferEdit', params: { id: id } });
    }
  },
  computed:{
    transfer(){
      return this.$store.state.transfer;
    }
  },
  mounted(){
    this.$store.dispatch('getTransfer', this.id);
  }
}
</script>
<style lang="scss" scoped>
  
</style>