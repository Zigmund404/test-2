
<template>
  <div class="home">
    <div class="dialog">
      <div class="dialog-header"> 
        <div class="tab" :class="(step===1) ? 'active':''">
          Describe your dream
        </div>
        <div class="tab" :class="(step===2) ? 'active':''">
          Enter dream info
        </div>
        <div class="tab" :class="(step===3) ? 'active':''">
          Share ?
        </div>
      </div>
      <div class="dialog-content" v-if="step === 1" >
        аа:{{text}}
        <b-form-textarea
          v-model="text"
          placeholder="Enter something..."
          rows="4"
           max-rows="8">
        </b-form-textarea>
      </div>
      <div class="dialog-content" v-if="step === 2" >
       <label >
         when you want it ?
         <b-form-select v-model="when" :options="whenOptions"/>
         </label>
         <label >
           How strong your wish ?
            <b-form-input type="number" v-model="dreamPower"
            placeholder='Enter walue from 1 to 10' min='1' max='10' 
            ></b-form-input>
        
         </label>
      </div>
      <div class="dialog-content" v-if="step === 3" >
         <b-form-group label="Want to share with others ?">
          <b-form-radio-group v-model="share"
          :options="options" ></b-form-radio-group>
         </b-form-group>
         
      </div>
      <div class="buttons-holder">
         <b-button @click="step -=1" v-if='step > 1'>
           <font-awesome-icon icon="arrow-circle-left" />
            Prev
         </b-button>
         <div></div>
         <b-button @click="step +=1" v-if='step < 3'>
            Next <font-awesome-icon icon="arrow-circle-right" />
         </b-button >
          <b-button @click="SaveDream" v-if='step >= 3'>
            Complete <font-awesome-icon icon="check-circle" />
         </b-button >

      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'home',
 data() {
   return{
     step: 1,
     text:'',
     when:'',
     dreamPower: 5,
     whenOptions: [
          { value: 'afteraweek', text: 'After a week' },
          { value: 'afteramouth', text: 'After a mouth' },
          { value: 'afterayear', text: 'After a year' },
        ],
         share: '',
        options: [
          { text: 'Yes', value: 'Yes' },
          { text: 'No', value: 'No' },
        ]
   }
 } ,
 
 methods:{
   ...mapActions(['actionSaveDream',]),
   SaveDream(){
     const dream= {
       text: this.text,
       when: this.when,
       dreamPower: this.dreamPower,
       share: this.share
     };
     this.actionSaveDream(dream);
     this.$router.push('/List');
   }
 }
}
</script>
<style lang="scss" scoped>
$dlg-color:rgb(224, 221, 221);
.home{
  background: rgba(gray,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  bottom:0;
  right: 0;
  left: 0;

  .dialog{
    background-color: $dlg-color;
    width: 600px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0 0 20px darken($dlg-color, 30);
    display: flex;
    flex-direction: column;
    .dialog-header{
      display: flex;
      justify-content: space-between;
      height: 50px;
      .tab{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(.active){
          background-color: darken($color: $dlg-color, $amount: 30);
          color: white;
          &:last-of-type{
            border-top-right-radius: 10px;
          }
          &:first-of-type{
            border-top-left-radius: 10px;
          }
        }
      &.active{
        font-weight: bold;
      }
      }
    }
    .dialog-content{
      padding: 30px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    .buttons-holder{
      display: flex;
      justify-content: space-between;
      padding: 30px;
    }
  }
}
</style>
