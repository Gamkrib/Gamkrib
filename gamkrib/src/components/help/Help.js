import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import React from "react";
import { MidText, ParentContainer } from "../../utils/modules/modules";

export const Help = () => {
  return (
    <ParentContainer>
      <MidText>Frequently Asked Questions</MidText>
      <CAccordion alwaysOpen activeItemKey={1} style={vars}>
        <CAccordionItem style={vars} itemKey={1}>
          <CAccordionHeader style={vars}>Accordion Item #1</CAccordionHeader>

          <CAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Accordion Item #2</CAccordionHeader>

          <CAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Accordion Item #3</CAccordionHeader>

          <CAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </ParentContainer>
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
