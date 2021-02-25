<template>
  <div>
    <div class="ac-sections 2xl:w-11/12">
      <div class="text-xl text-indigo-700 mb-4 font-semibold">
        Create your first transfer agreement
      </div>
      <div class="ac-section bg-gray-100 shadow-lg" v-if="transfer">
        <div
          class="bg-white font-semibold rounded-t-sm shadow-md lg:shadow-lg rounded-b-lg py-4 px-6 z-10"
        >
          <div class="text-black font-medium text-xl mb-3">
            Transfer Agreement #{{ id }}
          </div>
          <hr class="border-dotted border-gray-400" />
          <div class="grid md:grid-cols-2 xl:grid-cols-3 mt-3">
            <div>
              <div class="text-indigo-500 mt-4 xl:mt-0">Buyer's Email</div>
              <div class="mt-1">{{ transfer.email || "&mdash;" }}</div>
            </div>
            <div>
              <div class="text-indigo-500 mt-4 xl:mt-0">Exporting To</div>
              <div class="mt-1">{{ transfer.country || "&mdash;" }}</div>
            </div>
            <div>
              <div class="text-indigo-500 mt-4 xl:mt-0">Invoice Amount</div>
              <div class="mt-1">{{ transfer.price || "&mdash;" }}</div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 bg-opacity-25 shadow-lg pb-6 pt-8 px-6 -mt-4">
          <div
            class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3 text-gray-400"
          >
            <div>
              <div class="font-semibold mt-4 xl:mt-0">Buyer Details</div>
              <span
                class="text-indigo-500 text-sm font-bold cursor-pointer"
                @click="navigateTo(transfer.id)"
                >Edit</span
              >
            </div>
            <div>
              <div class="font-semibold mt-4 xl:mt-0">Company</div>
              <div>
                <div>{{ transfer.company || "&mdash;" }}</div>
                <div>{{ transfer.country || "&mdash;" }}</div>
              </div>
            </div>
            <div>
              <div class="font-semibold mt-4 xl:mt-0">Contact Person</div>
              <div>
                <div>{{ transfer.firstName }} {{ transfer.lastName }}</div>
                <div>{{ transfer.email || "&mdash;" }}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="bg-gray-100 bg-opacity-25 shadow-lg pb-6 pt-8 px-6 -mt-4"
            v-if="!editProductSection"
          >
            <div
              class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3 text-gray-400"
            >
              <div>
                <div class="font-semibold mt-4 xl:mt-0">Product Details</div>
                <span
                  class="text-indigo-500 text-sm font-bold cursor-pointer"
                  @click="editProductSection = !editProductSection"
                  >Edit</span
                >
              </div>
              <div>
                <div class="font-semibold mt-4 xl:mt-0">
                  Attachment's of Proforma Invoice
                </div>
                <div>
                  <div v-if="uploads.length !== 0">
                    <div
                      class="flex justify-between py-2"
                      v-for="(upload, index) in uploads"
                      :key="upload.name"
                    >
                      <div class="text-blue-500 cursor-pointer">
                        <i class="mdi mdi-attachment"></i>
                        {{ upload.file.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div class="pb-4 pt-6 px-6 xl:max-w-xl" v-if="editProductSection">
            <div class="text-xl text-indigo-700 mb-3 font-semibold">
              Product Details
            </div>
            <div class="text-sm text-gray-500 font-semibold mb-3">
              Placeholder for subtitle
            </div>

            <div v-if="uploads.length !== 0" class="mb-6">
              <div class="text-xl font-semibold text-gray-800 mb-2">
                Attachment's of Proforma Invoice
              </div>
              <div
                class="flex justify-between py-2"
                v-for="(upload, index) in uploads"
                :key="upload.name"
              >
                <div class="text-blue-500 cursor-pointer">
                  <i class="mdi mdi-attachment"></i>
                  {{ upload.file.name }}
                </div>
                <!-- <div
                class="cursor-pointer text-sm text-red-400"
                @click="uploads.splice(index, 1)"
              >
                Delete
              </div> -->
              </div>
            </div>

            <div>
              <hr class="border-gray-200 mb-4" />
              <div class="text-xl font-semibold text-gray-600 mb-2">
                Upload your Proforma Invoice
              </div>

              <Dropzone
                :directory="uploadDirectory"
                :allowedTypes="allowedTypes"
                :maxSize="300000"
                title="Drop Proforma Invoice Here"
                caption="Acceptable formats - pdf, .jpg. png, .csv, excel"
              />

              <component
                v-for="(component, index) in components"
                :key="index"
                :is="component"
                :directory="uploadDirectory"
                :allowedTypes="allowedTypes"
                :maxSize="300000"
                title="Drop Proforma Invoice Here"
                caption="Acceptable formats - pdf, .jpg. png, .csv, excel"
                class="mt-4"
              />

              <div class="my-6 mx-2">
                <span class="text-indigo-500 cursor-pointer" @click="addUpload">
                  <i class="mdi mdi-plus"></i>
                  <span class="ml-2">Upload another document</span>
                </span>
              </div>
              <hr class="border-gray-300 mb-6" />
              <div class="text-right">
                <button
                  @click="hideProductionSection()"
                  :class="
                    `py-2 px-8 font-semibold rounded-lg focus:outline-none 
                  ${
                    uploads.length !== 0
                      ? 'bg-indigo-500 text-white hover:bg-indigo-700 shadow-md'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`
                  "
                  :disabled="uploads.length === 0"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="ac-paper py-4 px-6">
          <div
            class="text-xl text-gray-400 font-semibold"
            v-if="!editShippingSection && editProductSection"
          >
            Shipping Information
          </div>
          <div v-if="editShippingSection && !editProductSection">
            <div class="text-xl text-indigo-700 mb-3 font-semibold">
              Shipping Information
            </div>
            <div>Editing of shipping details</div>
          </div>
        </div>
        <div class="ac-paper py-4 px-6">
          <div class="text-xl text-gray-400 font-semibold">
            Release Conditions
          </div>
        </div>
        <div class="ac-paper py-4 px-6">
          <div class="text-xl text-gray-400 font-semibold">Payment Details</div>
        </div>
        <div class="py-12"></div>
      </div>
      <div v-else>
        <button
          class="py-2 px-8 bg-indigo-500 text-white font-semibold rounded-lg shadow-md focus:outline-none"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Dropzone from "@/components/Dropzone.vue";
export default {
  components: {
    Dropzone,
  },
  props: ["id"],
  data() {
    return {
      components: [],
      editProductSection: true,
      editShippingSection: false,
    };
  },
  methods: {
    navigateTo(id) {
      this.$router.push({ name: "TransferEdit", params: { id: id } });
    },
    addUpload() {
      this.components.push(Dropzone);
    },
    hideProductionSection() {
      this.editProductSection = false;
      this.editShippingSection = true;
    },
  },
  computed: {
    transfer() {
      return this.$store.state.transfer;
    },
    uploads() {
      const transferUploads = this.$store.state.transferUploads;
      return transferUploads.filter((u) => u.id === this.id);
    },
    allowedTypes() {
      return [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "text/csv",
        "application/vnd.ms-excel",
      ];
    },
    uploadDirectory() {
      return { id: this.$props.id, directory: "transferUploads" };
    },
  },
  mounted() {
    this.$store.dispatch("getTransfer", this.id);
  },
};
</script>
<style lang="scss" scoped></style>
