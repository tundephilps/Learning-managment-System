import React from "react";
import styled from "styled-components";

const CourseRequirment = () => {
  return (
    <>
      <CourseRequirement>
        <RequirementTitle>Requirements</RequirementTitle>
        <Requirements>
          <Lists>
            You should have basic understanding of the Hybrid System with many
            things i dont care about
          </Lists>

          <Lists>This is just a bunch of nonsesne to fill up space</Lists>

          <Lists>
            You should have basic understanding of the Hybrid System with many
            things i dont care about
          </Lists>
          <Lists>
            You should have basic understanding of the Hybrid System with many
            things i dont care about
          </Lists>
        </Requirements>

        <DescriptionWrapper>
          <RequirementTitle>Description</RequirementTitle>
          <Description>
            The error message "FetchError: request to
            https://api.expo.dev/v2/sdks/50.0.0/native-modules failed, reason:
            Socket connection timeout" indicates that there was an issue making
            a network request to the specified URL, and the request timed out.
            Here are some steps you can take to troubleshoot and resolve the
            issue: Check Internet Connection: Ensure that your internet
            connection is stable and that you can access other websites or APIs
            without any issues. URL Accessibility: Confirm that the URL
            https://api.expo.dev/v2/sdks/50.0.0/native-modules is correct and
            accessible. You can try opening it in a web browser to see if it
            returns valid data. Firewall or Proxy Issues: If you are behind a
            firewall or using a proxy, make sure it is not blocking the request.
            Adjust your firewall or proxy settings if necessary. Retry the
            Request: Sometimes, network issues are transient. Retry the request
            after a short period to see if the problem persists. Use a Different
            Network: Try connecting to a different network, such as switching
            from Wi-Fi to cellular data or vice versa, to see if the issue is
            network-related. Check Expo Service Status: Expo services may
            experience downtime or issues. Check the Expo service status page to
            see if there are any ongoing incidents. Upgrade Expo CLI: Ensure
            that you are using the latest version of Expo CLI. You can update
            Expo CLI using the following command:
          </Description>
        </DescriptionWrapper>
      </CourseRequirement>
    </>
  );
};

export default CourseRequirment;

const CourseRequirement = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
`;

const RequirementTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
`;

const Requirements = styled.ul`
  list-style: inside;
`;

const Lists = styled.li`
  text-align: start;
`;

const DescriptionWrapper = styled.div`
  padding-top: 20px;
`;

const Description = styled.p``;
