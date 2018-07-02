<template>
<section>
      <v-tabs v-model="active"  slider-color="yellow" >
          <v-tab key=email ripple >
            Email
          </v-tab>
          <v-tab-item key="email" >
            <email-template></email-template>
          </v-tab-item>

          <v-tab key="short-message" ripple >
            Short message
          </v-tab>
          <v-tab-item key="short-message" >
            <short-message-template></short-message-template>
          </v-tab-item>
      </v-tabs>
      <v-layout>
        <v-flex>
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class='primary' >Submit</v-btn>
          </v-card-actions>
        </v-card>
        </v-flex>
      </v-layout>
</section>

</template>

<script>
import EmailTemplate from './EmailTemplate'
import ShortMessageTemplate from './ShortMessageTemplate'

export default {
  name: 'MessageTemplate',
  components: {EmailTemplate, ShortMessageTemplate},
  data () {
    return {
      active: 'email',
      message: {
        subject: '',
        message: '',
        short_message: ''
      }
    }
  }
}
</script>

<style>

</style>
