import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 23 19" {...props}>
      {/* <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        <path d="M1.46609 0C0.66264 0 0 0.662641 0 1.46609V14.7385C0 15.5419 0.66264 16.2045 1.46609 16.2045H12.0227C12.3114 16.2045 12.5455 15.9705 12.5455 15.6818C12.5455 15.3931 12.3114 15.1591 12.0227 15.1591H1.46609C1.22374 15.1591 1.04545 14.9808 1.04545 14.7385V4.70455H19.8636V7.15585C19.8636 7.44454 20.0977 7.67858 20.3864 7.67858C20.6751 7.67858 20.9091 7.44454 20.9091 7.15585C20.9091 5.25926 20.9091 3.36267 20.9091 1.46609C20.9091 0.662641 20.2465 0 19.443 0H1.46609ZM1.46609 1.04545H19.443C19.6854 1.04545 19.8636 1.22374 19.8636 1.46609V3.65909H1.04545V1.46609C1.04545 1.22374 1.22374 1.04545 1.46609 1.04545Z"   fill-opacity="0.75" />
        <path d="M18.2954 7.84094C16.8565 7.84094 15.6817 9.01567 15.6817 10.4546V12.5455H14.6363C14.0661 12.5455 13.5908 13.0208 13.5908 13.5909V17.7728C13.5908 18.3429 14.0661 18.8182 14.6363 18.8182H21.9545C22.5246 18.8182 22.9999 18.3429 22.9999 17.7728V13.5909C22.9999 13.0208 22.5246 12.5455 21.9545 12.5455H20.909V10.4546C20.909 9.01567 19.7343 7.84094 18.2954 7.84094ZM18.2954 8.8864C19.1732 8.8864 19.8635 9.57676 19.8635 10.4546V12.5455H16.7272V10.4546C16.7272 9.57676 17.4176 8.8864 18.2954 8.8864ZM14.6363 13.5909C17.0757 13.5909 19.5151 13.5909 21.9545 13.5909V17.7728H14.6363V13.5909Z"   fill-opacity="0.75" />
        <path d="M3.6592 9.40906C3.52057 9.40906 3.38761 9.46413 3.28958 9.56216C3.19155 9.66019 3.13647 9.79315 3.13647 9.93178C3.13647 10.0704 3.19155 10.2034 3.28958 10.3014C3.38761 10.3994 3.52057 10.4545 3.6592 10.4545H8.36375C8.50238 10.4545 8.63534 10.3994 8.73337 10.3014C8.8314 10.2034 8.88647 10.0704 8.88647 9.93178C8.88647 9.79315 8.8314 9.66019 8.73337 9.56216C8.63534 9.46413 8.50238 9.40906 8.36375 9.40906H3.6592Z"   fill-opacity="0.75" />
        <path d="M3.6592 12.0228C3.52057 12.0228 3.38761 12.0779 3.28958 12.1759C3.19155 12.274 3.13647 12.4069 3.13647 12.5456C3.13647 12.6842 3.19155 12.8171 3.28958 12.9152C3.38761 13.0132 3.52057 13.0683 3.6592 13.0683H8.36375C8.50238 13.0683 8.63534 13.0132 8.73337 12.9152C8.8314 12.8171 8.88647 12.6842 8.88647 12.5456C8.88647 12.4069 8.8314 12.274 8.73337 12.1759C8.63534 12.0779 8.50238 12.0228 8.36375 12.0228H3.6592Z"   fill-opacity="0.75" />
      {/* </svg> */}

      {/* <g>
        <path d="m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0"/>
        <path d="m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0"/>
        <path d="m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0"/>
        <path d="m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0"/>
        <path d="m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0"/>
        <path d="m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0"/>
        <path d="m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0"/>
        <path d="m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0"/>
        <path d="m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0"/>
        <path d="m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0"/>
        <path d="m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0"/>
        <path d="m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0"/>
        <path d="m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0"/>
        <path d="m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0"/>
        <path d="m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0"/>
        <path d="m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0"/>
        <path d="m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0"/>
        <path d="m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0"/>
        <path d="m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0"/>
        <path d="m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0"/>
        <path d="m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0"/>
        <path d="m176 64h96v16h-96zm0 0"/>
      </g> */}
    </Svg>
  );
};

export default Icon;
