<script setup lang="ts">
import type { NuxtError } from '#app'
const localePath = useLocalePath()

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div>
    <h2>
      {{ error.statusCode }}
    </h2>
    <p>{{ $t('errorPageMessage') }}</p>
    <button @click="$router.push(localePath('/'))">
      {{ $t('backToHomePage') }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
