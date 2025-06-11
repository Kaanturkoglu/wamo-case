export interface SideBarItemProps {
    text?: string;
    isSelected: boolean;
    onSelect: () => void;
    icon: React.ReactNode;
  }