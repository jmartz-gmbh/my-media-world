<template>
  <div class="vc-header flex justify-between mt-2">
    <span
      ><router-link to="/" class="font-bold text-white text-xl ml-2"
        >www.my-media.world</router-link
      ></span
    >
    <nav class="mt-2">
      <ul class="flex">
        <li>
          <router-link to="/user/logout">Logout</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
