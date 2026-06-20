"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

export default function NavWrapper() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NavBar visibility={visible} setVisibility={setVisible} />
      <NavMenu visibility={visible} setNavMenuVisibility={setVisible} />
    </>
  );
}
