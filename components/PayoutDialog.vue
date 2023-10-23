<template>
  <v-dialog v-model="dialog" :max-width="700">
    <template #activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"
        >Detail Payouts Information</v-card-title
      >

      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submit"
        >
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="payoutInfo.userId"
                label="User Id"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="payoutInfo.email"
                label="Email"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="payoutInfo.phoneNumber"
                label="Phone Number"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="payoutInfo.createdAt"
                label="Created At"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="payoutInfo.amount"
                label="Amout"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                v-model="payoutInfo.status"
                :items="statusItems"
                label="Status"
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="submit()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    payout: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      valid: false,
      dialog: false,

      statusItems: ['Required', 'Pending', 'Success'],
    }
  },

  computed: {
    payoutInfo() {
      return { ...this.payout }
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    submit() {
      this.$store.dispatch('payouts/editPayout', this.payoutInfo)
      this.dialog = false
    },
  },
}
</script>

<style></style>
