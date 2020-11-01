<template lang="pug">
b-container.header(fluid)
 b-row
    .wrap.p-2
        b-col.fl(cols="6")
            img.logo(src="logo.svg")
            .logo-text
                | Откртый 
                br
                |  Институт
        b-col.fr(cols="6")
            b-navbar-nav(style="flex-direction:row !important ; float:right;")
             ui.nav
                li
                 nuxt-link.small(to='/login' style="color:#fff !important") Войти
                li
                 nuxt-link.small(to='/register' style="color:#fff !important") Регистрация

   
</template>
