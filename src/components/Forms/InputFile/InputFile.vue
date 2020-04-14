<template>
  <div class="container">
    <div class="wrapper">
      <input
        class="input-visible"
        readonly
        :value="valueDisplayed"
        v-bind="{ placeholder, disabled, required }"
        @click="openPicker"
        @blur="onBlur"
      />
      <i class="icon icon--close" @click="clearField"></i>
    </div>
    <input type="file" ref="inputFile" v-bind="attributes" @change="onChange" />
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: "DaInputFile",
  props: {
    id: String,
    name: String,
    placeholder: {
      type: String,
      default: "ELIGE O ARRASTRA AQUÍ UNA IMAGEN"
    },
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    subtitle: {
      type: String,
      default:
        "Peso máximo XXX KB. Formato recomendable 16:9. Ten en cuenta que sobre tu imagen aparecerá tu nombre por lo que evita imágenes muy oscuras."
    }
  },
  data() {
    return {
      valueDisplayed: "",
      localValue: {}
    };
  },
  computed: {
    model: {
      get() {
        return localValue();
      },
      set(val) {
        this.$nextTick(() => {
          this.localValue = val;
          this.valueDisplayed = this.getFileName(val);
        });
      }
    },
    attributes() {
      return {
        type: this.type,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        placeholder: this.placeholder,
        readonly: this.readonly
      };
    }
  },
  watch: {
    valueDisplayed(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    clearField() {
      this.model = {};
    },
    getvalueDisplayed(value) {
      console.log(value);
      return "";
    },
    getFileName(files) {
      if (!files || files.length === 0) {
        return '';
      }
      if (files.length === 1) {
        return `${files[0].name} (${Math.trunc(files[0].size/100)} KB)`;
      }
      return null;
    },
    openPicker() {
      this.onFocus();
      this.$refs.inputFile.click();
    },
    onChange($event) {
      this.onFileSelected($event);
    },
    onBlur() {
      this.focused = false;
    },
    onFocus() {
      this.focused = true;
    },
    onFileSelected({ target, dataTransfer }) {
      const files = target.files || dataTransfer.files;
      this.model = files || target.value;
    }
  }
};
</script>

<style scoped>
.container {
  overflow: hidden;
}
.wrapper {
  position: relative;
}
.input-visible {
  min-height: 72px;
  border: solid 1px var(--text-color);
  width: 100%;
  color: var(--text-color);
}
.input-visible::placeholder {
  color: var(--link-text-hover);
}
input[type="file"] {
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  border: 0;
}
.icon--close {
  cursor: pointer;
  display: block;
  background-image: url("../../../assets/delete.svg");
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
.subtitle {
  font-size: var(--font-size-subtitles);
  color: var(--text-color);
  padding: 0;
  margin: 0;
  font-weight: 300;
}
</style>
