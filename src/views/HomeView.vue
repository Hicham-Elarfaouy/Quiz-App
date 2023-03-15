<script setup>
import StepperComponent from "@/components/StepperComponent.vue";
import {useQuestionsStore} from "@/stores/questions";
import {onBeforeMount} from "vue";

function reset_quiz(){
  useQuestionsStore().index = 0
  useQuestionsStore().score = 0
}

onBeforeMount(()=>{
  reset_quiz()
})

</script>

<template>
  <nav>
    <stepper-component :index="0"/>
  </nav>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <router-link to="/quiz"><button>Start Quiz</button></router-link>
  </div>
</template>
