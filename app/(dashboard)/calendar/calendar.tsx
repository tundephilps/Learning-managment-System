"use client";

import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";

const localizer = momentLocalizer(moment);

// Define your events
const myEventsList = [
  {
    title: "PTA MEETING",

    start: moment("2024-03-22").hour(1).minute(45).toDate(),
    end: moment("2024-03-24").hour(14).minute(0).toDate(),
  },
  {
    title: "GYM CLASS",

    start: moment("2024-03-10").toDate(),
    end: moment("2024-03-11").toDate(),
  },
];

const calendar = () => {
  return (
    <Wrapper>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh", width: "100%" }}
        views={["day", "agenda", "work_week", "month"]}
        selectable
        defaultView="month"
      />
    </Wrapper>
  );
};

export default calendar;

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
`;
