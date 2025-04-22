<template>
    <div class="row mt-5">
        <div class="col-md-12 m-auto">
            <div class="card card-body text-center">
                <h1>Login</h1>
                <form @submit.prevent="login()">
                    <div class="form-group">
                        <label for="email" class="float-left">Email</label>
                        <input type="email" name="email" id="email" class="form-control" v-model="email" placeholder="Enter your email address">
                    </div>
                    <div class="form-group">
                        <label for="password" class="float-left">Password</label>
                        <input type="password" name="email" id="password" class="form-control" v-model="password" placeholder="Enter your password">
                    </div>
                    <button type="submit" class="btn btn-success float-left">Submit</button>
                </form>
                <p class="lead mt-4">
                    Go to Home ? <a href="/">Home</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'UserLogin',
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        async login() {
            try {
                await axios.post('http://localhost:3001/login', {
                    email: this.email,
                    password: this.password
                });
                Swal.fire({
                    icon: 'success',
                    title: "Success!",
                    text: "Successfully logged in"
                })
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: "Error!",
                    text: error.response.data.message
                })
            }
        }
    }
}
</script>