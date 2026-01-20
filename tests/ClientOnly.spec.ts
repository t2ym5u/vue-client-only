import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick } from "vue";

import ClientOnly from "../src/ClientOnly.vue";

describe("ClientOnly", () => {
  it("renders default slot content after mount", async () => {
    const wrapper = mount(ClientOnly, {
      slots: {
        default: "<div>Client content</div>",
      },
    });

    await flushPromises();
    await nextTick();

    expect(wrapper.text()).toContain("Client content");
  });

  it("does not render placeholder after mount", async () => {
    const wrapper = mount(ClientOnly, {
      slots: {
        default: "<div>Client content</div>",
        placeholder: "<div>Loading...</div>",
      },
    });

    await flushPromises();
    await nextTick();

    expect(wrapper.text()).not.toContain("Loading...");
    expect(wrapper.text()).toContain("Client content");
  });

  it("renders placeholder slot initially (SSR simulation)", async () => {
    const wrapper = mount(ClientOnly, {
      slots: {
        default: "<div>Client content</div>",
        placeholder: "<div>Loading...</div>",
      },
    });

    // Before flushPromises, the placeholder should be rendered
    // This simulates SSR behavior where onMounted hasn't run yet
    expect(wrapper.text()).toContain("Loading...");

    // After mount lifecycle completes
    await flushPromises();
    await nextTick();

    expect(wrapper.text()).toContain("Client content");
    expect(wrapper.text()).not.toContain("Loading...");
  });

  it("renders without placeholder slot", async () => {
    const wrapper = mount(ClientOnly, {
      slots: {
        default: "<div>Only default content</div>",
      },
    });

    await flushPromises();
    await nextTick();

    expect(wrapper.text()).toContain("Only default content");
  });

  it("renders empty when no slots provided", async () => {
    const wrapper = mount(ClientOnly);

    await flushPromises();
    await nextTick();

    expect(wrapper.text()).toBe("");
  });

  it("renders complex slot content", async () => {
    const wrapper = mount(ClientOnly, {
      slots: {
        default: `
          <div class="container">
            <h1>Title</h1>
            <p>Paragraph content</p>
          </div>
        `,
      },
    });

    await flushPromises();
    await nextTick();

    expect(wrapper.find(".container").exists()).toBe(true);
    expect(wrapper.find("h1").text()).toBe("Title");
    expect(wrapper.find("p").text()).toBe("Paragraph content");
  });

  it("renders multiple elements in default slot", async () => {
    const wrapper = mount(ClientOnly, {
      slots: {
        default: ["<span>First</span>", "<span>Second</span>"],
      },
    });

    await flushPromises();
    await nextTick();

    const spans = wrapper.findAll("span");
    expect(spans).toHaveLength(2);
    expect(spans[0].text()).toBe("First");
    expect(spans[1].text()).toBe("Second");
  });
});
