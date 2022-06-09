<template>
<div class="vp-user-logout">
    Logout
</div>
</template>

<script>
export default {
    name:"UserLogout",
    mounted() {
        this.$store.commit('auth-reset');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.$router.push('/');
    },
}
</script>