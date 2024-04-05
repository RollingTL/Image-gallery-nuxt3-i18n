<script setup lang="ts">
const route = useRoute()
const { data: itemData } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).find()
)
</script>

<template>
  <div>
    <div v-if="itemData">
      <h2>{{ itemData[0].title }}</h2>
      <div>{{ itemData[0].description }}</div>
    </div>
  </div>
</template>
