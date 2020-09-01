<template>
  <div class="col-lg-3 col-10 col-sm-6 col-md-6 mb-4">
    <div v-click-outside="closeChange" class="writing">
      <div class="writing__text text-center">
        {{ data.text }}
      </div>
      <div class="writing__buttons row justify-content-around">
        <b-button variant="danger" @click="remove">
          Удалить
        </b-button>
        <b-button variant="success" @click="changed === false ? changed = true : change()">
          Изменить
        </b-button>
      </div>
      <b-textarea v-if="changed" v-model="changeText" />
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapActions } from 'vuex'
export default {
  name: 'Writing',
  directives: {
    ClickOutside
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          id: 0,
          text: ''
        }
      }
    }
  },
  data () {
    return {
      changeText: '',
      changed: false
    }
  },
  methods: {
    closeChange () {
      this.changed = false
    },
    ...mapActions({
      removeWriting: 'main/removeWriting',
      changeWriting: 'main/changeWriting'
    }),
    remove () {
      this.removeWriting(this.data.id)
    },
    change () {
      this.changed = false
      this.changeWriting({
        id: this.data.id,
        text: this.changeText
      })
    }
  },
  mounted () {
    // document.addEventListener('click', () => {
    //   this.changed = false
    // })
  }
}
</script>

<style lang="scss">
  .writing {
    box-shadow:1px 4px 8px 6px rgba(0,0,0,0.25);
    padding: 10px;
    &__buttons {
      margin: 10px 0;
    }
  }
</style>
