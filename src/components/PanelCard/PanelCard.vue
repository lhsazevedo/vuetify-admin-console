<template>
    <button class="panel-card" @click="$router.push(action)">
      <img :src="icon" :alt="title" width="48" height="48">
      <div class="panel-card__title subtitle-2">{{ title }}</div>
      <div class="panel-card__description caption text--secondary">{{ description }}</div>
    </button>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String,
    action: null
  }
}
</script>

<style lang="scss">
  .panel-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 5px;
    // width: 130px;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  .panel-card__title, .panel-card__description {
    max-width: 130px;
  }
</style>
