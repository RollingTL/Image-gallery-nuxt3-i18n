<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { locale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/gallery')
}
console.log(query)
</script>
<template>
  <main>
    <ContentList :query="query" :key="'galleryList' + locale">
      <template #default="{ list }">
        <ul>
          <li v-for="article in list" :key="article._path">
            <NuxtLink :to="localePath(article._path)"
              >{{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
      <template #pending>
        <p>...</p>
      </template>
    </ContentList>
  </main>
</template>
