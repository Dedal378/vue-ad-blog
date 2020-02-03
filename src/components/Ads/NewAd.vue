<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col>
          <h1 class="text--secondary mb-3">Create new ad</h1>
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
                label="Ad title"
                name="title"
                type="text"
                v-model="title"
                required
                :rules="[v => !!v || 'Ttile is required']"
            />

            <v-text-field
                id="password"
                label="Ad description"
                name="description"
                prepend-icon="lock"
                type="text"
                v-model="description"
                :rules="[v => !!v || 'Description is required']"
            />
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>
