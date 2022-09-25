<script>
import MarkCreate from './MarkCreate.vue';
  export default {
    name: "modal",
    props: {
        show: {
            type: Boolean,
            default: false
        },
        latex1: Number,
        lonex1: Number,
    },
    methods: {
        hideDialog() {
            this.$emit("update:show", false);
        }
    },
    components: { MarkCreate }
};
</script>
<template>
  <div class="modal-backdrop" v-if="show" @click="hideDialog">
    <div @click.stop class="modal-content">
      <MarkCreate v-bind:latex="latex1" v-bind:lonex="lonex1"/>
    </div>
  </div>
</template>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  }

  .modal-content {
    margin: auto;
    display: flex;
    max-width: 600px;
  }
</style>