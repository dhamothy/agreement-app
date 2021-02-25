<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div
      class="ac-upload w-full font-semibold bg-yellow-400 bg-opacity-10 py-10 px-6 rounded-md border-gray-400 border border-dashed"
    >
      <div v-if="!uploading" class="flex-1">
        <input
          type="file"
          ref="file"
          @change="sendFile"
          multiple
          class="ac-upload__input"
        />

        <div class="text-center show-mobile">
          <span
            class="bg-indigo-500 text-xl text-white rounded py-3 px-6 inline-flex items-center"
          >
            <i class="mdi mdi-camera text-3xl" style="line-height:1;"></i>
            <span class="ml-2">Camera</span>
          </span>
          <hr class="border-dotted border-gray-400 mt-6 mb-6" />
        </div>

        <div class="text-xl text-indigo-500">
          <i class="mdi mdi-cloud-upload"></i>
          <span class="ml-2">{{ title }}</span>
        </div>

        <div class="text-sm text-gray-500 mt-2">
          or <span class="text-indigo-500 cursor-pointer">Browse </span>from
          your computer
        </div>
        <div class="text-xs text-gray-400 mt-1">{{ caption }}</div>
      </div>

      <div v-if="uploading">
        <div class="text-gray-800 mb-2">
          {{ this.$refs.file.files[0].name }}
        </div>
        <div class="bg-white rounded mt-4">
          <div
            class="bg-green-500 rounded"
            :style="[{ width: progress + '%' }, { height: '20px' }]"
          ></div>
        </div>
      </div>
    </div>
    <div v-if="message && error" :class="`text-red-600 mt-2 text-sm`">
      {{ message }}
    </div>
  </form>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "Dropzone",
  props: {
    directory: {
      type: Object,
    },
    allowedTypes: {
      type: Array,
      default: ["image/jpeg", "image/png"],
    },
    maxSize: {
      type: Number,
      default: 200000,
    },
    title: {
      type: String,
      default: "Upload your files",
    },
    caption: {
      type: String,
      default: "Drag and drop here",
    },
  },
  data() {
    return {
      file: [],
      message: "",
      error: false,
      uploading: false,
      uploadedFiles: [],
      progress: 0,
    };
  },
  methods: {
    async sendFile() {
      const file = this.$refs.file.files[0];

      if (file.size > this.$props.maxSize) {
        this.error = true;
        return (this.message = `Max size: ${this.$props.maxSize / 1000}Kb`);
      }

      if (!this.$props.allowedTypes.includes(file.type)) {
        this.error = true;
        return (this.message = `Allowed formats - pdf, .jpg. png, .csv, excel`);
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("directory", this.$props.directory.directory);
      formData.append("id", this.$props.directory.id);

      try {
        this.error = false;
        this.uploading = true;
        const res = await axios.post(
          "http://localhost:5000/uploads",
          formData,
          {
            onUploadProgress: (e) =>
              (this.progress = Math.round((e.loaded * 100) / e.total)),
          }
        );
        this.$store.state.transferUploads.push(res.data);
        this.uploading = false;
      } catch (err) {
        // this.message = err.response.data.error;
        this.error = true;
        this.uploading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ac-upload {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 160px;

  &__ {
    &input {
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
    }
  }
}
.show-mobile {
  @media (min-width: 600px) {
    display: none;
  }
}
</style>
