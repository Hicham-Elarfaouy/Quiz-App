<script setup>

import {useQuestionsStore} from "@/stores/questions";
import StepperComponent from "@/components/StepperComponent.vue";
</script>

<template>
  <nav>
    <stepper-component :index="2"/>
  </nav>
  <div>
    <h2>Result</h2>
    <h2>{{ useQuestionsStore().score }}</h2>
  </div>

</template>

<style scoped></style>
