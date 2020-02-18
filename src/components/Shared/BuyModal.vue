<template>
  <v-dialog
      v-model="modal"
      max-width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn color="warning" v-on="on" class="mr-3">
        Buy
      </v-btn>
    </template>

    <v-card>
      <v-row class="nomarginx">
        <v-col>
          <v-card-title>
            <h1 class="text--primary">
              Do you want to buy it?
            </h1>
          </v-card-title>
        </v-col>
      </v-row>
      <v-divider />
      <v-row class="nomarginx">
        <v-col>
          <v-card-text>
            <v-text-field
                v-model="name"
                label="Your name"
                name="name"
                type="text"
            />
            <v-textarea
                v-model="phone"
                auto-grow
                label="Your phone"
                name="phone"
                type="text"
            />
          </v-card-text>
        </v-col>
      </v-row>
      <v-row class="nomarginx">
        <v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                :disabled="localLoading"
                @click="onCancel"
                outlined
            >
              Close
            </v-btn>
            <v-btn
                :disabled="localLoading"
                :loading="localLoading"
                @click="onSave"
                class="success"
            >
              Buy it
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>

  </v-dialog>
</template>

<script>
  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        name: '',
        phone: '',
        localLoading: false
      }
    },
    methods: {
      onCancel () {
        this.name = '';
        this.phone = '';
        this.modal = false
      },
      onSave () {
        if (this.name !== '' && this.phone !== '') {
          this.localLoading = true;

          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId,
          })
          .finally(() => {
            this.name = '';
            this.phone = '';
            this.localLoading = false;
            this.modal = false
          })
        }
      }
    },
  }
</script>

<style scoped>
  .nomarginx {
    margin-right: 0;
    margin-left: 0;
  }

</style>
