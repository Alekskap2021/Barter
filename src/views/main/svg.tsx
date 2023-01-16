export const LoopSvg = ({ fill = "#373538" }) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6667 22.3333C17.5577 22.3333 22.3333 17.5577 22.3333 11.6667C22.3333 5.77563 17.5577 1 11.6667 1C5.77563 1 1 5.77563 1 11.6667C1 17.5577 5.77563 22.3333 11.6667 22.3333Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.0002 25L19.2002 19.2"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MarkSvg = () => {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
        stroke="#373538"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
        stroke="#373538"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowLeftSvg = ({ fill = "white" }: any) => {
  return (
    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.68762 1L1.30121 4.29289C0.899596 4.68342 0.899597 5.31658 1.30121 5.70711L4.68762 9M1.60242 5.00001L16 5.00001"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ArrowLeft2Svg = ({ fill = "#373538" }: any) => {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 13L1 7L7 1"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ArrowRightSvg = ({ fill = "white" }: any) => {
  return (
    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.3124 9L15.6988 5.70711C16.1004 5.31658 16.1004 4.68342 15.6988 4.29289L12.3124 1M15.3976 5L1 5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const HeartSvg = ({ handleClick, fill = "#373538" }: any) => {
  return (
    <svg onClick={handleClick} width="24" height="22" viewBox="0 0 24 22" fill="none">
      <path
        d="M20.8401 3.61C20.3294 3.099 19.7229 2.69365 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69365 13.5709 3.099 13.0601 3.61L12.0001 4.67L10.9401 3.61C9.90843 2.57831 8.50915 1.99871 7.05012 1.99871C5.59109 1.99871 4.19181 2.57831 3.16012 3.61C2.12843 4.64169 1.54883 6.04097 1.54883 7.5C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60536C22.3096 8.9379 22.4519 8.22249 22.4519 7.5C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72719 21.3511 4.12076 20.8401 3.61V3.61Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SectionsSvg = () => {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 4.25H3.75V13H12.5V4.25Z"
        stroke="#373538"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 4.25H17.5V13H26.25V4.25Z"
        stroke="#373538"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 18H17.5V26.75H26.25V18Z"
        stroke="#373538"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 18H3.75V26.75H12.5V18Z"
        stroke="#373538"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseSvg = ({ size = "12px", style }: any) => {
  return (
    <svg
      style={style}
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 1L1 9" stroke="#373538" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1 1L9 9" stroke="#373538" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const CameraSvg = () => {
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46 38C46 39.0609 45.5786 40.0783 44.8284 40.8284C44.0783 41.5786 43.0609 42 42 42H6C4.93913 42 3.92172 41.5786 3.17157 40.8284C2.42143 40.0783 2 39.0609 2 38V16C2 14.9391 2.42143 13.9217 3.17157 13.1716C3.92172 12.4214 4.93913 12 6 12H14L18 6H30L34 12H42C43.0609 12 44.0783 12.4214 44.8284 13.1716C45.5786 13.9217 46 14.9391 46 16V38Z"
          stroke="#868686"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24 34C28.4183 34 32 30.4183 32 26C32 21.5817 28.4183 18 24 18C19.5817 18 16 21.5817 16 26C16 30.4183 19.5817 34 24 34Z"
          stroke="#868686"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export const FilterSvg = () => {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.0002 2.66675L6.3335 2.66675"
        stroke="#373538"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle r="1.33333" transform="matrix(-1 0 0 1 2.33317 2.66671)" stroke="#373538" />
      <path
        d="M0.999838 9.33337L7.6665 9.33337"
        stroke="#373538"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="11.6668" cy="9.33333" r="1.33333" stroke="#373538" />
    </svg>
  );
};

export const PhoneSvg = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3741 12.4789C10.0712 13.7817 6.73456 12.5575 3.92153 9.74449C1.1085 6.93145 -0.115724 3.59485 1.18715 2.29197L2.045 1.43412C2.63721 0.841904 3.61304 0.857558 4.22457 1.46909L5.5533 2.79781C6.16483 3.40934 6.18048 4.38517 5.58826 4.97739L5.40401 5.16165C5.08426 5.48139 5.05298 5.99721 5.35008 6.35725C5.63666 6.70452 5.94562 7.05043 6.2806 7.38542C6.61558 7.7204 6.96149 8.02936 7.30877 8.31593C7.66881 8.61304 8.18462 8.58175 8.50437 8.26201L8.68863 8.07775C9.28084 7.48553 10.2567 7.50119 10.8682 8.11272L12.1969 9.44144C12.8085 10.053 12.8241 11.0288 12.2319 11.621L11.3741 12.4789Z"
        stroke="#868686"
      />
    </svg>
  );
};
