<template>
  <div class="search-bar">
    <input v-model="searchQuery" @input="search" placeholder="请输入搜索词" />
    <nav class="recommendations">
      <a @click="showContent('综合')" :class="{ active: selectedContent === '综合' }">综合</a>
      <a @click="showContent('灵活度')" :class="{ active: selectedContent === '灵活度' }">灵活度</a>
      <a @click="showContent('回报率')" :class="{ active: selectedContent === '回报率' }">回报率</a>
      <a @click="showContent('风险')" :class="{ active: selectedContent === '风险' }">风险</a>
    </nav>
    <div class="content">
      <p v-if="selectedContent === '综合'">这是推荐指标 "综合" 的内容。</p>
      <p v-if="selectedContent === '灵活度'">这是推荐指标 "灵活度" 的内容。</p>
      <p v-if="selectedContent === '回报率'">这是推荐指标 "回报率" 的内容。</p>
      <p v-if="selectedContent === '风险'">这是推荐指标 "风险" 的内容。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
      selectedContent: null,
    };
  },
  methods: {
    search() {
      // 执行搜索相关的操作
    },
    showContent(content) {
      this.selectedContent = content;
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; /* 设置最大宽度适应大屏幕 */
  margin: 0 auto; /* 水平居中 */
}

/* 样式 */
input {
  padding: 10px;
  width: 400px; /* 增加搜索框宽度 */
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
}

.recommendations {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px 0;
}

a {
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: background-color 0.2s;
}

a.active {
  background-color: #ccc;
}

.content {
  text-align: center;
  margin-top: 20px;
}

p {
  font-size: 16px;
}
</style>
