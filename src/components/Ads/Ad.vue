<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card class="elevation-10 mb-3">
            <v-row>

              <v-col>
                <v-img
                    class="white--text align-end"
                    height="300"
                    :src="ad.imageSrc"
                >
                </v-img>
              </v-col>

              <v-col
                  align-self="end"
                  class="d-flex flex-column"
              >
                <v-card-title>{{ad.title}}</v-card-title>
                <v-card-subtitle class="text--primary">
                  {{ad.description}}
                </v-card-subtitle>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                      color="warning"
                      depressed
                  >
                    Edit
                  </v-btn>
                  <v-btn
                      color="success"
                  >
                    Buy
                  </v-btn>
                </v-card-actions>
              </v-col>

            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id;
        return this.$store.getters.adById(id);
      }
    },
  }
</script>

<style scoped>

</style>
