<template>
  <div class="product-details">
    <button class="back-button">返回</button>
    <h1 class="product-name">{{ product.name }}</h1>

    <div class="product-info">
      <ul>
        <li>
          <strong class="info-label">ID:</strong>
          <input class="info-input" v-model="product.id" />
        </li>
        <li>
          <strong class="info-label">名称:</strong>
          <input class="info-input" v-model="product.name" />
        </li>
        <li>
          <strong class="info-label">利率:</strong>
          <input class="info-input" v-model="product.interestRate" />
        </li>
      </ul>
    </div>

    <!-- 添加按钮 -->
    <div class="buttons">
      <button class="buy-button">购买</button>
      <button class="add-favorite-button">+ 添加收藏</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        name: "Product1",
        interestRate: "2%",
      },
    };
  },
};
</script>

<style scoped>
.back-button {
  background-color: lightskyblue;
  color: white;
  border: none;
  width: 65px;
  height: 55px;
  position: absolute;
  top: 5px;
  left:5px;
  font-size: 15px;
  text-align: center; /* 居中文本 */
  line-height: 55px; /* 垂直居中文本 */
}
.product-details {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.product-name {
  font-size: 28px;
  margin-bottom: 10px;
}

.product-info {/*背景框*/
  border: 1px solid #ccc;/*背景框边框*/
  padding: 25px 5px;
  background-color: #f2f2f2;
  margin-top: 10px;
}

.product-info ul {
  list-style: none;
  padding: 0;
}

.product-info li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.info-label {
  margin-left: 55px;
}

.info-input {
  border: 1px solid #ccc;
  padding: 5px;
  width: 150px;
  margin-left: auto;
  margin-right: 25px;
}

/* 按钮样式 */
.buttons {
  display: flex;
  flex-direction: column; /* 垂直排列按钮 */
  align-items: center; /* 水平居中对齐按钮 */
  margin-top: 20px;
}

.buy-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 102px; /* 增加按钮高度和宽度 */
  cursor: pointer;
  margin-bottom: 10px; /* 为按钮之间添加间距 */
}

.add-favorite-button {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 75px; /* 增加按钮高度和宽度 */
  cursor: pointer;
}
</style>