/// <reference types="@remix-run/node" />
/// <reference types="@remix-run/react" />
/// <reference types="react" />
/// <reference types="react-dom" />

import type { ReactNode } from 'react';
import type { PrismaClient } from "@prisma/client";

declare global {
  var __db: PrismaClient;
  
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  interface Window {
    ENV: {
      NODE_ENV: "development" | "production" | "test";
      SQUARE_ENVIRONMENT?: "sandbox" | "production";
      SQUARE_LOCATION_ID?: string;
    };
  }
}

export {}; 