<template>
  <div class="questionnaire">
    <form @submit.prevent="submitForm">
      <div class="question" v-for="(question, index) in questions" :key="index">
        <p class="question-text">{{ question.text }}</p>
        <div class="options">
          <label
              class="option"
              v-for="(option, optionIndex) in question.options"
              :key="optionIndex"
          >
            <input
                type="checkbox"
                :id="`question_${index}_option_${optionIndex}`"
                :value="option.value"
                v-model="questionResponses[index]"
                @change="handleCheckboxChange(index, option.value)"
            />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </div>
      <button type="submit">提交</button>
    </form>
  </div>




</template>

<script setup lang="ts">
import { ref } from 'vue';

const questions = [
  {
    text: "1. 您的年龄是？",
    options: [
      { label: "18-25岁", value: "A" },
      { label: "26-35岁", value: "B" },
      { label: "36-45岁", value: "C" },
      { label: "46-55岁", value: "D" },
      { label: "56岁以上", value: "E" },
    ],
  },
  {
    text: "2. 您当前的职业状况是？",
    options: [
      { label: "学生", value: "A" },
      { label: "工作不稳定或暂无工作", value: "B" },
      { label: "稳定工作，固定收入", value: "C" },
      { label: "自主创业或自由职业", value: "D" },
      { label: "已退休", value: "E" },
    ],
  },
  {
    text: "3. 您的投资经验是？",
    options: [
      { label: "无经验", value: "A" },
      { label: "1-3年", value: "B" },
      { label: "4-6年", value: "C" },
      { label: "7年以上", value: "D" },
    ],
  },
  {
    text: "4. 您预计的投资期限是？",
    options: [
      { label: "3个月以下", value: "A" },
      { label: "3-12个月", value: "B" },
      { label: "1-3年", value: "C" },
      { label: "3-5年", value: "D" },
      { label: "5年以上", value: "E" },
    ],
  },
  {
    text: "5. 当您的投资面临亏损时，您的反应是？",
    options: [
      { label: "马上卖出，不能接受任何亏损", value: "A" },
      { label: "观望，看是否有恢复的迹象", value: "B" },
      { label: "买入更多，看到了投资机会", value: "C" },
      { label: "不会做出过多反应，坚信长期投资策略", value: "D" },
    ],
  },
  {
    text: "6. 您期望的年回报率是？",
    options: [
      { label: "1-3%", value: "A" },
      { label: "4-6%", value: "B" },
      { label: "7-10%", value: "C" },
      { label: "10%以上", value: "D" },
    ],
  },
  {
    text: "7. 您的财务状况如何？",
    options: [
      { label: "无储蓄，或有负债", value: "A" },
      { label: "有一定储蓄，但无其他投资", value: "B" },
      { label: "有多元化的投资组合", value: "C" },
      { label: "财务宽裕，有大量的可投资资金", value: "D" },
    ],
  },
  // 添加更多问题
];

const questionResponses = ref(Array(questions.length).fill(''));
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
