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
                  h1(class="h4 text-gray-900 mb-4") Регистрация

                  b-form-group#input-group-0(label='Зарегистрироваться как:' label-for='input-0')
                    b-form-select#input-3(v-model='type'  @change="onChange($event)" :options='typex' required) 
                  span(v-if="student" ) Для поступления на обучение, первым делом необходимо завести учетную запись в нашей системе дистанционного обучения.
                  span(v-if="teacher") Для зачисления научно-педагогическим работником, Вам необходимо пройти процедуру регистрации и приложить документы.
                  br
                  br
                  student(v-if="student")
                  teacher(v-if="teacher")
             

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
      student:true,
      teacher:false,
      type: "Абитуриент",
      form: {
        email: "",
        password: "",
        checked: [],
      },
      show: true,
      typex: [ 'Абитуриент', 'Преподаватель'],

    };
  },
  methods: {
    
        onChange(event) {
            if(event === "Преподаватель"){
              this.student = false;
              this.teacher = true;
            }
            if(event === "Абитуриент"){
              this.student = true;
              this.teacher = false;              
            }
        }
  },
});
</script>
