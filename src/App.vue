<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <CommonSpinner/>
      <CommonForm/>
      <CommonTodos/>
      <CommonTodoEmpty/>
    </div>
  </div>
</template>

<script>


import CommonSpinner from "@/components/CommonSpinner";
import CommonForm from "@/components/CommonForm";
import CommonTodos from "@/components/CommonTodos";
import CommonTodoEmpty from "@/components/CommonTodoEmpty";

export default {
  name: 'App',
  components: {CommonTodoEmpty, CommonTodos, CommonForm, CommonSpinner},
}
</script>

<style>

</style>
