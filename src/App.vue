
<template>
  <div class="container">
    <suspense>
    <Map  :key="key"></Map>
    </suspense>
  </div>
</template>
<script>
import Map  from '@/components/Map.vue'
export default {
  name: 'App',
  components: {
    Map
  },
  data() {
      return {
        key: 0,
      };
    },
    methods: {
      forceRerender() {
        this.key += 1;
      }
    },
}
</script>

