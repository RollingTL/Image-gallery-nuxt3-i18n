<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>
<template>
  <div>
    <h2>{{ $t('homeTopTitle') }}</h2>
    <div>
      {{ t('homeIntroText') }}
    </div>
  </div>
</template>
