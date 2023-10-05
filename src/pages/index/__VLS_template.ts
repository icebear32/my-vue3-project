import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, bannerList, categoryList, hotList } from './index.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'CustomNavbar', typeof __VLS_localComponents, "CustomNavbar", "CustomNavbar", "CustomNavbar"> &
__VLS_WithComponent<'XtxSwiper', typeof __VLS_localComponents, "XtxSwiper", "XtxSwiper", "XtxSwiper"> &
__VLS_WithComponent<'CategoryPanel', typeof __VLS_localComponents, "CategoryPanel", "CategoryPanel", "CategoryPanel"> &
__VLS_WithComponent<'HotPanel', typeof __VLS_localComponents, "HotPanel", "HotPanel", "HotPanel"> &
__VLS_WithComponent<'view', typeof __VLS_localComponents, "View", "view", "view">;
__VLS_components.CustomNavbar;
// @ts-ignore
[CustomNavbar,];
__VLS_components.XtxSwiper;
// @ts-ignore
[XtxSwiper,];
__VLS_components.CategoryPanel;
// @ts-ignore
[CategoryPanel,];
__VLS_components.HotPanel;
// @ts-ignore
[HotPanel,];
__VLS_components.View; __VLS_components.View; __VLS_components.view; __VLS_components.view;
// @ts-ignore
[view, view,];
{
let __VLS_0!: 'CustomNavbar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CustomNavbar : (typeof __VLS_resolvedLocalAndGlobalComponents)['CustomNavbar'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { CustomNavbar: typeof __VLS_0; }).CustomNavbar;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
let __VLS_5!: 'XtxSwiper' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.XtxSwiper : (typeof __VLS_resolvedLocalAndGlobalComponents)['XtxSwiper'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, list: ((__VLS_ctx.bannerList)), }));
({} as { XtxSwiper: typeof __VLS_5; }).XtxSwiper;
const __VLS_7 = __VLS_6({ ...{}, list: ((__VLS_ctx.bannerList)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, list: ((__VLS_ctx.bannerList)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
let __VLS_10!: 'CategoryPanel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CategoryPanel : (typeof __VLS_resolvedLocalAndGlobalComponents)['CategoryPanel'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, list: ((__VLS_ctx.categoryList)), }));
({} as { CategoryPanel: typeof __VLS_10; }).CategoryPanel;
const __VLS_12 = __VLS_11({ ...{}, list: ((__VLS_ctx.categoryList)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, list: ((__VLS_ctx.categoryList)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
let __VLS_15!: 'HotPanel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.HotPanel : (typeof __VLS_resolvedLocalAndGlobalComponents)['HotPanel'];
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, list: ((__VLS_ctx.hotList)), }));
({} as { HotPanel: typeof __VLS_15; }).HotPanel;
const __VLS_17 = __VLS_16({ ...{}, list: ((__VLS_ctx.hotList)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, list: ((__VLS_ctx.hotList)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
let __VLS_20!: 'View' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.View : 'view' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.view : (typeof __VLS_resolvedLocalAndGlobalComponents)['view'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: ("index"), }));
({} as { view: typeof __VLS_20; }).view;
({} as { view: typeof __VLS_20; }).view;
const __VLS_22 = __VLS_21({ ...{}, class: ("index"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("index"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[bannerList, bannerList, bannerList, categoryList, categoryList, categoryList, hotList, hotList, hotList,];
return __VLS_slots;
}
