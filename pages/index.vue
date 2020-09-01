<template>
  <div class="container app">
    <div class="row justify-content-around justify-content-sm-start">
      <writing v-for="(index, key) in writings" :key="key" :data="index" />
    </div>
    <div class="row mt-auto mb-3 ">
      <div class="col-lg-6">
        <b-button class="mb-2" @click="sendWriting">
          Сохранить
        </b-button>
      </div>
      <div class="col-lg-12 ">
        <b-form-textarea
          id="textarea"
          v-model="textarea"
          placeholder="Enter something..."
          rows="3"
          max-rows="3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Writing from '~/components/writing'
export default {
  components: { Writing },
  data () {
    return {
      textarea: ''
    }
  },
  computed: {
    ...mapGetters({
      writings: 'main/writings'
    })
  },
  methods: {
    ...mapActions({
      updateWritings: 'main/updateWritings'
    }),
    sendWriting () {
      this.updateWritings({
        text: this.textarea
      })
    }
  }
}
</script>

<style lang="scss">
.app {
  padding-top: 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
