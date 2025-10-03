import { createRouter, createWebHistory } from 'vue-router';
import LayoutsMain from '@/layouts/LayoutsMain.vue';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import { useThemeStore } from '@/stores/theme/useThemeStore';
const routes = [
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                name: 'auth-login',
                component: LoginPage,
            },
        ],
    },
    {
        path: '/',
        component: LayoutsMain,
        children: [
            {
                path: '',
                name: 'dashboard-home',
                component: HomePage,
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
router.beforeEach(to => {
    const themeStore = useThemeStore();
    if (to.meta.forceTheme)
        themeStore.theme = to.meta.forceTheme;
});
export default router;
