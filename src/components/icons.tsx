import * as React from "react";

const Icon = ({
  width = 24,
  height = 24,
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
    {props.children}
  </svg>
);

export const Activity = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M9 2a1 1 0 0 1 .95.68L15 17.84l2.05-6.16A1 1 0 0 1 18 11h4a1 1 0 1 1 0 2h-3.28l-2.77 8.32a1 1 0 0 1-1.9 0L9 6.16l-2.05 6.16A1 1 0 0 1 6 13H2a1 1 0 1 1 0-2h3.28l2.77-8.32A1 1 0 0 1 9 2Z" />
  </Icon>
);

export const AirPlay = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-1a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4Z" />
    <path d="M12 14a1 1 0 0 1 .77.36l5 6A1 1 0 0 1 17 22H7a1 1 0 0 1-.77-1.64l5-6A1 1 0 0 1 12 14Zm-2.86 6h5.72L12 16.56 9.14 20Z" />
  </Icon>
);

export const AlertCircle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12a11 11 0 1 1 22 0 11 11 0 0 1-22 0Z" />
    <path d="M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM11 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const AlertOctagon = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M7.15 1.3a1 1 0 0 1 .71-.3h8.28a1 1 0 0 1 .7.3l5.87 5.85a1 1 0 0 1 .29.71v8.28a1 1 0 0 1-.3.7l-5.85 5.87a1 1 0 0 1-.71.29H7.86a1 1 0 0 1-.7-.3l-5.87-5.85a1 1 0 0 1-.29-.71V7.86a1 1 0 0 1 .3-.7l5.85-5.87ZM8.27 3 3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3H8.27Z" />
    <path d="M11 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const AlertTriangle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M10.53 2.28a3 3 0 0 1 4.04 1.06l8.47 14.15v.01a3 3 0 0 1-2.56 4.5H3.52a3 3 0 0 1-2.57-4.5l.01-.01L9.43 3.35l.86.51-.85-.52a3 3 0 0 1 1.09-1.06Zm.62 2.1L2.68 18.5A1 1 0 0 0 3.54 20h16.92a1 1 0 0 0 .86-1.5L12.86 4.39a1 1 0 0 0-1.71 0Z" />
    <path d="M11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Anchor = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M12 7a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
    <path d="M1.3 11.3A1 1 0 0 1 2 11h3a1 1 0 1 1 0 2H3.06a9 9 0 0 0 17.88 0H19a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1 11 11 0 1 1-22 0 1 1 0 0 1 .3-.7Z" />
  </Icon>
);

export const FileBox = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 7a1 1 0 0 1 1 1v12h16V8a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
    <path d="M0 3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3Zm2 1v3h20V4H2ZM9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const ArrowUp = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
    <path d="M11.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.4L12 6.42l-6.3 6.3a1 1 0 0 1-1.4-1.42l7-7Z" />
  </Icon>
);

export const ArrowDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
    <path d="M4.3 11.3a1 1 0 0 1 1.4 0l6.3 6.29 6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 0-1.42Z" />
  </Icon>
);

export const ArrowLeft = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
    <path d="M12.7 4.3a1 1 0 0 1 0 1.4L6.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 0Z" />
  </Icon>
);

export const ArrowRight = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
    <path d="M11.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4l6.29-6.3-6.3-6.3a1 1 0 0 1 0-1.4Z" />
  </Icon>
);

export const AtSign = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
    <path d="M7.3 2.06A11 11 0 0 1 23 12v1a4 4 0 1 1-8 0V8a1 1 0 1 1 2 0v5a2 2 0 0 0 4 0v-1a9 9 0 1 0-3.53 7.15 1 1 0 1 1 1.22 1.58A11 11 0 1 1 7.3 2.06Z" />
  </Icon>
);

export const Award = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM4 8a8 8 0 1 1 16 0A8 8 0 0 1 4 8Z" />
    <path d="M15.66 12.89a1 1 0 0 1 1.12.86L18 22.87a1 1 0 0 1-1.5.99L12 21.16l-4.49 2.7a1 1 0 0 1-1.5-1l1.2-9.1a1 1 0 0 1 2 .26l-.95 7.06 3.23-1.94a1 1 0 0 1 1.02 0l3.23 1.94L14.8 14a1 1 0 0 1 .86-1.12Z" />
  </Icon>
);

export const BarChart = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 9a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1ZM18 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM6 15a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const BarChartAlt = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M18 9a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1ZM12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM6 13a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const BatteryCharging = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M3 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3.19a1 1 0 0 1 0 2H3Zm11-1a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.19a1 1 0 1 1 0-2H17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1ZM23 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z" />
    <path d="M11.55 5.17a1 1 0 0 1 .28 1.38L8.87 11H13a1 1 0 0 1 .83 1.55l-4 6a1 1 0 0 1-1.66-1.1L11.13 13H7a1 1 0 0 1-.83-1.55l4-6a1 1 0 0 1 1.38-.28Z" />
  </Icon>
);

export const Battery = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3ZM0 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8ZM23 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const BellOff = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12.05 3a6 6 0 0 0-3 .77 1 1 0 1 1-.98-1.74A8 8 0 0 1 20 9v4a1 1 0 1 1-2 0V9a6 6 0 0 0-5.95-6ZM5.63 4.8a1 1 0 0 1 .86.27L17.7 16.3A1 1 0 0 1 17 18H2a1 1 0 1 1 0-2 2 2 0 0 0 2-2V9m1.46 7h9.13L6.17 7.58A6 6 0 0 0 6 9v5a4 4 0 0 1-.54 2Zm4.3 4.14a1 1 0 0 1 1.38.36 1 1 0 0 0 1.72 0 1 1 0 0 1 1.74 1 3 3 0 0 1-5.2 0 1 1 0 0 1 .37-1.36Z" />
    <path d="M.3.3a1 1 0 0 1 1.4 0l22 22a1 1 0 0 1-1.4 1.4l-22-22A1 1 0 0 1 .3.3Z" />
  </Icon>
);

export const Bell = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M12 3a6 6 0 0 0-6 6v5a4 4 0 0 1-.54 2h13.08a4 4 0 0 1-.54-2V9a6 6 0 0 0-6-6Zm10 13a2 2 0 0 1-2-2V9A8 8 0 0 0 4 9v5a2 2 0 0 1-2 2 1 1 0 1 0 0 2h20a1 1 0 1 0 0-2ZM9.77 20.14a1 1 0 0 1 1.37.36 1 1 0 0 0 1.72 0 1 1 0 0 1 1.74 1 3 3 0 0 1-5.2 0 1 1 0 0 1 .37-1.36Z"
    />
  </Icon>
);

export const Bin = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1h-4Zm7 2V4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H5a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a1 1 0 0 0-1-1h-2ZM6 7v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7H6Z"
    />
  </Icon>
);

export const Bluetooth = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M11.62.08a1 1 0 0 1 1.09.21l5.5 5.5a1 1 0 0 1 0 1.42L13.4 12l4.8 4.8a1 1 0 0 1 0 1.4l-5.5 5.5A1 1 0 0 1 11 23v-8.59l-3.8 3.8a1 1 0 1 1-1.4-1.42L10.58 12l-4.8-4.8a1 1 0 0 1 1.42-1.4L11 9.58V1a1 1 0 0 1 .62-.92ZM13 14.4l3.09 3.09L13 20.59V14.4Zm0-4.82V3.4l3.09 3.09L13 9.59Z"
    />
  </Icon>
);

export const Bold = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 1 1-1h8a5 5 0 1 1 0 10H6a1 1 0 0 1-1-1V4Zm2 1v6h7a3 3 0 0 0 0-6H7Z" />
    <path d="M5 12a1 1 0 0 1 1-1h9a5 5 0 1 1 0 10H6a1 1 0 0 1-1-1v-8Zm2 1v6h8a3 3 0 0 0 0-6H7Z" />
  </Icon>
);

export const BookOpen = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M1 3a1 1 0 0 1 1-1h6a5 5 0 0 1 5 5v14a1 1 0 1 1-2 0 2 2 0 0 0-2-2H2a1 1 0 0 1-1-1V3Zm10 14.536V7a3 3 0 0 0-3-3H3v13h6a4 4 0 0 1 2 .536Z" />
    <path d="M12.464 3.464A5 5 0 0 1 16 2h6a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-7a2 2 0 0 0-2 2 1 1 0 1 1-2 0V7a5 5 0 0 1 1.464-3.536ZM13 17.536A4 4 0 0 1 15 17h6V4h-5a3 3 0 0 0-3 3v10.536Z" />
  </Icon>
);

export const Book = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M6.5 18A1.5 1.5 0 0 0 5 19.5a1 1 0 1 1-2 0A3.5 3.5 0 0 1 6.5 16H20a1 1 0 1 1 0 2H6.5Z" />
    <path d="M6.5 3A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21H19V3H6.5Zm0-2H20a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 19.5v-15A3.5 3.5 0 0 1 6.5 1Z" />
  </Icon>
);

export const Bookmark = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7 4a1 1 0 0 0-1 1v14.057l5.419-3.87a1 1 0 0 1 1.162 0L18 19.056V5a1 1 0 0 0-1-1H7ZM4.879 2.879A3 3 0 0 1 7 2h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.581.814L12 17.229l-6.419 4.585A1 1 0 0 1 4 21V5a3 3 0 0 1 .879-2.121Z" />
  </Icon>
);

export const Box2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M10.502 1.403a3 3 0 0 1 2.996 0l.002.001 7 4A3 3 0 0 1 22 7.999v8.002a3 3 0 0 1-1.5 2.595l-.004.002-6.996 3.998-.002.001a3 3 0 0 1-2.996 0H10.5l-6.996-3.999-.004-.002A3 3 0 0 1 2 16.001V8a3 3 0 0 1 1.5-2.595l.004-.002 6.998-4ZM12 3.003a1 1 0 0 0-.5.133l-.004.002L4.5 7.136l-.002.001A1 1 0 0 0 4 8.001v7.998a1 1 0 0 0 .498.864l.002.001 7 4a1 1 0 0 0 1 0l.004-.002 6.996-3.998h.002a1.001 1.001 0 0 0 .498-.865V8.001a1 1 0 0 0-.498-.864H19.5l-7-4a1 1 0 0 0-.5-.135Z" />
    <path d="M2.404 6.46a1 1 0 0 1 1.367-.366L12 10.854l8.23-4.76a1 1 0 1 1 1 1.732l-8.73 5.05a1 1 0 0 1-1 0l-8.73-5.05a1 1 0 0 1-.366-1.367Z" />
    <path d="M12 11a1 1 0 0 1 1 1v10.08a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Box = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M11.556 2.345h-.001l-7.998 4h-.002A1 1 0 0 0 3 7.24v9.527a1 1 0 0 0 .55.9s-.001 0 0 0l7.997 3.999a1.001 1.001 0 0 0 .896 0l8-4 .002-.002A1 1 0 0 0 21 16.77V7.242a1 1 0 0 0-.555-.895l-.002-.002-7.998-3.998a1 1 0 0 0-.89 0Zm1.334-.895.445-.896a3 3 0 0 0-2.67 0l-.002.002-7.998 3.998-.001.001A3 3 0 0 0 1 7.24v9.518a3 3 0 0 0 1.65 2.696l.003.002 8 4a3 3 0 0 0 2.684 0l7.998-4h.001A3 3 0 0 0 23 16.771V7.24a3 3 0 0 0-1.664-2.685h-.001l-7.998-4-.447.895Z"
    />
    <path d="M1.426 5.713a1 1 0 0 1 1.341-.447L12 9.882l9.233-4.616a1 1 0 0 1 .894 1.788l-9.68 4.84a1 1 0 0 1-.894 0l-9.68-4.84a1 1 0 0 1-.447-1.341Z" />
    <path d="M12 10a1 1 0 0 1 1 1v11.76a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Briefcase = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M4 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4ZM1 9a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9Z" />
    <path d="M7.879 2.879A3 3 0 0 1 10 2h4a3 3 0 0 1 3 3v16a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v16a1 1 0 1 1-2 0V5a3 3 0 0 1 .879-2.121Z" />
  </Icon>
);

export const BurgerMenu = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM17 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
  </Icon>
);

export const Bus = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M23.7 6.47c0-1.14-.92-2.06-2.05-2.06h-.69V2.4a2.1 2.1 0 0 0-2.1-2.1H5.14a2.1 2.1 0 0 0-2.1 2.1v2h-.69C1.22 4.4.3 5.34.3 6.48V9.9h2.75v10.58h.91v1.16c0 1.13.92 2.06 2.06 2.06h.93c1.13 0 2.05-.93 2.05-2.06v-1.16h6.02v1.16c0 1.13.92 2.06 2.05 2.06H18c1.14 0 2.06-.93 2.06-2.06v-1.16h.91V9.91h2.75V6.47ZM5.15 1.67h13.72c.4 0 .73.32.73.73v.64H4.41V2.4c0-.4.33-.74.73-.74ZM1.66 8.53V6.47c0-.38.31-.69.7-.69h.68v2.76H1.66Zm17.93 9.2v1.38h-4.36v-2.74H8.77v2.74H4.41v-1.37h2.76v-1.37H4.41v-2.63a52 52 0 0 0 15.18 0v2.63h-2.76v1.37h2.76Zm-5.73 1.38h-3.72v-1.37h3.72v1.37Zm-6.24 2.53c0 .38-.3.69-.68.69H6a.69.69 0 0 1-.69-.7V20.5h2.3v1.16Zm11.06 0c0 .38-.31.69-.69.69h-.93a.69.69 0 0 1-.68-.7V20.5h2.3v1.16Zm.91-9.29c-5.04.77-10.14.77-15.18 0V4.41h15.18v7.95Zm2.75-3.82h-1.38V5.78h.69c.38 0 .69.3.69.69v2.07Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.74 2.4A2.4 2.4 0 0 1 5.14 0h13.72a2.4 2.4 0 0 1 2.4 2.4v1.72h.39c1.3 0 2.35 1.05 2.35 2.35v3.73h-2.74V20.8h-.92v.86c0 1.3-1.05 2.35-2.35 2.35h-.93a2.35 2.35 0 0 1-2.35-2.35v-.86H9.3v.86c0 1.3-1.06 2.35-2.35 2.35H6a2.35 2.35 0 0 1-2.35-2.35v-.86h-.92V10.2H0V6.47c0-1.3 1.05-2.35 2.35-2.35h.4V2.4ZM5.14.59c-1 0-1.81.8-1.81 1.8V4.7h-.98C1.38 4.7.6 5.5.6 6.47v3.15h2.74V20.2h.91v1.45c0 .97.8 1.76 1.77 1.76h.93c.97 0 1.76-.79 1.76-1.76V20.2h6.6v1.45c0 .97.79 1.76 1.76 1.76H18c.97 0 1.77-.79 1.77-1.76V20.2h.91V9.62h2.74V6.47c0-.98-.79-1.77-1.76-1.77h-.98V2.4c0-1-.81-1.81-1.81-1.81H5.14Zm0 1.37c-.24 0-.44.2-.44.44v.34h14.6V2.4c0-.25-.2-.44-.44-.44H5.14Zm-1.02.44c0-.57.46-1.03 1.02-1.03h13.72c.56 0 1.02.46 1.02 1.03v.93H4.12V2.4Zm0 1.72h15.76v8.5l-.24.03c-5.07.77-10.2.77-15.28 0l-.24-.04v-8.5Zm.58.58v7.4c4.85.72 9.75.72 14.6 0V4.7H4.7ZM2.35 6.07a.4.4 0 0 0-.4.4v1.77h.8V6.07h-.4Zm-.98.4c0-.54.44-.98.98-.98h.98v3.34H1.37V6.47Zm19.3-.98h.98c.54 0 .98.44.98.98v2.36h-1.96V5.49Zm.59.58v2.17h.78V6.47a.4.4 0 0 0-.4-.4h-.38ZM4.12 13.41l.33.05a51.7 51.7 0 0 0 15.1 0l.33-.05v3.26h-2.76v.79h2.76v1.95h-4.94v-2.74H9.06v2.74H4.12v-1.95h2.76v-.79H4.12v-3.26Zm.58.68v2h2.76v1.95H4.7v.79h3.78v-2.75h7.04v2.75h3.78v-.79h-2.76v-1.96h2.76v-2a52.26 52.26 0 0 1-14.6 0Zm5.15 3.37h4.3v1.95h-4.3v-1.95Zm.59.58v.79h3.12v-.79h-3.12ZM5.03 20.2h2.89v1.45c0 .54-.44.98-.98.98H6a.98.98 0 0 1-.98-.98V20.2Zm.59.59v.86c0 .22.17.4.39.4h.93a.4.4 0 0 0 .39-.4v-.86H5.62Zm10.46-.59h2.89v1.45c0 .54-.44.98-.98.98h-.93a.98.98 0 0 1-.98-.98V20.2Zm.59.59v.86c0 .22.18.4.4.4h.92a.4.4 0 0 0 .4-.4v-.86h-1.72Z"
    />
  </Icon>
);

export const Calendar = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5ZM2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Z" />
    <path d="M16 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1ZM2 10a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const CameraOff = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z" />
    <path
      fillRule="evenodd"
      d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 .832.445L17.535 5H21a3 3 0 0 1 3 3v9.34a1 1 0 1 1-2 0V8a1 1 0 0 0-1-1h-4a1 1 0 0 1-.832-.445L14.465 4H9a1 1 0 0 1-1-1ZM3 7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15.586l-3.262-3.262a4.997 4.997 0 0 1-5.043.986 5 5 0 0 1-2.019-8.048L5.586 7H3Zm7.413 1.999L6.707 5.293A1 1 0 0 0 6 5H3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h18a1 1 0 0 0 .707-1.707l-5.706-5.706a1.339 1.339 0 0 0-.026-.027L10.44 9.025A.978.978 0 0 0 10.413 9Zm-.733 2.095a2.996 2.996 0 0 0-.523 2.946 3 3 0 0 0 4.749 1.28L9.68 11.094Z"
    />
  </Icon>
);

export const Camera = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M8.168 2.445A1 1 0 0 1 9 2h6a1 1 0 0 1 .832.445L17.535 5H21a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3.465l1.703-2.555ZM9.535 4 7.832 6.555A1 1 0 0 1 7 7H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4a1 1 0 0 1-.832-.445L14.465 4h-4.93Z" />
    <path d="M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
  </Icon>
);

export const Cast = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 5a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6a1 1 0 1 1 0-2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Zm-2.994 6.94a1 1 0 0 1 1.104-.884 10 10 0 0 1 8.834 8.834 1 1 0 1 1-1.988.22 8 8 0 0 0-7.067-7.066 1 1 0 0 1-.883-1.104Zm.014 3.96a1 1 0 0 1 1.18-.78 6 6 0 0 1 4.68 4.68 1 1 0 1 1-1.96.4 4 4 0 0 0-3.12-3.12 1 1 0 0 1-.78-1.18Z" />
  </Icon>
);

export const CheckCircle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M15.663 3.773A9 9 0 1 0 21 12v-.919a1 1 0 1 1 2 0V12A11.002 11.002 0 0 1 8.188 22.313a11 11 0 1 1 8.289-20.366 1 1 0 1 1-.814 1.826Z" />
    <path d="M22.707 3.293a1 1 0 0 1 0 1.414l-10 10.01a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L12 12.595l9.293-9.302a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const CheckSquare = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M22.707 3.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L12 12.586l9.293-9.293a1 1 0 0 1 1.414 0Z" />
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 1 1 2 0v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h11a1 1 0 1 1 0 2H5Z" />
  </Icon>
);

export const Check = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const ChevronDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const ChevronLeft = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const ChevronRight = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const ChevronUp = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6Z" />
  </Icon>
);

export const ChevronsDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M6.293 12.293a1 1 0 0 1 1.414 0L12 16.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" />
    <path d="M6.293 5.293a1 1 0 0 1 1.414 0L12 9.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const ChevronsLeft = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M11.707 6.293a1 1 0 0 1 0 1.414L7.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0Z" />
    <path d="M18.707 6.293a1 1 0 0 1 0 1.414L14.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const ChevronsRight = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L16.586 12l-4.293-4.293a1 1 0 0 1 0-1.414Z" />
    <path d="M5.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L9.586 12 5.293 7.707a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const ChevronsUp = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M11.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5Z" />
    <path d="M11.293 12.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 14.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5Z" />
  </Icon>
);

export const ChevronsUpAndDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M11.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 5.414 7.707 9.707a1 1 0 0 1-1.414-1.414l5-5ZM11.293 20.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L12 18.586l-4.293-4.293a1 1 0 0 0-1.414 1.414l5 5Z" />
  </Icon>
);

export const Chrome = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
    <path d="M11 8a1 1 0 0 1 1-1h9.17a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM3.45 5.194a1 1 0 0 1 1.366.365l4.59 7.94a1 1 0 0 1-1.732 1.002l-4.59-7.94a1 1 0 0 1 .366-1.367ZM15.96 13.134a1 1 0 0 1 .366 1.366l-4.58 7.94a1 1 0 1 1-1.732-1l4.58-7.94a1 1 0 0 1 1.366-.366Z" />
  </Icon>
);

export const Circle = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
  </Icon>
);

export const Clipboard = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M6 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6Z" />
    <path d="M7 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V3Zm8 0H9v2h6V3Z" />
  </Icon>
);

export const Clock = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 5a1 1 0 0 1 1 1v5.382l3.447 1.724a1 1 0 1 1-.894 1.788l-4-2A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const CloudDrizzle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M8 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM8 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM16 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM16 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM12 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z" />
    <path d="M8.082.047A9 9 0 0 1 17.48 6h.522a6 6 0 0 1 2.4 11.496 1 1 0 1 1-.802-1.832A4 4 0 0 0 17.999 8H16.74a1 1 0 0 1-.968-.75 7 7 0 1 0-11.148 7.219 1 1 0 0 1-1.248 1.562A9 9 0 0 1 8.082.047Z" />
  </Icon>
);

export const CloudRain = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M16 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1ZM8 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1ZM12 14a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z" />
    <path d="M8.082.047A9 9 0 0 1 17.48 6h.522a6 6 0 0 1 2.4 11.496 1 1 0 1 1-.802-1.832A4 4 0 0 0 17.999 8H16.74a1 1 0 0 1-.968-.75 7 7 0 1 0-11.148 7.219 1 1 0 0 1-1.248 1.562A9 9 0 0 1 8.082.047Z" />
  </Icon>
);

// TO FIX
export const CloudSnow = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M8.082 1.047A9 9 0 0 1 17.48 7h.522a6 6 0 0 1 2.4 11.496 1 1 0 1 1-.802-1.832A4 4 0 0 0 17.999 9H16.74a1 1 0 0 1-.968-.75 7 7 0 1 0-11.148 7.219 1 1 0 0 1-1.248 1.562A9 9 0 0 1 8.082 1.047Z"
    />
  </Icon>
);

export const Code = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M15.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L20.586 12l-5.293-5.293a1 1 0 0 1 0-1.414ZM8.707 5.293a1 1 0 0 1 0 1.414L3.414 12l5.293 5.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const Codepen = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.455 1.162a1 1 0 0 1 1.09 0l10 6.5A1 1 0 0 1 23 8.5v7a1 1 0 0 1-.455.838l-10 6.5a1 1 0 0 1-1.09 0l-10-6.5A1 1 0 0 1 1 15.5v-7a1 1 0 0 1 .455-.838l10-6.5ZM3 9.042v5.915l9 5.85 9-5.85V9.043l-9-5.85-9 5.85Z" />
    <path d="M12 14.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-6.5a1 1 0 0 1 1-1Z" />
    <path d="M1.18 7.927a1 1 0 0 1 1.394-.246L12 14.279l9.427-6.598a1 1 0 1 1 1.146 1.638l-10 7a1 1 0 0 1-1.146 0l-10-7a1 1 0 0 1-.246-1.392Z" />
    <path d="M11.427 7.68a1 1 0 0 1 1.146 0l10 7a1 1 0 1 1-1.146 1.64L12 9.72l-9.426 6.6a1 1 0 0 1-1.147-1.64l10-7Z" />
    <path d="M12 1a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const CodeSandbox = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M10.502 1.403a3 3 0 0 1 2.996 0l.002.001 7 4A3 3 0 0 1 22 7.999v8.002a3 3 0 0 1-1.5 2.595l-.004.002-6.996 3.998-.002.001a3 3 0 0 1-2.996 0H10.5l-6.996-3.999-.004-.002A3 3 0 0 1 2 16.001V8a3 3 0 0 1 1.5-2.595l.004-.002 6.998-4ZM12 3.003a1 1 0 0 0-.5.133l-.004.002L4.5 7.136l-.002.001A1 1 0 0 0 4 8.001v7.998a1 1 0 0 0 .498.864l.002.001 7 4a1 1 0 0 0 1 0l.004-.002 6.996-3.998h.002a1.001 1.001 0 0 0 .498-.865V8.001a1 1 0 0 0-.498-.864H19.5l-7-4a1 1 0 0 0-.5-.135Z" />
    <path d="M6.634 3.71A1 1 0 0 1 8 3.344l4 2.311 4-2.31a1 1 0 0 1 1 1.73l-4.5 2.6a1 1 0 0 1-1 0L7 5.076a1 1 0 0 1-.366-1.365ZM2.134 11.5a1 1 0 0 1 1.366-.366l4.5 2.6a1 1 0 0 1 .5.866v5.19a1 1 0 1 1-2 0v-4.613l-4-2.311a1 1 0 0 1-.366-1.366ZM21.866 11.5a1 1 0 0 1-.366 1.366l-4 2.311v4.613a1 1 0 1 1-2 0V14.6a1 1 0 0 1 .5-.866l4.5-2.6a1 1 0 0 1 1.366.366Z" />
    <path d="M2.404 6.46a1 1 0 0 1 1.367-.366L12 10.854l8.23-4.76a1 1 0 1 1 1 1.732l-8.73 5.05a1 1 0 0 1-1 0l-8.73-5.05a1 1 0 0 1-.366-1.367Z" />
    <path d="M12 11a1 1 0 0 1 1 1v10.08a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Coffee = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M17 8a1 1 0 0 1 1-1h1a5 5 0 1 1 0 10h-1a1 1 0 1 1 0-2h1a3 3 0 0 0 0-6h-1a1 1 0 0 1-1-1Z" />
    <path d="M1 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8Zm2 1v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9H3ZM6 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM10 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM14 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Columns = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M2.879 2.879A3 3 0 0 1 5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121ZM13 20h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-6v16ZM11 4v16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6Z"
    />
  </Icon>
);

export const Command = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3.172 3.172A4 4 0 0 1 10 6v2h4V6a4 4 0 1 1 4 4h-2v4h2a4 4 0 1 1-4 4v-2h-4v2a4 4 0 1 1-4-4h2v-4H6a4 4 0 0 1-2.828-6.828ZM8 8V6a2 2 0 1 0-2 2h2Zm2 2v4h4v-4h-4Zm-2 6H6a2 2 0 1 0 2 2v-2Zm8 0v2a2 2 0 1 0 2-2h-2Zm0-8h2a2 2 0 1 0-2-2v2Z" />
  </Icon>
);

export const Compass = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M16.947 7.053a1 1 0 0 1 .242 1.023l-2.12 6.36a1 1 0 0 1-.633.633l-6.36 2.12a1 1 0 0 1-1.265-1.265l2.12-6.36a1 1 0 0 1 .633-.633l6.36-2.12a1 1 0 0 1 1.023.242Zm-6.276 3.618-1.33 3.988 3.989-1.33 1.329-3.988-3.988 1.33Z" />
  </Icon>
);

export const Copy = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11 10a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9Zm-3 1a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" />
    <path d="M4 3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1H4Z" />
  </Icon>
);

export const CornerDownLeft = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M9.707 9.293a1 1 0 0 1 0 1.414L5.414 15l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0Z" />
    <path d="M20 3a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H4a1 1 0 1 1 0-2h12a3 3 0 0 0 3-3V4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const CornerDownRight = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M14.293 9.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 15l-4.293-4.293a1 1 0 0 1 0-1.414Z" />
    <path d="M4 3a1 1 0 0 1 1 1v7a3 3 0 0 0 3 3h12a1 1 0 1 1 0 2H8a5 5 0 0 1-5-5V4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const CornerLeftDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M3.293 14.293a1 1 0 0 1 1.414 0L9 18.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" />
    <path d="M9.464 4.464A5 5 0 0 1 13 3h7a1 1 0 1 1 0 2h-7a3 3 0 0 0-3 3v12a1 1 0 1 1-2 0V8a5 5 0 0 1 1.464-3.536Z" />
  </Icon>
);

export const CornerLeftUp = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M8.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L9 5.414 4.707 9.707a1 1 0 0 1-1.414-1.414l5-5Z" />
    <path d="M9 3a1 1 0 0 1 1 1v12a3 3 0 0 0 3 3h7a1 1 0 1 1 0 2h-7a5 5 0 0 1-5-5V4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const CornerRightDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M9.293 14.293a1 1 0 0 1 1.414 0L15 18.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" />
    <path d="M3 4a1 1 0 0 1 1-1h7a5 5 0 0 1 5 5v12a1 1 0 1 1-2 0V8a3 3 0 0 0-3-3H4a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const CornerRightUp = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M14.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L15 5.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5Z" />
    <path d="M15 3a1 1 0 0 1 1 1v12a5 5 0 0 1-5 5H4a1 1 0 1 1 0-2h7a3 3 0 0 0 3-3V4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const CornerUpLeft = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M9.707 3.293a1 1 0 0 1 0 1.414L5.414 9l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0Z" />
    <path d="M3 9a1 1 0 0 1 1-1h12a5 5 0 0 1 5 5v7a1 1 0 1 1-2 0v-7a3 3 0 0 0-3-3H4a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const CornerUpRight = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M14.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 9l-4.293-4.293a1 1 0 0 1 0-1.414Z" />
    <path d="M8 10a3 3 0 0 0-3 3v7a1 1 0 1 1-2 0v-7a5 5 0 0 1 5-5h12a1 1 0 1 1 0 2H8Z" />
  </Icon>
);

export const CPU = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6ZM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z" />
    <path d="M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Zm2 1v4h4v-4h-4ZM9 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM15 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM9 19a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM15 19a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM19 9a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM19 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM0 9a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM0 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const CreditCard = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M3 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3ZM0 6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6Z" />
    <path d="M0 10a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Crop = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M6.139 0a1 1 0 0 1 .991 1.009L7 16.004A1 1 0 0 0 8 17h15a1 1 0 1 1 0 2H8a3 3 0 0 1-3-3v-.009l.13-15A1 1 0 0 1 6.139 0Z" />
    <path d="M16 5a3 3 0 0 1 3 3v15a1 1 0 1 1-2 0V8a1 1 0 0 0-.996-1l-14.995.13a1 1 0 1 1-.018-2L16 5Z" />
  </Icon>
);

export const Cross = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z" />
    <path d="M5.293 5.293a1 1 0 0 1 1.414 0l12 12a1 1 0 0 1-1.414 1.414l-12-12a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Crosshair = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M17 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Database = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="m4 5 .003.015a.296.296 0 0 0 .032.066c.043.07.13.174.291.301.33.26.87.539 1.626.79C7.454 6.674 9.592 7 12 7s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79.162-.128.248-.232.29-.302a.293.293 0 0 0 .033-.066L20 5l-.003-.015a.293.293 0 0 0-.032-.066 1.235 1.235 0 0 0-.291-.301c-.33-.26-.87-.539-1.626-.79C16.546 3.326 14.408 3 12 3s-4.546.327-6.048.827c-.756.252-1.296.53-1.626.79a1.236 1.236 0 0 0-.29.302.296.296 0 0 0-.033.066L4 5Zm1.32-3.07C7.075 1.345 9.437 1 12 1c2.563 0 4.925.345 6.68.93.873.29 1.651.66 2.232 1.117C21.482 3.496 22 4.148 22 5c0 .852-.519 1.504-1.088 1.953-.581.458-1.36.826-2.232 1.117-1.755.585-4.117.93-6.68.93-2.563 0-4.925-.345-6.68-.93-.873-.29-1.651-.66-2.232-1.117C2.518 6.504 2 5.852 2 5c0-.852.519-1.504 1.088-1.953.581-.458 1.36-.826 2.232-1.117ZM3 11a1 1 0 0 1 1 1c0 .002 0 .007.003.018a.298.298 0 0 0 .033.067c.042.07.127.173.288.3.328.26.864.537 1.618.789 1.497.5 3.635.826 6.058.826s4.561-.326 6.058-.826c.754-.252 1.29-.53 1.618-.789.16-.127.246-.23.288-.3a.298.298 0 0 0 .033-.067A.061.061 0 0 0 20 12a1 1 0 1 1 2 0c0 .85-.513 1.502-1.082 1.953-.579.459-1.355.827-2.226 1.118-1.753.585-4.115.929-6.692.929s-4.939-.344-6.692-.929c-.87-.29-1.647-.66-2.226-1.118C2.513 13.502 2 12.849 2 12a1 1 0 0 1 1-1Z" />
    <path d="M3 4a1 1 0 0 1 1 1v14c0 .002 0 .007.003.018a.298.298 0 0 0 .033.067c.042.07.127.173.288.3.328.26.864.537 1.618.789 1.497.5 3.635.826 6.058.826s4.561-.326 6.058-.826c.754-.252 1.29-.53 1.618-.789.16-.127.246-.23.288-.3a.298.298 0 0 0 .033-.067A.061.061 0 0 0 20 19V5a1 1 0 1 1 2 0v14c0 .85-.513 1.502-1.082 1.953-.579.459-1.355.827-2.226 1.118-1.753.585-4.115.929-6.692.929s-4.939-.344-6.692-.929c-.87-.29-1.647-.66-2.226-1.118C2.513 20.502 2 19.849 2 19V5a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Delete = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7.247 3.341A1 1 0 0 1 8 3h13a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a1 1 0 0 1-.753-.341l-7-8a1 1 0 0 1 0-1.318l7-8ZM8.454 5l-6.125 7 6.125 7H21a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8.454Z" />
    <path d="M18.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z" />
    <path d="M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Disc = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
  </Icon>
);

export const DollarSign = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 0a1 1 0 0 1 1 1v22a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" />
    <path d="M6.318 5.318A4.5 4.5 0 0 1 9.5 4H17a1 1 0 1 1 0 2H9.5a2.5 2.5 0 1 0 0 5h5a4.5 4.5 0 1 1 0 9H6a1 1 0 1 1 0-2h8.5a2.5 2.5 0 0 0 0-5h-5a4.5 4.5 0 0 1-3.182-7.682Z" />
  </Icon>
);

export const DownloadCloud = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M7.293 16.293a1 1 0 0 1 1.414 0L12 19.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z" />
    <path d="M12 11a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Z" />
    <path d="M8.668 1.994A9 9 0 0 1 17.48 8H18a6.002 6.002 0 0 1 5.689 7.919 6 6 0 0 1-2.234 2.989 1 1 0 0 1-1.15-1.636A4 4 0 0 0 18 10H16.74a1 1 0 0 1-.969-.751 7.001 7.001 0 0 0-13.668.491 7 7 0 0 0 1.646 5.887 1 1 0 0 1-1.498 1.326A9 9 0 0 1 8.668 1.994Z" />
  </Icon>
);

export const Download = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1Z" />
    <path d="M6.293 9.293a1 1 0 0 1 1.414 0L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" />
    <path d="M12 2a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Droplet = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 1.69a1 1 0 0 1 .707.293l5.66 5.66a9 9 0 1 1-12.725 0l5.65-5.66A1 1 0 0 1 12 1.69Zm0 2.415L7.058 9.057a7 7 0 1 0 9.896 0l-4.952-4.952Z" />
  </Icon>
);

export const Edit2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M15.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 22H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 .293-.707l13-13ZM4 16.414V20h3.586l12-12L16 4.414l-12 12Z" />
  </Icon>
);

export const Edit3 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M13.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-11 11A1 1 0 0 1 7 18H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l11-11ZM4 13.414V16h2.586l10-10L14 3.414l-10 10ZM2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Edit = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.34a1 1 0 1 1 2 0V20a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5.34a1 1 0 0 1 0 2H4Z" />
    <path d="M17.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-10 10A1 1 0 0 1 12 17H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10ZM9 12.414V15h2.586l9-9L18 3.414l-9 9Z" />
  </Icon>
);

export const Export = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1ZM17.707 8.707a1 1 0 0 1-1.414 0L12 4.414 7.707 8.707a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414Z" />
    <path d="M12 16a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1Z" />
  </Icon>
);

export const ExternalLink = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M5 7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 1 1 2 0v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h6a1 1 0 1 1 0 2H5ZM14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4h-5a1 1 0 0 1-1-1Z" />
    <path d="M21.707 2.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const EyeOff = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.998 5a8.12 8.12 0 0 0-1.87.214 1 1 0 1 1-.456-1.948A10.12 10.12 0 0 1 12.002 3L12 4V3h.001c3.9 0 6.895 2.227 8.854 4.316a20.676 20.676 0 0 1 2.831 3.85 11.778 11.778 0 0 1 .192.354l.011.022.003.007.002.002s0 .002-.894.449l-.882-.471c-.084.157-.171.314-.26.469a18.676 18.676 0 0 0-2.463-3.314C17.605 6.774 15.101 5 12 5h-.002Zm9.86 6.998c-.517.9-1.114 1.753-1.783 2.548a1 1 0 0 0 1.53 1.288 19.505 19.505 0 0 0 2.277-3.363 1 1 0 0 0 .012-.918L23 12l-.894.448v-.002l-.007-.012-.03-.056a10.325 10.325 0 0 0-.211-.38ZM5.453 5.265a1 1 0 0 1 1.314.088l3.816 3.816.007.007 4.234 4.234.007.007 3.816 3.816a1 1 0 0 1-.1 1.502A11.07 11.07 0 0 1 12.016 21H12c-3.9 0-6.896-2.226-8.855-4.316a20.682 20.682 0 0 1-2.831-3.85 12.375 12.375 0 0 1-.192-.354l-.011-.022-.003-.007-.002-.002s0-.002.894-.449l-.894.447a1 1 0 0 1 .013-.92 19.45 19.45 0 0 1 5.334-6.262Zm-3.31 6.738a18.68 18.68 0 0 0 2.462 3.313c1.789 1.909 4.29 3.68 7.387 3.684a9.07 9.07 0 0 0 4.38-1.214l-2.322-2.322a3.993 3.993 0 0 1-3.623.32A4 4 0 0 1 8.536 9.95L5.987 7.401a17.45 17.45 0 0 0-3.844 4.602Zm7.885-.56a2 2 0 0 0 2.53 2.53l-2.53-2.53Z" />
    <path d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Eyes = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M2.14 12a18.68 18.68 0 0 0 2.464 3.316C6.397 17.226 8.9 19 12 19c3.1 0 5.605-1.774 7.395-3.684A18.684 18.684 0 0 0 21.86 12a18.681 18.681 0 0 0-2.464-3.316C17.605 6.774 15.101 5 12 5 8.9 5 6.396 6.774 4.605 8.684A18.678 18.678 0 0 0 2.14 12ZM23 12l.894-.448-.002-.003-.003-.007-.011-.022a10.615 10.615 0 0 0-.192-.354 20.675 20.675 0 0 0-2.831-3.85C18.895 5.226 15.899 3 12 3 8.1 3 5.104 5.226 3.145 7.316a20.674 20.674 0 0 0-2.831 3.85 12.375 12.375 0 0 0-.192.354l-.011.022-.003.007-.002.002s0 .002.894.449l-.894-.447a1 1 0 0 0 0 .894L1 12l-.894.447.002.004.003.007.011.022a8.267 8.267 0 0 0 .192.354 20.67 20.67 0 0 0 2.831 3.85C5.105 18.774 8.1 21 12 21c3.9 0 6.895-2.226 8.855-4.316a20.672 20.672 0 0 0 2.831-3.85 11.81 11.81 0 0 0 .192-.354l.011-.022.003-.007.002-.002s0-.002-.894-.449Zm0 0 .894.447c.141-.281.14-.613 0-.895L23 12Z"
    />
    <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
  </Icon>
);

export const Facebook = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M10.757 2.757A6 6 0 0 1 15 1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v2h3a1 1 0 0 1 .97 1.242l-1 4A1 1 0 0 1 17 15h-2v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2V7a6 6 0 0 1 1.757-4.243ZM15 3a4 4 0 0 0-4 4v3a1 1 0 0 1-1 1H8v2h2a1 1 0 0 1 1 1v7h2v-7a1 1 0 0 1 1-1h2.22l.5-2H14a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h2V3h-2Z" />
  </Icon>
);

export const FastForward = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12.56 4.102a1 1 0 0 1 1.054.109l9 7a1 1 0 0 1 0 1.578l-9 7A1 1 0 0 1 12 19V5a1 1 0 0 1 .56-.898ZM14 7.045v9.91L20.371 12 14 7.045Z" />
    <path d="M1.56 4.102a1 1 0 0 1 1.054.109l9 7a1 1 0 0 1 0 1.578l-9 7A1 1 0 0 1 1 19V5a1 1 0 0 1 .56-.898ZM3 7.045v9.91L9.371 12 3 7.045Z" />
  </Icon>
);

export const Feather = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.043 3.043a7.003 7.003 0 0 1 9.905 9.903v.001l-6.74 6.759A1 1 0 0 1 13.5 20H5a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 .293-.707l6.75-6.75Zm4.952-.051c-1.327 0-2.6.527-3.538 1.465L6 10.914V18h7.085l6.447-6.466v-.001a5.003 5.003 0 0 0-3.537-8.541Z" />
    <path d="M16.707 7.293a1 1 0 0 1 0 1.414l-14 14a1 1 0 0 1-1.414-1.414l14-14a1 1 0 0 1 1.414 0Z" />
    <path d="M8 15a1 1 0 0 1 1-1h8.5a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Figma = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M8.5 3a2.5 2.5 0 1 0 0 5H11V3H8.5Zm-3.182-.682A4.5 4.5 0 0 1 8.5 1H12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8.5a4.5 4.5 0 0 1-3.182-7.682Z" />
    <path d="M11 2a1 1 0 0 1 1-1h3.5a4.5 4.5 0 0 1 0 9H12a1 1 0 0 1-1-1V2Zm2 1v5h2.5a2.5 2.5 0 1 0 0-5H13Z" />
    <path d="M15.5 10a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5.001Zm-1.722-1.657a4.5 4.5 0 1 1 3.444 8.316 4.5 4.5 0 0 1-3.444-8.316Z" />
    <path d="M8.5 17a2.5 2.5 0 1 0 2.5 2.5V17H8.5Zm-3.182-.682A4.5 4.5 0 0 1 8.5 15H12a1 1 0 0 1 1 1v3.5a4.5 4.5 0 1 1-7.682-3.182Z" />
    <path d="M8.5 10a2.5 2.5 0 0 0 0 5H11v-5H8.5Zm-3.182-.682A4.5 4.5 0 0 1 8.5 8H12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8.5a4.5 4.5 0 0 1-3.182-7.682Z" />
  </Icon>
);

export const FileMinus = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M3.879 1.879A3 3 0 0 1 6 1h8a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 21 8v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414L13.586 3H6Z" />
    <path d="M14 1a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1ZM8 15a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const FilePlus = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3.879 1.879A3 3 0 0 1 6 1h8a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 21 8v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414L13.586 3H6Z" />
    <path d="M14 1a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1ZM12 11a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" />
    <path d="M8 15a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const FileText = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3.879 1.879A3 3 0 0 1 6 1h8a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 21 8v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414L13.586 3H6Z" />
    <path d="M14 1a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1ZM7 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const File = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3.879 1.879A3 3 0 0 1 6 1h7a1 1 0 0 1 .707.293l7 7A1 1 0 0 1 21 9v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.414L12.586 3H6Z" />
    <path d="M13 1a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const File2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <Icon {...props}>
      <path d="M9 18h6q.43 0 .71-.29.29-.29.29-.71 0-.43-.29-.71Q15.42 16 15 16H9q-.43 0-.71.29Q8 16.58 8 17q0 .43.29.71.29.29.71.29Zm0-4h6q.43 0 .71-.29.29-.29.29-.71 0-.43-.29-.71Q15.42 12 15 12H9q-.43 0-.71.29Q8 12.58 8 13q0 .43.29.71.29.29.71.29Zm-3 8q-.83 0-1.41-.59Q4 20.82 4 20V4q0-.83.59-1.41Q5.17 2 6 2h7.18q.4 0 .76.15t.63.43l4.86 4.84q.27.28.42.64.15.37.15.76V20q0 .82-.59 1.41T18 22Zm8-13h4l-5-5v4q0 .43.29.71.29.29.71.29Z" />
    </Icon>
  );
};

export const Film = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4.18 3A1.18 1.18 0 0 0 3 4.18v15.64c0 .652.528 1.18 1.18 1.18h15.64A1.18 1.18 0 0 0 21 19.82V4.18A1.18 1.18 0 0 0 19.82 3H4.18ZM1 4.18A3.18 3.18 0 0 1 4.18 1h15.64A3.18 3.18 0 0 1 23 4.18v15.64A3.18 3.18 0 0 1 19.82 23H4.18A3.18 3.18 0 0 1 1 19.82V4.18Z" />
    <path d="M7 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM17 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z" />
    <path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 7a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1ZM1 17a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM16 17a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1ZM16 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Filter = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M1.093 2.58A1 1 0 0 1 2 2h20a1 1 0 0 1 .764 1.646L15 12.826V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9 19v-6.174l-7.764-9.18a1 1 0 0 1-.143-1.067ZM4.155 4l6.609 7.814a1 1 0 0 1 .236.646v5.922l2 1V12.46a1 1 0 0 1 .236-.646L19.845 4H4.155Z" />
  </Icon>
);

export const FolderMinus = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M4 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-9a1 1 0 0 1-.832-.445L8.465 4H4ZM1.879 2.879A3 3 0 0 1 4 2h5a1 1 0 0 1 .832.445L11.535 5H20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121Z" />
    <path d="M8 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const FolderPlus = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M4 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-9a1 1 0 0 1-.832-.445L8.465 4H4ZM1.879 2.879A3 3 0 0 1 4 2h5a1 1 0 0 1 .832.445L11.535 5H20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121Z" />
    <path d="M12 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" />
    <path d="M8 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Folder = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-9a1 1 0 0 1-.832-.445L8.465 4H4ZM1.879 2.879A3 3 0 0 1 4 2h5a1 1 0 0 1 .832.445L11.535 5H20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121Z" />
  </Icon>
);

export const Folder2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <Icon {...props}>
      <path d="M4 20q-.83 0-1.41-.59Q2 18.82 2 18V6q0-.83.59-1.41Q3.17 4 4 4h5.18q.4 0 .76.15t.63.42L12 6h8q.82 0 1.41.59Q22 7.17 22 8v10q0 .82-.59 1.41T20 20Z" />
    </Icon>
  );
};

export const Framer = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.076 1.617A1 1 0 0 1 5 1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4.586l5.293 5.293A1 1 0 0 1 19 17h-6v6a1 1 0 0 1-1.707.707l-7-7a1.001 1.001 0 0 1-.292-.661M4 15.992V9a1 1 0 0 1 1-1h4.586L4.293 2.707a1 1 0 0 1-.217-1.09M12.414 8H18V3H7.414l5 5Zm-.828 2H6v5h10.586l-5-5ZM11 17H7.414L11 20.586V17Z"
    />
  </Icon>
);

export const Frown = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M8.474 14.191c.798-.58 2-1.191 3.526-1.191 1.525 0 2.728.61 3.526 1.191a6.944 6.944 0 0 1 1.17 1.08c.03.035.053.064.07.086l.022.027.007.01.003.003v.002s.002.001-.783.59l.785-.589a1 1 0 0 1-1.597 1.204l-.005-.006a3.601 3.601 0 0 0-.194-.219 4.951 4.951 0 0 0-.655-.57C13.772 15.389 12.974 15 12 15c-.975 0-1.772.39-2.35.809a4.952 4.952 0 0 0-.815.748l-.034.041m0 0-1.6-1.199.001-.002.003-.004.007-.009.021-.027.07-.086a6.943 6.943 0 0 1 1.171-1.08M8 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Gift = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 11a1 1 0 0 1 1 1v9h14v-9a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1Z" />
    <path d="M1 7a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7Zm2 1v3h18V8H3Z" />
    <path d="M12 6a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z" />
    <path
      fillRule="evenodd"
      d="M7.5 3a1.5 1.5 0 0 0 0 3h3.154a8.208 8.208 0 0 0-.468-1.018C9.557 3.838 8.694 3 7.5 3ZM12 7l.98-.197V6.8l-.001-.005-.004-.016a4.226 4.226 0 0 0-.055-.236 10.696 10.696 0 0 0-.982-2.525C11.194 2.662 9.807 1 7.5 1a3.5 3.5 0 1 0 0 7H12a1 1 0 0 0 .98-1.196L12 7Z"
    />
    <path d="M12.061 4.018C12.807 2.662 14.194 1 16.5 1a3.5 3.5 0 1 1 0 7H12a1 1 0 0 1-.98-1.196L12 7l-.98-.197V6.8l.001-.005.004-.016.011-.053c.01-.044.024-.106.044-.183a10.696 10.696 0 0 1 .982-2.525ZM13.346 6H16.5a1.5 1.5 0 0 0 0-3c-1.194 0-2.057.838-2.686 1.982A8.208 8.208 0 0 0 13.346 6Zm-.366 1.198Z" />
  </Icon>
);

export const GitBranch = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M6 2a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM18 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M18 8a1 1 0 0 1 1 1A10 10 0 0 1 9 19a1 1 0 1 1 0-2 8 8 0 0 0 8-8 1 1 0 0 1 1-1Z" />
  </Icon>
);

export const GitCommit = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
    <path d="M.05 12a1 1 0 0 1 1-1H7a1 1 0 1 1 0 2H1.05a1 1 0 0 1-1-1ZM16.01 12a1 1 0 0 1 1-1h5.95a1 1 0 1 1 0 2h-5.95a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const GitMerge = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M18 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M6 8a1 1 0 0 1 1 1 8 8 0 0 0 8 8 1 1 0 1 1 0 2 10 10 0 0 1-8-4v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const GitPullRequest = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M18 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M12 6a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v7a1 1 0 1 1-2 0V8a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1ZM6 8a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Gitlab = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.557 2.482a.606.606 0 0 1-.004-.012l.004.012Zm.55 1.69L7 9.98a1 1 0 0 0 .95.69h8.1a1 1 0 0 0 .952-.691l1.886-5.804L20.779 10l1.224 3.625L12 20.894l-9.965-7.242 3.072-9.48Zm14.164-1.43.003-.004-.003.004ZM4.147 1.26a1.43 1.43 0 0 1 1.948.02c.17.166.297.37.368.597L8.676 8.67h6.647l2.216-6.819.018-.052a1.43 1.43 0 0 1 2.318-.518c.17.165.297.37.368.596l2.436 7.498 1.268 3.755a.927.927 0 0 1 .013.04 1.84 1.84 0 0 1-.74 2.042l-10.632 7.727a1 1 0 0 1-1.176 0l-10.65-7.74-.005-.003A1.84 1.84 0 0 1 .1 13.14l3.66-11.289a1.42 1.42 0 0 1 .388-.591Zm13.78 0 .002-.002.67.742-.674-.738.002-.002Z"
    />
  </Icon>
);

export const Globe = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z" />
    <path
      fillRule="evenodd"
      d="M9 12a14.3 14.3 0 0 0 3 8.45A14.301 14.301 0 0 0 15 12a14.301 14.301 0 0 0-3-8.45A14.3 14.3 0 0 0 9 12Zm3-10-.738-.674A16.3 16.3 0 0 0 7 12.02a16.3 16.3 0 0 0 4.262 10.653 1 1 0 0 0 1.476 0A16.3 16.3 0 0 0 17 11.98a16.3 16.3 0 0 0-4.262-10.653L12 2Z"
    />
  </Icon>
);

export const Grid = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M2 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm2 1v5h5V4H4ZM13 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V3Zm2 1v5h5V4h-5ZM13 14a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7Zm2 1v5h5v-5h-5ZM2 14a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7Zm2 1v5h5v-5H4Z" />
  </Icon>
);

export const HardDrive = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z" />
    <path d="M7.24 3h9.52a3.002 3.002 0 0 1 2.685 1.665l3.45 6.887A1 1 0 0 1 23 12v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6a1 1 0 0 1 .106-.448l3.448-6.887.001-.001A3 3 0 0 1 7.24 3ZM5.45 5.11l.894.448L3 12.236V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5.764l-3.344-6.678-.002-.003A1 1 0 0 0 16.76 5H7.24a1 1 0 0 0-.894.555L5.45 5.11Z" />
  </Icon>
);

export const Hash = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 15a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z" />
    <path d="M10.11 2.006a1 1 0 0 1 .884 1.104l-2 18a1 1 0 1 1-1.988-.22l2-18a1 1 0 0 1 1.104-.884ZM16.11 2.006a1 1 0 0 1 .884 1.104l-2 18a1 1 0 1 1-1.988-.22l2-18a1 1 0 0 1 1.104-.884Z" />
  </Icon>
);

export const Headphones = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 4a8 8 0 0 0-8 8v6a1 1 0 1 1-2 0v-6a10 10 0 0 1 20 0v6a1 1 0 1 1-2 0v-6a8 8 0 0 0-8-8Z" />
    <path d="M2 14a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5Zm2 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4Zm14 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4h-2Zm-2.121-1.121A3 3 0 0 1 18 13h3a1 1 0 0 1 1 1v5a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 .879-2.121Z" />
  </Icon>
);

export const Hexagon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M10.502 1.403a3 3 0 0 1 2.996 0l.002.001 7 4A3 3 0 0 1 22 7.999v8.002a3 3 0 0 1-1.5 2.595l-.004.002-6.996 3.998-.002.001a3 3 0 0 1-2.996 0H10.5l-6.996-3.999-.004-.002A3 3 0 0 1 2 16.001V8a3 3 0 0 1 1.5-2.595l.004-.002 6.998-4ZM12 3.003a1 1 0 0 0-.5.133l-.004.002L4.5 7.136l-.002.001A1 1 0 0 0 4 8.001v7.998a1 1 0 0 0 .498.864l.002.001 7 4a1 1 0 0 0 1 0l.004-.002 6.996-3.998h.002a1.001 1.001 0 0 0 .498-.865V8.001a1 1 0 0 0-.498-.864H19.5l-7-4a1 1 0 0 0-.5-.135Z" />
  </Icon>
);

export const Home1 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M21.707 1.293a1 1 0 0 0-1.414 0l-8.958 8.958a6.5 6.5 0 1 0 1.414 1.414l2.751-2.75 2.293 2.292a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0 0-1.414L20.414 4l1.293-1.293a1 1 0 0 0 0-1.414ZM19 5.414 20.586 7 18.5 9.086 16.914 7.5 19 5.414ZM7.5 11c1.243 0 2.367.503 3.182 1.318A4.5 4.5 0 1 1 7.5 11Z" />
  </Icon>
);

export const Home = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.386 1.21a1 1 0 0 1 1.228 0l9 7A1 1 0 0 1 22 9v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a1 1 0 0 1 .386-.79l9-7ZM4 9.49V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.49l-8-6.223-8 6.222Z" />
    <path d="M8 12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-9h-4v9a1 1 0 1 1-2 0V12Z" />
  </Icon>
);

export const Image = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
    <path d="M8.5 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM6 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM15.293 9.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L16 11.414 5.707 21.707a1 1 0 0 1-1.414-1.414l11-11Z" />
  </Icon>
);

export const Inbox = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M1 12a1 1 0 0 1 1-1h6a1 1 0 0 1 .832.445L10.535 14h2.93l1.703-2.555A1 1 0 0 1 16 11h6a1 1 0 1 1 0 2h-5.465l-1.703 2.555A1 1 0 0 1 14 16h-4a1 1 0 0 1-.832-.445L7.465 13H2a1 1 0 0 1-1-1Z" />
    <path d="M7.24 3h9.52a3.002 3.002 0 0 1 2.685 1.665l3.45 6.887A1 1 0 0 1 23 12v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6a1 1 0 0 1 .106-.448l3.448-6.887.001-.001A3 3 0 0 1 7.24 3ZM5.45 5.11l.894.448L3 12.236V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5.764l-3.344-6.678-.002-.003A1 1 0 0 0 16.76 5H7.24a1 1 0 0 0-.894.555L5.45 5.11Z" />
  </Icon>
);

export const Info = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 11a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM11 8a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Instagram = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7ZM1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7Z" />
    <path d="M12.483 8.99a3 3 0 1 0-.88 5.935 3 3 0 0 0 .88-5.936ZM9.74 7.518a5 5 0 1 1 4.606 8.876A5 5 0 0 1 9.74 7.519Z" />
  </Icon>
);

export const Italic = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M9 4a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1ZM4 20a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
    <path d="M15.351 3.064a1 1 0 0 1 .585 1.287l-6 16a1 1 0 0 1-1.872-.702l6-16a1 1 0 0 1 1.287-.585Z" />
  </Icon>
);

export const Layers = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.553 1.106a1 1 0 0 1 .894 0l10 5a1 1 0 0 1 0 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 0-1.788l10-5ZM4.236 7 12 10.882 19.764 7 12 3.118 4.236 7ZM1.106 16.553a1 1 0 0 1 1.341-.448L12 20.883l9.553-4.777a1 1 0 0 1 .894 1.79l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.342Z" />
    <path d="M1.106 11.553a1 1 0 0 1 1.341-.448L12 15.883l9.553-4.777a1 1 0 0 1 .894 1.79l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.342Z" />
  </Icon>
);

export const Layout = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
    <path d="M2 9a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
    <path d="M9 8a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const LifeBuoy = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
    <path d="M4.223 4.223a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 1 1-1.414 1.414l-4.24-4.24a1 1 0 0 1 0-1.414ZM14.123 14.123a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1-1.414 1.414l-4.24-4.24a1 1 0 0 1 0-1.414ZM19.777 4.223a1 1 0 0 1 0 1.414l-4.24 4.24a1 1 0 1 1-1.414-1.414l4.24-4.24a1 1 0 0 1 1.414 0Z" />
    <path d="M19.067 4.933a1 1 0 0 1 0 1.414l-3.53 3.53a1 1 0 0 1-1.414-1.414l3.53-3.53a1 1 0 0 1 1.414 0ZM9.877 14.123a1 1 0 0 1 0 1.414l-4.24 4.24a1 1 0 0 1-1.414-1.414l4.24-4.24a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const Lightbulb = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M4.667 9.667a7.5 7.5 0 1 1 10.625 6.82v2.347H9.458v-2.171a7.5 7.5 0 0 1-4.792-6.996Zm3.125 8.057a9.167 9.167 0 1 1 9.167-.241V20.5H7.791v-2.776ZM9.167 21.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
    />
  </Icon>
);

export const Link2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M6 8a4 4 0 0 0 0 8h3a1 1 0 1 1 0 2H6A6 6 0 0 1 6 6h3a1 1 0 1 1 0 2H6Zm8-1a1 1 0 0 1 1-1h3a6 6 0 0 1 0 12h-3a1 1 0 0 1-1-1V7Zm2 1v8h2a4 4 0 0 0 0-8h-2Z" />
    <path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Link = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12.775 2.75a6 6 0 0 1 8.484 8.485l-.012.012-3 3a6 6 0 0 1-9.048-.648 1 1 0 1 1 1.602-1.198 4 4 0 0 0 6.032.432l2.994-2.994a4 4 0 0 0-5.657-5.655L12.455 5.89a1 1 0 0 1-1.41-1.418l1.72-1.71.01-.01Z" />
    <path d="M7.9 8.373a6 6 0 0 1 6.9 2.028 1 1 0 1 1-1.6 1.198 4 4 0 0 0-6.033-.432l-2.993 2.994a4 4 0 0 0 5.655 5.655l1.704-1.703a1 1 0 1 1 1.414 1.414l-1.71 1.71-.012.012a6 6 0 0 1-8.484-8.484l.012-.012 3-3a6 6 0 0 1 2.146-1.38Z" />
  </Icon>
);

export const Linkedin = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M16 9a5 5 0 0 0-5 5v6h2v-6a3 3 0 0 1 6 0v6h2v-6a5 5 0 0 0-5-5Zm0-2a7 7 0 0 0-7 7v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a7 7 0 0 0-7-7ZM1 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9Zm2 1v10h2V10H3ZM4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM1 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
    />
  </Icon>
);

export const List = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 12a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 18a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Loader = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM4.223 4.223a1 1 0 0 1 1.414 0l2.83 2.83a1 1 0 0 1-1.414 1.414l-2.83-2.83a1 1 0 0 1 0-1.414ZM15.533 15.533a1 1 0 0 1 1.414 0l2.83 2.83a1 1 0 0 1-1.414 1.414l-2.83-2.83a1 1 0 0 1 0-1.414ZM1 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM17 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM8.467 15.533a1 1 0 0 1 0 1.414l-2.83 2.83a1 1 0 0 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0ZM19.777 4.223a1 1 0 0 1 0 1.414l-2.83 2.83a1 1 0 1 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const Loader2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M10.7 3V1.4a1.3 1.3 0 012.6 0V3c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3zM10.7 22.7V21a1.3 1.3 0 012.6 0v1.8c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3zM17.4 6.6c-.5-.5-.5-1.3 0-1.8l1.3-1.3a1.3 1.3 0 111.8 1.8l-1.3 1.3a1.3 1.3 0 01-1.8 0zM3.5 20.5c-.5-.5-.5-1.3 0-1.8l1.3-1.3a1.3 1.3 0 011.8 1.8l-1.3 1.3a1.3 1.3 0 01-1.8 0zM21 13.3a1.3 1.3 0 110-2.6h1.7c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3H21zM1.3 13.3a1.3 1.3 0 110-2.6H3a1.3 1.3 0 010 2.6H1.3zM18.7 20.5l-1.3-1.3a1.3 1.3 0 011.8-1.8l1.3 1.3a1.3 1.3 0 01-1 2.2l-.8-.4zM4.8 6.6L3.5 5.3a1.3 1.3 0 011.8-1.8l1.3 1.3a1.3 1.3 0 01-1.8 1.8z" />
  </Icon>
);

export const Lock = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5Zm-3 1a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7Z" />
    <path d="M12 3a4 4 0 0 0-4 4v4a1 1 0 1 1-2 0V7a6 6 0 1 1 12 0v4a1 1 0 1 1-2 0V7a4 4 0 0 0-4-4Z" />
  </Icon>
);

export const LogIn = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M14 3a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-4a1 1 0 1 1 0-2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1Z" />
    <path d="M9.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 12 9.293 7.707a1 1 0 0 1 0-1.414Z" />
    <path d="M2 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const LogOut = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 0 1 0 2H5ZM15.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L19.586 12l-4.293-4.293a1 1 0 0 1 0-1.414Z" />
    <path d="M8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Mail = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 5c-.548 0-1 .452-1 1v12c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H4ZM1 6c0-1.652 1.348-3 3-3h16c1.652 0 3 1.348 3 3v12c0 1.652-1.348 3-3 3H4c-1.652 0-3-1.348-3-3V6Z" />
    <path d="M1.18 5.426a1 1 0 0 1 1.394-.245L12 11.779l9.427-6.598a1 1 0 1 1 1.146 1.638l-10 7a1 1 0 0 1-1.146 0l-10-7a1 1 0 0 1-.246-1.393Z" />
  </Icon>
);

export const MapPin = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 2a8 8 0 0 0-8 8c0 3.098 2.016 6.104 4.226 8.437A29.419 29.419 0 0 0 12 21.773a29.412 29.412 0 0 0 3.774-3.335C17.984 16.103 20 13.097 20 10a8 8 0 0 0-8-8Zm0 21-.555.832-.003-.002-.007-.005-.023-.015a28.518 28.518 0 0 1-1.441-1.074 31.428 31.428 0 0 1-3.197-2.923C4.484 17.396 2 13.902 2 10a10 10 0 0 1 20 0c0 3.902-2.484 7.396-4.774 9.813a31.433 31.433 0 0 1-4.254 3.726 18.887 18.887 0 0 1-.384.27l-.023.016-.007.005-.002.001s-.001.001-.556-.831Zm0 0 .555.832a1 1 0 0 1-1.11 0L12 23Z" />
    <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
  </Icon>
);

export const Map = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7.504 1.132a1 1 0 0 1 .943-.026l7.522 3.76 6.535-3.734A1 1 0 0 1 24 2v16a1 1 0 0 1-.504.868l-7 4a1 1 0 0 1-.943.026l-7.522-3.76-6.535 3.734A1 1 0 0 1 0 22V6a1 1 0 0 1 .504-.868l7-4Zm.527 2.002L2 6.58v13.697l5.504-3.145a1 1 0 0 1 .943-.026l7.522 3.76L22 17.42V3.723l-5.504 3.145a1 1 0 0 1-.943.026L8.03 3.134Z" />
    <path d="M8 1a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM16 5a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Maximize2 = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4h-5a1 1 0 0 1-1-1ZM3 14a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
    <path d="M21.707 2.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0ZM10.707 13.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const Maximize = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M2.879 2.879A3 3 0 0 1 5 2h3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V5a3 3 0 0 1 .879-2.121ZM15 3a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1ZM3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1Zm18 0a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Meh = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M7 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM8 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Menu = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const MessageSquare = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 7 16h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2.879 2.879A3 3 0 0 1 5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.414l-3.707 3.707A1 1 0 0 1 2 21V5a3 3 0 0 1 .879-2.121Z" />
  </Icon>
);

// TO FIX
export const MicOff = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z" />
    <path d="M9.628.776A4 4 0 0 1 16 4M8.617 8.076a1 1 0 0 1 1.09.217l5.12 5.12a1 1 0 0 1 0 1.415A4 4 0 0 1 8 12V9a1 1 0 0 1 .617-.924ZM10 11.414V12a2 2 0 0 0 2.516 1.93L10 11.415Z" />
    <path d="M5 9a1 1 0 0 1 1 1v2.007a6 6 0 0 0 10.286 4.243 1 1 0 0 1 1.428 1.4A8 8 0 0 1 4 11.997V10a1 1 0 0 1 1-1Zm14 0a1 1 0 0 1 1 1v2c0 .471-.043.943-.126 1.407a1 1 0 1 1-1.968-.354c.062-.348.094-.7.094-1.054V10a1 1 0 0 1 1-1Z" />
    <path d="M12 18a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" />
    <path d="M7 23a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Mic = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M9.172 1.172A4 4 0 0 1 16 4v8a4 4 0 1 1-8 0V4a4 4 0 0 1 1.172-2.828ZM12 2a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V4a2 2 0 0 0-2-2Z" />
    <path d="M5 9a1 1 0 0 1 1 1v2a6 6 0 1 0 12 0v-2a1 1 0 1 1 2 0v2a8 8 0 0 1-16 0v-2a1 1 0 0 1 1-1Z" />
    <path d="M12 18a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" />
    <path d="M7 23a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Minimize2 = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M3 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-5H4a1 1 0 0 1-1-1ZM14 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M21.707 2.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0ZM10.707 13.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const Minimize = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M8 2a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H3a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1ZM2 16a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0v-3a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1Zm16 1a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2h-3Z" />
  </Icon>
);

export const MinusCircle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const MinusSquare = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
    <path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Minus = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Monitor = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4ZM1 5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5ZM7 21a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
    <path d="M12 16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Moon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12.081 2.509a1 1 0 0 1-.067 1.085 6 6 0 0 0 8.392 8.392 1 1 0 0 1 1.59.896A10 10 0 1 1 11.118 2.004a1 1 0 0 1 .963.505Zm-2.765 1.93a8 8 0 1 0 10.245 10.245A7.999 7.999 0 0 1 9.316 4.439Z" />
  </Icon>
);

export const MoreVertical = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
  </Icon>
);

export const Mountain = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M23.998 19.276v-5.775a.69.69 0 0 0-.003-.069l-.004-.03-.006-.037-.008-.034-.009-.032-.011-.033-.012-.031-.014-.03-.016-.032-.016-.028-.019-.03-.022-.03-.019-.025a.754.754 0 0 0-.046-.051l-7.015-6.938a.708.708 0 0 0-.994 0l-.022.023-.024.022-2.814 2.783L8.23 4.256a.709.709 0 0 0-1.095 0L.205 11.11a.687.687 0 0 0-.046.052l-.018.023-.023.031-.018.03-.017.029-.015.03-.015.031-.01.03c-.005.012-.01.023-.013.034l-.008.031-.008.035-.006.036-.005.032a.672.672 0 0 0-.003.066V19.305c0 .384.315.695.703.695h22.594a.699.699 0 0 0 .703-.695l-.002-.029Zm-7.717-11.73.786.777-.777.769-.787-.778.778-.769ZM7.682 5.68l2.907 2.876-.605.599-1.59-1.572a.701.701 0 0 0-.1-.081.708.708 0 0 0-.947.041l-.388.384-.774-.765L7.682 5.68Zm1.51 12.93H5.777v-3.818L7.485 13l1.707 1.793v3.818Zm13.401 0H10.598v-2.428l.497.492a.704.704 0 0 0 .993.001.69.69 0 0 0 .001-.983c-.021-.021-3.945-4.034-3.969-4.052a.882.882 0 0 0-1.271 0l-3.957 4.052a.69.69 0 0 0 .001.983.704.704 0 0 0 .994-.001l.484-.48v2.416H1.405v-6.721l3.786-3.744 1.268 1.254a.704.704 0 0 0 .947.041.713.713 0 0 0 .073-.062l.371-.367 1.637 1.618a.705.705 0 0 0 .993 0l.02-.02c.006-.007.014-.012.02-.02l1.063-1.05 1.836 1.816a.705.705 0 0 0 .994 0 .69.69 0 0 0 0-.983l-.495-.49.591-.585 1.284 1.27a.705.705 0 0 0 .994 0v-.002l1.274-1.26 4.532 4.484v4.82Z" />
  </Icon>
);

export const MousePointer = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M2.293 2.293a1 1 0 0 1 1.092-.216l16.97 7.07a1 1 0 0 1-.063 1.87l-6.924 2.351-2.351 6.924a1 1 0 0 1-1.87.063l-7.07-16.97a1 1 0 0 1 .216-1.092Zm2.564 2.564 5.118 12.284 1.658-4.883a1 1 0 0 1 .625-.625l4.883-1.658L4.857 4.857Z" />
    <path d="M12.293 12.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Move = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5.707 8.293a1 1 0 0 1 0 1.414L3.414 12l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0ZM11.293 1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 3.414 9.707 5.707a1 1 0 0 1-1.414-1.414l3-3ZM8.293 18.293a1 1 0 0 1 1.414 0L12 20.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414ZM18.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L20.586 12l-2.293-2.293a1 1 0 0 1 0-1.414Z" />
    <path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z" />
    <path d="M12 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Music = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M14.879 14.879A3 3 0 0 1 17 14h4a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-2.121-5.121ZM17 16a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1v-1h-3Zm-14.121.879A3 3 0 0 1 5 16h4a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H5a3 3 0 0 1-2.121-5.121ZM5 18a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1v-1H5Z" />
    <path d="M21.646 2.237A1 1 0 0 1 22 3v12a1 1 0 1 1-2 0V4.18L10 5.847V17a1 1 0 1 1-2 0V5a1 1 0 0 1 .836-.986l12-2a1 1 0 0 1 .81.223Z" />
  </Icon>
);

export const Navigation2 = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 1a1 1 0 0 1 .938.654l7 19a1 1 0 0 1-1.434 1.214L12 18.152l-6.504 3.716a1 1 0 0 1-1.434-1.214l7-19A1 1 0 0 1 12 1ZM6.887 18.77l4.617-2.638a1 1 0 0 1 .992 0l4.617 2.638L12 4.893 6.887 18.77Z" />
  </Icon>
);

export const Navigation = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M22.707 1.293a1 1 0 0 1 .197 1.135l-9 19a1 1 0 0 1-1.874-.185l-1.855-7.418-7.418-1.855a1 1 0 0 1-.185-1.874l19-9a1 1 0 0 1 1.135.197ZM5.953 10.708l5.29 1.322a1 1 0 0 1 .727.728l1.322 5.289 6.606-13.945-13.945 6.606Z" />
  </Icon>
);

export const Octagon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7.153 1.293A1 1 0 0 1 7.86 1h8.28a1 1 0 0 1 .707.293l5.86 5.86A1 1 0 0 1 23 7.86v8.28a1 1 0 0 1-.293.707l-5.86 5.86a1 1 0 0 1-.707.293H7.86a1 1 0 0 1-.707-.293l-5.86-5.86A1 1 0 0 1 1 16.14V7.86a1 1 0 0 1 .293-.707l5.86-5.86ZM8.274 3 3 8.274v7.452L8.274 21h7.452L21 15.726V8.274L15.726 3H8.274Z" />
  </Icon>
);

export const Package = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M11.556 2.345h-.001l-7.998 4h-.002A1 1 0 0 0 3 7.24v9.527a1 1 0 0 0 .55.9s-.001 0 0 0l7.997 3.999a1.001 1.001 0 0 0 .896 0l8-4 .002-.002A1 1 0 0 0 21 16.77V7.242a1 1 0 0 0-.555-.895l-.002-.002-7.998-3.998a1 1 0 0 0-.89 0Zm1.334-.895.445-.896a3 3 0 0 0-2.67 0l-.002.002-7.998 3.998-.001.001A3 3 0 0 0 1 7.24v9.518a3 3 0 0 0 1.65 2.696l.003.002 8 4a3 3 0 0 0 2.684 0l7.998-4h.001A3 3 0 0 0 23 16.771V7.24a3 3 0 0 0-1.664-2.685h-.001l-7.998-4-.447.895Z"
    />
    <path d="M1.426 5.713a1 1 0 0 1 1.341-.447L12 9.882l9.233-4.616a1 1 0 0 1 .894 1.788l-9.68 4.84a1 1 0 0 1-.894 0l-9.68-4.84a1 1 0 0 1-.447-1.341Z" />
    <path d="M12 10a1 1 0 0 1 1 1v11.76a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1ZM6.106 3.053a1 1 0 0 1 1.341-.447l10 5a1 1 0 1 1-.894 1.788l-10-5a1 1 0 0 1-.447-1.341Z" />
  </Icon>
);

export const Paperclip = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M15.78 2.388c-.796 0-1.56.316-2.123.879l-9.19 9.19a5.003 5.003 0 0 0 7.076 7.076l9.19-9.19a1 1 0 0 1 1.414 1.414l-9.19 9.19a7.003 7.003 0 1 1-9.904-9.904l9.19-9.19a5.002 5.002 0 0 1 7.074 7.074l-9.2 9.19a3.001 3.001 0 0 1-4.244-4.244l8.49-8.48a1 1 0 1 1 1.414 1.414l-8.49 8.48a1.003 1.003 0 0 0 .708 1.709 1 1 0 0 0 .708-.293l9.2-9.19a3.003 3.003 0 0 0-2.123-5.125Z" />
  </Icon>
);

export const PauseCircle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M10 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM14 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Pause = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm2 1v14h2V5H7ZM13 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Zm2 1v14h2V5h-2Z" />
  </Icon>
);

export const PDF = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M13 1a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
    <path
      fillRule="evenodd"
      d="M3.879 1.879A3 3 0 0 1 6 1h7a1 1 0 0 1 .707.293l7 7A1 1 0 0 1 21 9v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1H1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h2V4a3 3 0 0 1 .879-2.121ZM5 20v-1h10a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5V4a1 1 0 0 1 1-1h6.586L19 9.414V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm-1.033-3.903V17.5H3v-4h1.567c.475 0 .838.119 1.086.356.25.234.374.551.374.95 0 .25-.057.472-.17.669-.11.192-.273.345-.492.458a1.77 1.77 0 0 1-.798.164h-.6Zm.493-.775c.388 0 .582-.172.582-.515 0-.35-.194-.526-.582-.526h-.493v1.04h.493Zm5.641.17c0 .392-.085.74-.254 1.046a1.746 1.746 0 0 1-.725.707c-.313.17-.682.255-1.108.255H6.503v-4h1.51c.43 0 .802.083 1.115.249.313.166.553.4.719.701.17.302.254.65.254 1.042ZM7.93 16.634c.377 0 .67-.1.877-.3.21-.2.316-.48.316-.842 0-.363-.105-.644-.316-.844-.208-.2-.5-.3-.877-.3H7.47v2.286h.459Zm5.332-2.365V13.5h-2.609v4h.968v-1.618h1.267v-.736H11.62v-.877h1.64Z"
    />
  </Icon>
);

export const PenTool = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M18.293 11.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414l7-7ZM13.414 19 15 20.586 20.586 15 19 13.414 13.414 19Z" />
    <path d="M1.293 1.293a1 1 0 0 1 .942-.265l14.5 3.5a1 1 0 0 1 .746.776l1.5 7.5a1 1 0 0 1-.274.903l-5 5a1 1 0 0 1-.903.274l-7.5-1.5a1 1 0 0 1-.776-.746l-3.5-14.5a1 1 0 0 1 .265-.942Zm2.063 2.063 2.966 12.289 6.35 1.27 4.242-4.244-1.27-6.349L3.357 3.356Z" />
    <path d="M8.879 10.293 1.293 2.707l1.414-1.414 7.586 7.586-1.414 1.414Z" />
    <path d="M11 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
  </Icon>
);

export const Percent = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M19.707 4.293a1 1 0 0 1 0 1.414l-14 14a1 1 0 0 1-1.414-1.414l14-14a1 1 0 0 1 1.414 0ZM6.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM17.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" />
  </Icon>
);

export const Plane = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M22.707 1.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0Z" />
    <path d="M22.707 1.293a1 1 0 0 1 .237 1.037l-7 20a1 1 0 0 1-1.858.076l-3.844-8.648-8.648-3.844a1 1 0 0 1 .076-1.858l20-7a1 1 0 0 1 1.037.237ZM4.711 9.11l6.695 2.975a1 1 0 0 1 .508.508l2.975 6.695L20.37 3.63 4.711 9.11Z" />
  </Icon>
);

export const PlayCircle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M9.528 7.118a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882ZM11 9.868v4.264L14.197 12 11 9.869Z" />
  </Icon>
);

export const Play = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 4 21V3a1 1 0 0 1 .52-.878ZM6 4.832v14.336L17.15 12 6 4.832Z" />
  </Icon>
);

export const PlusCircle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
    <path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const PlusSquare = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
    <path d="M12 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
    <path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Plus = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
    <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Pocket = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 4a1 1 0 0 0-1 1v6a9 9 0 0 0 18 0V5a1 1 0 0 0-1-1H4Zm0-2h16a3 3 0 0 1 3 3v6a11 11 0 1 1-22 0V5a3 3 0 0 1 3-3Z" />
    <path d="M7.293 9.293a1 1 0 0 1 1.414 0L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Power = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M6.337 5.933a1 1 0 0 1 0 1.414 8 8 0 1 0 11.316 0 1 1 0 1 1 1.414-1.414 10 10 0 1 1-14.144 0 1 1 0 0 1 1.414 0Z" />
    <path d="M12 1a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Printer = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3H7v6a1 1 0 0 1-2 0V2Z" />
    <path d="M4 10a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H4Z" />
    <path d="M5 14a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8Zm2 1v6h10v-6H7Z" />
  </Icon>
);

export const Question = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12.258 8.024a2 2 0 0 0-2.224 1.308 1 1 0 0 1-1.887-.664 4 4 0 0 1 7.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8.045 8.045 0 0 1-1.686.848l-.035.013-.011.003-.004.002h-.001s-.002 0-.318-.948l.316.949a1 1 0 0 1-.633-1.897h-.001l.017-.006a5.763 5.763 0 0 0 .364-.147c.247-.11.568-.272.882-.481.69-.46 1.055-.949 1.055-1.418v-.002a2 2 0 0 0-1.662-1.974ZM11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Radio = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM5.637 4.223a1 1 0 0 1 0 1.414 9 9 0 0 0 0 12.726 1 1 0 0 1-1.414 1.414 11 11 0 0 1 0-15.554 1 1 0 0 1 1.414 0Zm12.726 0a1 1 0 0 1 1.414 0 11 11 0 0 1 0 15.554 1 1 0 0 1-1.414-1.414 9 9 0 0 0 0-12.726 1 1 0 0 1 0-1.414Zm-9.895 2.82a1 1 0 0 1-.001 1.415 5 5 0 0 0 0 7.075 1 1 0 1 1-1.414 1.415 7.001 7.001 0 0 1 0-9.905 1 1 0 0 1 1.415 0Zm7.065.01a1 1 0 0 1 1.414 0 7.001 7.001 0 0 1 0 9.905 1 1 0 0 1-1.414-1.415 5 5 0 0 0 0-7.075 1 1 0 0 1 0-1.415Z" />
  </Icon>
);

export const RefreshCCW = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M1 3a1 1 0 0 1 1 1v5h5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM16 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-5h-5a1 1 0 0 1-1-1Z" />
    <path d="M9.227 2.396a10 10 0 0 1 12.206 6.27 1 1 0 1 1-1.886.668A8 8 0 0 0 6.325 6.369l-4.64 4.36A1 1 0 1 1 .315 9.27l4.63-4.35a10 10 0 0 1 4.282-2.525Zm14.502 10.92a1 1 0 0 1-.044 1.413l-4.63 4.35a10 10 0 0 1-16.488-3.745 1 1 0 1 1 1.886-.668 8 8 0 0 0 13.2 2.987l.013-.013.01-.009 4.64-4.36a1 1 0 0 1 1.413.044Z" />
  </Icon>
);

export const RefreshCW = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M23 3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1ZM0 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H2v5a1 1 0 1 1-2 0v-6Z" />
    <path d="M14.217 4.317a8 8 0 0 0-9.764 5.017 1 1 0 0 1-1.886-.668 10 10 0 0 1 16.489-3.744l4.629 4.35a1 1 0 0 1-1.37 1.457l-4.64-4.36a8 8 0 0 0-3.458-2.051ZM.271 13.315a1 1 0 0 1 1.414-.044l4.64 4.36.022.022a8 8 0 0 0 13.2-2.987 1 1 0 1 1 1.886.668 10 10 0 0 1-16.489 3.744l-4.629-4.35a1 1 0 0 1-.044-1.413Z" />
  </Icon>
);

export const Refresh = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M16.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L19.586 5l-3.293-3.293a1 1 0 0 1 0-1.414Z" />
    <path d="M7 6a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0V9a5 5 0 0 1 5-5h14a1 1 0 1 1 0 2H7ZM7.707 14.293a1 1 0 0 1 0 1.414L4.414 19l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z" />
    <path d="M21 12a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5H3a1 1 0 1 1 0-2h14a3 3 0 0 0 3-3v-2a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Rewind = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.44 4.102A1 1 0 0 1 12 5v14a1 1 0 0 1-1.614.79l-9-7a1 1 0 0 1 0-1.58l9-7a1 1 0 0 1 1.053-.108ZM3.628 12 10 16.955v-9.91L3.629 12Z" />
    <path d="M22.44 4.102A1 1 0 0 1 23 5v14a1 1 0 0 1-1.614.79l-9-7a1 1 0 0 1 0-1.58l9-7a1 1 0 0 1 1.053-.108ZM14.628 12 21 16.955v-9.91L14.629 12Z" />
  </Icon>
);

export const RotateCCW = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M1 3a1 1 0 0 1 1 1v5h5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M10.605 2.107a10 10 0 1 1-8.038 13.225 1 1 0 0 1 1.886-.664 8 8 0 1 0 1.872-8.3l-4.64 4.36a1 1 0 1 1-1.37-1.457l4.63-4.35a10 10 0 0 1 5.66-2.814Z" />
  </Icon>
);

export const RotateCW = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M23 3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1Z" />
    <path d="M13.127 4.081a8 8 0 1 0 6.42 10.586 1 1 0 0 1 1.886.666 10 10 0 1 1-2.367-10.41l4.62 4.349a1 1 0 1 1-1.372 1.456l-4.63-4.36a8 8 0 0 0-4.557-2.287Z" />
  </Icon>
);

export const RSS = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 11a1 1 0 0 1 1-1 10 10 0 0 1 10 10 1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1Z" />
    <path d="M3 4a1 1 0 0 1 1-1 17 17 0 0 1 17 17 1 1 0 1 1-2 0A15 15 0 0 0 4 5a1 1 0 0 1-1-1ZM3 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
  </Icon>
);

export const Save = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.414L15.586 4H5ZM2.879 2.879A3 3 0 0 1 5 2h11a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 22 8v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121Z" />
    <path d="M6 13a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-7H8v7a1 1 0 1 1-2 0v-8ZM7 2a1 1 0 0 1 1 1v4h7a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Scissors = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M20.707 3.293a1 1 0 0 1 0 1.414l-11.88 11.88a1 1 0 0 1-1.414-1.414l11.88-11.88a1 1 0 0 1 1.414 0ZM13.762 13.774a1 1 0 0 1 1.414-.002l5.53 5.52a1 1 0 1 1-1.412 1.416l-5.53-5.52a1 1 0 0 1-.002-1.415Z" />
    <path d="M7.413 7.413a1 1 0 0 1 1.414 0l3.88 3.88a1 1 0 0 1-1.414 1.414l-3.88-3.88a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Search = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
    <path d="M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Server = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4ZM1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4ZM4 15a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4Zm-3 1a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-4Z" />
  </Icon>
);

export const Settings = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M12 2a1 1 0 0 0-1 1v.174a2.65 2.65 0 0 1-1.606 2.425 1 1 0 0 1-.264.073 2.65 2.65 0 0 1-2.73-.607l-.007-.008-.06-.06a1.003 1.003 0 0 0-1.415 0h-.001a1 1 0 0 0 0 1.415l.068.069a2.65 2.65 0 0 1 .542 2.894 2.65 2.65 0 0 1-2.414 1.705H3a1 1 0 0 0 0 2h.174a2.65 2.65 0 0 1 2.423 1.601 2.65 2.65 0 0 1-.532 2.918l-.008.008-.06.06a1.003 1.003 0 0 0-.217 1.09 1 1 0 0 0 .217.325v.001a.999.999 0 0 0 1.415 0l.069-.068a2.65 2.65 0 0 1 2.894-.543 2.65 2.65 0 0 1 1.705 2.415V21a1 1 0 0 0 2 0V20.826a2.65 2.65 0 0 1 1.601-2.423 2.65 2.65 0 0 1 2.918.532l.008.008.06.06a1.002 1.002 0 0 0 1.415 0h.001a1 1 0 0 0 0-1.416l-.068-.068a2.65 2.65 0 0 1-.532-2.918A2.65 2.65 0 0 1 20.906 13H21a1 1 0 0 0 0-2H20.826a2.65 2.65 0 0 1-2.425-1.606.999.999 0 0 1-.073-.264 2.65 2.65 0 0 1 .607-2.73l.008-.007.06-.06a1.002 1.002 0 0 0 0-1.415v-.001a1 1 0 0 0-1.416 0l-.068.068a2.65 2.65 0 0 1-2.918.532A2.65 2.65 0 0 1 13 3.094V3a1 1 0 0 0-1-1Zm7.4 13 .915.404a.65.65 0 0 0 .127.714l.055.055a3.002 3.002 0 0 1 0 4.245l-.707-.708.707.707a3 3 0 0 1-4.244 0l-.055-.055a.65.65 0 0 0-.714-.127l-.01.004a.649.649 0 0 0-.394.593V21a3 3 0 0 1-6 0v-.076a.65.65 0 0 0-.425-.585.955.955 0 0 1-.059-.024.65.65 0 0 0-.714.127l-.054.055a3.002 3.002 0 1 1-4.245-4.244l.055-.055a.65.65 0 0 0 .127-.714l-.004-.01a.649.649 0 0 0-.594-.394H3a3 3 0 0 1 0-6h.076a.65.65 0 0 0 .585-.425l.024-.059a.65.65 0 0 0-.127-.714l-.055-.054a3 3 0 1 1 4.244-4.245l.055.055a.65.65 0 0 0 .714.127 1 1 0 0 1 .2-.064A.65.65 0 0 0 9 3.167V3a3 3 0 1 1 6 0v.087a.65.65 0 0 0 .394.594l.01.004a.65.65 0 0 0 .714-.127l.055-.055a3 3 0 0 1 4.895 3.27c-.151.365-.372.696-.65.974-.001 0 0 0 0 0l-.056.055a.65.65 0 0 0-.127.714c.028.064.05.13.064.2a.65.65 0 0 0 .534.284H21a3 3 0 1 1 0 6h-.087a.65.65 0 0 0-.594.394L19.4 15Z" />
  </Icon>
);

export const Share2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M18 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM18 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <path d="M7.726 13.007a1 1 0 0 1 1.367-.361l6.83 3.98a1 1 0 1 1-1.007 1.728l-6.83-3.98a1 1 0 0 1-.36-1.367ZM16.274 6.006a1 1 0 0 1-.36 1.368l-6.82 3.98a1 1 0 1 1-1.008-1.728l6.82-3.98a1 1 0 0 1 1.368.36Z" />
  </Icon>
);

export const Share = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 11a1 1 0 0 1 1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 1 1 2 0v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a1 1 0 0 1 1-1ZM11.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 3.414 8.707 6.707a1 1 0 0 1-1.414-1.414l4-4Z" />
    <path d="M12 1a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const ShieldOff = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M11.65 1.063a1 1 0 0 1 .701 0l8 3a1 1 0 0 1 .65.937v7.007a7.9 7.9 0 0 1-.356 2.29 1 1 0 0 1-1.91-.593A5.9 5.9 0 0 0 19 11.997V5.693l-7-2.625-2.81 1.049a1 1 0 0 1-.7-1.874l3.16-1.18ZM5.668 4.383a1 1 0 0 1-.591 1.285L5 5.696V12c0 2.554 1.718 4.8 3.659 6.497a20.692 20.692 0 0 0 3.34 2.365 19.29 19.29 0 0 0 4.877-3.91 1 1 0 1 1 1.488 1.337 21.29 21.29 0 0 1-5.897 4.595 1 1 0 0 1-.914.01L12 22l-.447.894-.004-.001-.006-.004-.022-.01a8.28 8.28 0 0 1-.35-.188 22.697 22.697 0 0 1-3.83-2.689C5.281 18.2 3 15.447 3 12V5a1 1 0 0 1 .653-.938l.73-.27a1 1 0 0 1 1.285.591Z" />
    <path d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Shield = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.649 1.064a1 1 0 0 1 .702 0l8 3A1 1 0 0 1 21 5v7c0 3.446-2.282 6.2-4.341 8.003a22.684 22.684 0 0 1-4.104 2.836 8.28 8.28 0 0 1-.076.04l-.022.01-.006.004h-.002s-.002.001-.449-.893l-.448.894-.003-.001-.006-.004-.022-.01a8.28 8.28 0 0 1-.35-.188 22.686 22.686 0 0 1-3.83-2.689C5.281 18.2 3 15.447 3 12V5a1 1 0 0 1 .649-.936l8-3ZM12 22l-.448.894c.282.14.614.141.895 0L12 22Zm0-1.137a20.69 20.69 0 0 0 3.341-2.365C17.282 16.8 19 14.553 19 12V5.693l-7-2.625-7 2.625V12c0 2.554 1.718 4.8 3.659 6.497A20.692 20.692 0 0 0 12 20.863Z" />
  </Icon>
);

export const ShoppingBag = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M5.2 1.4A1 1 0 0 1 6 1h12a1 1 0 0 1 .8.4l3 4a1 1 0 0 1 .2.6v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a1 1 0 0 1 .2-.6l3-4ZM6.5 3 4 6.333V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.333L17.5 3h-11Z" />
    <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM8 9a1 1 0 0 1 1 1 3 3 0 0 0 6 0 1 1 0 1 1 2 0 5 5 0 1 1-10 0 1 1 0 0 1 1-1Z" />
  </Icon>
);

export const ShoppingCart = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M7 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM18 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM0 1a1 1 0 0 1 1-1h4a1 1 0 0 1 .98.804L6.82 5H23a1 1 0 0 1 .982 1.187l-1.601 8.398A3 3 0 0 1 19.39 17H9.69a3 3 0 0 1-2.99-2.414L5.03 6.239a.994.994 0 0 1-.017-.084L4.18 2H1a1 1 0 0 1-1-1Zm7.22 6 1.44 7.195a1 1 0 0 0 1 .805h9.76a1 1 0 0 0 .998-.802L21.792 7H7.221Z" />
  </Icon>
);

export const Shuffle = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M15 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4h-4a1 1 0 0 1-1-1Z" />
    <path d="M21.707 2.293a1 1 0 0 1 0 1.414l-17 17a1 1 0 0 1-1.414-1.414l17-17a1 1 0 0 1 1.414 0ZM21 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1Z" />
    <path d="M14.293 14.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414ZM3.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Sidebar = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
    <path d="M9 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const SkipBack = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M19.433 3.099A1 1 0 0 1 20 4v16a1 1 0 0 1-1.625.78l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.058-.121ZM10.601 12 18 17.92V6.08L10.6 12ZM5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const SkipForward = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M4.567 3.099a1 1 0 0 1 1.058.12l10 8a1 1 0 0 1 0 1.562l-10 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .567-.901ZM6 6.08v11.838L13.4 12 6 6.08ZM19 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Slack = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M14.5 3c-.278 0-.5.222-.5.5v5c0 .278.222.5.5.5s.5-.222.5-.5v-5c0-.278-.222-.5-.5-.5Zm-2.5.5C12 2.118 13.118 1 14.5 1S17 2.118 17 3.5v5c0 1.382-1.118 2.5-2.5 2.5A2.498 2.498 0 0 1 12 8.5v-5ZM20.5 8c-.278 0-.5.222-.5.5V9h.5c.278 0 .5-.222.5-.5s-.222-.5-.5-.5Zm-2.5.5C18 7.118 19.118 6 20.5 6S23 7.118 23 8.5 21.882 11 20.5 11H19a1 1 0 0 1-1-1V8.5ZM9.5 15c-.278 0-.5.222-.5.5v5c0 .278.222.5.5.5s.5-.222.5-.5v-5c0-.278-.222-.5-.5-.5Zm-2.5.5C7 14.118 8.118 13 9.5 13s2.5 1.118 2.5 2.5v5c0 1.382-1.118 2.5-2.5 2.5A2.498 2.498 0 0 1 7 20.5v-5ZM3.5 15c-.278 0-.5.222-.5.5s.222.5.5.5.5-.222.5-.5V15h-.5Zm-2.5.5C1 14.118 2.118 13 3.5 13H5a1 1 0 0 1 1 1v1.5C6 16.882 4.882 18 3.5 18A2.498 2.498 0 0 1 1 15.5ZM15.5 14c-.278 0-.5.222-.5.5s.222.5.5.5h5c.278 0 .5-.222.5-.5s-.222-.5-.5-.5h-5Zm-2.5.5c0-1.382 1.118-2.5 2.5-2.5h5c1.382 0 2.5 1.118 2.5 2.5S21.882 17 20.5 17h-5a2.498 2.498 0 0 1-2.5-2.5ZM13 19a1 1 0 0 1 1-1h1.5c1.382 0 2.5 1.118 2.5 2.5S16.882 23 15.5 23a2.498 2.498 0 0 1-2.5-2.5V19Zm2 1v.5c0 .278.222.5.5.5s.5-.222.5-.5-.222-.5-.5-.5H15ZM1 9.5C1 8.118 2.118 7 3.5 7h5C9.882 7 11 8.118 11 9.5S9.882 12 8.5 12h-5A2.498 2.498 0 0 1 1 9.5ZM3.5 9c-.278 0-.5.222-.5.5s.222.5.5.5h5c.278 0 .5-.222.5-.5S8.778 9 8.5 9h-5ZM6 3.5C6 2.118 7.118 1 8.5 1S11 2.118 11 3.5V5a1 1 0 0 1-1 1H8.5A2.498 2.498 0 0 1 6 3.5ZM8.5 3c-.278 0-.5.222-.5.5s.222.5.5.5H9v-.5c0-.278-.222-.5-.5-.5Z" />
  </Icon>
);

export const Slash = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M4.223 4.223a1 1 0 0 1 1.414 0l14.14 14.14a1 1 0 1 1-1.414 1.414L4.223 5.637a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Sliders = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 13a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1ZM4 2a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM12 11a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1ZM12 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM20 15a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1ZM20 2a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
    <path d="M0 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM16 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Smartphone = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7ZM4 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Z" />
    <path d="M11 18a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Smile = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M8.797 13.396A1 1 0 0 0 7.2 14.6L8 14l-.8.6.001.001.001.002.003.004.007.009.021.027.07.086a6.942 6.942 0 0 0 1.171 1.08c.798.58 2 1.191 3.526 1.191 1.526 0 2.728-.61 3.526-1.191a6.944 6.944 0 0 0 1.17-1.08c.03-.035.053-.064.07-.086l.022-.027.007-.01.003-.003.001-.002S16.8 14.6 16 14l.8.6a1 1 0 0 0-1.597-1.204l-.004.006a3.601 3.601 0 0 1-.194.219 4.951 4.951 0 0 1-.656.57c-.577.42-1.374.809-2.349.809-.974 0-1.772-.39-2.35-.809a4.952 4.952 0 0 1-.815-.748 1.932 1.932 0 0 1-.033-.041l-.005-.006ZM8 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Speaker = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6ZM3 4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4Z" />
    <path d="M12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
  </Icon>
);

export const Square = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
  </Icon>
);

export const Star = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 1a1 1 0 0 1 .897.557l2.857 5.79 6.39.934a1 1 0 0 1 .554 1.705l-4.623 4.503 1.09 6.362a1 1 0 0 1-1.45 1.054L12 18.9l-5.715 3.005a1 1 0 0 1-1.45-1.054l1.09-6.362-4.623-4.503a1 1 0 0 1 .553-1.705l6.39-.935 2.858-5.789A1 1 0 0 1 12 1Zm0 3.26L9.807 8.702a1 1 0 0 1-.752.546l-4.907.718 3.55 3.457a1 1 0 0 1 .288.885l-.838 4.883 4.387-2.307a1 1 0 0 1 .93 0l4.387 2.307-.838-4.883a1 1 0 0 1 .288-.885l3.55-3.457-4.907-.718a1 1 0 0 1-.752-.546L12 4.259Z" />
  </Icon>
);

export const Stat = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M8.916 2.43A1 1 0 0 1 8.4 3.747 9 9 0 1 0 20.289 15.5a1 1 0 1 1 1.842.778A11 11 0 1 1 7.6 1.913a1 1 0 0 1 1.316.517Z" />
    <path d="M11.293 1.293A1 1 0 0 1 12 1a11 11 0 0 1 11 11 1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V2a1 1 0 0 1 .293-.707ZM13 3.056V11h7.944A9 9 0 0 0 13 3.056Z" />
  </Icon>
);

export const StopCircle = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Zm2 1v4h4v-4h-4Z" />
  </Icon>
);

export const Sun = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0ZM12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM3.513 3.513a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 0 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414ZM17.653 17.653a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 0 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414ZM0 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM20 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM6.347 17.653a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 0 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0ZM20.487 3.513a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 1 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const Sunrise = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7.757 13.757A6 6 0 0 1 18 18a1 1 0 1 1-2 0 4 4 0 1 0-8 0 1 1 0 1 1-2 0 6 6 0 0 1 1.757-4.243ZM12 1a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM3.513 9.513a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 1 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414ZM0 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM20 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM20.487 9.513a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 0 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0ZM0 22a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" />
    <path d="M11.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 3.414 8.707 6.707a1 1 0 0 1-1.414-1.414l4-4Z" />
  </Icon>
);

export const Sunset = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7.757 13.757A6 6 0 0 1 18 18a1 1 0 1 1-2 0 4 4 0 1 0-8 0 1 1 0 1 1-2 0 6 6 0 0 1 1.757-4.243ZM12 1a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM3.513 9.513a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 1 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414ZM0 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM20 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM20.487 9.513a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 0 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0ZM0 22a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" />
    <path d="M7.293 4.293a1 1 0 0 1 1.414 0L12 7.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Tablet = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M18 21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12Zm3-1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16Zm-7.99-2a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1Z" />
  </Icon>
);

export const Tag = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M1 2a1 1 0 0 1 1-1h10a1 1 0 0 1 .707.293L21.3 9.885a3 3 0 0 1 0 4.23l-.002.002-7.17 7.17a3.002 3.002 0 0 1-4.244 0l-8.59-8.58A1 1 0 0 1 1 12V2Zm2 1v8.585l8.297 8.287v.001a1 1 0 0 0 1.415 0l7.169-7.168a1 1 0 0 0 0-1.41L11.586 3H3Zm3 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Target = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z" />
    <path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
  </Icon>
);

export const Terminal = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L8.586 11 3.293 5.707a1 1 0 0 1 0-1.414ZM11 19a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Thermometer = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M9.025 1.025A3.5 3.5 0 0 1 15 3.5v10.759a5.5 5.5 0 1 1-7 0V3.5a3.5 3.5 0 0 1 1.025-2.475ZM11.5 2A1.5 1.5 0 0 0 10 3.5v11.26a1 1 0 0 1-.444.832 3.5 3.5 0 1 0 3.888 0A1 1 0 0 1 13 14.76V3.5A1.5 1.5 0 0 0 11.5 2Z"
    />
  </Icon>
);

export const ThumbsDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M20.564 3.316A1.31 1.31 0 0 0 19.688 3H18v9h1.688A1.31 1.31 0 0 0 21 10.923V4.077a1.31 1.31 0 0 0-.436-.761ZM16 12.788l-3.608 8.117A2 2 0 0 1 11 19v-4a1 1 0 0 0-1-1H4.329a1.001 1.001 0 0 1-1-1.15l1.38-9a1 1 0 0 1 1-.85H16v9.788ZM19.662 1a3.31 3.31 0 0 1 3.329 2.866c.006.044.009.09.009.134v7c0 .045-.003.09-.009.134A3.31 3.31 0 0 1 19.662 14H17.65l-3.736 8.406A1 1 0 0 1 13 23a4 4 0 0 1-4-4v-3H4.345a3 3 0 0 1-2.994-3.45l1.38-9A3.002 3.002 0 0 1 5.725 1h13.937Z"
    />
  </Icon>
);

export const ThumbsUp = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M10.086 1.594A1 1 0 0 1 11 1a4 4 0 0 1 4 4v3h4.655a3 3 0 0 1 2.994 3.45l-1.38 9A3.002 3.002 0 0 1 18.275 23H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2.35l3.736-8.406ZM8 11.212l3.608-8.117A2 2 0 0 1 13 5v4a1 1 0 0 0 1 1h5.671a1 1 0 0 1 1 1.15l-1.38 9a1 1 0 0 1-1 .85H8v-9.788ZM6 21v-9H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2Z"
    />
  </Icon>
);

export const ToggleLeft = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M8 6a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12H8Zm-8 6a8 8 0 0 1 8-8h8a8 8 0 1 1 0 16H8a8 8 0 0 1-8-8Z" />
    <path d="M8 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
  </Icon>
);

export const ToggleRight = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M8 6a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12H8Zm-8 6a8 8 0 0 1 8-8h8a8 8 0 1 1 0 16H8a8 8 0 0 1-8-8Z" />
    <path d="M16 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
  </Icon>
);

export const Tool = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M16.558 3.028a5 5 0 0 0-5.117 7.03 1 1 0 0 1-.204 1.12l-6.91 6.91a1.121 1.121 0 0 0 1.586 1.585l6.91-6.91a1 1 0 0 1 1.12-.204 5 5 0 0 0 7.03-5.117L18.4 10.014a2 2 0 0 1-2.8 0l-.007-.007L13.986 8.4a2 2 0 0 1 0-2.8l.007-.007 2.565-2.565ZM14.742 1.11a7 7 0 0 1 4.14.509 1 1 0 0 1 .295 1.618L15.414 7 17 8.586l3.763-3.763a1 1 0 0 1 1.618.295 7 7 0 0 1-8.606 9.521l-6.448 6.448a3.122 3.122 0 0 1-4.414-4.414l6.448-6.448a7 7 0 0 1 5.38-9.115Z" />
  </Icon>
);

export const Trash = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1h-4Zm7 2V4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H5a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a1 1 0 0 0-1-1h-2ZM6 7v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7H6Z"
    />
    <path d="M10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM14 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Trello = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
    <path d="M6 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Zm2 1v7h1V8H8ZM13 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V7Zm2 1v3h1V8h-1Z" />
  </Icon>
);

export const TrendingDown = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M.293 5.293a1 1 0 0 1 1.414 0L8.5 12.086l4.293-4.293a1 1 0 0 1 1.414 0l9.5 9.5a1 1 0 0 1-1.414 1.414L13.5 9.914l-4.293 4.293a1 1 0 0 1-1.414 0l-7.5-7.5a1 1 0 0 1 0-1.414Z" />
    <path d="M23 11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const TrendingUp = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M23.707 5.293a1 1 0 0 1 0 1.414l-9.5 9.5a1 1 0 0 1-1.414 0L8.5 11.914l-6.793 6.793a1 1 0 0 1-1.414-1.414l7.5-7.5a1 1 0 0 1 1.414 0l4.293 4.293 8.793-8.793a1 1 0 0 1 1.414 0Z" />
    <path d="M16 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7h-5a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Triangle = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M10.528 2.283a3 3 0 0 1 4.037 1.058l.003.005 8.47 14.14.008.014a2.999 2.999 0 0 1-2.565 4.5H3.519a3.001 3.001 0 0 1-2.565-4.5l.008-.014 8.47-14.14.858.514-.855-.519a3 3 0 0 1 1.093-1.058Zm.618 2.094L2.683 18.506A1 1 0 0 0 3.536 20h16.928a1 1 0 0 0 .853-1.494L12.855 4.379l-.001-.002a1 1 0 0 0-1.708 0Z" />
  </Icon>
);

export const Truck = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M0 3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3Zm2 1v11h13V4H2Z" />
    <path d="M15 8a1 1 0 0 1 1-1h4a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 24 11v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V8Zm2 1v6h5v-3.586L19.586 9H17ZM5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM2 18.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" />
    <path d="M18.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM15 18.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" />
  </Icon>
);

export const TV = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4 8a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4ZM1 9a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9Z" />
    <path d="M6.293 1.293a1 1 0 0 1 1.414 0L12 5.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Twitter = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.526 2.35a5.48 5.48 0 0 1 5.607 1.035 9.9 9.9 0 0 0 2.29-1.202 1 1 0 0 1 1.549 1.054 8.72 8.72 0 0 1-1.995 3.774c.015.161.023.323.023.486V7.5c0 6.1-2.937 10.575-7.155 12.82-4.194 2.232-9.554 2.208-14.33-.446a1 1 0 0 1 .525-1.873 10.64 10.64 0 0 0 4.875-.968c-1.503-.928-2.585-2.029-3.338-3.217-1.003-1.584-1.382-3.263-1.45-4.77-.07-1.504.17-2.857.42-3.828a13.083 13.083 0 0 1 .484-1.491c.015-.04.028-.07.038-.092l.011-.027.004-.009.001-.003v-.001c.001 0 .001-.001.915.405l-.914-.406a1 1 0 0 1 1.732-.169A9.66 9.66 0 0 0 11 7.506a5.48 5.48 0 0 1 3.526-5.156ZM3.405 6.044c-.184.801-.33 1.817-.28 2.91.056 1.243.364 2.564 1.142 3.792.773 1.222 2.05 2.411 4.14 3.34a1 1 0 0 1 .155 1.741 12.637 12.637 0 0 1-3.602 1.689c3.17.807 6.347.422 8.945-.961C17.437 16.675 20 12.9 20 7.502c0-.216-.021-.432-.062-.644a1 1 0 0 1 .28-.9c.223-.22.429-.454.618-.7-.227.083-.456.16-.688.23a1 1 0 0 1-1.043-.302A3.48 3.48 0 0 0 13 7.516V8.53a1 1 0 0 1-.974 1 11.66 11.66 0 0 1-8.621-3.486Z"
    />
  </Icon>
);

export const Type = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5H5v2a1 1 0 0 1-2 0V4ZM8 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
    <path d="M12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const Umbrella = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M3.894 4.134a12.05 12.05 0 0 1 20.101 7.771A1 1 0 0 1 23 13H13v6a2 2 0 0 0 4 0 1 1 0 1 1 2 0 4 4 0 1 1-8 0v-6H1a1 1 0 0 1-.995-1.095 12.05 12.05 0 0 1 3.89-7.771ZM21.84 11A10.05 10.05 0 0 0 2.16 11H21.84Z"
    />
  </Icon>
);

export const Underline = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M6 2a1 1 0 0 1 1 1v7a5 5 0 1 0 10 0V3a1 1 0 1 1 2 0v7a7 7 0 1 1-14 0V3a1 1 0 0 1 1-1ZM3 21a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const UploadCloud = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M11.293 11.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4Z" />
    <path d="M12 11a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Z" />
    <path d="M8.663 2.009A9 9 0 0 1 17.48 8H18a6.002 6.002 0 0 1 5.497 8.398 6 6 0 0 1-2.628 2.87 1 1 0 1 1-.958-1.756A4 4 0 0 0 18 10H16.74a1 1 0 0 1-.968-.75 7 7 0 1 0-12.023 6.388 1 1 0 1 1-1.498 1.324A9 9 0 0 1 8.663 2.01Z" />
    <path d="M11.293 11.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4Z" />
  </Icon>
);

export const Upload = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1ZM11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 4.414 7.707 8.707a1 1 0 0 1-1.414-1.414l5-5Z" />
    <path d="M12 2a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
  </Icon>
);

export const UserCheck = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M1.464 15.464A5 5 0 0 1 5 14h7a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM8.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM23.707 8.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L19 11.586l3.293-3.293a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const UserMinus = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M1.464 15.464A5 5 0 0 1 5 14h7a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM8.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM16 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const UserPlus = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M1.464 15.464A5 5 0 0 1 5 14h7a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM8.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM20 7a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
    <path d="M16 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const UserX = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M1.464 15.464A5 5 0 0 1 5 14h7a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM8.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM17.293 7.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414Z" />
    <path d="M23.707 7.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const User = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M4.464 15.434A5 5 0 0 1 8 13.969h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.535ZM12 3.97a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
  </Icon>
);

export const Users = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M1.464 15.464A5 5 0 0 1 5 14h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM9 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4 7a5 5 0 1 1 10 0A5 5 0 0 1 4 7ZM19.032 14.88a1 1 0 0 1 1.218-.718A5 5 0 0 1 24 18.999V21a1 1 0 1 1-2 0v-2a3 3 0 0 0-2.25-2.902 1 1 0 0 1-.718-1.218ZM15.031 2.882a1 1 0 0 1 1.217-.72 5 5 0 0 1 0 9.687 1 1 0 0 1-.496-1.938 3 3 0 0 0 0-5.812 1 1 0 0 1-.72-1.217Z" />
  </Icon>
);

export const VideoOff = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M3 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-.586L4.586 6H3ZM.879 4.879A3 3 0 0 1 3 4h2a1 1 0 0 1 .707.293l11 11A1 1 0 0 1 17 16v1a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 .879-2.121ZM14 6h-3.34a1 1 0 1 1 0-2H14a3 3 0 0 1 3 3v2.926l.105.104 5.309-3.84A1 1 0 0 1 24 7v10a1 1 0 1 1-2 0V8.958l-4.414 3.192a1 1 0 0 1-1.293-.103l-1-1A1 1 0 0 1 15 10.34V7a1 1 0 0 0-1-1Z" />
    <path d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Video = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M23.458 6.11A1 1 0 0 1 24 7v10a1 1 0 0 1-1.581.814l-7-5a1 1 0 0 1 0-1.628l7-5a1 1 0 0 1 1.039-.075ZM17.72 12 22 15.057V8.943L17.72 12Z" />
    <path d="M3 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3ZM0 7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7Z" />
  </Icon>
);

export const Voicemail = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <Icon {...props}>
    <path d="M5.5 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM0 11.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM18.5 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM13 11.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" />
    <path d="M4.5 16a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Volume1 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121ZM10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92V7.08ZM14.833 7.753a1 1 0 0 1 1.414 0 6 6 0 0 1 0 8.484 1 1 0 0 1-1.414-1.414 4 4 0 0 0 0-5.656 1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Volume2 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121ZM10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92V7.08ZM18.363 4.223a1 1 0 0 1 1.414 0 11 11 0 0 1 0 15.554 1 1 0 0 1-1.414-1.414 9 9 0 0 0 0-12.726 1 1 0 0 1 0-1.414Zm-3.53 3.53a1 1 0 0 1 1.414 0 6 6 0 0 1 0 8.484 1 1 0 0 1-1.414-1.414 4 4 0 0 0 0-5.656 1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const VolumeX = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121ZM10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92V7.08ZM23.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z" />
    <path d="M16.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Volume = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121ZM10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92V7.08Z" />
  </Icon>
);

// TO FIX
export const Watch = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
    <path d="M12 8a1 1 0 0 1 1 1v2.586l1.207 1.207a1 1 0 0 1-1.414 1.414l-1.5-1.5A1 1 0 0 1 11 12V9a1 1 0 0 1 1-1ZM14.861 2.26a1 1 0 0 0-.677-.26H9.83a1 1 0 0 0-.994.91l-.35 3.831a1 1 0 0 1-1.992-.182l.35-3.829A3.001 3.001 0 0 1 9.83 0h4.35m.682 2.26a1 1 0 0 1 .323.65Zm2.315.47v-.001Zm0 0 .35 3.829a1 1 0 1 1-1.992.182l-.35-3.831M7.39 16.354a1 1 0 0 1 1.087.905l.35 3.831a1 1 0 0 0 1 .91H14.164a1 1 0 0 0 1-.91l.35-3.831a1 1 0 0 1 1.992.182l-.35 3.829v.001m-9.767-4.917a1 1 0 0 0-.905 1.087Zm-.905 1.087.35 3.829Zm.35 3.829ZM9.832 24H9.83v-1l.004 1h-.002Zm0 0h4.326Z" />
  </Icon>
);

export const WifiOff = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414ZM15.821 10.621a1 1 0 0 1 1.338-.46c.893.437 1.73.983 2.488 1.627a1 1 0 0 1-1.294 1.524 9.942 9.942 0 0 0-2.072-1.353 1 1 0 0 1-.46-1.338Z" />
    <path d="M11.156 9.991a1 1 0 0 1-.817 1.155 9.94 9.94 0 0 0-4.698 2.171 1 1 0 0 1-1.282-1.534A11.94 11.94 0 0 1 10 9.174a1 1 0 0 1 1.155.817ZM16.731 6.766a15 15 0 0 0-5.94-.72 1 1 0 1 1-.161-1.993A17 17 0 0 1 23.242 8.25a1 1 0 0 1-1.323 1.5 15 15 0 0 0-5.188-2.984ZM7.05 5.753a1 1 0 0 1-.563 1.297 14.91 14.91 0 0 0-4.405 2.7 1 1 0 0 1-1.324-1.5 16.91 16.91 0 0 1 4.995-3.06 1 1 0 0 1 1.297.563ZM12.005 16.001a5 5 0 0 0-2.896.924 1 1 0 1 1-1.158-1.63 7 7 0 0 1 8.108 0 1 1 0 0 1-1.158 1.63 5 5 0 0 0-2.896-.924ZM11 20a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Wifi = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12.04 11.002a10 10 0 0 0-6.4 2.316 1 1 0 1 1-1.28-1.536 12 12 0 0 1 15.36 0 1 1 0 1 1-1.28 1.536 10 10 0 0 0-6.4-2.316Z" />
    <path d="M12 6.003A15 15 0 0 0 2.08 9.75 1 1 0 1 1 .76 8.25a17 17 0 0 1 22.482 0 1 1 0 0 1-1.322 1.5 15 15 0 0 0-9.92-3.747ZM12.005 16.001a5 5 0 0 0-2.896.924 1 1 0 0 1-1.158-1.63 7 7 0 0 1 8.108 0 1 1 0 1 1-1.158 1.63 5 5 0 0 0-2.896-.924ZM11 20a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const Wind = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11.202 5.019a1 1 0 0 0-.903.276 1 1 0 1 1-1.418-1.41A3 3 0 1 1 10.998 9h-.002L11 8v1H2a1 1 0 1 1 0-2h9.004a1 1 0 0 0 .198-1.981Zm8.587 3.01a1.5 1.5 0 0 0-1.353.409 1 1 0 1 1-1.412-1.416A3.5 3.5 0 1 1 19.502 13H2a1 1 0 1 1 0-2h17.499a1.5 1.5 0 0 0 .29-2.971ZM13.998 15a3 3 0 1 1-2.117 5.115 1 1 0 1 1 1.418-1.41A1 1 0 1 0 14.004 17H2a1 1 0 1 1 0-2h11.998Z" />
  </Icon>
);

export const XCircle = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path d="M15.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z" />
    <path d="M8.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const XOctagon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M7.153 1.293A1 1 0 0 1 7.86 1h8.28a1 1 0 0 1 .707.293l5.86 5.86A1 1 0 0 1 23 7.86v8.28a1 1 0 0 1-.293.707l-5.86 5.86a1 1 0 0 1-.707.293H7.86a1 1 0 0 1-.707-.293l-5.86-5.86A1 1 0 0 1 1 16.14V7.86a1 1 0 0 1 .293-.707l5.86-5.86ZM8.274 3 3 8.274v7.452L8.274 21h7.452L21 15.726V8.274L15.726 3H8.274Z" />
    <path d="M15.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z" />
    <path d="M8.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const XSquare = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z" />
    <path d="M8.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z" />
    <path d="M15.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z" />
  </Icon>
);

export const Youtube = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M12 3v2h-.075a86.587 86.587 0 0 0-1.016.007c-.668.007-1.575.022-2.534.05-.961.029-1.966.071-2.833.134-.888.065-1.548.147-1.877.233a1.78 1.78 0 0 0-1.227 1.25A28 28 0 0 0 2 11.745v.011a28 28 0 0 0 .435 5.093 1.78 1.78 0 0 0 1.226 1.186c.328.087.99.168 1.881.234.867.063 1.872.105 2.833.134a136.722 136.722 0 0 0 3.55.057h.37a140.447 140.447 0 0 0 3.33-.057c.961-.029 1.966-.071 2.833-.134.888-.065 1.548-.147 1.877-.233a1.78 1.78 0 0 0 1.227-1.25c.298-1.66.444-3.345.438-5.032v-.01a28.004 28.004 0 0 0-.438-5.11 1.78 1.78 0 0 0-1.217-1.247c-.34-.08-1.002-.154-1.88-.212a75.155 75.155 0 0 0-2.837-.123 149.278 149.278 0 0 0-3.333-.051h-.22L12 5V3h.08a106.602 106.602 0 0 1 1.032.007c.675.006 1.595.02 2.57.046.974.026 2.01.066 2.915.126.88.059 1.715.141 2.24.27a3.78 3.78 0 0 1 2.687 2.794c.328 1.817.487 3.661.476 5.508a29.997 29.997 0 0 1-.49 5.492 3.78 3.78 0 0 1-2.638 2.72l-.014.003c-.533.143-1.375.233-2.255.297-.907.066-1.944.11-2.918.14a138.67 138.67 0 0 1-3.605.057h-.16a117.262 117.262 0 0 1-1.033-.007 138.66 138.66 0 0 1-2.572-.05 70.549 70.549 0 0 1-2.918-.14c-.88-.064-1.722-.154-2.255-.297l-.006-.001a3.78 3.78 0 0 1-2.638-2.611.996.996 0 0 1-.022-.096A30 30 0 0 1 0 11.748a30 30 0 0 1 .49-5.532 3.78 3.78 0 0 1 2.638-2.72l.014-.003c.533-.143 1.375-.233 2.255-.297.907-.066 1.944-.11 2.918-.14A138.223 138.223 0 0 1 11.92 3H12Z" />
    <path d="M9.247 7.616a1 1 0 0 1 .997-.005l5.75 3.27a1 1 0 0 1 0 1.738l-5.75 3.27a1 1 0 0 1-1.494-.869V8.48a1 1 0 0 1 .497-.864Zm1.503 2.583v3.102l2.727-1.551-2.727-1.55Z" />
  </Icon>
);

export const ZapOff = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M13.398 1.082a1 1 0 0 1 .595 1.041l-.59 4.75a1 1 0 0 1-1.985-.246l.17-1.366-.25.299a1 1 0 1 1-1.537-1.28l2.43-2.92a1 1 0 0 1 1.167-.278ZM14.66 10a1 1 0 0 1 1-1H21a1 1 0 0 1 .767 1.641l-2.43 2.91a1 1 0 0 1-1.535-1.282L18.862 11H15.66a1 1 0 0 1-1-1ZM8.64 7.232a1 1 0 0 1 .128 1.408L5.135 13H12a1 1 0 0 1 .992 1.124l-.577 4.616 2.817-3.38a1 1 0 0 1 1.536 1.28l-5 6a1 1 0 0 1-1.76-.764l.86-6.876H3a1 1 0 0 1-.768-1.64l5-6a1 1 0 0 1 1.408-.128Z" />
    <path d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z" />
  </Icon>
);

export const Zap = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M13.398 1.083a1 1 0 0 1 .594 1.041L13.132 9H21a1 1 0 0 1 .768 1.64l-10 12a1 1 0 0 1-1.76-.764l.86-6.876H3a1 1 0 0 1-.768-1.64l10-12a1 1 0 0 1 1.166-.277ZM5.135 13H12a1 1 0 0 1 .992 1.124l-.577 4.615L18.865 11H12a1 1 0 0 1-.992-1.124l.577-4.616L5.135 13Z" />
  </Icon>
);

export const ZoomIn = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
    <path d="M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414ZM11 7a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
    <path d="M7 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const ZoomOut = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <Icon {...props}>
    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
    <path d="M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414ZM7 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  </Icon>
);
