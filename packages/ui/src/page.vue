<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Workspace } from "types";
import { TextInput, Select } from "../../components";

const items = ref<Workspace[]>([]);
const text = ref("");

onMounted(() => {
  fetchLocalPort();
});

// fetch local port 5555
const fetchLocalPort = async () => {
  const res = await fetch("http://localhost:5555/workspaces");
  const data = await res.json();
  items.value = data;
};
</script>

<template>
  <div>
    <TextInput :modelValue="text" @event:input="text = $event" />
    {{ text }}
    <Select />
    <pre>
    {{ items }}
   </pre
    >
  </div>
</template>

<style></style>
