<!-- TodoList.vue -->

<template>
    <div>
        <transition-group name="list" tag="ul">
            <li>
                <i></i>
                <span></span>
                
                <span>
                    <i></i>
                </span>

                <ModalRemove></ModalRemove>

            </li>
        </transition-group>
    </div>
</template>


<script>
   


export default {
    name: "TodoList",
    data() {
        return {};
    },
    
}
</script>