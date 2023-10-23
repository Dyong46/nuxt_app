<template>
  <v-row>
    <v-col cols="12">
      <v-simple-table max-height="500px">
        <template #default>
          <thead>
            <tr>
              <th
                v-for="(item, index) in header"
                :key="index"
                class="text-left"
              >
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in payouts" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.userId }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.createdAt }}</td>
              <td>{{ item.status }}</td>
              <td>
                <payout-dialog :payout="item"> </payout-dialog>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    header: ['#', 'User Id', 'Amount', 'Created At', 'Status', 'Action'],
  }),
  computed: {
    payouts() {
      return this.$store.getters['payouts/payouts']
    },
  },
  mounted() {
    this.$store.dispatch('payouts/loadPayouts')
  },
}
</script>
