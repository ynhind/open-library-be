<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>Registration Form</h1>
                <form @submit.prevent="register()">
                    <div class="form-group">
                        <label for="email" class="float-left">Email</label>
                        <input type="email" name="email" id="email" class="form-control" v-model="user.email" 
                        placeholder="Enter your email address">
                    </div>
                    <div class="form-group">
                        <label for="password" class="float-left">Password</label>
                        <input type="password" name="password" id="password" class="form-control" v-model="user.password" 
                        placeholder="Enter your password" @input="validatePassword">
                    </div>
                    <div class="form-group">
                        <label for="confirm-password" class="float-left">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" class="form-control" v-model="confirmPassword" 
                        placeholder="Enter your password again" @input="validatePassword">
                    </div>
                    <p class="text-success" v-if="user.password && confirmPassword && passwordMatch">Passwords match!</p>
                    <p class="text-danger" v-else-if="user.password && confirmPassword">Passwords do not match!</p>

                    <div class="form-group">
                        <label for="fname" class="float-left">First Name</label>
                        <input type="text" name="fname" id="fname" class="form-control" v-model="user.first_name" 
                        placeholder="Enter your First Name">
                    </div>
                    <div class="form-group">
                        <label for="lname" class="float-left">Last Name</label>
                        <input type="text" name="lname" id="lname" class="form-control" v-model="user.last_name" 
                        placeholder="Enter your Last Name">
                    </div>
                    <div class="form-group">
                        <label for="role" class="float-left">Role</label>
                        <select name="role" id="role" v-model="user.role" class="form-control">
                            <option value="" disabled>Select an option</option>
                            <option :value="role" v-for="role in roles" :key="role">{{ role }}</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success float-left">Submit</button>
                </form>
                <p class="mt-4">
                    <span class="float-left"> Go to Home? <a href="/">Home</a> </span>
                    <span class="float-right"> Go to Login? <a href="/login">Login</a> </span>

                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

    export default {
        data() {
            return {
                roles: ['ADMIN', 'MEMBER'],
                confirmPassword: null,
                passwordMatch: false,
                user: {
                    email: null,
                    password: null,
                    first_name: null,
                    last_name: null,
                    role: null
                }
            }
        },
        methods: {
            validatePassword() {
                this.passwordMatch = this.user.password === this.confirmPassword;
            },
            async register() {
                if(this.passwordMatch){
                    try {
                        await axios.post('http://localhost:3001/register', {
                            user: this.user,
                        });
                        Swal.fire({
                            icon: 'success',
                            title: "Success!",
                            text: "Successfully registered! Check the mailbox for the token to validate your account!!"
                        })
                        this.$router.push({ 
                            name: 'VerifyEmail', 
                            query: { email: this.user.email } 
                        });
                    } catch (error) {
                        Swal.fire({
                            icon: 'error',
                            title: "Error!",
                            text: error.response.data.message
                        })
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: "Error!",
                        text: "Password do not match"
                    });
                }
            } 
        }
    }

</script>