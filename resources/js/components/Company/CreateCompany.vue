<template>
    <div>
        <div v-if="$can('edit posts')">You can edit posts.</div>

        <div class="row">
            <div class="col-md-6"><h3>Create company</h3></div>
            <div class="col-md-6"></div>
        </div>

        <form @submit.prevent="createCompany">
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model.trim="name" placeholder="Enter name">
                <span class="help-block" v-if="error && errors.name">{{ errors.name }}</span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>

        </form>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                name: '',
                errors: {},
                error: false,
            };
        },
        methods: {
            createCompany() {
                let app = this;

                app.axios.post('/create-company', {
                    name: this.name,
                })
                    .then(() => {
                        app.$router.push("dashboard")
                    })
                    .catch(errors => {
                        app.error = true;
                        app.errors = errors.response.data.errors;
                    });
            }
        }
    }

</script>