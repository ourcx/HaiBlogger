import type { VNode } from 'vue'

export interface ImageProps {
  mode?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'heightFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
  shape?: 'square' | 'circle' | 'rounded'
  radius?: number | string

  /**
   * 加载状态配置
   */
  // 是否显示加载中状态
  visible?: boolean
  placeholder?: string | VNode // 允许字符串或虚拟节点
  fallback?: string | VNode
  lazy?: boolean
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  // 底部内容
  footer?: string | VNode
  title?: string | VNode
  descriation?: boolean
  screen?: boolean
  lazyLoad?: boolean
}

export interface ImageEmits {
  (e: 'onLoad'): void
  (e: 'onClick'): void
  (e: 'onClose', event?: boolean): void // 可选参数
}
