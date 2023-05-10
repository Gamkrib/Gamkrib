import React from "react";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  Inject,
  DateTime,
  Tooltip,
  RangeTooltip,
  Crosshair,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
  IStockChartEventArgs,
  ChartTheme,
} from "@syncfusion/ej2-react-charts";

import {
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export,
} from "@syncfusion/ej2-react-charts";

import { aapl } from "../../data/DummyData";

const SAMPLE_CSS = `
 .control-fluid {
     padding: 0px !important;
 }
     .charts {
         align :center
     }`;

export const Sales = (props) => {
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <StockChartComponent
          height={props.width ? props.width : "800px"}
          id="stockchartspline"
          primaryXAxis={{
            valueType: "DateTime",
            majorGridLines: { width: 0 },
            crosshairTooltip: { enable: true },
          }}
          primaryYAxis={{
            lineStyle: { color: "transparent" },
            majorTickLines: { color: "transparent", width: 0 },
          }}
          indicatorType={[]}
          seriesType={[]}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          crosshair={{ enable: true }}
          title="Sales Chart"
        >
          <Inject
            services={[
              DateTime,
              Tooltip,
              RangeTooltip,
              Crosshair,
              LineSeries,
              SplineSeries,
              CandleSeries,
              HiloOpenCloseSeries,
              HiloSeries,
              RangeAreaSeries,
              Trendlines,
              EmaIndicator,
              RsiIndicator,
              BollingerBands,
              TmaIndicator,
              MomentumIndicator,
              SmaIndicator,
              AtrIndicator,
              Export,
              AccumulationDistributionIndicator,
              MacdIndicator,
              StochasticIndicator,
            ]}
          />
          <StockChartSeriesCollectionDirective>
            <StockChartSeriesDirective
              dataSource={aapl}
              xName="x"
              yName="high"
              type="Spline"
            ></StockChartSeriesDirective>
          </StockChartSeriesCollectionDirective>
        </StockChartComponent>
      </div>
    </div>
  );
};
