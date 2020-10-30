<template lang="pug">
                .p-1(class="text-center")
                    form(@submit='onSubmit' )
                      b-form-group#input-group-1(v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-1' )
                        b-form-input#input-1(v-model='form.surname'  v-on:keyup="check" placeholder='Фамилия'   required)
                        .error-message.none() 
                      b-form-group#input-group-3( v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-2' )
                        b-form-input#input-3(v-model='form.name' placeholder='Имя'  v-on:keyup="check"    required)                                   
                        .error-message.none()                        
                      b-form-group#input-group-2( v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-2' )
                        b-form-input#input-2(v-model='form.otch' placeholder='Отчество'  v-on:keyup="check"    required)  
                        .error-message.none()

                      b-form-group#input-group-4( v-mask="'##/##/####'"  label-for='input-3' )
                        b-form-input#input-4(v-model='form.birthday' v-on:keyup="checkNumb"  placeholder='Дата рождения'  required)                                         
                        .error-message.none()          
                      b-form-group#input-group-5( label-for='input-4' )
                        b-form-input#input-5(v-model='form.phone' v-on:keyup="checkPhone"  placeholder='Телефон'  v-mask="'+# (###) ###-####'"   required)
                        .error-message.none()    
                        br               
                        span(v-if="phoneA") Подтвердить телефон                                          
                      b-form-group#input-group-6(label-for='input-5')
                        b-form-input#input-6(v-model='form.email' placeholder='Email' type="email"  v-on:keyup="checkEmail"    required)
                        .error-message.none()
                        br               
                        span(v-if="emailA") Подтвердить email                      
                      b-form-group#input-group-7( label-for='input-6')                      
                        b-form-input#input-7(v-model='form.password' placeholder='Пароль' v-on:keyup="checkPassword"   type="password" required )
                        .error-message.none()                                          
                      b-form-group#input-group-8(label-for='input-8')
                        b-form-input#input-8(v-model='form.password2' placeholder='Повторите пароль:' v-on:keyup="checkPassword2"   type="password" required )                   
                        .error-message.none()  
                      br                                   
                      b-form-checkbox-group#checkboxes-4(v-model='form.checked')
                        b-form-checkbox(value='agree') Согласен(на) участвовать в конкурсе на поступление  
                      br                     
                      span Нажав кнопку Регистрация вы даёте свое согласие на обработку персональных данных
                      br
                      br
                      b-button(type='submit' variant='warning') Регистрация
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
      keyup: "",
      phoneA: false,
      emailA: false,
      form: {
        surname: "",
        name: "",
        email: "",
        phone: "",
        birthday: "",
        password: "",
        password2: "",        
        otch: "",
        checked: ["agree"],
      },
      show: true,
      x:false,
    };
  },
  methods: {
    check(event){

       if(this.form.surname.length > 1) {
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Поле не может быть пустым"
           event.path[2].className = "form-group error"
       }
       if(this.form.otch.length < 1) {
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Поле не может быть пустым"
           event.path[2].className = "form-group error"
       }       
       const key = event.key.toLowerCase();
        if (key.length !== 1) {
             return;
        }
       const isLetter = (key >= "a" && key <= "z");
       const isNumber = (key >= "0" && key <= "9");

       if (isLetter){
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Заполните данные на русском языке"
           event.path[2].className = "form-group error"
       } else {
           event.path[2].className = "form-group okay"
           event.path[2].children[0].children[1].className = "error-message none"
       }

       if (isNumber){
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Заполните данные без цифр"
           
           event.path[2].className = "form-group error"
       }
    },
    checkNumb(event){
       const key = event.key;
        if (key.length !== 1) {
             return;
        }
        
       const isNumb = (key >= "а" && key <= "я" || key >= "a" && key <="z");
       if (isNumb){
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Дата рождения выглядит так дд.мм.гг"

           event.path[2].className = "form-group error"
           //console.log(event.target.className = "form-control error")
           //alert("Введите пожалуйста ваши данные на русском языке")
       } else {

           var re = /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(this.form.birthday);
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Дата рождения выглядит так дд.мм.гг"

           event.path[2].className = "form-group error"      
            if (re) {
                
                event.path[2].className = "form-group okay"
                event.path[2].children[0].children[1].className = "error-message none"
                return false;
            }


       }

    },
    checkPhone(event){
       if(this.form.surname.length > 1) {
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Поле не может быть пустым"
           event.path[2].className = "form-group error"
       }      
       const key = event.key;
        if (key.length !== 1) {
             return;
        }
        //console.log(key)
       const isNumb = (key >= "а" && key <= "я" || key >= "a" && key <="z");
       if (isNumb){
           //console.log(event)
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Пожалуйста, введите Ваш телефон"

           event.path[2].className = "form-group error"
           //console.log(event.target.className = "form-control error")
           //alert("Введите пожалуйста ваши данные на русском языке")
       } else {
            var re = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(this.form.phone);

                       event.path[2].children[0].children[1].className = "error-message"
                       event.path[2].children[0].children[1].innerText = "Пожалуйста, введите Ваш телефон"
                       event.path[2].className = "form-group error"
                       this.emailA = false;

            if (re) {
                this.phoneA = true;
                event.path[2].className = "form-group okay"
                event.path[2].children[0].children[1].className = "error-message none"
                return false;
            }

       }

    },    
    checkEmail(event){

       if(this.form.email.length > 1) {
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Поле не может быть пустым"
           event.path[2].className = "form-group error"
       }
             
       const key = event.key;
        if (key.length !== 1) {
             return;
        }

       const isRus = (key >= "а" && key <= "я");
       if (isRus){
           this.emailA = false;
           event.path[2].children[0].children[1].className = "error-message"
           event.path[2].children[0].children[1].innerText = "Пожалуйста, введите Ваш email"

           event.path[2].className = "form-group error"
           //console.log(event.target.className = "form-control error")
           //alert("Введите пожалуйста ваши данные на русском языке")
       } else {
            var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.form.email);
                       event.path[2].children[0].children[1].className = "error-message"
                       event.path[2].children[0].children[1].innerText = "Пожалуйста, введите Ваш email"
                       event.path[2].className = "form-group error"
                       this.emailA = false;

            if (re) {
                this.emailA = true;
                event.path[2].className = "form-group okay"
                event.path[2].children[0].children[1].className = "error-message none"
                return false;
            }

       }

    },      
   checkPassword(event){

        if (this.form.password.length < 5) {
        event.path[2].children[0].children[1].className = "error-message"
        event.path[2].children[0].children[1].innerText = "Пароль должен содержать больше 6 знаков"
        event.path[2].className = "form-group error"
        } 
        if (this.form.password.length > 5) {
        event.path[2].className = "form-group okay"
        event.path[2].children[0].children[1].className = "error-message none"
        }      
      
    },        
  checkPassword2(event){


        if (this.form.password2.length < 5) {
        event.path[2].children[0].children[1].className = "error-message"
        event.path[2].children[0].children[1].innerText = "Пароль должен содержать больше 6 знаков"
        event.path[2].className = "form-group error"
        } 
        if (this.form.password2.length > 5) {
        event.path[2].className = "form-group okay"
        event.path[2].children[0].children[1].className = "error-message none"
        }   
    },   
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
});
</script>
