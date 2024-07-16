import DefaultTheme from 'vitepress/theme'
import './custom.css'
import LayoutWithCustomSidebar from './LayoutWithCustomSidebar.vue'

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: LayoutWithCustomSidebar
}
