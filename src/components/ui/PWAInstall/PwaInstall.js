import React, { useEffect, useState } from "react";

import { LangContext } from "../../../context";
const PwaInstall = ({ className }) => {
  const LangContextx = React.useContext(LangContext);
  const [supportsPWA, setSupportsPWA] = useState(
    !(
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone ||
      document.referrer.includes("android-app://")
    )
  );
  let deferredPrompt;

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      // showInstallPromotion();
    });
  });
  const onClick = (evt) => {
    evt.preventDefault();
    console.log("we are being triggered :D");
    // hideMyInstallPromotion();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setSupportsPWA(false);
    });
  };

  return (
    <>
      {supportsPWA && (
        <button
          id="PWA-button"
          aria-label={LangContextx.PWAInstall}
          title={LangContextx.PWAInstall}
          onClick={onClick}
        >
          {LangContextx.PWAInstall}
        </button>
      )}
    </>
  );
};

export default PwaInstall;
