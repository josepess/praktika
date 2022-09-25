<template>
  <div id="mapContainer">
  </div>
  <modal-window v-bind:latex1="lat1" v-bind:lonex1="lon1" v-model:show="this.DialogVisible">     
  </modal-window>
</template>
<script>
import L from 'leaflet'  
import 'leaflet/dist/leaflet.css' 
// eslint-disable-next-line no-unused-vars
import { deleteUser, db, newData} from '@/firebase'
import ModalWindow  from '@/components/ModalWindow.vue'
// import { remove } from '@vue/shared'

export default {
  name: 'Map',
  components: {
    ModalWindow,
  },
  async setup() {
    const citiesRef = db.collection('users');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      newData.push(doc.data());
    });
    return { newData, deleteUser}
  },
  data () {
    return {
      centerCoordinates: [60.007, 30.373],
      map: null,
      tileLayer: null,
      DialogVisible: false,
      reload: false,
      lat1:1,
      lon1:1,
    } 
  },
  mounted() {
    this.initMap();
    this.map.on('click', (event) => {
      this.mapClick(event);
    })
  },
  methods: {
    ShowDialog(){
      this.DialogVisible = true;
    },
    initMap() {
      this.map = L.map('mapContainer').setView(this.centerCoordinates, 13);
      this.tileLayer = L.tileLayer('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=53e5ee6cc6264df082316cc3c831a566', {});
      this.tileLayer.addTo(this.map);
      newData.forEach(mark => {
        L.Marker.prototype.options.icon = L.icon({
        iconUrl: mark.image,
        iconSize: [40,40],
        iconAnchor:   [15, 15],
        shadowAnchor: [10, 10],
        popupAnchor:  [7, -15] 
        });;
        var res = mark.title + ': ' + mark.description
        //console.log(Date.now(),mark.endlife, mark.lifetime*3600000,(mark.endlife + (mark.lifetime*3600000)));
        if((mark.endlife + (mark.lifetime*3600000)) > Date.now()){
          new L.Marker([parseFloat(mark.lat), parseFloat(mark.lon)]).addTo(this.map).bindPopup(res);
        }
        });       
    },
    mapClick(event) {
      this.DialogVisible = true;
      this.lat1 = event.latlng["lat"];
      this.lon1 = event.latlng["lng"];
    },
  },
}
</script>
<style scoped>
#mapContainer {
  cursor: default;
  width: 100vw;
  height: 100vh;
}
</style>