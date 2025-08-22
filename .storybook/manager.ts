import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Frappe Components',
    brandUrl: undefined, // disables link on the title
    brandImage: undefined
  }),
});