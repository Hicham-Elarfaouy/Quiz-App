<script setup>
import {defineProps} from 'vue';
import {useQuestionsStore} from "@/stores/questions";
import router from "@/router";


const props = defineProps({
  'question': {
    type: Object,
    required: true,
  },
})


async function CheckAnswer(selected) {
  const response = await fetch("http://127.0.0.1:8000/api/question/" + props.question.id + "/answers").then((res) => res.json());
  let right_answer = response.data;

  console.log(selected, right_answer)

  let options = document.querySelectorAll(".option");
  options.forEach(e => {
    if (e.id == right_answer) {
      if (right_answer == selected) {
        useQuestionsStore().score++;
      }
      e.classList.add("right")
    } else if (e.id == selected) {
      e.classList.add("wrong")
    }
  })

  setTimeout(() => {
    NextQuestion();
  }, "1000");
}

function NextQuestion() {
  if (useQuestionsStore().question_length > useQuestionsStore().index + 1) {
    useQuestionsStore().index++;
  }else{
    router.push("/result")
  }
}
</script>

<template>
  <div>
    <p>Id : {{ props.question.id }}</p>
    <p>Q : {{ props.question.question }}</p>
    <ul id="options">
      <li v-for="(option) in props.question.options" :id="option.id" class="option" :key="`option-${option.id}`"
          @click="CheckAnswer(option.id)">
        {{ option.option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.right {
  background-color: green;
}

.wrong {
  background-color: red;
}
</style>
