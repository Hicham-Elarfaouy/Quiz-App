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
  } else {
    router.push("/result")
  }
}
</script>

<template>

  <div>
    <h5 class="my-10 text-lg min-h-32 font-medium tracking-tight text-gray-900 dark:text-white">
      {{ props.question.question }}</h5>

    <ul id="options" class="grid grid-cols-2 gap-2">
      <li v-for="(option) in props.question.options" :id="option.id" class="option cursor-pointer block w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" :key="`option-${option.id}`"
          @click="CheckAnswer(option.id)">
        {{ option.option }}
      </li>
    </ul>
  </div>

</template>

<style scoped>
.right {
  background-color: #00b894;
}

.wrong {
  background-color: #e74c3c;
}
</style>
