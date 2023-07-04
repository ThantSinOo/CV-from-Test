<template>
  
 <div class="container">
     <h3>INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</h3>
     <h2 class="welcome">မှကြိုဆိုပါတယ်</h2>
    <form @submit.prevent="submit" class="form">
      <div class="input_wrapper">
        <input type="text" name="employee_id" id="employee_id" placeholder="User ID" v-model="form.employee_id" class="custom_input" required />

     </div>
      <div class="input_wrapper">
        <input type="password" name="password" id="password" placeholder="Password" v-model="form.password" class="custom_input" required />
      </div>
      <div class="button_wrapper">
        <button type="submit" class="login_button">Login</button>
      </div>
      <router-link to="forgetpassword">Forget Password ?</router-link>
    </form>
 </div>

 <div v-if="warning"  class="popup">
    <div class="popup_content">
      <div class="warning">{{ warning }}</div>
    </div>
 </div>
</template>


<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'login',
  components: {},

  setup() {
    const store = useStore();
    const form = ref({
      employee_id: '',
      password: '',
    });

    const login = () => {
      store
        .dispatch('auth/login', form.value)
        .then(() => {
          console.log('Login Successful!');
        })
        .catch((error) => {
          console.log(error, 'error occurred');
        });
      console.log(form.value.employee_id, form.value.password);
      console.log('Submitted');
    };

    const submit = (event) => {
      event.preventDefault(); // Prevent form submission if validation fails
      login();
    };

    const warning = computed(() => store.state.auth.warning);

    return {
      form,
      warning,
      submit,
      login,
    };
  },
};
</script>



<style scoped>

.welcome{
  font-family: "Pyidaungsu-Regular";
  font-size: 20px;
}
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
  }

   .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }


  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding: 20px;
    border-radius: 5px;
  }

  .warning {
    color: red;
    margin-bottom: 10px;
    text-align: center;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  .input_wrapper {
    width: 100%;
    margin-bottom: 15px;
  }

  .custom_input {
    background-color: #f5f5f5;
    width: 100%;
    padding: 10px;
    outline: none;
     border: none;
    border-radius: 10px;
  }

  .button_wrapper {
    width: 100%;
    margin-top: 15px;
  }

  .login_button {
    width: 100%;
    padding: 10px;
    background-color: #0000FF;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .login_button:hover {
    background-color: #0000DD;
  }

  a {
    display: block;
    margin-top: 30px;
    text-align: center;
    color: #333;
    text-decoration: none;
    color: blue;
    cursor: pointer;
  }

  .popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;

  }

.popup_content{
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  text-align: center;
    border-radius: 15px;

}
</style>
