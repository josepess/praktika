<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Категория</label>
        <input v-model="form.title" class="form-control" required />
      </div>
      <div class="form-group mt-3">
        <label>Описание</label>
        <input
          v-model="form.description"
          class="form-control"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>Вид метки</label>
        <select v-model="form.image" name='icon' id='icon'>
          <option value='img/festival.png'>Мероприятие</option>
          <option value='img/bench.svg'>Скамейка</option>
          <option value='img/sale.png'>Акция</option>
          <option value='img/sport.png'>Спорт</option>
          <option value='img/sign2.png'>Чрезвычайное происшествие</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label>Время жизни (ч)</label>
        <input
          v-model="form.lifetime"
          class="form-control"
          required
          type="number"
        />
      </div>
      <button type="submit" class="btn btn-success mt-3" @click="printmes">
        Установить метку
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive} from 'vue'

export default {
  props: {
  latex: Number,
  lonex: Number,
  },
  setup(props) {
    const form = reactive({ title:'', description:'', image:'', lifetime:'', endlife:'', lat:props.latex, lon: props.lonex})

    const onSubmit = async () => {
      await createUser({ ...form })
      form.lat = props.latex
      form.lon = props.lonex
      form.title = ''
      form.description = ''
      form.image = ''
      form.lifetime = ''  
        
    }
    form.endlife = Date.now() 
    return { form, onSubmit }
  },
  methods:{
    printmes()
    {
      console.log("Данные отправлены");
      this.$root.forceRerender();
    }
  }
}
</script>
