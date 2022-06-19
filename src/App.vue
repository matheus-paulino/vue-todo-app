<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <CommonSpinner v-if="loading"/>
      <template v-else>
        <CommonForm/>
        <CommonTodos/>
        <CommonTodoEmpty/>
      </template>
    </div>
  </div>
</template>

<script>

import CommonSpinner from "@/components/CommonSpinner";
import CommonForm from "@/components/CommonForm";
import CommonTodos from "@/components/CommonTodos";
import CommonTodoEmpty from "@/components/CommonTodoEmpty";
import axios from 'axios'

export default {
  name: 'App',
  components: {CommonTodoEmpty, CommonTodos, CommonForm, CommonSpinner},

  data() {
    return {
      loading: false
    }
  },

  created() {
    this.loading = true
    setInterval(() => {
      axios.get('http://localhost:3000/todos')
          .then((response) => {
            this.$store.commit('storeTodos', response.data)
          })
          .finally(() => {
            this.loading = false
          })
    }, 1000)

  }
}
</script>

<style>

</style>
