<template>
  <v-content>
    <v-container fluid>
      <v-row
          align="center"
          justify="center">
        <v-col
            sm="8"
            md="6"
        >
          <h1 class="text--secondary mb-3">Create new ad</h1>
          <v-form
              ref="form"
              v-model="valid"
              validation
          >
            <v-text-field
                label="Ad title"
                name="title"
                v-model="title"
                type="text"
                required
                :rules="[v => !!v || 'Ttile is required']"
            />

            <v-textarea
                label="Ad description"
                name="description"
                v-model="description"
                type="textarea"
                auto-grow
                :rules="[v => !!v || 'Description is required']"
            />
          </v-form>
          <v-row>
            <v-col class="d-flex align-end">
              <img
                  :src="ad.imageSrc"
                  alt="">
            </v-col>

            <v-col>
              <v-btn class="warning col">
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-switch
                v-model="promo"
                color="warning"
                label="Add to promo?"
            ></v-switch>
          </v-row>

          <v-row>
            <v-col>
              <v-spacer></v-spacer>
              <v-btn
                  :disabled="!valid"
                  @click="createAd"
                  class="success col"
              >
                Create ad
              </v-btn>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false,
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://picsum.photos/id/260/1200/800.webp'
          };

          this.$store.dispatch('createdAd', ad)
        }
      }
    },
  }
</script>

<style scoped>

</style>
