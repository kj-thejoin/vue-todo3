// router.js


import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 보통 import를 통해서 정의합니다.
import App from '../App.vue';
import TodoHeader from '../components/TodoHeader.vue';
import TodoInput from '../components/TodoInput.vue';
import TodoList from '../components/TodoList.vue';
import TodoFooter from '../components/TodoFooter.vue';




// router 객체생성
const router = new VueRouter({
    mode: 'history',
    routes : [
            {
                path: "/app",
                name: "App",
                component: App
            },
            {
                path: "/header",
                name: "TodoHeader",
                component: TodoHeader
            },
            {
                path: "/input",
                name: "TodoInput",
                component: TodoInput
            },
            {
                path: "/list",
                name: "TodoList",
                component: TodoList
            },
            {
                path: "/footer",
                name: "TodoFooter",
                component: TodoFooter
            }    
    ]
  });

  export default router;