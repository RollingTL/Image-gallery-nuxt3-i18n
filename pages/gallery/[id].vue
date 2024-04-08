<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
</script>

<template>
  <div>
    {{ route.path }}
    <ContentDoc :path="localePath(route.path)" v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <h2>{{ doc.description }}</h2>
    </ContentDoc>
  </div>
</template>
