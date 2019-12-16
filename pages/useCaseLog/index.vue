<template>
    <div>
        <h3>Use Case log page</h3>
        <use-case-table :items="items"></use-case-table>
    </div>
</template>

<script>
import UseCaseTable from '~/components/tables/UseCaseTable'
import JsonService from '~/services/jsonService'

    export default {
        data(){
            return {
                items:[]
            }
        },
        created(){
            JsonService.getAlllogs()
            .then((res)=>this.items=res.data)
        },
        components:{
            UseCaseTable
        }
        
    }
</script>

<style lang="scss" scoped>

</style>