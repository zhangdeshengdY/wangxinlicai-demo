<template>
  <button class="submit" :style="btnStyle" v-tap="{methods: submit}">
    {{text}}
  </button>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      disableStyle:　{
        type: Object,
        default () {
          return {
            backgroundColor: '#ef8981',
            color: '#f9f8fb'
          }
        }
      },
      canSubmit: {
        type: Boolean,
        default: false
      },
      formData: {
        type: Object,
        default　() {
          return {}
        }
      }
    },
    computed: {
      btnStyle () {
        if(this.canSubmit){
          return {}
        }else {
          return this.disableStyle
        }
      }
    },
    methods: {
      submit () {
        this.$emit('form-submit')
      }
    }

  }
</script>
<style lang="stylus" scoped>
  .submit {
    display: block
    width: 100%
    height: (133rem/20)
    line-height: (133rem/20)
    font-size: (40rem/20)
    color: #fff
    text-align: center
    background-color: #ee4634
  }
</style>