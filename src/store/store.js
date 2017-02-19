import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [
            {id: 1, side: 'left', color: 'white'},
            {id: 2, side: 'left', color: 'white'},
            {id: 3, side: 'left', color: 'black'},
            {id: 4, side: 'left', color: 'white'},
            {id: 5, side: 'left', color: 'white'},
            {id: 6, side: 'left', color: 'white'},
            {id: 7, side: 'left', color: 'white'},
            {id: 8, side: 'left', color: 'black'},
            {id: 9, side: 'right', color: 'black'},
            {id: 10, side: 'right', color: 'black'},
            {id: 11, side: 'right', color: 'black'},
            {id: 12, side: 'right', color: 'black'},
            {id: 13, side: 'right', color: 'white'},
            {id: 14, side: 'right', color: 'black'},
            {id: 15, side: 'right', color: 'white'},
            {id: 16, side: 'right', color: 'black'}
        ],
        maxItemsInBox: 9
    },
    mutations: {
        MOVE_ITEM(state, item) {
            item.side = item.side === 'left' ? 'right' : 'left'
        }
    },
    actions: {
        moveItem({commit}, todo) {
            commit('MOVE_ITEM', todo)
        }
    },
    getters: {
        maxItemsInBox: state => state.maxItemsInBox,
        items: state => state.items,
        itemsLeft: state => state.items.filter((item) => item.side === 'left'),
        itemsRight: state => state.items.filter((item) => item.side === 'right')
    }
});
