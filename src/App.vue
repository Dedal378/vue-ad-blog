<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list dense>
        <v-list-item
            v-for="link of links"
            :key="link.title"
            :to="link.url"
            link
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">
          Ad Application
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
            v-for="link of links"
            :key="link.title"
            :to="link.url"
            color="primary"
            dark
            height="100%"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <router-view />

    <v-footer
        color="primary"
        app
    >
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      links: [
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registration', icon: 'mdi-face', url: '/registration'},
        {title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
        {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
        {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'}
      ]
    }),
  }
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }

</style>
