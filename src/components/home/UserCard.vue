<template>
  <div class="user-card">
    <p class="user-card__empty-field" v-if="!currentUser">Выберите сотрудника, чтобы посмотреть его профиль     
    </p>
    <div v-else class="user-card__info-wrapper">
      <img src="@/assets/images/unknown-big.png" alt="no image user." class="user-card__info-wrapper__img"/>
      <div class="user-card__info-wrapper__content">
        <h2 class="user-card__info-wrapper__content__title">{{ currentUser.name }}</h2>
        <p class="user-card__info-wrapper__content__contacts"><span>email: </span> {{ currentUser.email }}</p>
        <p class="user-card__info-wrapper__content__contacts"><span>phone: </span> {{ currentUser.phone }}</p>

        <h3 class="user-card__info-wrapper__content__title">О себе:</h3>
        <p class="user-card__info-wrapper__content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    currentUser() {
      return this.$store.getters['home/getCurrentUser']
    }
  }
}
</script>