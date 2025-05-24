import { reactive } from "vue";

const layoutState = reactive({
  isSidebarOpen: false,
  activeMenuItem: null,
});

export const useLayout = () => {
  const setActiveMenuItem = (item) => {
    layoutState.activeMenuItem = item || item.value;
  };

  const toggleSidebar = () => {
    layoutState.isSidebarOpen = !layoutState.isSidebarOpen;
  };

  return {
    layoutState,
    toggleSidebar,
    setActiveMenuItem,
  };
};
