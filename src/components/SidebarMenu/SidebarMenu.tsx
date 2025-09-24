import React, { useState } from "react";
import styles from "./SidebarMenu.module.css";

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  items: MenuItem[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleSubmenu = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <button className={styles.toggleButton} onClick={() => setIsOpen(true)}>
        ☰ Menu
      </button>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        {items.map((item, index) => (
          <div key={index}>
            <div
              className={styles.menuItem}
              onClick={() =>
                item.children ? toggleSubmenu(index) : setIsOpen(false)
              }
            >
              {item.label}
              {item.children && (
                <span>{openIndexes.includes(index) ? "▼" : "▶"}</span>
              )}
            </div>
            {item.children && openIndexes.includes(index) && (
              <div className={styles.submenu}>
                {item.children.map((child, subIndex) => (
                  <div
                    key={subIndex}
                    className={styles.submenuItem}
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
