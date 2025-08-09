<template>
  <div class="fei-image" :style="`width:${imgS.width}; height:${imgS.height}`">
    <div class="fei-image__placeholder">
      <RenderVnode :vNode="title ?? ''" v-if="ImgDescribeTitle" />
    </div>
    <div class="fei-image__img">
      <div :class="{ loading: visible }">
        <div :class="{ 'fei-image__loading': visible }"></div>
        <RenderVnode :vNode="placeholder ?? ''" v-if="visible" />
        <RenderVnode :vNode="fallback ?? ''" v-if="!visible" />
      </div>
      <img :src="src" :alt="alt" @click="openImg" v-lazy="lazyLoad" :class="{ [`fei-image--${shape}`]: shape,[`fei-image--${mode}`]: mode }" />
    </div>
    <div class="fei-image__fallback">
      <RenderVnode :vNode="footer ?? ''" v-if="ImgDescribeFooter" />
    </div>
  </div>

  <Teleport to="body" v-if="ScreenImg"
    ><transition-group name="fei-image-spin">
      <div
        class="fei-image-Teleport"
        @wheel="handleWheel"
        @mousedown="dragStart = !dragStart"
        @mousemove="drag"
      >
        <div class="fei-image__header">
          <div class="fei-image__title">{{ title }}</div>
          <div class="fei-image__close" @click="close()">
          </div>
        </div>
        <div class="fei-image__body" @mousedown="drag">
          <img :src="src" :alt="alt" ref="img" v-lazy="lazyLoad" />
        </div>
        <div class="fei-image__footer">
          <slot name="footer">
            {{ footer }}
          </slot>
        </div>
      </div>
      <div class="is-screen" @wheel="handleWheel"></div>
    </transition-group>
  </Teleport>
</template>

<script setup lang="ts">
import type { ImageProps, ImageEmits } from "./types";
import RenderVnode from "../../hook/RenderVnode";
import {
  computed,
  defineComponent,
  toRefs,
  watch,
  ref,
  onMounted,
  onUnmounted,
} from "vue";
import imgStyle from "../../hook/WidthOrHeight";

defineOptions({
  name: "FeiImage",
});
const emits = defineEmits<ImageEmits>();
const props = withDefaults(defineProps<ImageProps>(), {
  mode: "aspectFill",
  shape: "square",
  radius: 0,
  lazy: false,
  src: "",
  alt: "",
  width: "200px",
  height: "400px",
  descriation: false,
  screen: false,
  visible: false,
  placeholder: "正在加载...",
  fallback: "",
  lazyLoad: false
});

const ImgDescribeTitle = computed(() => {
  return props.descriation || props.title;
});
const ImgDescribeFooter = computed(() => {
  return props.descriation || props.footer;
});

const imgS = computed(() => {
  return imgStyle(props.width, props.height);
});
const img = ref<HTMLImageElement | null>(null);

//全屏显示
const ScreenImg = ref(false);
const openImg = () => {
  if (!props.screen) return;
  ScreenImg.value = true;
  emits("onClick");
};

//滚轮滑动，并放大缩小

const handleWheel = (event: WheelEvent) => {
  const image = img.value;
  if (!image) return;
  // 获取当前 transform 的 scale 值
  const style = window.getComputedStyle(image);
  const transform = style.transform;
  let scale =
    transform && transform !== "none"
      ? parseFloat(transform.split("(")[1].split(",")[0])
      : 1;

  if (event.deltaY > 0) {
    scale *= 1.1;
  } else {
    scale /= 1.1;
  }
  image.style.transform = `scale(${scale})`;
  event.preventDefault();
};
//拖拽
//持续监听鼠标的点击和松开？，可以持续记录鼠标的移动，让图片随着鼠标去运动
const X = ref<Number>(0);
const Y = ref<Number>(0);
const dragStart = ref<boolean>(false);
const drag = (e: MouseEvent) => {
  if (!dragStart.value) return;
  e.preventDefault();
  const image = img.value;
  if (!image) return;
  X.value = e.clientX - image.width / 2;
  Y.value = e.clientY - image.height / 2;
  image.style.cursor = "move";
  image.style.position = "absolute";
  image.style.transition = "left 0.1s ease-in-out, top 0.1s ease-in-out";
  image.style.left = X.value + "px";
  image.style.top = Y.value + "px";
};

//关闭
const close = () => {
  ScreenImg.value = false;
  dragStart.value = false;

  emits("onClose", ScreenImg.value);
};

//监听加载状态
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {
      emits("onLoad");
    }
  }
);

//懒加载
const lazyLoad = () => {
  if (props.lazyLoad) {
    return props.src
  }else{
    return ''
  }
}
</script>

<style scoped>
.fei-image {
  --image-text-color: var(--fei-text-color-primary, #333);
  --image-text-font-size: var(--fei-font-size-base, 1rem);
  --image-text-font-size-large: var(--fei-font-size-extra-large, 1.25rem);
  --image-text-family: var(--fei-font-family, sans-serif);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  height: auto;
  overflow: hidden;
  position: relative;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.fei-image__placeholder {
  color: var(--image-text-color);
  font-size: var(--image-text-font-size-large);
  font-family: var(--image-text-family);
  padding: 3px;
  text-align: center;
  font-weight: 800;
}

.fei-image__img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fei-image__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* New styles for the loading container */
.fei-image__img .loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9); /* Optional: Adds a semi-transparent overlay */
  color: var(--image-text-color);
  font-family: var(--image-text-family);
  text-align: center;
  user-select: none;
}

/* Adjusted for the new structure, no longer needs absolute positioning */
.fei-image__loading {
  /* Removed absolute positioning properties */
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--fei-color-primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: fei-image-spin 1s linear infinite;
  margin-bottom: 0.5rem; /* Adds some space between the spinner and the text */
}

/* Keyframes remain the same */
@keyframes fei-image-spin {
  to {
    transform: rotate(360deg);
  }
}

.fei-image__fallback {
  color: var(--image-text-color);
  font-family: var(--image-text-family);
  font-size: var(--image-text-font-size);
  padding: 3px;
  text-align: center;
  font-weight: 300;
}
.fei-image-Teleport {
  position: fixed;
  top: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10003;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: opacity 0.3s ease-in-out;
  flex-direction: column;
  pointer-events: auto;
  user-select: none;
  color: white;

  .fei-image__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 50px;
    padding: 0 30px;
  }
  .fei-image__body img{
    user-select: none;
  }
}
.dragging {
  cursor: move;
  position: absolute;
}

.fei-image__title{
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
}
.fei-image__close{
  cursor: pointer;
  font-size: 20px;
  line-height: 50px;
  transition: all .3s;
  &:hover{
    color: #fff;
    transform: scale(1.2);
    opacity: .8;
    filter: drop-shadow(0 0 5px rgba(0,0,0,.5));
    transition: all .3s;
    -webkit-filter: drop-shadow(0 0 5px rgba(0,0,0,.5));
    -moz-filter: drop-shadow(0 0 5px rgba(0,0,0,.5));
    -ms-filter: drop-shadow(0 0 5px rgba(0,0,0,.5));
    -o-filter: drop-shadow(0 0 5px rgba(0,0,0,.5));
  }
}

.fei-image-spin-enter-active,
.fei-image-spin-leave-active {
  transition: all 0.5s ease;
}

.fei-image-spin-enter-from,
.fei-image-spin-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

.fei-image-spin-move {
  transition: transform 0.5s ease;
}

.fei-image-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;
  text-align: center;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}
/* 这里还是可以处理一下的 */

.fei-image--square {
  border-radius: 0;
}

.fei-image--circle {
  border-radius: 50%;
}

.fei-image--rounded {
  border-radius: 8px;
}
.fei-image-scaleToFill{
  object-fit: cover;
  object-position: center;
  transform: scale(1);
}


</style>