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
          <CAccordionHeader style={vars}>How does the accommodation search process work on your web app?</CAccordionHeader>

          <CAccordionBody>
            Students can view available properties on the web app with their images, select their preferred one that meets their budget and make payment on the web app.

          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Is there any cost associated with using your web app to search for accommodation?</CAccordionHeader>

          <CAccordionBody>
            Students who use Gamkrib pay a commission rate to Gamkrib. Which is already added to the price you see here on Gamkrib.
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Can I filter my search results based on specific criteria, such as location, price range, or amenities?</CAccordionHeader>

          <CAccordionBody>
            This is a feature we are working on. In the next version of Gamkrib, students will be able to filter rooms based on; prices, amenities, locations and property types.

          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>How often are the property listings updated on your web app?</CAccordionHeader>

          <CAccordionBody>
            The exact frequency of updates may vary depending on various factors, such as property turnover and landlord communication, we make every effort to keep the information as current as possible.


          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={5}>
          <CAccordionHeader>How can I contact the landlords or property owners for further inquiries or to schedule a viewing</CAccordionHeader>

          <CAccordionBody>
            Users can’t contact landlords or property managers on Gamkrib. The pictures we have provided on gamkrib are very current pictures not taken more than 3 months ago, hence, no need for in person viewing. Are the property listings verified or authenticated in any way?

          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={6}>
          <CAccordionHeader>What safety measures are in place to ensure the legitimacy of the listings?</CAccordionHeader>

          <CAccordionBody>
            Currently, listings are uploaded on Gamkrib by the Gamkrib team in collaboration with landlords, so you can trust any property on Gamkrib. Landlords do not receive your rent till you have visited the place and like what you see.

          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={7}>
          <CAccordionHeader>What should I do if I encounter any issues or have technical difficulties on the web app?</CAccordionHeader>

          <CAccordionBody>
            There is a “Help’ section on Gamkrib, click on the whatsapp and text the gamkrib team and we will be ready to help you.

          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={8}>
          <CAccordionHeader>Is there a review or rating system for the listed properties to help me make an informed decision?</CAccordionHeader>

          <CAccordionBody>
            There is no review or rating system currently, in the next version of Gamkrib, there will be something like this.


          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={9}>
          <CAccordionHeader>How can I provide feedback or report any concerns about a particular property or user experience?</CAccordionHeader>
          <CAccordionBody>
            Users can reach out to the Gamkrib team via the whatsapp link at the Help section.
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </ModifiedParentContainer>
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
