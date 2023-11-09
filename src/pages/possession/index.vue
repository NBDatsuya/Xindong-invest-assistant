<template>
    <view class="warp">
        <uni-section title="统计数据" type="line" padding>
            <uni-grid :column="6"
                      :highlight="true">
                <uni-grid-item>
                    <view class="grid-item-box">
                        <text>资产总计</text>
                        <text>￥{{ statistics.totalAssets }}</text>
                    </view>

                </uni-grid-item>
                <uni-grid-item>
                    <view class="grid-item-box">
                        <text>总市值</text>
                        <text>￥{{ statistics.totalCurrentPrice }}</text>
                    </view>

                </uni-grid-item>
                <uni-grid-item>
                    <view class="grid-item-box">
                        <text>总收益</text>
                        <text>￥{{ statistics.dailyProfit }}</text>
                    </view>
                </uni-grid-item>
            </uni-grid>
        </uni-section>
        <uni-section title="已购产品" type="line" padding>
            <uni-table border stripe emptyText="暂无更多数据">
                <uni-tr>
                    <uni-th align="center" width="80">股票名称</uni-th>
                    <uni-th align="center" width="60">代码</uni-th>
                    <uni-th align="center" width="60">持有数量</uni-th>
                    <uni-th align="center" width="60">成本</uni-th>
                    <uni-th align="center" width="60">市值</uni-th>
                    <uni-th align="center" width="60">购买日期</uni-th>
                    <uni-th align="center" width="40">操作</uni-th>
                </uni-tr>
                <uni-tr v-for="(item,index) in possession" :key="index" class="table-row">
                    <uni-td align="center">{{ item.product.name }}</uni-td>
                    <uni-td align="center">{{ item.product.id }}</uni-td>
                    <uni-td align="center">{{ item.amount }}</uni-td>
                    <uni-td align="center">￥{{ item.purchasePrice }}</uni-td>
                    <uni-td align="center">￥{{ item.purchasePrice * item.amount }}</uni-td>
                    <uni-td align="center">{{ localTime(item.purchaseDate) }}</uni-td>
                    <uni-td align="center">
                        <button size="mini"
                                type="warn">
                            卖出
                        </button>

                    </uni-td>
                </uni-tr>
            </uni-table>
        </uni-section>
        <view>
            <!-- 提示信息弹窗 -->
            <uni-popup ref="msgBox" type="message">
                <uni-popup-message :type="msgProp.msgType"
                                   :message="msgProp.msgText"
                                   :duration="2000"/>
            </uni-popup>
        </view>
    </view>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {localTime} from "../../ts/transcript";

const msgProp = ref({
    msgType: "",
    msgText: "",
    duration: "2000"
})
const statistics = ref({
    totalAssets: 1
    , totalCurrentPrice: 2
    , dailyProfit: 3
})
const possession = ref([{
    "product": {
        "id": 1,
        "name": "美的集团股票1",
        "details": "美的集团背景、走势",
        "price": 2000,
        "antiRisk": 0.2,
        "flexibility": 0.02,
        "returnRate": 1,
        "state": 1
    },
    "purchasePrice": 1,
    "amount": 1,
    "purchaseDate": "2023-11-07T10:44:09.000+00:00"
}
]);

const initComponent = () => {
    uni.request({
        url: "/api/possession/stat",
        method: "GET",
        success: (res: AnyObject) => {
            if (res.data["code"] == 200) {
                possession.value = res.data.data["list"]
                statistics.value.dailyProfit = res.data.data["dailyProfit"].toFixed(2)
                statistics.value.totalAssets = res.data.data["totalAssets"].toFixed(2)
                statistics.value.totalCurrentPrice = res.data.data["totalCurrentPrice"].toFixed(2)
            } else {
                alert('')
                return
            }
        },
        fail: () => {
            alert('')
            return
        }
    })
}

initComponent()
</script>

<style scoped lang="scss">
.grid-item-box {
  flex: 1;
  // position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}
</style>

  