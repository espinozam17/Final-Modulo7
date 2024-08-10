// tests/unit/views/router.spec.js
import { shallowMount, mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

describe("Componente HomeView.vue", () => {
  test("Validación de match con el snapshot", () => {
    //Selección el Sujeto de pruebas
    const wrapper = shallowMount(HomeView);

    //Aserción
    expect(wrapper.html()).toMatchSnapshot();
  });
});
it("Test - Probar la existencia del componente en la ruta", async () => {
  const routes = [
    {
      path: "/",
      name: "home",
      component: () => HomeView,
    },
  ];
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  router.push("/");
  await router.isReady();

  const wrapper = mount(HomeView, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.findComponent(HomeView).exists()).toBe(true);
});

describe("AboutView.vue", () => {
  it("renders About page", () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.text()).toMatch("This is an about page");
    //Aserción
    expect(wrapper.html()).toMatchSnapshot();
  });
});
it("Test - Probar la existencia del componente en la ruta", async () => {
  const routes = [
    {
      path: "/about",
      name: "about",
      component: () => AboutView,
    },
  ];
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  router.push("/");
  await router.isReady();

  const wrapper = mount(AboutView, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.findComponent(AboutView).exists()).toBe(true);
});
