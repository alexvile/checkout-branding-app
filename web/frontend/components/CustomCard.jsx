import { useState, useEffect } from "react";
import { Icon } from "@shopify/polaris";
import { ChevronDownMinor } from "@shopify/polaris-icons";

export function CustomCard({ children, title, allOpen }) {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOpen(allOpen);
  }, [allOpen]);

  const openedCard = "Polaris-Card";
  const closedCard = "Polaris-Card pb-3";
  const openedContent =
    "Polaris-Card__Section transition-all duration-250 max-h-[1000px] opacity-1";
  const closedContent = "transition-all max-h-0 pointer-events-none opacity-0";
  const openedIcon = "transition-all duration-250";
  const closedIcon = "transition-all duration-250 rotate-180";

  return (
    <div className={open ? openedCard : closedCard}>
      <div className="Polaris-Card__Header" onClick={toggleModal}>
        <div className="flex justify-between items-center">
          <p className="Polaris-Heading">{title}</p>
          <p className={open ? openedIcon : closedIcon}>
            <Icon source={ChevronDownMinor} color="base" />
          </p>
        </div>
      </div>
      <div className={open ? openedContent : closedContent}>{children}</div>
    </div>
  );
}
