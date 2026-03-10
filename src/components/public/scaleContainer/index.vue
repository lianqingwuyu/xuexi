<script setup lang="ts">

// 设定设计宽度
const designWidthValue = 1920;
const designWidth = ref(`${designWidthValue}px`);
const zoom = ref(window.innerWidth / designWidthValue);
const containerHeight = ref(`${window.innerHeight / zoom.value}px`);
const scale = ref(`scale(${zoom.value})`);
const props = defineProps(['containerClass']);

// 更新尺寸的函数
function updateSize() {
  zoom.value = (window.innerWidth / designWidthValue).toFixed(3);
  scale.value = `scale(${zoom.value})`;
  containerHeight.value = `${window.innerHeight / zoom.value}px`;
}

// 组件挂载时，添加窗口大小变化的事件监听
onMounted(() => {
  window.addEventListener('resize', updateSize);
  updateSize();
});

// 组件卸载时，移除事件监听
onUnmounted(() => {
  window.removeEventListener('resize', updateSize);
});
</script>

<template>
  <div
      :class="props.containerClass"
      :style="{
      width: designWidth,
      height: containerHeight,
      overflow: 'hidden',
      transform: scale,
      transformOrigin: 'left top'
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>
