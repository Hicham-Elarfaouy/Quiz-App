<script setup>
import StepperComponent from "@/components/StepperComponent.vue";
import {useQuestionsStore} from "@/stores/questions";
import {onBeforeMount} from "vue";

function reset_quiz() {
  useQuestionsStore().fetch_questions()
  useQuestionsStore().index = 0
  useQuestionsStore().score = 0
}

onBeforeMount(() => {
  reset_quiz()
})

</script>

<template>
  <nav>
    <stepper-component :index="0"/>
  </nav>

  <div
      class="block mt-10 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome To Quiz App</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium aliquam consequuntur corporis cum, cumque delectus deleniti earum iste, laborum modi nisi officia
        perspiciatis placeat ratione veniam. Consequatur deserunt et reprehenderit!</p>
    </div>
    <div class="flex justify-center mt-10">
      <router-link to="/quiz" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Start Quiz
      </router-link>
    </div>
  </div>
</template>
