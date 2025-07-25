// src/styles/naive-ui-theme.ts
import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#b51e1e',  // 主色
    primaryColorHover: '#c03e3e', // 主色悬停
    primaryColorPressed: '#9c3c3c', // 主色按下
    primaryColorSuppl: '#d57e7e', // 补充色
    
    // 其他通用颜色
    infoColor: '#bbb5ac',
    successColor: '#96c24e',
    warningColor: '#fed71a',
    errorColor: '#efafad',
    
    // 文字颜色
    textColorBase: '#333',
    textColor1: 'rgba(0, 0, 0, .9)',
    textColor2: 'rgba(0, 0, 0, .82)',
    textColor3: 'rgba(0, 0, 0, .6)',
    
    // 边框
    borderColor: '#d9d9d9',
    borderRadius: '4px',
    
    // 圆角
    borderRadiusSmall: '2px',
    
    // 字体
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px'
  },
}