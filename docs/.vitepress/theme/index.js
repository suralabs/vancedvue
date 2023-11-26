import DefaultTheme from 'vitepress/theme';

import * as VancedVue from 'vancedvue';
// import SAlert from '../components/alert/SAlert.vue';
// import SAvatar from '../components/avatar/SAvatar.vue';
// import SBadge from '../components/badge/SBadge.vue';
// import SButton from '../components/button/SButton.vue';
// import SContainer from '../components/container/SContainer.vue';
// import SContainer2 from '../components/container/SContainer2.vue';
// import SDropdown from '../components/dropdown/SDropdown.vue';
// import SIcon from '../components/icon/SIcon.vue';
// import SInput from '../components/input/Sinput.vue';
// import SNotification from '../components/notification/SNotification.vue';
// import SPagination from '../components/pagination/SPagination.vue';
// import SToltip from '../components/toltip/SToltip.vue';

// const modules = import.meta.globEager('../components/**/*.vue');
const modules = import.meta.glob('../components/**/*.vue', { eager: true });
const components = [];

for (const path in modules) {
  const component = modules[path].default;
  const split = path.split('/');
  // component.name = `${split[2]}-${split[3].replace('.vue', '')}`;
  component.name = `${split[3].replace('.vue', '')}`;
  components.push(modules[path].default);
}

import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VancedVue);
    // app.use(SAlert);
    // app.use(SAvatar);
    // app.use(SBadge);
    // app.use(SButton);
    // app.use(SContainer);
    // app.use(SContainer2);
    // app.use(SDropdown);
    // app.use(SIcon);
    // app.use(SInput);
    // app.use(SNotification);
    // app.use(SPagination);
    // app.use(SToltip);
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
