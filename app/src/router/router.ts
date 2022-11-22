import { createRouter, createWebHistory } from 'vue-router'
 
import Test from '../components/test/Test.vue'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/page1 ',
            component: Test 
        },
    ]
})
export default router