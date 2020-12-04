<template>
  <v-dialog
      v-model="modal"
      max-width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn color="success" v-on="on" class="mr-3">
        Edit
      </v-btn>
    </template>

    <v-card>
      <v-row class="nomarginx">
        <v-col>
          <v-card-title>
            <h1 class="text--primary">
              Edit Ad
            </h1>
          </v-card-title>
        </v-col>
      </v-row>
      <v-divider />
      <v-row class="nomarginx">
        <v-col>
          <v-card-text>
            <v-text-field
                v-model="editedTitle"
                label="Title"
                name="title"
                type="text"
            />
            <v-textarea
                auto-grow
                v-model="editedDescription"
                label="Description"
                name="description"
                type="textarea"
            />
          </v-card-text>
        </v-col>
      </v-row>
      <v-row class="nomarginx">
        <v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                @click="onCancel"
                outlined>Cancel</v-btn>
            <v-btn
                @click="onSave"
                class="success">Save</v-btn>
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
        editedTitle: this.ad.title,
        editedDescription: this.ad.description,
      }
    },
    methods: {
      onCancel () {
        this.editedDescription = this.ad.description;
        this.editedTitle = this.ad.title;
        this.modal = false
      },
      onSave () {
        if (this.editedDescription !== '' && this.editedTitle !== '') {
          this.$store.dispatch('updateAd', {
            title: this.editedTitle,
            description: this.editedDescription,
            id: this.ad.id
          });

          this.modal = false
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
