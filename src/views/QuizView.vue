<script setup>
import {useQuestionsStore} from "@/stores/questions";
import QuestionComponent from "@/components/QuestionComponent.vue";
import StepperComponent from "@/components/StepperComponent.vue";


// function NextQuestion(){
//   useQuestionsStore().index++;
// }
</script>

<template>

  <nav>
    <stepper-component :index="1"/>
  </nav>
  <div
      class="block mt-10 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div>
        <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">Question {{ useQuestionsStore().index + 1 }} / {{ useQuestionsStore().question_length }}</h5>
      </div>
      <div>
        <question-component :question="useQuestionsStore().questions[useQuestionsStore().index]"/>
      </div>
    </div>

  </div>

</template>

<style scoped></style>
