<template>
<div class="container" >
    <h1>SQL statement <button @click='queryDatabase()' >Submit</button> </h1>
    <textarea id="" cols="30" rows="10" v-model="sqlStatement" wrap="hard" ></textarea>
    <li v-for='(data, index) in query' v-bind:key='index'>
        {{data}}
    </li>
    
</div>
</template>

<script>
import tableService from '../tableService'
export default {
    name: "tableComponent",
    data() {
        return {
            sqlStatement: '',
            query: {},
            eror: '',
        }
    },
    methods: {
        async queryDatabase(){
            try {
                this.query = await tableService.queryDatabase(this.sql)
            } catch (err) {
                this.error = err
                this.query = err
            }
        }
    },
    computed: {
        sql() {
            return this.sqlStatement.split('\n').join('')
        }
    },
    watch: {
        // query(newVal, oldVal) {

        // }
    }
}
</script>