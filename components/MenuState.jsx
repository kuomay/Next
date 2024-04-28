import React from "react";

export default function MenuState() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return { isMenuOpen, setIsMenuOpen };
}
