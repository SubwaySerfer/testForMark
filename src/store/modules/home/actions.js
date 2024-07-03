export default {
  createFullUsersList({ state }) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => (state.fullUsersList = json))
      .catch((err) => {
        state.errorText = err;
      })
      .finally(() => {
        setTimeout(() => {
          state.isLoading = false;
        }, 400);
      })
  },

  // Если список большой, то лучше его не тянуть весь и делать запрос к серверу. Я реализую два способа.
  createIdsUsersList({ state }, payload) {
    let updateUrl = '';
    if (payload.arr) {
      payload.arr.forEach((el, idx) => {
        if (idx + 1 == payload.arr.length) {
          updateUrl += 'id=' + el;
        } else {
          updateUrl += 'id=' + el + '&';
        }
      });
    } else {
      updateUrl = 'id=' + payload;
    }

    fetch(`https://jsonplaceholder.typicode.com/users?${updateUrl}`)
      .then((response) => response.json())
      .then((json) => {
        state.idsUsersList = json;
      })
      .catch((err) => {
        state.errorText = err;
      })
      .finally(() => {
        setTimeout(() => {
          state.isLoading = false;
        }, 400);
      })
  },
};
