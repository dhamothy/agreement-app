<template>
  <div>
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
          <div class="ac-section">
            <div class="text-xl text-indigo-500 mb-4 font-semibold">Create your first transfer agreement</div>
            <div class="ac-section bg-gray-100 shadow-lg">
              <div class="bg-white font-semibold rounded-t-sm shadow-md lg:shadow-lg rounded-b-lg py-4 px-6 z-10">
                <div class="text-black font-medium text-xl mb-3">Transfer Agreement #{{ id }}</div>
                <hr class="border-dotted border-gray-400">
                <div class="grid md:grid-cols-2 xl:grid-cols-3 mt-3">
                  <div>
                    <div class="text-indigo-400 mt-4 xl:mt-0">Buyer's Email</div>
                    <div class="mt-1">albertyeong@email.com</div>
                  </div>
                  <div>
                    <div class="text-indigo-400 mt-4 xl:mt-0">Exporting To</div>
                    <div class="mt-1">Singapore</div>
                  </div>
                  <div>
                    <div class="text-indigo-400 mt-4 xl:mt-0">Invoice Amount</div>
                    <div class="mt-1">USD 20, 000</div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-100 bg-opacity-25 shadow-lg pb-6 pt-8 px-6 -mt-4">
                <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3 text-gray-400">
                  <div>
                    <div class="font-semibold mt-4 xl:mt-0">Buyer Details</div>
                    <div>Edit</div>
                  </div>
                  <div>
                    <div class="font-semibold mt-4 xl:mt-0">Company</div>
                    <div>
                      <div>Tiong Hoe Trading Company Pte Ltd</div>
                      <div>Singapore</div>
                    </div>
                  </div>
                  <div>
                    <div class="font-semibold mt-4 xl:mt-0">Contact Person</div>
                    <div>
                      <div>Albert Yeong</div>
                      <div>albertyeong@email.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pb-4 pt-6 px-6 xl:max-w-xl">
                <div class="text-xl text-indigo-500 mb-3 font-semibold">Product Details</div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['id']
}
</script>
<style lang="scss" scoped>

</style>