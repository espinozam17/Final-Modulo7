import { shallowMount } from "@vue/test-utils";
import ChildComponent from "@/components/ChildComponent.vue";

describe("ChildComponent.vue", () => {
  it('emite el evento "text-sent" con el texto correcto cuando se hace clic en el botón', async () => {
    const wrapper = shallowMount(ChildComponent);
    const input = wrapper.find("input");
    const button = wrapper.find("button");

    await input.setValue("Texto de prueba");
    await button.trigger("click");

    expect(wrapper.emitted("text-sent")).toBeTruthy();
    expect(wrapper.emitted("text-sent")[0]).toEqual(["Texto de prueba"]);
  });
});
