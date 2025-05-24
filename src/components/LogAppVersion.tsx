"use client";

import { useEffect } from "react";
import { APP_VERSION } from "@/version";

export default function LogAppVersion() {
  useEffect(() => {
    console.log(`🚀 App Version: ${APP_VERSION}`);
  }, []);

  return null;
}
