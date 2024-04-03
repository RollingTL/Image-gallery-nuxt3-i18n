<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <div>
    <h2>{{ $t("artist") }}</h2>
    <div>{{ t("aboutArtistText") }}</div>
  </div>
</template>

<i18n lang="yaml">
en:
  aboutArtistText: "Text about artist"
ru:
  aboutArtistText: "Текст о художнике"
</i18n>
