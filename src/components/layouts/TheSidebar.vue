<template>
  <aside class="sidebar">
    <h2 class="sidebar__title">Поиск сотрудников</h2>
    <input
      type="text"
      placeholder="Введите Id или UserName "
      class="sidebar__input"
      v-model="searchInput"
      v-debounce:500ms="handleSearchInput"
    />
    <h3 class="sidebar__title">Результаты</h3>
    <!-- TODO: не показывать пока лоадер -->
    <p class="sidebar__subtitle" v-show="isLoadingStatus">Ищу ...</p>
    <p
      class="sidebar__subtitle"
      v-show="
        currentFilteredList.length == 0 &&
        searchInput.length != 0 &&
        !isLoadingStatus
      "
    >
      ничего не найдено
    </p>
    <p
      class="sidebar__subtitle"
      v-show="
        currentFilteredList.length == 0 &&
        searchInput.length == 0 &&
        !isLoadingStatus
      "
    >
      начните поиск
    </p>

    <ul
      class="sidebar__users-list"
      v-if="currentFilteredList.length > 0 && !isLoadingStatus"
    >
      <li
        class="sidebar__users-list__item"
        v-for="user in currentFilteredList"
        :key="'user' + user.id"
        :class="
          currentUser && user.id == currentUser.id
            ? 'sidebar__users-list__item-active'
            : ''
        "
        @click="$store.commit('home/chooseCurrentUser', user)"
      >
        <img
          src="@/assets/images/unknown-small.png"
          alt="no image user."
          width="70px"
          height="70px"
        />
        <div class="sidebar__users-list__item__info">
          <p class="sidebar__users-list__item__info__name">
            {{ user.username }}
          </p>
          <p class="sidebar__users-list__item__info__email">
            {{
              user.email.length > 14
                ? user.email.slice(0, 14) + '...'
                : user.email
            }}
          </p>
        </div>
      </li>
      <!-- <li class="sidebar__users-list__item" v-for="n in 10">
        <img
          src="@/assets/images/unknown-small.png"
          alt="no image user."
          width="70px"
          height="70px"
        />
        <div class="sidebar__users-list__item__info">
          <p class="sidebar__users-list__item__info__name">name</p>
          <p class="sidebar__users-list__item__info__email">email</p>
        </div>
      </li> -->
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      oldSearchInput: '',
    };
  },
  mounted() {
    this.$store.dispatch('home/createFullUsersList');
  },
  computed: {
    currentFilteredList() {
      return this.$store.getters['home/getCurrentFilteredList'];
    },
    currentUser() {
      return this.$store.getters['home/getCurrentUser'];
    },
    isLoadingStatus() {
      return this.$store.getters['home/getLoadingStatus'];
    },
  },
  methods: {
    handleSearchInput() {
      if (this.oldSearchInput.trim() == this.searchInput.trim()) return;

      this.$store.commit('home/handleIsLoading', true);
      this.$store.commit('home/clearLists');
      if (this.searchInput == '') {
        this.$store.commit('home/handleIsLoading', false);
      }
      this.oldSearchInput = this.searchInput;

      if (this.searchInput.includes(',')) {
        let multiSearch = this.searchInput
          .split(',')
          .map((item) => item.trim())
          .filter((item) => item !== '');

        let everyTypeNumber = multiSearch.every((item) => !isNaN(Number(item)));

        if (everyTypeNumber) {
          return this.$store.dispatch('home/createIdsUsersList', {
            arr: multiSearch,
          });
        }

        let everyTypeString = multiSearch.every(
          (item) => typeof item === 'string'
        );
        if (everyTypeString) {
          this.$store.commit('home/createUserNameList', {
            arr: multiSearch,
          });
        }
      } else {
        if (/^\d+$/.test(this.searchInput)) {
          this.$store.dispatch('home/createIdsUsersList', this.searchInput);
        } else if (this.searchInput != '') {
          this.$store.commit('home/createUserNameList', this.searchInput);
        }
      }
    },
  },
};
</script>
