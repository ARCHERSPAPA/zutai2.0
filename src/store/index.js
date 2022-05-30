import { createStore } from "vuex"
const Store = createStore({
    state: { isPreview: false },
    getters: {},
    mutations: {
        setPre(state, isPre) {
            state.isPreview = isPre
        }
    },
    actions: {
        asyncUpdateIsPre({ commit }, isPre) {
            commit('setPre', isPre)
        }
    }
})
export default Store
