<template>
  <v-app id="app">
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar color='primary' dark flat app>
      <v-btn to='/' icon ><v-icon>send</v-icon></v-btn>
      <v-toolbar-title>Unibox <v-chip small color='orange' dark> BETA</v-chip></v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Inbox</v-btn>
        <v-btn to='/templates' flat>Templates</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn to='/settings' icon><v-icon>settings</v-icon></v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
      <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
