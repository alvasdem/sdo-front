<template lang="pug">
                .p-1(class="text-center")
                    b-form(@submit='onSubmit' )
                      b-form-group#input-group-1(v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-1' )
                        b-form-input#input-1(v-model='form.surname'  v-on:keyup="check" placeholder='Ваша фамилия:'   required)
                      b-form-group#input-group-2( v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-2' )
                        b-form-input#input-2(v-model='form.otch' placeholder='Отчество:'  v-on:keyup="check"    required)  
                      b-form-group#input-group-3( v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-2' )
                        b-form-input#input-3(v-model='form.name' placeholder='Имя:'  v-on:keyup="check"    required)                                   
                      b-form-group#input-group-4( v-mask="'##/##/####'"  label-for='input-3' )
                        b-form-input#input-4(v-model='form.birthday' placeholder='Дата рождения:'  required)                                         
                      b-form-group#input-group-5( label-for='input-4' )
                        b-form-input#input-5(v-model='form.phone' placeholder='Контактный телефон:'  v-mask="'+# (###) ###-##-##'"   required)
                      b-form-group#input-group-6(label-for='input-5')
                        b-form-input#input-6(v-model='form.email' placeholder='Email:'   type="email"  required)
                      b-form-group#input-group-7( label-for='input-6')                      
                        b-form-input#input-7(v-model='form.password' placeholder='Пароль:'  type="password" required )
                      b-form-group#input-group-8(label-for='input-7')
                        b-form-input#input-8(v-model='form.password2' placeholder='Повторите пароль:'  type="password" required )
                      b-form-group#input-group-9(label='Промокод(необязательно)' label-for='input-7')
                        b-form-input#input-9(v-model='form.promo' type="text" )                      
                      b-form-checkbox-group#checkboxes-4(v-model='form.checked')
                        b-form-checkbox(value='agree') Согласен(на) участвовать в конкурсе на поступление  
                      br                     
                      span Нажав кнопку Регистрация вы даёте свое согласие на обработку персональных данных
                      br
                      br
                      b-button(type='submit' variant='primary') Регистрация
                      hr
                      nuxt-link(to='/login') Уже зарегистрированы? Войдите!
                      br
                      nuxt-link(to='/forgot') Забыли пароль?                     

</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head: {
    title: "Регистрация",
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        otch: "",
        checked: ["agree"],
      },
      show: true,
    };
  },
  methods: {
    check(event){
       const key = event.key.toLowerCase();
        if (key.length !== 1) {
             return;
        }
       const isLetter = (key >= "a" && key <= "z");
       const isNumber = (key >= "0" && key <= "9");

       if (isLetter){
           alert("Введите пожалуйста ваши данные на русском языке")
       }

       if (isNumber){
           alert("Введите пожалуйста ваши данные без цифр")
       }
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
});
</script>
