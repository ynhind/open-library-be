<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>Verification</h1>
                <small>Please enter the token received from your registered email</small>
                <form @submit.prevent="verify()">
                    <div class="form-group">
                        <label for="token" class="float-left">Token</label>
                        <input type="text" name="token" id="token" class="form-control" v-model="token" 
                        placeholder="Enter your received token">
                    </div>
                    <button type="submit" class="btn btn-success float-left">Submit</button>
                </form>
                <p class="mt-4">
                    <span class="float-right">Already verified? Go to <a href="/login">Login</a> </span>
                    <span class="float-left">Didn't receive token? <a href="javascript:void(0)">Resend</a> </span>

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
            token: null,
        }
    },
    mounted() {
        this.email = this.$route.query.email;

    },
    methods: {
        async verify() {
            try {
                await axios.post('http://localhost:3001/email_verification', {
                    email: this.email,
                    token: this.token
                });
                Swal.fire({
                    icon: 'success',
                    title: "Success!",
                    text: "Email successfully verified!"
                });
                this.$router.push({name: 'Login'});
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