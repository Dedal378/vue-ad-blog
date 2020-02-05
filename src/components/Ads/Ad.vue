<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card
              class="elevation-10 mb-3"
          >
            <v-row>

              <v-col>
                <v-img
                    class="white--text align-end"
                    height="300"
                    src="https://picsum.photos/id/157/1200/800.webp"
                >
                </v-img>
              </v-col>

              <v-col
                  align-self="end"
                  class="d-flex flex-column"
              >
                <v-card-title>Lorem</v-card-title>
                <v-card-subtitle class="text--primary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, libero.
                  <!-- /. -->
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
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>
