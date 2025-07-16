// src/styles/naive-ui-theme.ts
import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#316C72',  // 主色
    primaryColorHover: '#469597', // 主色悬停
    primaryColorPressed: '#2D5F63', // 主色按下
    primaryColorSuppl: '#316C72', // 补充色
    
    // 其他通用颜色
    infoColor: '#2080F0',
    successColor: '#18A058',
    warningColor: '#F0A020',
    errorColor: '#D03050',
    
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
  
  // 组件特定样式
  Button: {
    textColor: '#FFFFFF',
    heightMedium: '36px',
    borderRadiusMedium: '4px',
    colorPrimary: '#316C72',
    colorHoverPrimary: '#469597',
    colorPressedPrimary: '#2D5F63',
    colorFocusPrimary: '#316C72',
    colorDisabledPrimary: '#316C7266',
    borderPrimary: '1px solid #316C72'
  },
  
  Input: {
    heightMedium: '36px',
    borderRadius: '4px',
    border: '1px solid #d9d9d9',
    borderHover: '1px solid #469597',
    borderFocus: '1px solid #316C72',
    boxShadowFocus: '0 0 0 2px rgba(49, 108, 114, 0.2)'
  },
  
  Select: {
    menuBoxShadow: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    peers: {
      InternalSelection: {
        textColor: '#333',
        heightMedium: '36px',
        border: '1px solid #d9d9d9',
        borderHover: '1px solid #469597',
        borderFocus: '1px solid #316C72'
      }
    }
  },
  
  // 可以继续添加其他组件的主题配置
  Menu: {
    itemTextColor: '#333',
    itemTextColorHover: '#316C72',
    itemTextColorActive: '#316C72',
    itemTextColorChildActive: '#316C72',
    itemColorActive: '#316C7210',
    itemColorActiveHover: '#316C7210',
    itemColorActiveCollapsed: '#316C7210'
  }
}