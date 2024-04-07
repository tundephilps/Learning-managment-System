"use client";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/side-bar";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <Header />
        <Container>
          <Sidebar />
          <Main>{children}</Main>
        </Container>
      </body>
    </html>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;
