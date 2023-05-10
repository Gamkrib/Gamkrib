import React from "react";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import "../pageStyles/dashboard.css";
import { Sales } from "./Sales";

export const General = () => {
  let dashboardObj;
  const cellSpacing = [5, 5];
  let count = 8;
  function onCloseIconHandler(event) {
    let panel = event.target;
    if (panel.offsetParent) {
      dashboardObj.removePanel(panel.offsetParent.id);
    }
  }
  function btnClick() {
    let panel = [
      {
        id: count.toString() + "_layout",
        sizeX: 1,
        sizeY: 1,
        row: 0,
        col: 0,
        content:
          '<span id="close" class="e-close-icon e-clear-icon"></span><div class="text-align">' +
          count.toString() +
          "</div>",
      },
    ];
    dashboardObj.addPanel(panel[0]);
    let closeIcon = document
      .getElementById(count.toString() + "_layout")
      .querySelector(".e-clear-icon");
    closeIcon.addEventListener("click", onCloseIconHandler.bind(this));
    count = count + 1;
  }
  function rendereComplete() {
    let closeElement = document.querySelectorAll(".e-clear-icon");
    for (let i = 0; i < closeElement.length; i++) {
      closeElement[i].addEventListener("click", onCloseIconHandler.bind(this));
    }
  }

  return (
    <div>
      {" "}
      <div id="default_target" className="control-section">
        <div className="addContainer">
          <ButtonComponent
            id="add"
            cssClass="e-info"
            onClick={btnClick.bind(this)}
          >
            Add Panel
          </ButtonComponent>
        </div>
        <DashboardLayoutComponent
          id="default_dashboard"
          columns={5}
          ref={(scope) => {
            dashboardObj = scope;
          }}
          cellSpacing={cellSpacing}
          allowResizing={true}
        >
          <div
            id="one"
            className="e-panel"
            data-row="0"
            data-col="0"
            data-sizeX="1"
            data-sizeY="1"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">0</div>
            </div>
          </div>
          <div
            id="two"
            className="e-panel"
            data-row="1"
            data-col="0"
            data-sizeX="1"
            data-sizeY="2"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">1</div>
            </div>
          </div>
          <div
            id="three"
            className="e-panel"
            data-row="0"
            data-col="1"
            data-sizeX="2"
            data-sizeY="2"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">
                <Sales width="100%" />
              </div>
            </div>
          </div>
          <div
            id="four"
            className="e-panel"
            data-row="2"
            data-col="1"
            data-sizeX="1"
            data-sizeY="1"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">3</div>
            </div>
          </div>
          <div
            id="five"
            className="e-panel"
            data-row="2"
            data-col="2"
            data-sizeX="2"
            data-sizeY="1"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">4</div>
            </div>
          </div>
          <div
            id="six"
            className="e-panel"
            data-row="0"
            data-col="3"
            data-sizeX="1"
            data-sizeY="1"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">5</div>
            </div>
          </div>
          <div
            id="seven"
            className="e-panel"
            data-row="1"
            data-col="3"
            data-sizeX="1"
            data-sizeY="1"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">6</div>
            </div>
          </div>
          <div
            id="eight"
            className="e-panel"
            data-row="0"
            data-col="4"
            data-sizeX="1"
            data-sizeY="3"
          >
            <span id="close" className="e-close-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">7</div>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};
