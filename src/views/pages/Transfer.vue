<template>
  <div class="py-6">
    <div class="bg-white rounded-md shadow-sm">      
      <table class="table-auto w-full text-left">
        <thead>
          <tr>
            <th class="px-4 py-2 text-emerald-600">Name</th>
            <th class="px-4 py-2 text-emerald-600">Email</th>
            <th class="px-4 py-2 text-emerald-600 text-right">Invoice Amount</th>            
          </tr>
        </thead>
        <tbody>
          <tr v-for="transfer in transfers" :key="transfer.id" class="border-t border-emerald-500 hover:bg-indigo-50 cursor-pointer"  @click="navigateTo(transfer.id)">
            <td class="px-6 py-4 text-emerald-600 font-medium">              
              {{ transfer.firstName }}
              {{ transfer.lastName }}
            </td>
            <td class="px-4 py-4 text-emerald-600 font-medium">{{ transfer.email }}</td>
            <td class="px-6 py-4 text-emerald-600 font-medium text-right">{{ transfer.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default{
  methods:{
    navigateTo(id) {
      this.$router.push({ name: 'TransferDetails', params: { id: id } });
    }
  },
  computed:{
    transfers(){
      return this.$store.state.transfers;
    }
  },
  mounted(){
    this.$store.dispatch('getTransfers');
  }
}
</script>