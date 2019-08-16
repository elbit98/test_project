<template>
    <div>
        <div v-if="$can('edit posts')">You can edit posts.</div>

        <div class="row">
            <div class="col-md-6"><h3>My companies</h3></div>
            <div class="col-md-6">
                <div class="btn btn-dark">
                    <router-link :to="{ name: 'createCompany' }">Create Company</router-link>
                </div>
            </div>
        </div>

        <table class="table table-striped table-bordered">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(company, index) in companies">
                <th scope="row">{{ company.id }}</th>
                <td>{{ company.name }}</td>
                <td>
                    <span @click="showCompany(index)" class="glyphicon glyphicon-eye-open"></span>
                    <span @click="editCompany(index)" class="glyphicon glyphicon-pencil"></span>
                    <span @click="deleteCompany(index, company.id)" class="glyphicon glyphicon-remove"></span>
                </td>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>

    export default {
        data: () => {
            return {
                companies: []
            }
        },
        mounted() {
            let app = this;

            app.axios.get('/companies')
                .then((data) => {
                    app.companies = data.data;
                });
        },
        methods: {
            deleteCompany(index, company_id)  {
                let app = this;

                app.axios.delete('/delete/company/' + company_id)
                    .then(() => {
                        app.companies.splice(index, 1)
                    });
            },
        }
    }

</script>