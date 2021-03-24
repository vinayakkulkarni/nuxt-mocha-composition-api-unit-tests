import Vue from 'vue';
import assert from 'power-assert';
import { mount, Wrapper } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Index page', () => {
  let wrapper: Wrapper<Vue> = {} as Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(Index, {
      stubs: {
        NuxtLink: true,
      },
    });
  });

  describe('Fetch list of all projects', () => {
    it('is a vue instance', () => {
      assert.equal(wrapper.isVueInstance(), true);
    });
  });
});
