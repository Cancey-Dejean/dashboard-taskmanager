const Icons = () => {
  const icons = [
    {
      name: "HomeIcon",
      icon: <HomeIcon />,
    },
    {
      name: "TrendingDown",
      icon: <TrendingDown />,
    },
    {
      name: "MessageSquare",
      icon: <MessageSquare />,
    },
    {
      name: "UsersIcon",
      icon: <UsersIcon />,
    },
    {
      name: "SettingsIcon",
      icon: <SettingsIcon />,
    },
    {
      name: "InfoIcon",
      icon: <InfoIcon />,
    },
    {
      name: "LoginIcon",
      icon: <LoginIcon />,
    },
    {
      name: "PlusIcon",
      icon: <PlusIcon />,
    },
    {
      name: "ArrowDown",
      icon: <ArrowDown />,
    },
    {
      name: "IconSearch",
      icon: <IconSearch />,
    },
    {
      name: "IconBell",
      icon: <IconBell />,
    },
    {
      name: "IconClock",
      icon: <IconClock />,
    },
    {
      name: "IconThreeDots",
      icon: <IconThreeDots />,
    },
    {
      name: "IconEye",
      icon: <IconEye />,
    },
    {
      name: "IconThreeLines",
      icon: <IconThreeLines />,
    },
  ]

  return (
    <div className="flex items-center justify-center text-center gap-6 flex-wrap">
      {icons.map((icon) => (
        <div className="[&_div]:border [&_div]:border-gray-400 [&_div]:h-12 [&_div]:w-12 [&_div]:items-center [&_div]:justify-center [&_div]:flex  flex flex-col items-center text-center gap-2">
          <div key={icon.name}>{icon.icon}</div>
          <p className="text-xs">{icon.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Icons

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="49"
      viewBox="0 0 50 49"
      fill="none"
    >
      <path
        d="M25 13.25C25 19.4632 19.9632 24.5 13.75 24.5H2.5V13.25C2.5 7.03679 7.53679 2 13.75 2C19.9632 2 25 7.03679 25 13.25Z"
        fill="#0075FF"
      />
      <path
        d="M25 35.75C25 29.5368 30.0368 24.5 36.25 24.5H47.5V35.75C47.5 41.9632 42.4632 47 36.25 47C30.0368 47 25 41.9632 25 35.75Z"
        fill="#0075FF"
      />
      <path
        d="M2.5 35.75C2.5 41.9632 7.53679 47 13.75 47H25V35.75C25 29.5368 19.9632 24.5 13.75 24.5C7.53679 24.5 2.5 29.5368 2.5 35.75Z"
        fill="#0075FF"
      />
      <path
        d="M47.5 13.25C47.5 7.03679 42.4632 2 36.25 2H25V13.25C25 19.4632 30.0368 24.5 36.25 24.5C42.4632 24.5 47.5 19.4632 47.5 13.25Z"
        fill="#0075FF"
      />
    </svg>
  )
}

export const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M13.3333 4H4V13.3333H13.3333V4Z"
        stroke="#ACACAC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.2815 1.89398H18.8529V13.3226H30.2815V1.89398Z"
        stroke="#ACACAC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 18.6667H18.6667V28H28V18.6667Z"
        stroke="#ACACAC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 18.6667H4V28H13.3333V18.6667Z"
        stroke="#ACACAC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const TrendingDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M26.8334 7L15.75 18.0833L9.91669 12.25L1.16669 21"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8333 7H26.8333V14"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const MessageSquare = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M24.5 17.5C24.5 18.1188 24.2542 18.7123 23.8166 19.1499C23.379 19.5875 22.7855 19.8333 22.1667 19.8333H8.16667L3.5 24.5V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H22.1667C22.7855 3.5 23.379 3.74583 23.8166 4.18342C24.2542 4.621 24.5 5.21449 24.5 5.83333V17.5Z"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const UsersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M19.8334 24.5V22.1667C19.8334 20.929 19.3417 19.742 18.4665 18.8668C17.5913 17.9917 16.4044 17.5 15.1667 17.5H5.83335C4.59568 17.5 3.40869 17.9917 2.53352 18.8668C1.65835 19.742 1.16669 20.929 1.16669 22.1667V24.5"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 12.8333C13.0773 12.8333 15.1666 10.744 15.1666 8.16667C15.1666 5.58934 13.0773 3.5 10.5 3.5C7.92265 3.5 5.83331 5.58934 5.83331 8.16667C5.83331 10.744 7.92265 12.8333 10.5 12.8333Z"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.8333 24.5V22.1667C26.8325 21.1327 26.4884 20.1282 25.8549 19.311C25.2214 18.4938 24.3345 17.9102 23.3333 17.6517"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 3.65167C19.6705 3.90869 20.5602 4.49249 21.1956 5.31103C21.831 6.12958 22.1758 7.13631 22.1758 8.17251C22.1758 9.2087 21.831 10.2154 21.1956 11.034C20.5602 11.8525 19.6705 12.4363 18.6667 12.6933"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const SettingsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <g clipPath="url(#clip0_0_50)">
        <path
          d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
          stroke="#ACACAC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6334 17.5C22.4781 17.8519 22.4317 18.2422 22.5003 18.6207C22.569 18.9991 22.7494 19.3484 23.0184 19.6233L23.0884 19.6933C23.3053 19.91 23.4774 20.1674 23.5948 20.4506C23.7122 20.7339 23.7727 21.0375 23.7727 21.3442C23.7727 21.6508 23.7122 21.9544 23.5948 22.2377C23.4774 22.521 23.3053 22.7783 23.0884 22.995C22.8717 23.2119 22.6143 23.384 22.331 23.5015C22.0478 23.6189 21.7442 23.6793 21.4375 23.6793C21.1309 23.6793 20.8273 23.6189 20.544 23.5015C20.2607 23.384 20.0034 23.2119 19.7867 22.995L19.7167 22.925C19.4417 22.656 19.0925 22.4756 18.714 22.407C18.3356 22.3384 17.9452 22.3847 17.5934 22.54C17.2483 22.6879 16.954 22.9334 16.7467 23.2465C16.5394 23.5595 16.4282 23.9262 16.4267 24.3017V24.5C16.4267 25.1188 16.1809 25.7123 15.7433 26.1499C15.3057 26.5875 14.7122 26.8333 14.0934 26.8333C13.4745 26.8333 12.881 26.5875 12.4434 26.1499C12.0059 25.7123 11.76 25.1188 11.76 24.5V24.395C11.751 24.0088 11.626 23.6343 11.4013 23.3201C11.1766 23.006 10.8625 22.7667 10.5 22.6333C10.1481 22.478 9.75779 22.4317 9.37933 22.5003C9.00087 22.5689 8.65165 22.7494 8.37669 23.0183L8.30669 23.0883C8.08998 23.3053 7.83264 23.4774 7.54938 23.5948C7.26612 23.7122 6.96249 23.7727 6.65585 23.7727C6.34922 23.7727 6.04559 23.7122 5.76233 23.5948C5.47906 23.4774 5.22172 23.3053 5.00502 23.0883C4.78808 22.8716 4.61597 22.6143 4.49855 22.331C4.38112 22.0478 4.32068 21.7441 4.32068 21.4375C4.32068 21.1309 4.38112 20.8272 4.49855 20.544C4.61597 20.2607 4.78808 20.0034 5.00502 19.7867L5.07502 19.7167C5.34398 19.4417 5.5244 19.0925 5.59303 18.714C5.66165 18.3356 5.61532 17.9452 5.46002 17.5933C5.31213 17.2483 5.06657 16.954 4.75356 16.7467C4.44056 16.5394 4.07377 16.4282 3.69835 16.4267H3.50002C2.88118 16.4267 2.28769 16.1808 1.8501 15.7432C1.41252 15.3057 1.16669 14.7122 1.16669 14.0933C1.16669 13.4745 1.41252 12.881 1.8501 12.4434C2.28769 12.0058 2.88118 11.76 3.50002 11.76H3.60502C3.99118 11.751 4.36569 11.626 4.67987 11.4013C4.99405 11.1766 5.23336 10.8625 5.36669 10.5C5.52199 10.1481 5.56831 9.75777 5.49969 9.37931C5.43107 9.00085 5.25065 8.65162 4.98169 8.37666L4.91169 8.30666C4.69474 8.08996 4.52264 7.83262 4.40521 7.54936C4.28779 7.2661 4.22735 6.96247 4.22735 6.65583C4.22735 6.34919 4.28779 6.04557 4.40521 5.7623C4.52264 5.47904 4.69474 5.2217 4.91169 5.005C5.12839 4.78805 5.38573 4.61595 5.66899 4.49852C5.95226 4.3811 6.25588 4.32066 6.56252 4.32066C6.86916 4.32066 7.17279 4.3811 7.45605 4.49852C7.73931 4.61595 7.99665 4.78805 8.21335 5.005L8.28335 5.075C8.55831 5.34396 8.90754 5.52438 9.286 5.593C9.66446 5.66162 10.0548 5.6153 10.4067 5.46H10.5C10.8451 5.31211 11.1394 5.06655 11.3467 4.75354C11.5539 4.44053 11.6652 4.07375 11.6667 3.69833V3.5C11.6667 2.88116 11.9125 2.28767 12.3501 1.85008C12.7877 1.4125 13.3812 1.16666 14 1.16666C14.6189 1.16666 15.2124 1.4125 15.6499 1.85008C16.0875 2.28767 16.3334 2.88116 16.3334 3.5V3.605C16.3349 3.98041 16.4461 4.3472 16.6534 4.66021C16.8607 4.97321 17.155 5.21877 17.5 5.36666C17.8519 5.52196 18.2422 5.56829 18.6207 5.49967C18.9992 5.43105 19.3484 5.25062 19.6234 4.98166L19.6934 4.91166C19.9101 4.69472 20.1674 4.52261 20.4507 4.40519C20.7339 4.28777 21.0376 4.22733 21.3442 4.22733C21.6508 4.22733 21.9545 4.28777 22.2377 4.40519C22.521 4.52261 22.7783 4.69472 22.995 4.91166C23.212 5.12837 23.3841 5.38571 23.5015 5.66897C23.6189 5.95223 23.6794 6.25586 23.6794 6.5625C23.6794 6.86913 23.6189 7.17276 23.5015 7.45602C23.3841 7.73929 23.212 7.99663 22.995 8.21333L22.925 8.28333C22.6561 8.55829 22.4756 8.90752 22.407 9.28598C22.3384 9.66444 22.3847 10.0548 22.54 10.4067V10.5C22.6879 10.8451 22.9335 11.1394 23.2465 11.3466C23.5595 11.5539 23.9263 11.6652 24.3017 11.6667H24.5C25.1189 11.6667 25.7124 11.9125 26.1499 12.3501C26.5875 12.7877 26.8334 13.3812 26.8334 14C26.8334 14.6188 26.5875 15.2123 26.1499 15.6499C25.7124 16.0875 25.1189 16.3333 24.5 16.3333H24.395C24.0196 16.3348 23.6528 16.4461 23.3398 16.6534C23.0268 16.8606 22.7812 17.1549 22.6334 17.5Z"
          stroke="#ACACAC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_50">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M14 25.6667C20.4433 25.6667 25.6666 20.4433 25.6666 14C25.6666 7.55668 20.4433 2.33333 14 2.33333C7.55666 2.33333 2.33331 7.55668 2.33331 14C2.33331 20.4433 7.55666 25.6667 14 25.6667Z"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18.6667V14"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.33333H14.0117"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const LoginIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M17.5 3.5H22.1667C22.7855 3.5 23.379 3.74583 23.8166 4.18342C24.2542 4.621 24.5 5.21449 24.5 5.83333V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H17.5"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 19.8333L17.5 14L11.6667 8.16666"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 14H3.5"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const PlusIcon = () => {
  return (
    <div>
      <span className="sr-only">Plus Icon</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 6.66666V25.3333"
          stroke="#202226"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66663 16H25.3333"
          stroke="#202226"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M5.5 8.25L11 13.75L16.5 8.25"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconSearch = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#858585"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M21 21L16.65 16.65"
        stroke="#858585"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export const IconBell = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        stroke="#282828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        stroke="#282828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export const IconClock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V12L16 14"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconThreeDots = () => {
  return (
    <div>
      <span className="sr-only">More Options Dots</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export const IconTag = () => {
  return (
    <div>
      <span className="sr-only">Tag Icon</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z"
          stroke="#6A6A6A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 7H7.01"
          stroke="#6A6A6A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  )
}

export const IconEye = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconThreeLines = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 6H21"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H21"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18H21"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H3.01"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H3.01"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H3.01"
        stroke="#6A6A6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ChatIcon = ({ activeMessages }: { activeMessages: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
        stroke="#282828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {activeMessages && <circle cx="20" cy="4.5" r="4" fill="#FF6A55" />}
    </svg>
  )
}
