<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({
  useScope: 'local'
})
const route = useRoute()

const { data } = await useAsyncData('gallery', () =>
  queryContent(localePath('gallery')).find()
)
</script>
<template>
  <div>
    <div v-if="route.params.id === undefined">
      <h2>{{ $t('galleryTopTitle') }}</h2>
      <div>
        {{ t('galleryIntroText') }}
      </div>
      <ul>
        <li v-for="item in data" :key="item.title">
          <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage v-else />
  </div>
</template>
