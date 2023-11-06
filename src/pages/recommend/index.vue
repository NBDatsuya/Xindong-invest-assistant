<template>
    <div class="search-bar">
        <div class="search-input">
            <input v-model="searchQuery" placeholder="请输入搜索词"/>
            <button @click="search" class="blue-button search-button">搜索</button>
        </div>
        <nav class="indicators">
            <div
                    v-for="(indicator, index) in ['综合', '灵活度', '回报率', '风险']"
                    :key="index"
                    @click="showContent(indicator)"
                    :class="{ active: activeIndicator === indicator }"
                    class="indicator"
            >
                {{ indicator }}
            </div>
        </nav>
        <div class="underline"></div>
        <div class="">
            <div class="product-list">
                <div class="product-section"
                     v-for="product in visibleProducts"
                     :key="product.name">
                    <div class="product-info">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.description }}</p>
                    </div>
                    <button class="blue-button" @click="nextStep">查看详情</button>
                </div>
            </div>
            <div class="pagination">
                <div class="page-navigation">
                    <button @click="previousPage"
                            :disabled="currentPage === 1"
                            class="pagination-button">&lt;
                    </button>
                    <span>页码: {{ currentPage }} / {{ totalPages }}</span>
                    <button @click="nextPage"
                            :disabled="currentPage === totalPages"
                            class="pagination-button">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const searchQuery = ref("")
const selectedContent = ref("comprehensive")
const activeIndicator = ref("comprehensive")

const financialProducts = ref({
    "comprehensive": [
        {name: "Product 1", description: "产品 1 的描述"},
        {name: "Product 2", description: "产品 2 的描述"},
        {name: "Product 9", description: "产品 9 的描述"},
        {name: "Product 10", description: "产品 10 的描述"},
    ],
    "flexibility": [
        {name: "Product 3", description: "产品 3 的描述"},
        {name: "Product 4", description: "产品 4 的描述"},
    ],
    "returnRate": [
        {name: "Product 5", description: "产品 5 的描述"},
        {name: "Product 6", description: "产品 6 的描述"},
        {name: "Product 11", description: "产品 11 的描述"},
    ],
    "risk": [
        {name: "Product 7", description: "产品 7 的描述"},
        {name: "Product 8", description: "产品 8 的描述"},
    ],
})

const filteredProducts = computed(() => {
    if (!searchQuery.value) {
        return financialProducts.value[selectedContent.value];
    }

    const query = searchQuery.value.toLowerCase();
    return financialProducts.value[selectedContent.value].filter(
        (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
    );
})

const visibleProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value
    return searchResult.value.slice(start, end); // 使用 searchResult 显示搜索结果
})

const totalPages = computed(() => {
    return Math.ceil(searchResult.value.length / itemsPerPage.value); // 使用 searchResult 的长度
})


const itemsPerPage = ref(3)
const currentPage = ref(1)
const searchResult = ref([])

const nextStep = () => {
    uni.navigateTo(
        {url: '/pages/recommend/detail'});
}

const initComponent = () => {
    search()
}

const search = () => {
    if (searchQuery.value.trim() === "") {
        searchResult.value = financialProducts.value[selectedContent.value]; // 显示所有产品
    } else {
        // 模拟搜索
        const query = searchQuery.value.toLowerCase();
        searchResult.value = financialProducts.value[selectedContent.value]
            .filter((product) =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
            );
    }
    currentPage.value = 1; // 将当前页重置为第一页
}

const showContent = (content: string) => {
    selectedContent.value = content;
    activeIndicator.value = content;
    // 搜索
    search();
}
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

initComponent()

</script>

<style scoped>
/* 样式保持不变 */
</style>


<style scoped>
.search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 0;
    padding: 20px;
}

.search-input {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

input {
    padding: 10px;
    width: 50%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

button.search-button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: blue;
    color: #fff;
    border: none;
    border-radius: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.indicators {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 5px;
    width: 100%;
}

.indicator {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    transition: color 0.2s;
    text-align: center;
    border-right: 1px solid #ccc;
}

.indicator:last-child {
    border-right: none;
}

.active {
    background-color: #808080;
    color: #fff;
}

.underline {
    width: 100%;
    height: 1px;
    background-color: #333;
    margin-top: 1px;
}

.product-list {
    /*display: flex;
		flex-direction: column;
		align-items: center;
		width: 1150px;*/
    text-align: center;
    margin: 20px;
}

.product-section {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f0f0f0; /* 设置背景颜色为浅灰色 */
    width: 90%;
}

.product-info {
    flex: 1;
}

.blue-button {
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
}

.pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 20px;
}

.page-navigation {
    display: flex;
    align-items: center;
}

.pagination-button {
    padding: 5px 10px;
    margin: 0 5px;
}
</style>
