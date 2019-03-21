import Vue from "vue";
import HelloWorld from "@/App";

describe("App.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".title.has-text-whiteh").textContent).toEqual(
      "vui.me"
    );
  });
});
