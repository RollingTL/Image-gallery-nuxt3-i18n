<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { t, locale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/gallery')
}
</script>
<template>
  <main>
    {{ localePath('/gallery') }}
    <ContentList :query="query">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="localePath(article._path)"
            >{{ article.title }}
          </NuxtLink>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
    <NuxtPage />
  </main>
</template>
