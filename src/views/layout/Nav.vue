<template>
  <div class="av-nav bg-indigo-500 text-white">
    <div class="av-nav__wrapper">
      <div class="av-nav__header">
        <div class="av-nav__brand" @click="navigateTo('TransferDetails')">          
          <span class="av-nav__brand-name">Company Logo</span>
        </div>
      </div>
      <div class="av-nav__content">
        <div class="av-nav__links">          
          <router-link :to="link.route" 
            class="av-nav__link"            
            v-for="link in links" 
            :key="link.route.name" 
            exact>            
              <i :class="['mdi',link.icon]" />
              <span>{{ link.route.name }}</span>
          </router-link>
        </div>
      </div>        
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return{
      nav: []
    }
  },
  methods:{
    navigateTo(path){    
      if (this.$route.name !== path) this.$router.push({name: path});
    }
  },
  computed:{
    links(){    
      return this.nav = [      
        {        
          route: {
            name: 'Home',
          },
          icon: 'mdi-home'
        },
        {        
          route: {
            name: 'Transfer',
          },
          icon: 'mdi-handshake'
        },
        {        
          route: {
            name: 'Account',
          },
          icon: 'mdi-account'
        },
        {        
          route: {
            name: 'Documents',
          },
          icon: 'mdi-file'
        },
        {        
          route: {
            name: 'Reports',
          },
          icon: 'mdi-chart-timeline-variant'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/scss/layout/nav.scss";
</style>