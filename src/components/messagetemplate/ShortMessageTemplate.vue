<template>
<v-layout>
  <v-flex xs6 >
    <v-card flat>
      <v-card-text>
        <v-text-field v-model='message.message' solo full-width multi-line single-line counter label='Content' ></v-text-field>
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs6>
    <v-card class='ma-2' >
      <v-card-title>
        <v-icon>visibility</v-icon> Preview
      </v-card-title>
      <v-card-text >
        {{message.message}}
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  name: 'ShortMessageTemplate',
  data () {
    return {
      message: {
        message: '...'
      }
    }
  },
  methods: {
    formatted (content) {
      if (content) {
        return new MarkdownIt().render(content)
      }
    }
  }
}
</script>

<style>

</style>
