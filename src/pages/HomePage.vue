<template>
  <main class="home-page">
    <the-header />
    <div class="home-page__wrapper">
      <the-sidebar />
      <user-info />
    </div>
  </main>
</template>

<script>
import TheSidebar from '../components/layouts/TheSidebar.vue';
import UserInfo from '../components/home/UserCard.vue';

export default {
  components: {
    TheSidebar,
    UserInfo,
  },
};
</script>
