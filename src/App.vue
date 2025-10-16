<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Crear Usuario</RouterLink> | 
      <RouterLink to="/query">Consultar Usuarios</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView /> </main>
</template>