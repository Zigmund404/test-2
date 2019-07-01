<template>
  <div class="holder">
    <div>
      <b-alert variant="success" :key="dream.text" v-for="dream in dreams" show>
        {{dream.text}}

        </b-alert>

         <b-button @click="$router.push({name:'create'})" >
            <font-awesome-icon icon="plus" />

            Add Dream
         </b-button >

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['dreams'])
  }
}
</script>



<style land='scss' scoped>
.holder{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

}

</style>
