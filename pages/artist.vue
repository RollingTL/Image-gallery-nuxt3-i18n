<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>
<template>
  <div>
    <h2>{{ $t('artistTopTitle') }}</h2>
    <div>{{ t('artistIntroText') }}</div>
  </div>
</template>
