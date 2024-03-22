"use client";
import "../../app/globals.css";
export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* Include shared UI here e.g. a header or sidebar */}

        {children}
      </body>
    </html>
  );
}
