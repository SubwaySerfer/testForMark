import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      fullUsersList: [],
      currentUser: null,

      idsUsersList: [],
      userNameList: [],

      errorText: '',
      isLoading: false
    };
  },
  mutations,
  getters,
  actions
};
