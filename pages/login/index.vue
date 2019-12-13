<template>
    <div>
        <h3>Login page</h3>
        <LoginUser/>
    </div>
</template>

<script>
import AppLayer from '~/layouts/AppLayer'
import LoginUser from './LoginUser'
export default {
  layout: 'AppLayer',
  components:{
LoginUser
  }
}
</script>

<style lang="scss" scoped>

</style>