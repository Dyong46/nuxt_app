<template>
  <v-text-field
    v-model="password"
    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[rules.required, rules.min]"
    :type="show1 ? 'text' : 'password'"
    name="input-10-1"
    label="Normal with hint text"
    hint="At least 8 characters"
    counter
    @click:append="show1 = !show1"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style></style>
