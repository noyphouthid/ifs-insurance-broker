<template>
    <v-container>
      <!-- HEADER -->
      <v-row>
        <v-col cols="12">
          <h1 class="text-h4 font-weight-bold">Title</h1>
          <p>Lorem ipsum dolor sit amet...</p>
        </v-col>
      </v-row>
  
      <!-- CATEGORIES -->
      <v-row>
        <v-col v-for="category in categories" :key="category.text" cols="12" md="2">
          <v-card>
            <v-img :src="category.image" height="100"></v-img>
            <v-card-title>{{ category.text }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- PROMOTION SLIDER -->
      <v-carousel>
        <v-carousel-item v-for="(image, i) in promoImages" :key="i" :src="image"></v-carousel-item>
      </v-carousel>
  
      <!-- BLOG SECTION -->
      <v-row>
        <v-col v-for="blog in blogs" :key="blog.title" cols="12" md="4">
          <v-card>
            <v-img :src="blog.image" height="150"></v-img>
            <v-card-title>{{ blog.title }}</v-card-title>
            <v-card-text>{{ blog.date }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- PARTNER LOGOS -->
      <v-row>
        <v-col v-for="partner in partners" :key="partner.name" cols="4" md="2">
          <v-img :src="partner.logo" height="50"></v-img>
        </v-col>
      </v-row>
  
      <!-- FOOTER -->
      <v-footer class="pa-4">
        <v-container>
          <p>Company Name</p>
          <p>Call Center XXX</p>
        </v-container>
      </v-footer>
    </v-container>
  </template>
  
  <script setup>
  const categories = [
    { text: 'ปะกันไฟมอไซด์', image: 'placeholder.jpg' },
    { text: 'ปะกันอุบัติเหตุ', image: 'placeholder.jpg' },
    { text: 'ปะกันภาบเบิ้มงาย', image: 'placeholder.jpg' },
    { text: 'ปะกันสุขะพาบ', image: 'placeholder.jpg' },
    { text: 'อื่นๆ', image: 'placeholder.jpg' }
  ]
  
  const promoImages = ['promo1.jpg', 'promo2.jpg', 'promo3.jpg']
  
  const blogs = [
    { title: 'BLOG/NEW', date: '02 March 2024', image: 'blog1.jpg' },
    { title: 'BLOG/NEW', date: '02 March 2024', image: 'blog2.jpg' },
    { title: 'BLOG/NEW', date: '02 March 2024', image: 'blog3.jpg' }
  ]
  
  const partners = [
    { name: 'Partner 1', logo: 'partner1.jpg' },
    { name: 'Partner 2', logo: 'partner2.jpg' },
    { name: 'Partner 3', logo: 'partner3.jpg' }
  ]
  </script>
  