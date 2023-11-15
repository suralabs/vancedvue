<script>
export default {
    name: 'NavbarCollapse',
    props: {
      isShowMenu: false,    
    },
    data() {
      return {
        menuClassesDefault : {
          type: String,
          default: 'w-full md:block md:w-auto'
        }, 
        listClassesDefault : 'flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700',

        mobileListClasses : 'bg-gray-50', 
        isMobile : {
          type: Boolean,
          default: false
        }, 
       
      }
    },
    methods: {
      loadMenuClass(){
        this.menuClassesDefault = 'w-full md:block md:w-auto'

        if (this.isShowMenu) {
            return this.menuClassesDefault
        } else {
          return this.menuClassesDefault + ' hidden'
        }            
      }, 
      loadListClass(){
        if ( window.innerWidth < 768) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
        this.listClassesDefault = 'flex p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'
        if (this.isMobile) {
            return this.listClassesDefault + this.mobileListClasses + ' flex-col'
        } else {
          return this.listClassesDefault
        }            
      },       
    },    
    async mounted () {

      // if (this.isShowMenu) {
      //   this.isShowMenu = ''
      // } else {
      //   this.isShowMenu = ' hidden'
      // }  
      // this.menuClassesDefault = 'w-full md:block md:w-auto'

      // this.menuClasses = this.menuClassesDefault + this.isShowMenu
      // this.isMobile = window.innerWidth < 768 ? true : false
      // this.listClasses  = this.listClassesDefault + (this.isMobile ? this.mobileListClasses : '')
    },
};
</script>

<template>
  <div :class="loadMenuClass()">
    <ul :class="loadListClass()">
      <slot name="default" />
    </ul>
  </div>
</template>

