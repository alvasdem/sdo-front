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
                b-nav-item(href='#') Войти
                b-nav-item(href='#') Регистрация


</template>
