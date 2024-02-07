<template>
  <input
    type="text"
    class="text__input"
    :value="modelValue"
    @input="$emit('event:input', $event.target.value)"
  />
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: String,
});
</script>

<style>
.text__input {
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
}
</style>
