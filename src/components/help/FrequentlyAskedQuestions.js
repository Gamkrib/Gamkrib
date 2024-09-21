import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import React from "react";
import { MidText, ParentContainer } from "../../utils/modules/modules";
import styled from "styled-components";

export const FrequentlyAskedQuestions = () => {
  return (
    <ModifiedParentContainer>
      <MidText>Frequently Asked Questions</MidText>
      <CAccordion alwaysOpen activeItemKey={1} style={vars}>
        <CAccordionItem style={vars} itemKey={1}>
          <CAccordionHeader style={vars}>How do I search for accommodation on your platform?</CAccordionHeader>

          <CAccordionBody>
            You can use our search bar to input your preferred location, budget, and other filters like room type or amenities. Our system will show you the best available options based on your preferences.
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Can I view the property before booking?</CAccordionHeader>

          <CAccordionBody>
            Yes, many of our listings offer virtual tours, and some landlords allow in-person viewings. Check the listing details for viewing options or contact our support team to arrange one
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Can I cancel my booking?</CAccordionHeader>

          <CAccordionBody>
            Yes, you can cancel your booking, but the cancellation policy varies depending on the accommodation. Some properties offer a full refund if canceled within a certain time frame, while others may have stricter rules. Please review the specific cancellation policy before booking.
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </ModifiedParentContainer >
  );
};

const vars = {
  "--cui-accordion-btn-focus-border-color": "blue",
  "--cui-accordion-active-bg": "#30D158",
  "--cui-accordion-btn-bg": "#EAFAEE",
  "--cui-accordion-btn-color": "black",
  "--cui-accordion-active-color": "white",
  "--cui-accordion-border-width": "0px",
  "--cui-accordion-border-color": "pink",
  "--cui-accordion-btn-focus-box-shadow": "-1px 1px 5px 0px rgba(0,0,0,0.21)",
};

const ModifiedParentContainer = styled(ParentContainer)`
  margin: 1.313rem 20.688rem;

  @media (max-width: 768px) {
    margin: 0.313rem 0.688rem;
  }
`;
export const NavContainer = styled.div`
  margin: 1.313rem 4.688rem;
  @media (max-width: 768px) {
    margin: 0.313rem 0.688rem;
  }
`;
