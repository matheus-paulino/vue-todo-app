<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <CommonSpinner v-if="loading"/>
      <template v-else>
        <CommonForm/>
        <CommonTodos v-if="$store.state.todos.length > 0"/>
        <CommonTodoEmpty v-else/>
      </template>
    </div>
  </div>
</template>

<script>

import CommonSpinner from "@/components/CommonSpinner";
import CommonForm from "@/components/CommonForm";
import CommonTodos from "@/components/CommonTodos";
import CommonTodoEmpty from "@/components/CommonTodoEmpty";
import {ref} from "vue";
import { useStore } from "vuex";

export default {
  name: 'App',
  components: {CommonTodoEmpty, CommonTodos, CommonForm, CommonSpinner},
  setup () {
    const loading = ref(false)
    const store = useStore()

    loading.value = true

    store.dispatch('getTodos')
        .finally(() => {
          loading.value = false
        })

    return {
      loading
    }
  },
}
</script>

<style>

</style>
