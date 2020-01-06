<template>
    <button class="vadmin-panel-card">
      <img :src="icon" :alt="title" width="48" height="48">
      <div class="subtitle-2">{{ title }}</div>
      <div class="caption text--secondary">{{ description }}</div>
    </button>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String
  }
}
</script>

<style lang="scss">
  .vadmin-panel-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 5px;
    width: 100%;

    &:hover {
      background-color: #e0e0e0;
    }
  }
</style>
