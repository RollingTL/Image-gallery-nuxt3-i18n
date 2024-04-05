<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: t('homeMetaTitle'),
  ogTitle: t('homeMetaTitle'),
  description: t('homeMetaDescription'),
  ogDescription: t('homeMetaDescription')
})
</script>
<template>
  <div>
    <h2>{{ $t('homeTopTitle') }}</h2>
    <div>
      {{ $t('homeIntroText') }}
    </div>
  </div>
</template>
