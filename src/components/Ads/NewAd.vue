<template>
  <v-content>
    <v-container fluid>
      <v-row
          align="center"
          justify="center">
        <v-col
            sm="8"
            md="6"
        >
          <h1 class="text--secondary mb-3">Create new ad</h1>

          <v-form
              ref="form"
              v-model="valid"
              validation
          >
            <v-text-field
                :rules="[v => !!v || 'Title is required']"
                label="Ad title"
                name="title"
                required
                type="text"
                v-model="title"
            />

            <v-textarea
                :rules="[v => !!v || 'Description is required']"
                auto-grow
                label="Ad description"
                name="description"
                type="textarea"
                v-model="description"
            />
          </v-form>
          <v-row>
            <v-col class="d-flex align-end">
              <img
                  :src="imageSrc"
                  v-if="imageSrc"
                  alt="image"
              >
            </v-col>

            <v-col>
              <v-btn
                  @click="triggerUpload"
                  class="warning col"
              >
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
              <!--
                TODO
                исправить возможность принимать любые картинки
                не только webp
                accept="image/vnd.wap.wbmp"
              -->
              <input
                  @change="onFileChange"
                  accept="image/vnd.wap.wbmp"
                  ref="fileInput"
                  style="display: none;"
                  type="file"
              >
            </v-col>
          </v-row>

          <v-row>
            <v-switch
                color="warning"
                label="Add to promo?"
                v-model="promo"
            ></v-switch>
          </v-row>

          <v-row>
            <v-col>
              <v-spacer></v-spacer>
              <v-btn
                  :disabled="(!valid && !this.image) || loading"
                  :loading="loading"
                  @click="createAd"
                  class="success col"
              >
                Create ad
              </v-btn>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false,
        image: null,
        imageSrc: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading;
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            ownerId: null,
            promo: this.promo,
            image: this.image
          };

          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {
            })
        }
      },
      onFileChange (event) {
        const file = event.target.files[0];

        const reader = new FileReader();
        // eslint-disable-next-line no-unused-vars
        reader.onload = e => {
          this.imageSrc = reader.result
        };
        reader.readAsDataURL(file);
        this.image = file
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      }
    },
  }
</script>

<style scoped>

</style>
