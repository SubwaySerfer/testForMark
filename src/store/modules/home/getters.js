export default {
  getCurrentFilteredList(state) {
    if (state.idsUsersList.length > 0) {
      return state.idsUsersList
    } else {
      return state.userNameList
    }
  },
  getCurrentUser(state) {
    return state.currentUser
  },
  getErrorText(state) {
    return state.errorText
  },
  getLoadingStatus(state) {
    return state.isLoading
  }
};
