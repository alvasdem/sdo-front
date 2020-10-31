<template lang="pug">
                .p-1(class="text-center")
                    form(@submit='onSubmit' )
                      b-form-group#input-group-1(ref="surname" v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-1' )
                        b-form-input#input-1(v-model='form.surname'  v-on:keyup="check" placeholder='Фамилия'   required)
                        .error-message.none()   
                      b-form-group#input-group-3(ref="name" v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-2' )
                        b-form-input#input-3(v-model='form.name' placeholder='Имя'  v-on:keyup="checkName"    required)                                   
                        .error-message.none()                        
                      b-form-group#input-group-2(ref="otch"  v-mask="'AAAAAAAAAAAAAAAAAAA'" label-for='input-2' )
                        b-form-input#input-2(v-model='form.otch' placeholder='Отчество'  v-on:keyup="checkOtch"    required)  
                        .error-message.none()

                      b-form-group#input-group-4(ref="birthday" v-mask="'##/##/####'"  label-for='input-3' )
                        b-form-input#input-4(v-model='form.birthday' v-on:keyup="checkNumb"  placeholder='Дата рождения'  required)                                         
                        .error-message.none()          
                      b-form-group#input-group-5(ref="phone" v-if="phoneCode"  label-for='input-4' )
                        b-form-input#input-5(v-model='form.phone' v-on:keyup="checkPhone"  placeholder='Телефон'  v-mask="'+# (###) ###-####'"   required)
                        .error-message.none()   
                        br   
                        b-button(v-if="phoneA" variant='primary' @click="phoneForm") Подтвердить телефон    

                      b-form-group#input-group-9(ref="sms" v-if="codeCheck"  label-for='input-9' )
                        b-form-input#input-9(v-model='form.phoneCode' v-on:keyup="checkPhoneCode"  placeholder='Код подтверждения'  :disabled="disabledCode"   v-mask="'####'"   required)
                        .error-message.none()    
                        br                        
                        b-button( variant='primary' v-if="aprove" @click="sendAprove") Подтвердить  
                        span(v-if="uspeh") Спасибо, телефон подтвержден.  


                      b-form-group#input-group-6(label-for='input-5')
                        b-form-input#input-6(ref="email" v-if="eA"  v-model='form.email' placeholder='Email' type="email"  v-on:keyup="checkEmail"    required)
                        .error-message.none()
                        br         
                        b-button(v-if="emailA" variant='primary' @click="aproveEmail") Подтвердить email    
                      b-form-group#input-group-10(ref="emailC" v-if="emailCheck"   label-for='input-10' )
                        b-form-input#input-10(v-model='form.emailCode' v-on:keyup="checkEmailCode"  placeholder='Код подтверждения'  :disabled="disabledCodeE"   v-mask="'####'"   required)
                        .error-message.none()    
                        br                        
                        b-button( variant='primary' v-if="aproveE" @click="sendAproveE") Подтвердить  
                        span(v-if="uspehEmail") Спасибо, email подтвержден.  
                             
                        br 
                        br        
                      span(v-if="active") Для продолжения необходимо подтвердить телефон или email                                           
                      b-form-group#input-group-7(ref="pw1"  label-for='input-6')                      
                        b-form-input#input-7(v-model='form.password' placeholder='Пароль' v-on:keyup="checkPassword"   type="password" :disabled="disabled"  required )
                        .error-message.none()                                          
                      b-form-group#input-group-8(ref="pw2"  label-for='input-8')
                        b-form-input#input-8(v-model='form.password2' placeholder='Повторите пароль:' v-on:keyup="checkPassword2"  :disabled="disabled"   type="password" required )                   
                        .error-message.none()  
                      br                                   
                      b-form-checkbox-group#checkboxes-4(v-model='form.checked')
                        b-form-checkbox(value='agree') Согласен(на) участвовать в конкурсе на поступление  
                      br                     
                      span Нажав кнопку Регистрация вы даёте свое согласие на обработку персональных данных
                      br
                      br
                      b-button(type='submit' variant='warning' :disabled="disabled" ) Регистрация
                      hr
                      nuxt-link(to='/login') Уже зарегистрированы? Войдите!
                      br
                      nuxt-link(to='/forgot') Забыли пароль?                     

</template>


<script >
import Vue from "vue";

export default Vue.extend({
  head: {
    title: "Регистрация",
  },
  data() {
    return {
      keyup: "",
      disabled: true,
      aprove: true,
      phoneCode:true,
      active: false,
      disabledCode: false,
      uspehEmail: false,
      disabledCodeE: false,
      phoneA: false,
      eA: true,
      emailCheck: false,
      uspeh: false,
      emailA: false,
      codeCheck: false,
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
    sendAproveE(){


      this.disabledCodeE = true;
      this.uspehEmail = true;
      this.aproveE = false;
      this.active = false;
      this.disabled = false;

    },
    aproveEmail(){

      this.eA = false;
      this.emailA = false;
      this.emailCheck = true;
      this.aproveE = true;

    },
    sendAprove() { 

      //alert("OK!")
      this.disabledCode = true;
      this.aprove = false;
      this.uspeh = true;
      this.$refs['sms'].$el.classList.remove('okay')
      this.active = false;
      this.disabled = false;

    },
    phoneForm(){

      this.phoneCode = false;
      this.codeCheck = true;

    },

    checkPhoneCode() {

    },
    checkEmailCode(){

    },
    check(event){
       this.$refs['surname'].$el.children[0].children[1].classList.remove('none')
       this.$refs['surname'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"
       const key = event.key;
       let isLetter = ""
       let isNumber = (key >= "0" && key <= "9");

       if(this.form.surname.length <= 0) {

        this.$refs['surname'].$el.classList.add('error')
        this.$refs['surname'].$el.classList.remove('okay')
        this.$refs['surname'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"

       }
            if(this.form.surname.length > 0) {

            this.$refs['surname'].$el.classList.remove('error')
            this.$refs['surname'].$el.classList.add('okay')
            this.$refs['surname'].$el.children[0].children[1].classList.add('none')

            }
           
        if (isNumber){
            this.$refs['surname'].$el.classList.remove('okay')
            this.$refs['surname'].$el.classList.add('error')
            this.$refs['surname'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"
            this.$refs['surname'].$el.children[0].children[1].classList.remove('none')

        }       

    },
     checkName(event){
       this.$refs['name'].$el.children[0].children[1].classList.remove('none')
       this.$refs['name'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"
       const key = event.key;
       let isLetter = ""
       let isNumber = (key >= "0" && key <= "9");

       if(this.form.name.length <= 0) {

        this.$refs['name'].$el.classList.add('error')
        this.$refs['name'].$el.classList.remove('okay')
        this.$refs['name'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"

       }
            if(this.form.name.length > 0) {

            this.$refs['name'].$el.classList.remove('error')
            this.$refs['name'].$el.classList.add('okay')
            this.$refs['name'].$el.children[0].children[1].classList.add('none')

            }
           
        if (isNumber){
            this.$refs['name'].$el.classList.remove('okay')
            this.$refs['name'].$el.classList.add('error')
            this.$refs['name'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"
            this.$refs['name'].$el.children[0].children[1].classList.remove('none')

        }       

    },   
     checkOtch(event){
       this.$refs['otch'].$el.children[0].children[1].classList.remove('none')
       this.$refs['otch'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"
       const key = event.key;
       let isLetter = ""
       let isNumber = (key >= "0" && key <= "9");

       if(this.form.otch.length <= 0) {

        this.$refs['otch'].$el.classList.add('error')
        this.$refs['otch'].$el.classList.remove('okay')
        this.$refs['otch'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"

       }
            if(this.form.otch.length > 0) {

            this.$refs['otch'].$el.classList.remove('error')
            this.$refs['otch'].$el.classList.add('okay')
            this.$refs['otch'].$el.children[0].children[1].classList.add('none')

            }
           
        if (isNumber){
            this.$refs['otch'].$el.classList.remove('okay')
            this.$refs['otch'].$el.classList.add('error')
            this.$refs['otch'].$el.children[0].children[1].innerText = "Пожалуйста заполните поле"
            this.$refs['otch'].$el.children[0].children[1].classList.remove('none')

        }       

    },       
    checkNumb(event){
       const key = event.key;
       const isNumb = (key >= "а" && key <= "я" || key >= "a" && key <="z");
       if (isNumb){
           this.$refs['birthday'].$el.classList.add('error')
           this.$refs['birthday'].$el.children[0].children[1].innerText = "Пожалуйста, введите дату рождения"
           this.$refs['birthday'].$el.children[0].children[1].classList.remove('none')


           //console.log(event.target.className = "form-control error")
           //alert("Введите пожалуйста ваши данные на русском языке")
       } else {

           var re = /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(this.form.birthday);
           this.$refs['birthday'].$el.classList.add('error')
           this.$refs['birthday'].$el.children[0].children[1].innerText = "Пожалуйста, введите дату рождения"
           this.$refs['birthday'].$el.children[0].children[1].classList.remove('none')
            if (re) {
                
            this.$refs['birthday'].$el.classList.remove('error')
            this.$refs['birthday'].$el.classList.add('okay')
            this.$refs['birthday'].$el.children[0].children[1].classList.add('none')
                return false;
            }


       }

    },
    checkPhone(event){


       if(this.form.phone.length > 0) {
        
         
           this.$refs['phone'].$el.classList.add('error')
           this.$refs['phone'].$el.children[0].children[1].innerText = " Пожалуйста, введите Ваш телефон122"
           this.$refs['phone'].$el.children[0].children[1].classList.remove('none')
           this.phoneA = false;

       }      
       const key = event.key;
        //console.log(key)
       const isNumb = (key >= "а" && key <= "я" || key >= "a" && key <="z");
       if (isNumb){
           this.$refs['phone'].$el.classList.add('error')
           this.$refs['phone'].$el.children[0].children[1].innerText = " Пожалуйста, введите Ваш телефон"
           this.$refs['phone'].$el.children[0].children[1].classList.remove('none')
           this.phoneA = false;

           //console.log(event.target.className = "form-control error")
           //alert("Введите пожалуйста ваши данные на русском языке")
       } else {
            var re = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(this.form.phone);

                      this.$refs['phone'].$el.classList.add('error')
                      this.$refs['phone'].$el.children[0].children[1].innerText = " Пожалуйста, введите Ваш телефон"
                      this.$refs['phone'].$el.children[0].children[1].classList.remove('none')
                      this.phoneA = false;

            if (re) {
                this.phoneA = true;
                this.$refs['phone'].$el.classList.remove('error')
                this.$refs['phone'].$el.classList.add('okay')
                this.$refs['phone'].$el.children[0].children[1].classList.add('none')
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
                if(this.uspeh == true){

                  this.active = false;
                } else {
                  this.active = true;
                }
 
                event.path[2].className = "form-group okay"
                event.path[2].children[0].children[1].className = "error-message none"
                return false;
            }

       }

    },      
   checkPassword(event){

        if (this.form.password.length < 5) {
           this.$refs['pw1'].$el.classList.add('error')
           this.$refs['pw1'].$el.children[0].children[1].innerText = "Пароль должен быть не менее 6 символов"
           this.$refs['pw1'].$el.children[0].children[1].classList.remove('none')
        } 
        if (this.form.password.length > 5) {
                this.$refs['pw1'].$el.classList.remove('error')
                this.$refs['pw1'].$el.classList.add('okay')
                this.$refs['pw1'].$el.children[0].children[1].classList.add('none')
        }      
      
    },        
   checkPassword2(event){

        if (this.form.password2.length < 5) {
           this.$refs['pw2'].$el.classList.add('error')
           this.$refs['pw2'].$el.children[0].children[1].innerText = "Пароль должен быть не менее 6 символов"
           this.$refs['pw2'].$el.children[0].children[1].classList.remove('none')
        } 
        if (this.form.password2.length > 5) {
                this.$refs['pw2'].$el.classList.remove('error')
                this.$refs['pw2'].$el.classList.add('okay')
                this.$refs['pw2'].$el.children[0].children[1].classList.add('none')
        }      
      
    },       
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
});
</script>
