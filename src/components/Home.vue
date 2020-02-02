<template>
  <v-content>
    <v-container
        fluid
        class="pt-0">
      <v-layout row>
        <v-flex>

          <v-carousel
              height="400px"
              cycle
              hide-delimiters
              show-arrows-on-hover
              :interval="5000"
              :progress="true"
          >
            <v-carousel-item
                v-for="ad in ads"
                :key="ad.id"
                :src="ad.imageSrc"
                transition="scroll-x-reverse-transition"
            >
              <div class="car-link">
                <v-btn class="primary" :to="'/ad/' + ad.id">
                  {{ad.title}}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>

        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row>
        <v-flex
            v-for="ad of ads"
            :key="ad.id"
            :src="ad.imageSrc"
            mb-7
        >
          <v-card
              class="mx-auto"
              max-width="400"
          >
            <v-img
                class="white--text align-end"
                height="200px"
                :src="ad.imageSrc"
            >
              <v-card-title primary-title>
              </v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ad.title}}</div>
              <div>{{ad.description}}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                  flat
                  :to="'/ad/'+ ad.id"
              >
                Open
              </v-btn>

              <v-btn
                  rasied class="primary"
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Home',
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
          },

          {
            title: 'Third ad',
            description: 'Hello i am description',
            promo: false,
            imageSrc: 'https://picsum.photos/id/1076/1200/800.webp',
            id: '123'
          },

          {
            title: 'Fourth ad',
            description: 'Hello i am description',
            promo: false,
            imageSrc: 'https://picsum.photos/id/357/1200/800.webp',
            id: '123'
          },
        ],
      }
    }
  }
</script>

<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0, .5);
    transform: translate(-50%, 70%);
    padding: 5px 15px;
    border-radius: 5px;
  }
</style>
