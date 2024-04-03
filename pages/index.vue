<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <div>
    <h2>{{ $t("home") }}</h2>
    <div>
      {{ t("introText") }}
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  introText: "Introductory text"
ru:
  introText: "Вводный текст"
</i18n>
