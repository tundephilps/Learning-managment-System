"use client";
import React from "react";
//import video from "../../../../../videos/video.mp4";
import ReactPlayer from "react-player";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Videoplayer from "@/components/classes/video-player";

const lesson = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Goback onClick={() => router.back()}>
        <IoArrowBackOutline />
        <Back>Go back</Back>
      </Goback>

      <Videoplayer />

      <Container>
        <Title>Introduction</Title>
        <Content>
          Overcoming challenges when working with limited resources as a
          frontend developer requires a combination of effective strategies,
          prioritization, and creativity. Here are some tips to help you
          navigate these challenges: Prioritize Features: Identify and
          prioritize the essential features that provide the most value to the
          users. Focus on building a Minimum Viable Product (MVP) that includes
          core functionality. Optimize Code and Assets: Write clean and
          efficient code to ensure optimal performance. Minify and compress CSS,
          JavaScript, and image assets to reduce load times. Leverage tools like
          Webpack for bundling and optimizing resources. Responsive Design:
          Adopt a responsive design approach to ensure your application works
          well across various devices and screen sizes. Use frameworks like
          Bootstrap or Tailwind CSS for responsive styling. Progressive
          Enhancement: Implement a progressive enhancement strategy, starting
          with basic functionality and enhancing as resources allow. Ensure that
          the core features work on all devices and browsers. Reuse Components:
          Encourage component reuse to save development time and resources.
          Create a library of reusable components that can be easily integrated
          into different parts of the application. Use Lightweight Frameworks:
          Consider using lightweight frontend frameworks or libraries like
          React, Vue.js, or Svelte to streamline development. These frameworks
          often provide efficient solutions without adding unnecessary
          complexity. Outsource or Collaborate: Explore outsourcing certain
          tasks or collaborating with freelancers or external teams for
          specialized skills or tasks. Leverage platforms like Upwork or Fiverr
          to find freelance developers for specific projects. Optimize
          Development Workflow: Streamline your development workflow by using
          version control systems (e.g., Git) and collaborative tools (e.g.,
          Slack, Trello). Adopt an agile methodology to manage tasks
          efficiently. Continuous Learning: Stay updated on the latest frontend
          technologies and best practices to enhance your skills. Attend
          webinars, online courses, or community events to keep learning.
          Community Support: Engage with the developer community for advice,
          support, and shared resources. Platforms like Stack Overflow, GitHub,
          and developer forums can be valuable resources. Optimize Page
          Performance: Optimize page loading by lazy-loading images, deferring
          JavaScript execution, and prioritizing critical CSS. Use tools like
          Google Lighthouse to analyze and improve page performance. Set
          Realistic Expectations: Communicate effectively with stakeholders and
          set realistic expectations regarding project scope, timelines, and
          available resources.
        </Content>
      </Container>
    </Wrapper>
  );
};

export default lesson;

const Wrapper = styled.div`
  padding: 12px;
  width: 100%;
`;
const Goback = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: #e9e5e5;
  padding: 6px;
  border-radius: 6px;
  width: 120px;
  margin-bottom: 16px;
`;

const Back = styled.h1`
  font-weight: 800;
`;

const Container = styled.div`
  background-color: #e9e5e5;
  padding: 12px;
  width: 100%;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;
const Content = styled.p`
  font-size: 13px;
`;
