<template>
  <div class="bg-gray-300 rounded-sm">
    <div class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0">
      <div class="flex items-center justify-center mr-2">
        <button
            @click="onCheckClick"
            :class="{
            'text-gray-400 hover:text-green-600 transition ease-in-out hover:-translate-y-1': !isCompleted,
            'text-green-600': isCompleted
            }">
          <svg class="w-5 h-5" fill="none"
               stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </button>
      </div>

      <div class="w-full">
        <input
            @keyup.enter="onTitleChange"
            type="text"
            placeholder="Digite a sua tarefa"
            v-model="title"
            class="bg-gray-300 placeholder-gray-500 text-gray-700 font-light focus:outline-none block w-full
            appearance-noneleading-normal mr-3"
            :class="{ 'line-through': isCompleted }"
        >
      </div>

      <div class="ml-auto flex items-center justify-center">
        <button @click="deleteTodo" class="focus:outline-none">
          <svg
              class="transition ease-in-out hover:-translate-y-1 ml-3 h-4 w-4 text-gray-500 hover:text-red-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M19 7L18.1327 19.1425C18.0579
20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732
19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772
3 9 3.44772 9 4V7M4 7H20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonTodo",
  props: {
    todo: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      title: this.todo.title,
      isCompleted: this.todo.completed
    }
  },
  methods: {
    updateTodo() {
      const payload = {
        id: this.todo.id,
        data: {
          title: this.title,
          completed: this.isCompleted
        }
      }
      this.$store.dispatch('updateTodo', payload)
    },

    onTitleChange($evt) {
      this.title = $evt.target.value

      if (!this.title) {
        return;
      }
      this.updateTodo()
    },

    onCheckClick() {
      this.isCompleted = !this.isCompleted
      this.updateTodo()
    },

    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo.id)
    }
  },
}
</script>

<style scoped>

</style>