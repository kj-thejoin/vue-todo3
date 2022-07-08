<!-- TodoInput.vue -->

<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem" />
        <span class="addContainer" v-on:keyup.enter="addTodoItem">
            <i class="fas fa-plus addBtn" v-on:click="addTodoItem"></i>
        </span>
    </div>
</template>

<script>

export default({
    name: 'TodoInput',
    data() {
        return{
            newTodoItem: ''
        }
    },
    methods: {
        addTodoItem: function() {
            if (this.newTodoItem !== '') {
                // this.$emit('이벤트 이름', 인자1, 인자2, ...);
                this.$emit('addTodoItem', this.newTodoItem);
                this.newTodoItem = '';
            }
        }
    }
})
</script>

<style lang="scss" scoped>
input:focus {
    outline:none;
    border:none;   
    
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;


  .inputBox input{
      border-style: none;
      font-size: 0.9rem;
      border:none;
      outline:none;
    // outline-color:#ccc;
    }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #62EAC6, #32CEE6);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    cursor:pointer;
    text-align:center;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
    text-align:center;
  }
}

</style>