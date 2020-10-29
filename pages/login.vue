<template lang="pug">
div
  Header

  .layout.p-4
    b-container
      b-row
        b-col(lg="12" md="9" xl="10")
          b-card.o-hidden.border-0.shadow-lg.my-5
            .card-body.p-0
              b-row
                b-col.d-none.d-lg-block.bg-login-image(lg="6")
                b-col(lg="6")
                  .p-5(class="text-center")
                    h1(class="h4 text-gray-900 mb-4") Добро пожаловать!
                    b-form(@submit='onSubmit' v-if='show')
                      b-form-group#input-group-1(label='Логин:' label-for='input-1' )
                        b-form-input#input-1(v-model='form.email' type='email' required)
                      b-form-group#input-group-2(label='Пароль:' label-for='input-2')
                        b-form-input#input-2(v-model='form.password' type="password" required )
                      b-form-group#input-group-4
                        b-form-checkbox-group#checkboxes-4(v-model='form.checked')
                          b-form-checkbox(value='yes') Запомнить устройство
                      b-button(type='submit' variant='primary') Войти
                      hr
                      nuxt-link(to='/forgot') Забыли пароль?
                      br
                      nuxt-link(to='/register') Создать аккаунт

                    //b-card.mt-3(header='Данные с формы')
                      pre.m-0 {{ form }}

        
        
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head: {
    title: "Вход в личный кабинет",
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
});
</script>
