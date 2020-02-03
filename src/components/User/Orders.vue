<template>
  <v-content>
    <v-container>
      <v-row
          justify="center"
          align-content="center">
        <v-col sm="6">
          <h1 class="text--secondary mb-3">Orders</h1>
          <v-list two-line subheader>
            <v-list-item-group
                v-model="settings"
                multiple
            >
              <v-list-item
                  v-for="order in orders"
                  :key="order.id"
              >
                <template>
                  <v-list-item-action>
                    <v-checkbox
                        color="success"
                        :input-value="order.done"
                        @change="markDone(order)"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{order.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn
                        :to="/ad/ + order.adId"
                        class="primary"
                    >Open
                    </v-btn>
                  </v-list-item-action>

                </template>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-content>

</template>

<script>
  export default {
    data () {
      return {
        orders: [
          {
            id: 'sdcasd3',
            name: 'Sasha',
            phone: '8-987-122-33-44',
            adId: '123',
            done: false,
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>

<style scoped>

</style>
