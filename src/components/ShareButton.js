import React, { useState, useEffect } from "react";
import { GiShare } from "react-icons/gi";

const ShareButton = () => {
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
    setShareTitle(document.title);
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
        // console.log("Shared successfully");
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button onClick={handleShare} title="Copy URL" className="header-promo-btn">
      <GiShare />
    </button>
  );
};

export default ShareButton;