<script setup lang="ts"></script>
<template>
  <div>
    <h1>{{ $t('siteTopTitle') }}</h1>
    <MainMenu class="mainMenu" />
    <LangSwitcher />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.mainMenu {
  padding-bottom: 1rem;
}
</style>
