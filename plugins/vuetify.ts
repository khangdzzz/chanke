import { createVuetify, ThemeDefinition } from 'vuetify'
// Vuetify comes with vite-plugin-vuetify that enable automatic treeshaking.
// Vuetify components and directives will be automatically imported

const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#3fb7d5',
    background: '#f7f8fa',
    'text-primary': '#3e3e3e',
    'link-hyperlink': '#2196f3',
    'background-main': '#f7f8fa',
    'background-main-section': '#ffffff',
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icons: {
      defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme,
      },
    },
    defaults: {
      VBtn: {
        color: 'primary',
        minWidth: 40,
        minHeight: 38,
      },
      VTextField: {
        hideDetails: 'auto',
        color: 'primary',
        variant: 'outlined',
        density: 'compact',
      },
      VSelect: {
        hideDetails: 'auto',
        clearable: true,
        color: 'primary',
        density: 'compact',
      },
      VRadioGroup: {
        hideDetails: 'auto',
        color: 'primary',
      },
      VAutocomplete: {
        hideDetails: 'auto',
        color: 'primary',
        clearable: true,
      },
      VRadio: {
        hideDetails: 'auto',
        color: 'primary',
      },
      VCheckbox: {
        hideDetails: 'auto',
        color: 'primary',
      },
      VRow: {
        justify: 'center',
        align: 'center',
        dense: true,
      },
      VCard: {
        color: 'background',
      },
      VTextarea: {
        hideDetails: 'auto',
        color: 'primary',
        variant: 'outlined',
      },
      VSwitch: {
        hideDetails: 'auto',
        inset: true,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
