<template>
  <div id="app">
    <div id="container">
      <router-view></router-view>
      <TodoHeader></TodoHeader>
      <TodoInput @addTodoItem="addTodoItem"></TodoInput>
      <TodoList></TodoList>
      <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';


export default {
  name: 'App',
  data() {
    
  },
  methods : {
    clearAll : function(){
      localStorage.clear();
      this.todoItems = []; //다시 빈 배열로 만들기
    },
    addTodoItem : function() {
      // localStorage.setItem(todoItem, JSON.stringify(todoItems));
      // this.todoItems.push(obj);
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created: function() { //옮김
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }
}
</script>

<style lang="scss">


body {
  text-align:center;
  background-color:#f6f6f6;

}

input {
  border-style: groove;
  width:200px;
}

button{
  border-style:groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}


@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

html, body {
  font-family: 'Itim', cursive;
}
#app {
  font-family: 'Itim', cursive;
  width:1000px; margin:0 auto;
}
#container{
  width:300px;
  margin:0 auto;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
  text-decoration: line-through;
        background-color: black;
}

</style>
