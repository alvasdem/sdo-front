<template lang="pug">
div
  Header

  .layout.p-4
    b-container
            .card-body.o-hidden.border-0.shadow-lg.my-5.p-0

              b-row
                b-col(lg="12")
                  .p-5(class="text-center")
                    h1(class="h4 text-gray-900 mb-4") Восстановление доступа
                    b-form(@submit='onSubmit' v-if='show')
                      b-form-group#input-group-1( label-for='input-1' )
                        b-form-input#input-1(placeholder="Ваш email" v-model='form.email' type='email' required)
                      b-button(  size="lg" type='submit' variant='warning' ) Восстановить
     

                      hr
                      nuxt-link(to='/login') Уже зарегистрированы? Войдите!
                      br
                      nuxt-link(to='/register') Создать аккаунт                     

                    //b-card.mt-3(header='Данные с формы')
                      pre.m-0 {{ form }}

        
        
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head: {
    title: "Восстановление доступа",
  },
  data() {
    return {
      form: {
        email: "",
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
