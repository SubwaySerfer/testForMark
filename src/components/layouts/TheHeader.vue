<template>
  <header class="header">
    <h1 class="header__logo" @click="reloadData">Жилфонд</h1>
    <p class="header__user-role">Пользователь</p>

    <div v-if="errorAlarm" class="overlay" @click="clearError">
      <div class="error-modal" @click.stop>
        <h2 class="error-modal__title">Ошибка</h2>
        <p class="error-modal__text">{{ errorAlarm }}</p>
        <button @click="clearError" class="error-modal__btn">Закрыть</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    reloadData() {
      window.location.reload();
    },
  },
  computed: {
    errorAlarm() {
      return this.$store.getters['home/getErrorText'];
    },
  },
  methods: {
    clearError() {
      this.$store.commit('home/clearError');
    },
  },
};
</script>
