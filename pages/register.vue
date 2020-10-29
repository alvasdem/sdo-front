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
                    h1(class="h4 text-gray-900 mb-4") Регистрация
                    b-form(@submit='onSubmit' v-if='show')
                      b-form-group#input-group-1(label='Ваше имя:' label-for='input-1' )
                        b-form-input#input-1(v-model='form.name' type='text' required)
                      b-form-group#input-group-2(label='Ваш email:' label-for='input-2' )
                        b-form-input#input-2(v-model='form.email' type='text' required)
                      b-form-group#input-group-3(label='Пароль:' label-for='input-3')
                        b-form-input#input-3(v-model='form.password' type="password" required )
                      b-form-group#input-group-4(label='Повторите пароль:' label-for='input-4')
                        b-form-input#input-4(v-model='form.password' type="password" required )

                      b-button(type='submit' variant='primary') Регистрация
                      hr
                      nuxt-link(to='/login') Уже зарегистрированы? Войдите!
                      br
                      nuxt-link(to='/forgot') Забыли пароль?                     

                    //b-card.mt-3(header='Данные с формы')
                      pre.m-0 {{ form }}

        
        
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
