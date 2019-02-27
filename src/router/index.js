import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Ele from '@/components/element'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/ele',
            name: 'ele',
            component: Ele
        }
    ]
})
