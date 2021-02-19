<template>
  <div class="py-16 px-8">
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
          <tr class="border-t border-emerald-500 hover:bg-indigo-50 cursor-pointer"  @click="navigateTo(4)">
            <td class="px-4 py-2 text-emerald-600 font-medium">              
              Adam
            </td>
            <td class="px-4 py-2 text-emerald-600 font-medium">Intro to CSS</td>
            <td class="px-4 py-2 text-emerald-600 font-medium text-right">858</td>
          </tr>
          <tr class="border-t border-emerald-500 hover:bg-indigo-50 cursor-pointer"  @click="navigateTo(14)">
            <td class="px-4 py-2 text-emerald-600 font-medium">Adam</td>
            <td class="px-4 py-2 text-emerald-600 font-medium">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
            <td class="px-4 py-2 text-emerald-600 font-medium text-right">112</td>
          </tr>
          <tr class="border-t border-emerald-500 hover:bg-indigo-50 cursor-pointer"  @click="navigateTo(36)">
            <td class="px-4 py-2 text-emerald-600 font-medium">Chris</td>
            <td class="px-4 py-2 text-emerald-600 font-medium">Intro to JavaScript</td>
            <td class="px-4 py-2 text-emerald-600 font-medium text-right">1,280</td>
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
  }
}
</script>