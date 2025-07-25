<template>
  <span 
    class="xh-light"
    :class="{ 'underline': underline }"
    :style="styleProps"
  >
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '#9c3c3c'
  },
  fontSize: {
    type: String,
    default: '0.9375rem'
  },
  fontWeight: {
    type: String,
    default: '700'
  },
  underline: {
    type: Boolean,
    default: false
  },
  underlineColor: {
    type: String,
    default: ''
  }
})

const styleProps = computed(() => ({
  '--xh-color': props.color,
  '--xh-font-size': props.fontSize,
  '--xh-font-weight': props.fontWeight,
  '--xh-underline-color': props.underlineColor || props.color
}))
</script>

<style scoped lang="scss">
.xh-light {
  color: var(--xh-color);
  font-size: var(--xh-font-size);
  font-weight: var(--xh-font-weight);
  line-height: 1.5;
  display: inline-block;
  transition: all 0.3s ease;
  
  &.underline {
    position: relative;
    padding-bottom: 2px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--xh-underline-color);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
}
</style>