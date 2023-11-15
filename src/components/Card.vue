

<template>
<div :class="card_variant()">
    <img v-if="imgSrc" :class="horizontalImg()" :src="imgSrc" :alt="imgAlt"/>
    <div class="p-6">
      <slot />
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        class: {
            type: String,
            default: null
        }, 
          
        variant: {
            type: String,
            default: null
        },
        imgAlt: {
            type: String,
            default: '',
        },
        imgSrc: {
            type: String,
            default: '',
        },           
    },
    data() {
        return {
            class_name: {
                type: String,
                default: null
            }, 
            card_variant_class: {
                type: String,
                default: 'max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
            },             
        }
    },
    methods: {
        cx(){
            if (this.class == null) {
                this.class_name = ''
            } else {
                this.class_name = this.class
            }

            if (this.size == 'xs') {
                this.size_class = 'w-6 h-6'
            } 
            if (this.size == 'sm') {
                this.size_class = 'w-8 h-8'
            } 
            if (this.size == 'md' || this.size == null) {
                this.size_class = 'w-10 h-10'
            }  
            if (this.size == 'lg') {
                this.size_class = 'w-20 h-20'
            } 
            if (this.size == 'xl') {
                this.size_class = 'w-36 h-36'
            } 
          

            return this.size_class + ' rounded ' + this.class_name
            
        }, 
        horizontalImg(){
            if (this.variant == 'horizontal') {
                return 'object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            }else{
                return 'rounded-t-lg'
            }
        },
        card_variant(){

            this.card_variant_class = 'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
            if (this.variant == 'horizontal') {
                return 'flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
            }else{
                return this.card_variant_class + 'p-6'
            }   
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
