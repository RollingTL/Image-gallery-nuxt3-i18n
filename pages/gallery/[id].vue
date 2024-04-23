<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
</script>

<template>
  <div>
    <ContentDoc :path="localePath(route.path)">
      <template v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <h2>{{ doc.description }}</h2>
      </template>
      <template #not-found>
        <h1>{{ $t('errorGalleryMessage') }}</h1>
        <button @click="$router.push(localePath('/gallery'))">
          {{ $t('backToGallery') }}
        </button>
      </template>
    </ContentDoc>
  </div>
</template>
