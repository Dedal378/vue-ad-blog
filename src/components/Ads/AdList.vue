<template>
  <v-content>
    <v-container fluid>
      <v-row align-content="center" justify="center">
        <v-col sm="10" md="8" lg="7">
          <h1 class="text--secondary mb-3">My ads</h1>

          <v-container>
            <v-card
                class="elevation-10 mb-3"
                v-for="ad in ads"
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
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {
            title: 'First ad',
            description: 'Hello i am description',
            promo: false,
            imageSrc: 'https://picsum.photos/id/157/1200/800.webp',
            id: '123'
          },
          {
            title: 'Second ad',
            description: 'Hello i am description',
            promo: false,
            imageSrc: 'https://picsum.photos/id/1081/1200/800.webp',
            id: '123'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>

