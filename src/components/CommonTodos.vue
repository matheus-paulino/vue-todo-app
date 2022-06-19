<template>
  <div class="space-y-2">
    <CommonTodo v-for="todo in $store.state.todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import CommonTodo from "@/components/CommonTodo";

export default {
  name: "CommonItems",
  components: {CommonTodo}
}
</script>

<style scoped>

</style>