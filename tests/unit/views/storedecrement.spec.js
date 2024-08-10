import ContadorView from '@/views/ContadorView.vue'
import { createStore } from 'vuex'
import { mount} from '@vue/test-utils'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
        state.count -= 1
      }
  }
})
//testeo del botón decrementar
test('vuex', async () => {
  const wrapper = mount(ContadorView, {
    global: {
      plugins: [store]
    }
  })

  await wrapper.find('#btn2').trigger('click')

  expect(wrapper.html()).toContain('Contador: -1')
  
})