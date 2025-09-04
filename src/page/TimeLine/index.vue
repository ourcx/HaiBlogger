<template>
  <!-- <Fei-Container>
    <div class="timeline-container">
      <h1>文章发布记录</h1>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-content">
            <h2>深入解析 Vue 3 Composition API</h2>
            <p class="timeline-date">2025年2月10日</p>
            <p>本文详细介绍了 Vue 3 中革命性的 Composition API，探讨了它如何解决 Mixins 的痛点，并提供了响应式数据管理的更优方案。</p>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h2>从 JavaScript 到 TypeScript：一份超详细的迁移指南</h2>
            <p class="timeline-date">2025年4月18日</p>
            <p>将现有大型 JavaScript 项目迁移到 TypeScript 可能充满挑战。本文分享了迁移过程中的最佳实践、常见问题及解决方案。</p>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h2>使用 Next.js 构建高性能的同构渲染应用</h2>
            <p class="timeline-date">2025年6月5日</p>
            <p>探讨了 Next.js 的核心概念，包括服务端渲染 (SSR) 与静态站点生成 (SSG)，并展示了如何利用这些特性优化网站性能和 SEO。</p>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h2>SCSS 技巧：让你的 CSS 代码更优雅、更易维护</h2>
            <p class="timeline-date">2025年7月21日</p>
            <p>分享了多个实用的 SCSS 高级技巧，例如 Mixins、Functions 和循环，帮助开发者编写出结构清晰、可复用性强的样式代码。</p>
          </div>
        </div>
         <div class="timeline-item left">
          <div class="timeline-content">
            <h2>Go 语言并发编程：Goroutine 与 Channel 实战</h2>
            <p class="timeline-date">2025年8月15日</p>
            <p>本文通过实战案例，深入浅出地讲解了 Go 语言并发模型的核心——Goroutine 和 Channel，以及如何利用它们构建高效的并发程序。</p>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h2>前端组件库设计：从 0 到 1 打造自己的 UI 框架</h2>
            <p class="timeline-date">2025年9月4日</p>
            <p>记录了从零开始设计并实现一个 Vue 3 组件库的全过程，涵盖了组件设计原则、打包配置以及文档生成等关键环节。</p>
          </div>
        </div>
      </div>
    </div>
  </Fei-Container> -->
</template>

<script setup lang="ts">
// 这里可以添加与时间线相关的逻辑，如果只是静态展示则无需添加
</script>

<style lang="scss" scoped>
// .timeline-container {
//   font-family: 'Helvetica Neue', Arial, sans-serif;
//   padding: 40px 20px;
//   max-width: 900px;
//   margin: 0 auto;
//   color: #333;
//   h1 {
//     text-align: center;
//     font-size: 2.5rem;
//     margin-bottom: 50px;
//     color: #2c3e50;
//   }
// }

// .timeline {
//   position: relative;
//   width: 100%;
  
//   // 中心线
//   &::after {
//     content: '';
//     position: absolute;
//     width: 4px;
//     background-color: #007bff;
//     top: 0;
//     bottom: 0;
//     left: 50%;
//     margin-left: -2px;
//     border-radius: 2px;
//   }
// }

// .timeline-item {
//   padding: 10px 40px;
//   position: relative;
//   width: 50%;

//   // 圆点
//   &::after {
//     content: '';
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     background-color: white;
//     border: 4px solid #007bff;
//     top: 20px;
//     border-radius: 50%;
//     z-index: 1;
//   }
// }

// // 左侧条目
// .left {
//   left: 0;
//   padding-right: 70px; // 为箭头留出空间

//   &::after {
//     right: -12px; // 调整圆点位置
//   }
// }

// // 右侧条目
// .right {
//   left: 50%;
//   padding-left: 70px; // 为箭头留出空间

//   &::after {
//     left: -12px; // 调整圆点位置
//   }
// }

// .timeline-content {
//   padding: 20px 30px;
//   background-color: #f8f9fa;
//   position: relative;
//   border-radius: 8px;
//   border: 1px solid #e9ecef;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
//   }

//   h2 {
//     margin-top: 0;
//     color: #007bff;
//     font-size: 1.5rem;
//   }
  
//   .timeline-date {
//     font-weight: bold;
//     color: #6c757d;
//     margin-bottom: 10px;
//   }

//   p {
//     margin-bottom: 0;
//     line-height: 1.6;
//   }

//   // 箭头
//   &::before {
//     content: "";
//     position: absolute;
//     top: 22px;
//     width: 0;
//     height: 0;
//     border: 10px solid transparent;
//     border-top-width: 10px;
//     border-bottom-width: 10px;
//   }
// }

// .left .timeline-content::before {
//   right: -20px;
//   border-left-color: #e9ecef;
// }

// .right .timeline-content::before {
//   left: -20px;
//   border-right-color: #e9ecef;
// }

// // 媒体查询，用于移动设备
// @media screen and (max-width: 768px) {
//   .timeline::after {
//     left: 31px;
//   }
  
//   .timeline-item {
//     width: 100%;
//     padding-left: 70px;
//     padding-right: 25px;
//   }

//   .left, .right {
//     left: 0;
//   }

//   .left::after, .right::after {
//     left: 21px;
//   }

//   .right .timeline-content::before {
//     left: -20px;
//     border-right-color: #e9ecef;
//   }
  
//   // 在小屏幕上，所有箭头都朝左
//   .left .timeline-content::before {
//      left: -20px;
//      border-right-color: #e9ecef;
//      border-left-color: transparent;
//   }
// }
</style>