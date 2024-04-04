<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { locale } = useI18n();
</script>

<template>
  <div>
    <h1>Child</h1>
    <div>{{ id }}</div>
    <div>{{ locale }}</div>
  </div>
</template>
