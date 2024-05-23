import * as React from "react"
const BidAskChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="134mm"
    height="142mm"
    viewBox="0 0 134 142"
    {...props}
  >
    <defs>
      <marker
        id="a"
        markerHeight={2.89}
        markerWidth={2.5}
        orient="auto-start-reverse"
        preserveAspectRatio="xMidYMid"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
        viewBox="0 0 5.324 6.155"
      >
        <path
          d="m5.77 0-8.65 5V-5Z"
          style={{
            fill: "context-stroke",
            fillRule: "evenodd",
            stroke: "context-stroke",
            strokeWidth: "1pt",
          }}
          transform="scale(.5)"
        />
      </marker>
    </defs>
    <path
      d="M7.02 6.56v132.46"
      style={{
        fill: "gray",
        stroke: "#000",
        strokeWidth: 2.0565,
        strokeDasharray: "none",
        markerStart: "url(#a)",
      }}
    />
    <path
      d="M55.784 50.515h98.969v9.432H55.784z"
      style={{
        fill: "#b76e79",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 1.03094,
        strokeDasharray: "none",
      }}
      transform="translate(-48.33 -37.026)"
    />
    <path
      d="M55.769 70.5h59.193v9.657H55.769zM55.769 90.5h19.529v9.992H55.769z"
      style={{
        fill: "#b76e79",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 1,
        strokeDasharray: "none",
      }}
      transform="translate(-48.33 -37.026)"
    />
    <path
      d="M33.076-144.62h118.876v9.339H33.076z"
      style={{
        fill: "#8db600",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 1.12427,
        strokeDasharray: "none",
      }}
      transform="matrix(1 0 0 -1 -25.574 -14.195)"
    />
    <path
      d="M33.051-124.644h68.925v9.582H33.051z"
      style={{
        fill: "#8db600",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 1.07489,
        strokeDasharray: "none",
      }}
      transform="matrix(1 0 0 -1 -25.574 -14.195)"
    />
    <path
      d="M33.085-104.61h25.936v9.848H33.085z"
      style={{
        fill: "#8db600",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 1.14409,
        strokeDasharray: "none",
      }}
      transform="matrix(1 0 0 -1 -25.574 -14.195)"
    />
    <text
      xmlSpace="preserve"
      x={90.341}
      y={56.315}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "14.1111px",
        fontFamily: "Arial",
        InkscapeFontSpecification: "Arial",
        fill: "#b76e79",
        fillOpacity: 1,
        stroke: "#b76e79",
        strokeWidth: 0.3,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={90.341}
        y={56.315}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "14.1111px",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          fill: "#b76e79",
          fillOpacity: 1,
          stroke: "#b76e79",
          strokeWidth: 0.3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {"ask"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={89.927}
      y={89.672}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "14.1111px",
        fontFamily: "Arial",
        InkscapeFontSpecification: "Arial",
        fill: "#8db600",
        fillOpacity: 1,
        stroke: "#8db600",
        strokeWidth: 0.3,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={89.927}
        y={89.672}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "14.1111px",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          stroke: "#8db600",
          strokeWidth: 0.3,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {"bid"}
      </tspan>
    </text>
  </svg>
)
export default BidAskChart
