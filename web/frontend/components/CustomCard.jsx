import { useState } from "react";

export function CustomCard({ children, title }) {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  const openedCard = "Polaris-Card";
  const closedCard = "Polaris-Card pb-3";
  const openedContent =
    "Polaris-Card__Section transition-all duration-250 max-h-[500px] opacity-1";
  const closedContent = "transition-all max-h-0 pointer-events-none opacity-0";

  return (
    <div className={open ? openedCard : closedCard}>
      <div className="Polaris-Card__Header" onClick={toggleModal}>
        <p className="Polaris-Heading ">{title}</p>
      </div>
      <div className={open ? openedContent : closedContent}>{children}</div>
    </div>
  );
}
