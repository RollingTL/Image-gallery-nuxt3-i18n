<script setup lang="ts">
const { locales, locale, setLocale } = useI18n()

const language = computed({
  get: () => locale.value,
  set: value => {
    setLocale(value)
  }
})
</script>
<template>
  <div>
    <select v-model="language">
      <option v-for="item in locales" :key="item.code" :value="item.code">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
