import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 27 31" {...props}>
      {/* <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        <path d="M13.4232 7.25073C17.307 7.25073 20.4553 10.3996 20.4553 14.2834C20.4553 15.8923 19.9083 17.443 18.8969 18.6946C18.4402 19.2618 18.0758 19.8368 17.7939 20.445C17.5121 21.0539 17.3094 21.7043 17.1732 22.4166L16.7719 24.5262C16.7148 24.833 16.446 25.0465 16.1452 25.0465L10.7012 25.0488C10.3724 25.0488 10.1001 24.7991 10.0656 24.4786L9.67319 22.4166C9.53703 21.7043 9.33428 21.0539 9.05245 20.445C8.77062 19.8368 8.40614 19.2618 7.9495 18.6946C6.93813 17.443 6.39111 15.8923 6.39111 14.2834C6.39111 10.3996 9.53941 7.25073 13.4232 7.25073ZM13.4232 8.52967C10.2464 8.52967 7.67005 11.106 7.67005 14.2834C7.67005 15.6052 8.11182 16.8668 8.94304 17.8961C9.46627 18.5453 9.88426 19.2065 10.2107 19.9105C10.5359 20.6139 10.7702 21.3619 10.9266 22.183L11.2286 23.7699H15.6178L15.9198 22.183C16.0762 21.3619 16.3105 20.6139 16.6357 19.9105C16.9621 19.2065 17.3801 18.5453 17.9033 17.8961C18.7346 16.8668 19.1763 15.6052 19.1763 14.2834C19.1763 11.106 16.6 8.52967 13.4232 8.52967Z"   />
        <path d="M13.4233 9.80743C13.7758 9.80743 14.063 10.0946 14.063 10.4472C14.063 10.7998 13.7758 11.0864 13.4233 11.0864C11.6526 11.0864 10.2268 12.5128 10.2268 14.2834C10.2268 14.636 9.93962 14.9226 9.58703 14.9226C9.23445 14.9226 8.94727 14.636 8.94727 14.2834C8.94727 11.8159 10.9558 9.80743 13.4233 9.80743Z"   />
        <path d="M12.7834 1.49878C12.7834 1.14619 13.0706 0.859009 13.4232 0.859009C13.7758 0.859009 14.063 1.14619 14.063 1.49878V4.69463C14.063 5.04722 13.7758 5.33381 13.4232 5.33381C13.0706 5.33381 12.7834 5.04722 12.7834 4.69463V1.49878Z"   />
        <path d="M22.0108 4.79097C22.2599 4.54184 22.666 4.54184 22.9152 4.79097C23.1643 5.0401 23.1643 5.4462 22.9152 5.69592L20.6558 7.95532C20.4066 8.20445 19.9999 8.20445 19.7508 7.95532C19.5017 7.70619 19.5017 7.30009 19.7508 7.05096L22.0108 4.79097Z"   />
        <path d="M26.2071 13.6437C26.5597 13.6437 26.8463 13.9309 26.8463 14.2834C26.8463 14.636 26.5597 14.9226 26.2071 14.9226H23.0118C22.6593 14.9226 22.3721 14.636 22.3721 14.2834C22.3721 13.9309 22.6593 13.6437 23.0118 13.6437H26.2071Z"   />
        <path d="M22.9152 22.8709C23.1643 23.12 23.1643 23.5261 22.9152 23.7753C22.666 24.0244 22.2599 24.0244 22.0108 23.7753L19.7508 21.5153C19.5017 21.2661 19.5017 20.86 19.7508 20.6109C19.9999 20.3618 20.4066 20.3618 20.6558 20.6109L22.9152 22.8709Z"   />
        <path d="M3.93123 5.69592C3.6821 5.4462 3.6821 5.0401 3.93123 4.79097C4.18036 4.54184 4.58646 4.54184 4.83558 4.79097L7.09558 7.05096C7.34471 7.30009 7.34471 7.70619 7.09558 7.95532C6.84645 8.20445 6.43976 8.20445 6.19063 7.95532L3.93123 5.69592Z"   />
        <path d="M0.639172 14.9226C0.286587 14.9226 0 14.636 0 14.2834C0 13.9309 0.286587 13.6437 0.639172 13.6437H3.83444C4.18702 13.6437 4.4742 13.9309 4.4742 14.2834C4.4742 14.636 4.18702 14.9226 3.83444 14.9226H0.639172Z"   />
        <path d="M4.83558 23.7753C4.58646 24.0244 4.18036 24.0244 3.93123 23.7753C3.6821 23.5261 3.6821 23.12 3.93123 22.8709L6.19063 20.6109C6.43976 20.3618 6.84645 20.3618 7.09558 20.6109C7.34471 20.86 7.34471 21.2661 7.09558 21.5153L4.83558 23.7753Z"   />
        <path d="M10.7012 27.0045C10.3486 27.0045 10.062 26.7173 10.062 26.3647C10.062 26.0121 10.3486 25.7255 10.7012 25.7255H16.1451C16.4977 25.7255 16.7843 26.0121 16.7843 26.3647C16.7843 26.7173 16.4977 27.0045 16.1451 27.0045H10.7012Z"   />
        <path d="M10.7012 29.0022C10.3486 29.0022 10.062 28.715 10.062 28.3624C10.062 28.0099 10.3486 27.7233 10.7012 27.7233H16.1451C16.4977 27.7233 16.7843 28.0099 16.7843 28.3624C16.7843 28.715 16.4977 29.0022 16.1451 29.0022H10.7012Z"   />
        <path d="M12.0193 30.9999C11.6667 30.9999 11.3801 30.7128 11.3801 30.3602C11.3801 30.0076 11.6667 29.721 12.0193 29.721H14.8269C15.1795 29.721 15.4661 30.0076 15.4661 30.3602C15.4661 30.7128 15.1795 30.9999 14.8269 30.9999H12.0193Z"   />
      {/* </svg> */}

      {/* <path d="M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" />
      <path d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" />
      <path d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" />
      <path d="M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" />
      <path d="M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" />
      <path d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      />
      <path d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" />
      <path d="M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" /> */}
    </Svg>
  );
};

export default Icon;
