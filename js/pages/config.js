/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage In order to see the config changes in the template.
 * ! To clear local storage: (https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/).
 */

'use strict';

// JS global variables
let config = {
  colors: {
    primary: '#3c6dbd',
    secondary: '#6d788d',
    success: '#Adc52d',
    info: '#26c6f9',
    warning: '#fdb528',
    danger: '#ba313b',
    dark: '#4b4b4b',
    black: '#000',
    white: '#fff',
    cardColor: '#fff',
    bodyBg: '#f7f7f9',
    bodyColor: '#828393',
    headingColor: '#636578',
    textMuted: '#bbbcc4',
    borderColor: '#eaeaec'
  },
  colors_label: {
    primary: '#3c6dbd29',
    secondary: '#6d788d29',
    success: '#Adc52d29',
    info: '#26c6f929',
    warning: '#fdb52829',
    danger: '#ba313b29',
    dark: '#4b4b4b29'
  },
  colors_dark: {
    cardColor: '#30334e',
    bodyBg: '#282a42',
    bodyColor: '#a0a1b8',
    headingColor: '#d2d2e8',
    textMuted: '#777991',
    borderColor: '#464963'
  },
  enableMenuLocalStorage: true // Enable menu state with local storage support
};

let assetsPath = document.documentElement.getAttribute('data-assets-path'),
  templateName = document.documentElement.getAttribute('data-template'),
  rtlSupport = true; // set true for rtl support (rtl + ltr), false for ltr only.

/**
 * TemplateCustomizer
 * ! You must use(include) template-customizer.js to use TemplateCustomizer settings
 * -----------------------------------------------------------------------------------------------
 */

// To use more themes, just push it to THEMES object.

/* TemplateCustomizer.THEMES.push({
  name: 'theme-raspberry',
  title: 'Raspberry'
}); */

// To add more languages, just push it to LANGUAGES object.
/*
TemplateCustomizer.LANGUAGES.fr = { ... };
*/

/**
 * TemplateCustomizer settings
 * -------------------------------------------------------------------------------------
 * cssPath: Core CSS file path
 * themesPath: Theme CSS file path
 * displayCustomizer: true(Show customizer), false(Hide customizer)
 * lang: To set default language, Add more langues and set default. Fallback language is 'en'
 * controls: [ 'rtl', 'style', 'headerType', 'contentLayout', 'layoutCollapsed', 'layoutNavbarOptions', 'themes' ] | Show/Hide customizer controls
 * defaultTheme: 0(Default), 1(Bordered), 2(Semi Dark)
 * defaultStyle: 'light', 'dark', 'system' (Mode)
 * defaultTextDir: 'ltr', 'rtl' (rtlSupport must be true for rtl mode)
 * defaultContentLayout: 'compact', 'wide' (compact=container-xxl, wide=container-fluid)
 * defaultHeaderType: 'static', 'fixed' (for horizontal layout only)
 * defaultMenuCollapsed: true, false (For vertical layout only)
 * defaultNavbarType: 'sticky', 'static', 'hidden' (For vertical layout only)
 * defaultFooterFixed: true, false (For vertical layout only)
 * defaultShowDropdownOnHover : true, false (for horizontal layout only)
 */

if (typeof TemplateCustomizer !== 'undefined') {
  window.templateCustomizer = new TemplateCustomizer({
    cssPath: 'css' + (rtlSupport ? '/core-css' : '') + '/',
    themesPath: 'css' + (rtlSupport ? '/core-css' : '') + '/',
    displayCustomizer: true,
    // lang: 'fr',
    // defaultTheme: 2,
    // defaultStyle: 'system',
    // defaultTextDir: 'rtl',
    // defaultContentLayout: 'wide',
    // defaultHeaderType: 'static',
    // defaultMenuCollapsed: true,
    // defaultNavbarType: 'sticky',
    // defaultFooterFixed: false,
    // defaultShowDropdownOnHover: false,
    controls: ['rtl', 'style', 'headerType', 'contentLayout', 'layoutCollapsed', 'layoutNavbarOptions', 'themes']
  });
}
