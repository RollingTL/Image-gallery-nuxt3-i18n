<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const { data } = await useAsyncData(
  'page-data',
  () =>
    queryContent()
      .where({ _path: '/gallery/' + route.params.id, _locale: locale.value })
      .findOne(),
  {
    watch: [route]
  }
)
</script>

<template>
  <div>
    <h2>Child</h2>
    {{ route.path }}
    <ContentRenderer :value="data" v-if="data">
      <h1>{{ data.title }}</h1>
      <h2>{{ data.description }}</h2>
    </ContentRenderer>
  </div>
</template>
