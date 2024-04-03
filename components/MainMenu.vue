<script setup lang="ts">
const localePath = useLocalePath();
</script>
<template>
  <div>
    <span>
      <NuxtLink :to="localePath('/')">{{ $t("home") }}</NuxtLink>
    </span>
    <span>
      <NuxtLink :to="localePath('/artist')">{{ $t("artist") }}</NuxtLink>
    </span>
    <span>
      <NuxtLink :to="localePath('/gallery')">
        {{ $t("gallery") }}
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
span {
  padding-right: 1rem;
}
</style>
