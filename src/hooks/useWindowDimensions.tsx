"use client";
import { useEffect, useState } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined")
    return {
      width: window?.innerWidth,
      height: window?.innerHeight,
    };
  return {
    width: 0,
    height: 0,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (typeof window !== "undefined") {
      window?.addEventListener("resize", handleResize);
      return () => window?.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}
