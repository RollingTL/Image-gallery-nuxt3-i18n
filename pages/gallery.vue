<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <div>
    <h2>{{ $t("gallery") }}</h2>
    <div>
      {{ t("galleryInfo") }}
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  galleryInfo: "Gallery info"
ru:
  galleryInfo: "Информация о галерее"
</i18n>
