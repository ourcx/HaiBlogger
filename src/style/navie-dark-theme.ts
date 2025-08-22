// src/styles/naive-dark-theme.ts
import type { GlobalThemeOverrides } from 'naive-ui';

export const themeOverridesDark: GlobalThemeOverrides = {
  common: {
    // 主色
    primaryColor: '#8a0000',
    primaryColorHover: '#a00000',
    primaryColorPressed: '#6e0000',
    primaryColorSuppl: '#c20000',
    
    // 其他通用颜色
    infoColor: '#9e968b',
    successColor: '#a9c478',
    warningColor: '#e6c84c',
    errorColor: '#e28886',
    
    // 文字颜色
    textColorBase: '#ccc',
    textColor1: 'rgba(255, 255, 255, .9)',
    textColor2: 'rgba(255, 255, 255, .82)',
    textColor3: 'rgba(255, 255, 255, .6)',

    // 背景色
    bodyColor: '#1a1a1a',
    
    // 边框
    borderColor: '#4d4d4d',
    borderRadius: '4px',
    
    // 圆角
    borderRadiusSmall: '2px',
    
    // 字体
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px'
  },
};