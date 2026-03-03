<template>
  <div class="flex-between wh100">
    <div class="content wh100">
      <div class="title">css 样式题</div>
      <div class="list wh100">
        <div :class="['item',{'mt-10px':ix != 0}]" v-for="(i,ix) in dataConfig" :key="ix">
          <div class="item-i text-align-left">{{ ix + 1 }}.{{ i.title }}（{{i.type == 0 ? '单选' : i.type == 1 ? '多选' : '判断' }}}）
            <el-tooltip
                effect="dark"
                placement="top"
            >
              <template #content>{{i.tips}}<br />答案: {{ i.answer.join('、') }} </template>
              <el-icon class="ml-10px">
                <BellFilled/>
              </el-icon>

            </el-tooltip>
          </div>
          <div class="item-c mt-5px">
            <el-radio-group v-model="i.value" v-if="[0,2].includes(i.type)">
              <el-radio :value="j.value" v-for="(j,jx) in i.options" :key="jx" :label="j.name"></el-radio>
            </el-radio-group>
            <el-checkbox-group v-model="i.value" v-if="i.type== 1">
              <el-checkbox :value="j.value" v-for="(j,jx) in i.options" :key="jx" :label="j.name"/>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <div class="an">
      <el-button @click="pageChange('prev')" :disabled="page.page <= 1">上一页</el-button>
      <el-button @click="pageChange('next')" :disabled="page.page >= page.total">下一页</el-button>
      <el-button type="primary">提交答案</el-button>
      <span class="page-info ml-10px">第 {{ page.page }} / {{ page.total }} 页</span>
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted, nextTick, watch} from 'vue'
import {data} from './config'

const dataConfig = ref([])
const dataBackup = ref(JSON.parse(JSON.stringify(data)))
const page = ref({
  page: 1,
  total: 1,
  pageSize: 14, // 每页显示的题目数量
})

const overflowIndex = ref(-1)

// 计算总页数
const calculateTotalPages = () => {
  page.value.total = Math.ceil(dataBackup.value.length / page.value.pageSize)
}

// 加载当前页数据
const loadPageData = () => {
  const startIndex = (page.value.page - 1) * page.value.pageSize
  const endIndex = startIndex + page.value.pageSize

  dataConfig.value = dataBackup.value.slice(startIndex, endIndex)

  console.log(`第 ${page.value.page} 页，题目范围：${startIndex + 1} - ${Math.min(endIndex, dataBackup.value.length)}`)
}

// 检查哪个 item 超出父元素高度
const checkOverflow = async () => {
  await nextTick()

  const listElement = document.querySelector('.list')
  if (!listElement) {
    ElMessage.warning('未找到列表元素')
    return
  }

  const parentHeight = listElement.getBoundingClientRect().height
  const items = listElement.querySelectorAll('.item')
  let hasOverflow = false
  let overflowItemIndex = -1
  let currentItemTop = 0

  items.forEach((item, index) => {
    const itemHeight = item.getBoundingClientRect().height
    const marginTop = index !== 0 ? 10 : 0
    currentItemTop += itemHeight + marginTop

    if (currentItemTop > parentHeight && !hasOverflow) {
      hasOverflow = true
      overflowItemIndex = index
    }
  })

  overflowIndex.value = overflowItemIndex

  if (hasOverflow) {
    ElMessage.info(`当前页显示 ${(overflowItemIndex)} 道题目（共 ${items.length} 道）`)
  } else {
    ElMessage.success(`所有 ${items.length} 道题目都在可视区域内`)
  }
}

// 翻页处理
const pageChange = async (type) => {
  if (type === 'prev') {
    if (page.value.page > 1) {
      page.value.page--
    } else {
      ElMessage.warning('已经是第一页了')
      return
    }
  } else if (type === 'next') {
    if (page.value.page < page.value.total) {
      page.value.page++
    } else {
      ElMessage.warning('已经是最后一页了')
      return
    }
  }

  // 保存当前页的答案到备份数据
  saveCurrentAnswers()

  // 加载新页面数据
  loadPageData()

  // 检测新页面的溢出情况
  setTimeout(() => {
    checkOverflow()
    // 滚动到顶部
    const listElement = document.querySelector('.list')
    if (listElement) {
      listElement.scrollTop = 0
    }
  }, 100)
}

// 保存当前答案
const saveCurrentAnswers = () => {
  const startIndex = (page.value.page - 1) * page.value.pageSize
  dataConfig.value.forEach((item, index) => {
    if (item.value !== undefined) {
      dataBackup.value[startIndex + index].value = item.value
    }
  })
  console.log('已保存当前页答案')
}

// 监听页面变化
watch(() => page.value.page, () => {
  console.log(`切换到第 ${page.value.page} 页`)
})

// 监听窗口大小变化
const handleResize = () => {
  checkOverflow()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  // 初始化
  calculateTotalPages()
  loadPageData()

  setTimeout(() => {
    checkOverflow()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
<style scoped lang="scss">
.flex-between {
  padding: 0 60px;

  .content {
    border: 1px solid red;
    padding: 0 20px;
    position: relative;

    .title {
      font-size: 30px;
    }

    .list {
      height: calc(100% - 90px);
      overflow-y: auto;

      .item {
        .item-c {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
    }
  }

  .an {
    position: fixed;
    bottom: 20px;
    right: 80px;
    display: flex;
    align-items: center;
    background: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    .page-info {
      font-size: 14px;
      color: #606266;
      font-weight: bold;
    }
  }
}
</style>
