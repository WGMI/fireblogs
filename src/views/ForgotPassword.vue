<template>
  <div class="reset-password">
    <Modal buttonText="Submit" v-if="modalActive" v-on:close-modal="closeModal"/>
    <Loading v-if="loading"/>
    <div class="form-wrap">
        <form class="reset">
            <h2>Reset Your Password</h2>
            <p>Enter the email you registered with and we'll send you a reset link.</p>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <email class="icon"/>
                </div>
            </div>
            <button>Reset</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import Modal from "../components/Modal"
import Loading from "../components/Loading"

export default {
  name:"ForgotPassword",
  components:{
    email,
    Modal,
    Loading,
  },
  methods:{
    closeModal(){
      this.modalActive = !this.modalActive
      this.email = ""
    }
  },
  data(){
    return{
      email:null,
      modalActive:false,
      modalMessage:"",
      loading:false,
    }
  }
}
</script>

<style lang="scss" scoped>

.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
        max-width: 300px;
      }
    }
  }
}

</style>