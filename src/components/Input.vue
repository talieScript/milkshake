<template>
  <div class="my-5 w-72">
    <label :for="label" class="block text-white text-lg">{{ label }}</label>
    <input
      v-model="localValue"
      :type="password ? 'password' : 'text'"
      :autofocus="autofocus"
      :id="label"
      class="px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full rounded-2xl font-semibold"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    label: String,
    placeholder: String,
    autofocus: Boolean,
    required: Boolean,
    password: Boolean,
  },
  computed: {
    localValue: {
      get(): string {
        return this.value;
      },
      set(value: string) {
        this.$emit('update:value', value);
      },
    },
  },
});
</script>

<style scoped></style>
