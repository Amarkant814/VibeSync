import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activeTab: 'feed',
    modals: {
      isOpen: false,
      type: null,
      data: null,
    },
    theme: 'light',
    loading: {
      global: false,
      components: {},
    },
    layout: {
      sidebarCollapsed: false,
      mobileMenuOpen: false,
    }
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    openModal: (state, action) => {
      state.modals.isOpen = true;
      state.modals.type = action.payload.type;
      state.modals.data = action.payload.data || null;
    },
    closeModal: (state) => {
      state.modals.isOpen = false;
      state.modals.type = null;
      state.modals.data = null;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setGlobalLoading: (state, action) => {
      state.loading.global = action.payload;
    },
    setComponentLoading: (state, action) => {
      const { component, loading } = action.payload;
      state.loading.components[component] = loading;
    },
    toggleSidebar: (state) => {
      state.layout.sidebarCollapsed = !state.layout.sidebarCollapsed;
    },
    toggleMobileMenu: (state) => {
      state.layout.mobileMenuOpen = !state.layout.mobileMenuOpen;
    },
  },
});

export const {
  setActiveTab,
  openModal,
  closeModal,
  toggleTheme,
  setGlobalLoading,
  setComponentLoading,
  toggleSidebar,
  toggleMobileMenu,
} = uiSlice.actions;
export default uiSlice.reducer;