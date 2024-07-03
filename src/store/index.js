import { createStore } from "vuex";

import homeModule from './modules/home/index.js';

const store = createStore({
  modules: {
    home: homeModule,
  }
})

export default store