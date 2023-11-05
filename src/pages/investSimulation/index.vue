<script setup lang="ts">
const nextStep = () => {
    uni.navigateTo({url: '/pages/investSimulation/purchase'})
}
</script>

<template>

    <view class="content">
        <view class='text-area'>
            <text class='title' color="$uni-color-primary">请选择要购买的产品</text>
        </view>

    </view>

    <uni-section>
        <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
                        @cancel="cancel" @clear="clear">
        </uni-search-bar>


    </uni-section>

    <view>
<<<<<<< HEAD
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" 
			@selection-change="selectionChange">
				<uni-tr>
					<uni-th align="left">产品</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="warn">取消收藏</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
=======
        <view class="uni-container">
            <uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据"
                       @selection-change="selectionChange">
                <uni-tr>
                    <uni-th width="150" align="center">产品</uni-th>
>>>>>>> 3250015b8b9a37260ecd05d4f98e5bccc8e09a7f

                </uni-tr>
                <uni-tr v-for="(item, index) in tableData" :key="index">
                    <uni-td>
                        <view class="uni-group">
                            <button class="uni-button" size="mini" type="warn">取消收藏</button>
                        </view>
                    </uni-td>
                </uni-tr>
            </uni-table>
            <view class="uni-pagination-box">
                <uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change"/>
            </view>
        </view>
        <button size="mini" type="default"
                style="color:#ffffff;backgroundColor:#FF0000;borderColor:#179b16"
                hover-class="is-hover"
                @click="nextStep">下一步
        </button>
    </view>
</template>

<style scoped>
.content {
    padding: 5%;
}
</style>