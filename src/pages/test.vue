<template>
  <main class="test-wrapper">
    <input type="text" class="test-wrapper__input" v-model="searchInput" @input="handlerUser"/>

    <ul class="test-list" >
      <li v-if="users.length == 0" class="test-list__empty">Никто не найден</li>
      <li class="test-list__card" v-for="user in users" :key="user.name">
        <p>
          User <span>{{ user.name }}</span>
        </p>
        <p>
          Value <span>{{ user.value }}</span>
        </p>
      </li>
    </ul>
    <!-- <p>{{ currentUser }}</p> -->
    <!-- <button @click="handlerUser()">button</button> -->
  </main>
</template>

<script>
import testData from '/public/data.json';

export default {
  data() {
    return {
      searchInput: '',
      users: [],
      currentUser: {}
    };
  },
  created() {
    setTimeout(() => {
      console.log('1', testData);
      this.users = testData.users;
      console.log(this.users, this.users.length);
    }, 1000);
    console.log(this.users);
  },
  methods: {
    handlerUser(){
      this.users = testData.users.filter((el)=> {
        console.log(el, el.name)
       return el.name.slice(0, this.searchInput.length) == this.searchInput 
      })
      // this.currentUser = this.users.filter((el)=> {
      //   console.log(el, el.name)
      //  return el.name.slice(0, this.searchInput.length) == this.searchInput 
      // })
      console.log(this.users)
    }
  }
};
</script>

<style>
.test-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 2rem 0;
  align-items: center;
}
.test-wrapper__input {
  width: 280px;
  padding: .5rem 1rem;
}
.test-list__empty {
  grid-column: 1 / 4;
  text-align: center;
}
.test-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transition: all 0.5s ease;
  gap: 1rem;
  padding: 2rem 1rem;
  background: grey;
}
.test-list__card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid black;
}
.test-list__card p {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

@media (max-width: 900px) {
  .test-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .test-list {
    grid-template-columns: 1fr;
    padding: 2rem 0;
  }
}
</style>
