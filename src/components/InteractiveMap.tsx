"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(
  () => import("./ContactMap"),
  { ssr: false, loading: () => <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'grid', placeItems: 'center', color: '#72f136' }}>Loading Map...</div> }
);

export function InteractiveMap() {
  return <ContactMap />;
}
