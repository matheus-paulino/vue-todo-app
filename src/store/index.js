import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        todos: []
    },
    getters: {},
    mutations: {
        storeTodos(state, payload) {
            state.todos = payload
        },
        storeTodo(state, payload) {
            state.todos.push(payload)
        }
    },
    actions: {
        getTodos({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    return axios.get('http://localhost:3000/todos')
                        .then((response) => {
                            commit('storeTodos', response.data)
                            resolve()
                        })
                }, 2000)
            })
        },

        addTodo({commit}, payload) {
            return axios.post('http://localhost:3000/todos', payload)
                .then((response) => {
                    commit('storeTodo', response.data)
                })
        }
    }
})
