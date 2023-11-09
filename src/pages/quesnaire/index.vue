<template>
    <view class="questionnaire">
        <view class="question"
              v-for="(question, index) in questions"
              :key="index">
            <p class="question-text">{{ question.text }}</p>
            <view class="options">
                <radio-group>
                    <label
                            class="option"
                            v-for="(option, optionIndex) in question.options"
                            :key="optionIndex"
                    >
                        <radio
                                :id="`question_${index}_option_${optionIndex}`"
                                :value="option.value"
                                v-model="questionResponses[index]"></radio>
                        <!--
                            @change="handleCheckboxChange(index, option.value)"-->
                        <span>{{ option.value }}. {{ option.label }}</span></label>
                </radio-group>
            </view>
        </view>
        <button type="submit">提交</button>
    </view>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';

const questions = ref([
    {
    "title": {
      "id": 0,
      "title": "这是问题"
        },
    "options": [
            {
                "id": 0,
                "question": 0,
                "title": "这是选项",
                "value": 0,
                "questionType": 0
      }
    ]
  }
]);

const questionResponses = ref(Array(questions.value.length).fill(''));
const recommendation = ref('');
</script>


<style scoped>
.questionnaire {
  text-align: center;
  margin: 20px;
}

.question {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.question-text {
  font-weight: bold;
  margin-bottom: 10px;
}

.options {
  display: flex;
  flex-direction: column;
}

.option {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

input[type="radio"] {
  margin-right: 5px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
