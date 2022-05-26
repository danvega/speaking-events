<script setup>
const events = await $fetch('/api/events');
</script>

<template>
  <table role="grid">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Title</th>
      <th scope="col">Location</th>
    </tr>
    <tr v-for="event in events" :key="event.id">
      <td>{{ event.date }}</td>
      <td>{{ event.event }}</td>
      <td>{{ event.location }}</td>
    </tr>
  </table>
</template>

<style>
table {
  margin: 20px;
  width: 800px;
}
</style>
