// 全局组件声明
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

// danger 版本升级
// 新版 [Volar] 把 declare module '@vue/runtime-core' 调整为 declare module 'vue'
// declare module '@vue/runtime-core' {
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
