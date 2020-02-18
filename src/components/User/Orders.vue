<template>
  <v-content>
    <v-container>
      <v-row align-content="center" justify="center">

        <v-col v-if="loading" class="text-sm-center">
          <v-progress-circular
              indeterminate
              :rotate="50"
              :size="100"
              :value="100"
              :width="10"
              color="light-blue"
          ></v-progress-circular>
        </v-col>

        <v-col v-else-if="!loading && orders.length !== 0" sm="6">
          <h1 class="text--secondary mb-3">
            Orders
          </h1>

          <v-list-item-group>
            <v-list-item
                v-for="order in orders"
                :key="order.id"
            >
              <v-list-item-action>
                <!-- TODO неправильно срабатывает событие -->
                <v-checkbox
                    :input-value="order.done"
                    @change="markDone(order)"
                    color="success"
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
                >
                  Open
                </v-btn>
              </v-list-item-action>

            </v-list-item>
          </v-list-item-group>
        </v-col>

        <v-col v-else class="text-sm-center">
          <h1>
            You have no orders
          </h1>
        </v-col>

      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading;
      },
      orders () {
        return this.$store.getters.orders
      }
    },
    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
      }
    },
    created () {
      this.$store.dispatch('fetchOrders')
    }
  }
</script>

<style scoped>

</style>
