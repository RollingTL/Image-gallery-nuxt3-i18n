<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: t('artistMetaTitle'),
  ogTitle: t('artistMetaTitle'),
  description: t('artistMetaDescription'),
  ogDescription: t('artistMetaDescription')
})
</script>
<template>
  <div>
    <h2>{{ $t('artistTopTitle') }}</h2>
    <div>{{ $t('artistIntroText') }}</div>
  </div>
</template>
