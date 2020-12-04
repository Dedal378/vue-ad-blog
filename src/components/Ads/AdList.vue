<template>
  <v-content>
    <v-container fluid>
      <v-row
          v-if="!loading && myAds.length !== 0"
          align-content="center"
          justify="center">
        <v-col sm="10" md="8" lg="7">
          <h1 class="text--secondary mb-3">My ads</h1>

          <v-container>
            <v-card
                class="elevation-10 mb-3"
                v-for="ad in myAds"
                :key="ad.id"
            >
              <div class="d-flex justify-space-between flex-wrap">

                <div class="d-flex flex-wrap">
                  <v-avatar
                      size="160"
                      tile
                  >
                    <v-img :src="ad.imageSrc"></v-img>
                  </v-avatar>

                  <div>
                    <v-card-title>
                      {{ad.title}}
                    </v-card-title>

                    <v-card-subtitle>
                      {{ad.description}}
                    </v-card-subtitle>
                  </div>
                </div>

                <v-card-actions class="align-self-end">
                  <v-btn
                      color="warning"
                      :to="'/ad/' + ad.id"
                  >
                    Open
                  </v-btn>
                </v-card-actions>

              </div>
            </v-card>
          </v-container>

        </v-col>
      </v-row>
      <v-row v-else-if="!loading && myAds.length === 0">
        <v-col class="text-sm-center">
          <h1 class="text--primary">
            You have no ads
          </h1>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col class="text-sm-center">
          <v-progress-circular
              :rotate="50"
              :size="100"
              :value="100"
              :width="10"
              color="light-blue"
              indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters(['myAds', 'loading']),
/*      myAds () {
        return this.$store.getters.myAds;
      },
      loading () {
        return this.$store.getters.loading
      }*/
    },
  }
</script>

<style scoped>

</style>

