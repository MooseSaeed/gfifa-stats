import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/icons/Menu.vue";

describe("NuxtLogo", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(Navbar, {
      stubs: {
        NuxtLink: RouterLinkStub,
        iconsMenu: Menu,
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
