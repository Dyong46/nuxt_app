<template>
  <v-footer color="white" class="footerpart" inset>
    <v-col cols="12" class="d-flex justify-center py-0">
      <a
        v-for="(item, index) in footers"
        :key="index"
        :href="item.href"
        class="grey--text text--darken-3 text-decoration-none mx-2 subtitle-1"
      >
        {{ item.name }}
      </a>
    </v-col>
    <v-col cols="12" class="d-flex justify-center py-0">
      <span class="subtitle-1"
        >© {{ new Date().getFullYear() }} — PloggVN from Vietnam</span
      >
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footers: [
        {
          href: 'https://ploggvn.com',
          name: 'Ploggvn',
        },
        {
          href: '#',
          name: 'Job',
        },
        {
          href: '#',
          name: 'Get help',
        },
        {
          href: '#',
          name: 'Location',
        },
        {
          href: '#',
          name: 'Provision',
        },
      ],
    }
  },
}
</script>
