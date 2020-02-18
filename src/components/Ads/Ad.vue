<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card
              v-if="!loading"
              class="elevation-10 mb-3">
            <v-row>

              <v-col>
                <v-img
                    :src="ad.imageSrc"
                    class="white--text align-end"
                    height="300"
                >
                </v-img>
              </v-col>

              <v-col
                  align-self="end"
                  class="d-flex flex-column"
              >
                <v-card-title>
                  {{ad.title}}
                </v-card-title>
                <v-card-subtitle class="text--primary">
                  {{ad.description}}
                </v-card-subtitle>

                <v-card-actions>
                  <v-spacer />
                  <app-edit-ad-modal :ad="ad" v-if="isOwner" />
                  <app-buy-modal :ad="ad" />
                </v-card-actions>
              </v-col>

            </v-row>
          </v-card>
          <div v-else class="text-sm-center">
            <v-progress-circular
                indeterminate
                :rotate="50"
                :size="100"
                :value="100"
                :width="10"
                color="light-blue"
            ></v-progress-circular>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>

  import EditAdModal from './EditAdModal';

  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id;
        return this.$store.getters.adById(id);
      },
      loading () {
        return this.$store.getters.loading
      },
      isOwner () {
        return this.ad.ownerId === this.$store.getters.user.id
      }
    },
    components: {
      appEditAdModal: EditAdModal,
    }
  }
</script>

<style scoped>

</style>
