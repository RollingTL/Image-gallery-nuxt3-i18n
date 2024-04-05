<script setup lang="ts">
const localePath = useLocalePath()
</script>
<template>
  <div>
    <span>
      <NuxtLink :to="localePath('/')">{{ $t('homeLink') }}</NuxtLink>
    </span>
    <span>
      <NuxtLink :to="localePath('/artist')">{{ $t('artistLink') }}</NuxtLink>
    </span>
    <span>
      <NuxtLink :to="localePath('/gallery')">
        {{ $t('galleryLink') }}
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
span {
  padding-right: 1rem;
}
</style>
