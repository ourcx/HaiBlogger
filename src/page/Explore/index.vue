<template>
  <main class="explore-page">
    <header class="explore-header">
      <span class="eyebrow">宇宙观察台</span>
      <h1>尺度之外</h1>
      <p>有些数字大到失去意义。把它们换成光、时间和一段仍在继续的旅程，也许能重新摸到一点真实。</p>
    </header>
    <section class="voyager-card">
      <div class="star-field" aria-hidden="true">
        <i v-for="i in 28" :key="i" :style="starStyle(i)"></i>
      </div>
      <div class="voyager-card__copy">
        <span class="live-label"><i></i> 实时估算</span>
        <h2>旅行者一号，仍在远行</h2>
        <div class="voyager-distance">
          {{ formatInteger(liveDistance) }}<small>公里</small>
        </div>
        <p>
          此刻它距离地球约
          <strong>{{ voyager?.astronomicalUnits.toFixed(2) }} AU</strong
          >。你看到的每一个数字，都比上一秒更远一些。
        </p>
        <a v-if="voyager" :href="voyager.sourceUrl" target="_blank" rel="noreferrer"
          >数据基准：NASA · 动态估算 ↗</a
        >
      </div>
      <div class="voyager-path" aria-hidden="true">
        <div class="earth">地球</div>
        <span></span>
        <div class="probe">V1</div>
      </div>
    </section>

    <section class="widget-grid">
      <article class="metric-card">
        <span>单程信号时间</span>
        <strong>{{ lightHours }}<small>小时</small></strong>
        <p>
          一条来自地球的无线电指令，需要这么久才能抵达旅行者一号。等回复，要再走一遍。
        </p>
      </article>
      <article class="metric-card metric-card--accent">
        <span>可观测宇宙</span>
        <strong>930<small>亿光年</small></strong>
        <p>可观测宇宙直径的估计值。不是宇宙的边界，只是光来得及告诉我们的范围。</p>
      </article>
      <article class="metric-card">
        <span>宇宙日历</span>
        <strong>23:59<small>:59</small></strong>
        <p>若把宇宙 138 亿年压缩成一年，人类文明只在最后一秒附近出现。</p>
      </article>
    </section>

    <section class="scale-lab">
      <div>
        <span class="eyebrow">尺度换算</span>
        <h2>如果地球只有一粒米大</h2>
        <p>拖动尺度，看看太阳系在桌面上会铺多远。</p>
      </div>
      <div class="scale-lab__control">
        <n-slider v-model:value="earthSize" :min="1" :max="10" :step="1" />
        <div class="scale-readout">
          <span>地球直径</span><strong>{{ earthSize }} 毫米</strong>
        </div>
        <div class="scale-readout">
          <span>地球到太阳</span><strong>{{ formatDistance(sunDistanceMeters) }}</strong>
        </div>
        <div class="scale-readout">
          <span>太阳直径</span
          ><strong>{{ ((earthSize * 109) / 10).toFixed(1) }} 厘米</strong>
        </div>
      </div>
    </section>

    <footer class="explore-footer">
      我们很小。但能意识到自己的渺小，本身就是一件很大的事。
    </footer>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { NSlider } from "naive-ui";

interface VoyagerData {
  distanceKm: number;
  astronomicalUnits: number;
  lightHours: number;
  speedKmPerSecond: number;
  updatedAt: string;
  sourceUrl: string;
}

const voyager = ref<VoyagerData | null>(null);
const liveDistance = ref(0);
const earthSize = ref(4);
let timer = 0;
const lightHours = computed(() =>
  voyager.value ? (liveDistance.value / 299_792.458 / 3600).toFixed(2) : "—"
);
const sunDistanceMeters = computed(() => (earthSize.value / 12_742) * 149_597_870.7);

onMounted(async () => {
  const response = await fetch("/api/exploration/voyager");
  const data = await response.json();
  voyager.value = data;
  liveDistance.value = data.distanceKm;
  timer = window.setInterval(() => {
    liveDistance.value += data.speedKmPerSecond;
  }, 1000);
});
onBeforeUnmount(() => window.clearInterval(timer));

function formatInteger(value: number) {
  return Math.round(value).toLocaleString("zh-CN");
}
function formatDistance(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(1)} 千米` : `${value.toFixed(0)} 米`;
}
function starStyle(index: number) {
  return {
    left: `${(index * 37) % 97}%`,
    top: `${(index * 53) % 89}%`,
    animationDelay: `${-(index % 7)}s`,
    opacity: `${0.25 + (index % 5) * 0.13}`,
  };
}
</script>

<style scoped>
.explore-page {
  width: min(100%, 1180px);
  margin: 0 auto;
  padding: clamp(32px, 6vw, 82px);
}
.eyebrow {
  color: #b51e1e;
  font-size: 0.73rem;
  font-weight: 750;
  letter-spacing: 0.18em;
}
.explore-header {
  max-width: 800px;
  margin-bottom: 48px;
}
.explore-header h1 {
  margin: 10px 0 20px;
  font-size: clamp(3.7rem, 10vw, 8rem);
  letter-spacing: -0.06em;
  line-height: 0.9;
}
.explore-header p {
  max-width: 680px;
  color: var(--text-soft);
  font-size: 1.05rem;
  line-height: 1.85;
}
.voyager-card {
  position: relative;
  display: grid;
  min-height: 480px;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  padding: clamp(28px, 6vw, 70px);
  overflow: hidden;
  border-radius: 8px;
  color: #f8f0f2;
  background: #120e14;
  box-shadow: 0 14px 38px rgba(20, 20, 22, 0.2);
}
.star-field {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.star-field i {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: white;
  animation: twinkle 2.2s ease-in-out infinite;
}
@keyframes twinkle {
  50% {
    opacity: 0.08;
    transform: scale(0.5);
  }
}
.voyager-card__copy {
  position: relative;
  z-index: 1;
}
.live-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #d9cdd1;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
}
.live-label i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e24747;
  box-shadow: 0 0 12px #e24747;
}
.voyager-card h2 {
  margin: 15px 0 24px;
  font-size: clamp(2rem, 4vw, 3.7rem);
  line-height: 1.08;
}
.voyager-distance {
  color: #e8a4a4;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: clamp(1.35rem, 3.4vw, 2.8rem);
  letter-spacing: -0.04em;
}
.voyager-distance small {
  margin-left: 10px;
  color: #ad9ea3;
  font-family: inherit;
  font-size: 0.9rem;
}
.voyager-card p {
  max-width: 580px;
  color: #b9adb1;
  line-height: 1.8;
}
.voyager-card a {
  color: #e8a4a4;
  font-size: 0.8rem;
}
.voyager-path {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.voyager-path span {
  position: absolute;
  left: 26px;
  right: 26px;
  height: 1px;
  background: linear-gradient(90deg, rgba(232, 164, 164, 0.8), rgba(232, 164, 164, 0.08));
  transform: rotate(-18deg);
}
.earth,
.probe {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-family: monospace;
}
.earth {
  width: 56px;
  height: 56px;
  color: #120e14;
  background: #e8a4a4;
}
.probe {
  width: 34px;
  height: 34px;
  border: 1px solid #e8a4a4;
  color: #e8a4a4;
  animation: probe-pulse 1.5s ease-in-out infinite;
}
@keyframes probe-pulse {
  50% {
    box-shadow: 0 0 0 10px rgba(232, 164, 164, 0);
    transform: translate(6px, -2px);
  }
}
.widget-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 14px;
}
.metric-card {
  min-height: 260px;
  padding: 26px;
  border: 1px solid var(--border-soft);
  border-radius: 6px;
  background: var(--surface);
}
.metric-card > span {
  color: var(--text-soft);
  font-size: 0.7rem;
  letter-spacing: 0.13em;
}
.metric-card strong {
  display: block;
  margin: 35px 0 18px;
  font-size: clamp(2.5rem, 5vw, 4.2rem);
  letter-spacing: -0.05em;
}
.metric-card strong small {
  margin-left: 6px;
  color: var(--text-soft);
  font-size: 0.9rem;
  letter-spacing: 0;
}
.metric-card p {
  color: var(--text-soft);
  line-height: 1.7;
}
.metric-card--accent {
  border-color: #b51e1e;
  border-left-width: 3px;
  background: color-mix(in srgb, var(--surface) 94%, transparent);
}
.metric-card--accent > span,
.metric-card--accent p,
.metric-card--accent strong small {
  color: var(--text-soft);
}
.scale-lab {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(30px, 8vw, 100px);
  margin-top: 70px;
  padding: clamp(26px, 5vw, 56px);
  border: 1px solid var(--border-soft);
  border-radius: 6px;
  background: color-mix(in srgb, var(--surface) 90%, transparent);
}
.scale-lab h2 {
  margin: 9px 0;
  font-size: clamp(2rem, 4vw, 3rem);
}
.scale-lab p {
  color: var(--text-soft);
}
.scale-lab__control {
  display: grid;
  align-content: center;
  gap: 18px;
}
.scale-readout {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-soft);
}
.scale-readout span {
  color: var(--text-soft);
}
.scale-readout strong {
  font-size: 1.25rem;
}
.explore-footer {
  padding: 100px 20px 30px;
  color: var(--text-soft);
  font-family: Georgia, "Songti SC", serif;
  font-size: clamp(1.35rem, 3vw, 2.1rem);
  text-align: center;
}
@media (max-width: 760px) {
  .explore-page {
    padding: 36px 8px;
  }
  .voyager-card {
    min-height: 540px;
    grid-template-columns: 1fr;
  }
  .voyager-path {
    min-height: 90px;
  }
  .widget-grid {
    grid-template-columns: 1fr;
  }
  .scale-lab {
    grid-template-columns: 1fr;
  }
}
</style>
