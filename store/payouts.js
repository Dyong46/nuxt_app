export const state = () => ({
  payouts: [],
})

export const mutations = {
  setPayoutsState(state, payloads) {
    state.payouts = payloads
  },
  // addPayoutState(state, payload) {
  //   state.payouts.push(payload)
  // },
  // editPayoutState(state, payload) {
  //   const index = state.payouts.findIndex((item) => item.id === payload.id)
  //   state.payouts[index] = payload
  // },
}

export const actions = {
  async loadPayouts({ commit }, actions) {
    try {
      const docsRef = await this.$fire.firestore.collection('payouts').get()
      const data = docsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      commit('setPayoutsState', data)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async editPayout({ commit, dispatch }, payout) {
    try {
      await this.$fire.firestore
        .collection('payouts')
        .doc(payout.id)
        .set(payout)

      dispatch('loadPayouts')
    } catch (e) {
      Promise.reject(e)
    }
  },

  // alert(data)
}

export const getters = {
  payouts: (state) => state.payouts,
}
