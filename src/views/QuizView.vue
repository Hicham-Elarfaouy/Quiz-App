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
  <div>
    <h2>QUIZ</h2>
    <h4>Question {{ useQuestionsStore().index + 1 }}</h4>
    <question-component :question="useQuestionsStore().questions[useQuestionsStore().index]"/>

<!--    <button @click="NextQuestion">Next</button>-->
  </div>
</template>

<style scoped></style>
