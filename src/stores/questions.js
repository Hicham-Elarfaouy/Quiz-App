import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions',() => {
  const url = "http://127.0.0.1:8000/api/question"
  let index = ref(0)
  let question_length = ref(0)
  let score = ref(0)

  let questions = ref([])

  async function fetch_questions() {
    const response = await fetch(url).then((res)=> res.json());
    question_length.value = response.length;
    questions.value = response.data;
  }

  return {index, question_length, questions, fetch_questions, score}
})
