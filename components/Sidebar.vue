<template>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.text" link>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  const menuItems = [
    { text: 'ປະເພດປະກັນໄພ' },
    { text: 'ຜະລິດຕະພັນຜພກັນໄພ' },
    { text: 'ຂ່າວສານ' },
    { text: 'ກ່ຽວກັບພວກເຮົາ' },
    { text: 'ເຂົ້າສູ່ລະບົບ'}
  ]
  </script>
  