<template>
    <view class="questionnaire">
        <view class="question"
              v-for="(question, questionIndex) in questions"
              :key="questionIndex">
            <p class="question-text">{{ questionIndex + 1 }}. {{ question.title.title }}</p>
            <view class="options">
                <radio-group>
                    <label
                            class="option"
                            v-for="(option, optionIndex) in question.options"
                            :key="optionIndex"
                    >
                        <radio
                                :id="`question_${questionIndex}_option_${optionIndex}`"
                                :value="option.id"
                                v-model="answers[questionIndex]"></radio>
                        <span>{{ indexToAlphabets(optionIndex) }}. {{ option.title }}</span></label>
                </radio-group>
            </view>
        </view>
        <button type="submit"
                @click="doSubmit">提交
        </button>
    </view>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import {indexToAlphabets} from "../../ts/transcript";
// 以这个版本为准
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

const answers = /*Array(questions.value.length).fill('')*/
    ref<Array<Object>>([])
const doSubmit = () => {
      var r=confirm("确认提交")
    if (r==true)
    {
      uni.switchTab({
        url: "../../pages/recommend/index"
      });
    }

}
const initComponent = () => {
    uni.request({
        url: "/api/question/queryList",
        method: "GET",
        success: (res: AnyObject) => {
            questions.value = res.data["data"]
            answers.value = Array(questions.value.length)
        }
    })
}

initComponent()
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
