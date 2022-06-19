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
        },

        updateTodo(state, payload) {
            const index = state.todos.findIndex((todo) => todo.id === payload.id)
            if (index >= 0) {
                state.todos.splice(index, 1, payload)
            }
        },

        deleteTodo(state, id) {
            const index = state.todos.findIndex(todo => todo.id === id)

            if (index >= 0) {
                state.todos.splice(index, 1)
            }
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
        },

        updateTodo({commit}, {id, data}) {
            return axios.put(`http://localhost:3000/todos/${id}`, data)
                .then((response) => {
                    commit('updateTodo', response.data)
                })
        },

        deleteTodo({commit}, id) {
            return axios.delete(`http://localhost:3000/todos/${id}`)
                .then(() => {
                    commit('deleteTodo', id)
                })
        }

    }
})
