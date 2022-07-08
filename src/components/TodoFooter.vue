<!-- TodoFooter.vue -->

<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </div>
</template>

<script>

export default {
  name : 'TodoFooter',
  methods: {
    clearAll: function() {
      this.$emit('clearAll');
    }
  }
}

</script>

<style lang="scss" scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  background-color:rgba(230,230,230,0.1);
  display: block;
//   border: 1px solid #eee;
  text-align:center;
  cursor:pointer;
//   border-radius:25px;
}
</style>