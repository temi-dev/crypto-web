const altColor = '#718096'

const HomeIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8251 19.4584H5.17508C2.89175 19.4584 1.04175 17.6001 1.04175 15.3167V9.14173C1.04175 8.00839 1.74175 6.58339 2.64175 5.88339L7.13342 2.38339C8.48342 1.33339 10.6417 1.28339 12.0417 2.26673L17.1917 5.87506C18.1834 6.56673 18.9584 8.05006 18.9584 9.25839V15.3251C18.9584 17.6001 17.1084 19.4584 14.8251 19.4584ZM7.90008 3.36673L3.40841 6.86673C2.81675 7.33339 2.29175 8.39173 2.29175 9.14173V15.3167C2.29175 16.9084 3.58341 18.2084 5.17508 18.2084H14.8251C16.4167 18.2084 17.7084 16.9167 17.7084 15.3251V9.25839C17.7084 8.45839 17.1334 7.35006 16.4751 6.90006L11.3251 3.29173C10.3751 2.62506 8.80841 2.65839 7.90008 3.36673Z" fill={color ? color : altColor} />
            <path d="M10 16.125C9.65833 16.125 9.375 15.8417 9.375 15.5V13C9.375 12.6583 9.65833 12.375 10 12.375C10.3417 12.375 10.625 12.6583 10.625 13V15.5C10.625 15.8417 10.3417 16.125 10 16.125Z" fill={color ? color : altColor} />
        </svg>
    )
}

const ChartIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75706 9.85156V16.14" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.0349 6.84253V16.14" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.2427 13.1746V16.14" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.2952 2.33325H6.70468C3.71024 2.33325 1.83325 4.45266 1.83325 7.45298V15.5469C1.83325 18.5472 3.70151 20.6666 6.70468 20.6666H15.2952C18.2983 20.6666 20.1666 18.5472 20.1666 15.5469V7.45298C20.1666 4.45266 18.2983 2.33325 15.2952 2.33325Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const WalletAddIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8358 13.6962H16.1248C14.7622 13.6954 13.6578 12.5918 13.657 11.2292C13.657 9.86663 14.7622 8.76304 16.1248 8.76221H19.8358" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5447 11.1726H16.259" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.10211 3.25H15.0252C17.6819 3.25 19.8356 5.40372 19.8356 8.06036V14.6393C19.8356 17.2959 17.6819 19.4497 15.0252 19.4497H7.10211C4.44547 19.4497 2.29175 17.2959 2.29175 14.6393V8.06036C2.29175 5.40372 4.44547 3.25 7.10211 3.25Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.99901 7V10.9218" stroke={color ? color : altColor} strokeWidth="1.46699" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 8.96068H5" stroke={color ? color : altColor} strokeWidth="1.46699" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const WalletIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.605 2.80821L11.5775 2.87238L8.91913 9.04154H6.30663C5.6833 9.04154 5.08746 9.16988 4.54663 9.39904L6.1508 5.56738L6.18746 5.47571L6.25163 5.32904C6.26996 5.27404 6.2883 5.21904 6.3158 5.17321C7.51663 2.39571 8.8733 1.76321 11.605 2.80821Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5459 9.22502C16.1334 9.09668 15.6934 9.04168 15.2534 9.04168H8.91919L11.5775 2.87252L11.605 2.80835C11.7425 2.85418 11.8709 2.91835 12.0084 2.97335L14.0342 3.82585C15.1617 4.29335 15.95 4.77918 16.4267 5.36585C16.5184 5.47585 16.5917 5.57668 16.6559 5.69585C16.7384 5.82418 16.8025 5.95252 16.8392 6.09002C16.8759 6.17252 16.9034 6.25502 16.9217 6.32835C17.1692 7.09835 17.0225 8.04252 16.5459 9.22502Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.7282 13.5151V15.3026C19.7282 15.4859 19.719 15.6692 19.7098 15.8526C19.5357 19.0517 17.7482 20.6651 14.3565 20.6651H7.20649C6.98649 20.6651 6.76649 20.6467 6.55566 20.6192C3.64066 20.4267 2.08233 18.8684 1.88983 15.9534C1.86233 15.7426 1.84399 15.5226 1.84399 15.3026V13.5151C1.84399 11.6726 2.96233 10.0867 4.55733 9.39925C5.10733 9.17008 5.69399 9.04175 6.31733 9.04175H15.264C15.7132 9.04175 16.1532 9.10592 16.5565 9.22508C18.3807 9.78425 19.7282 11.4892 19.7282 13.5151Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.15075 5.56738L4.54658 9.39905C2.95158 10.0865 1.83325 11.6724 1.83325 13.5149V10.829C1.83325 8.22572 3.68492 6.05322 6.15075 5.56738Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.7254 10.8288V13.5146C19.7254 11.4979 18.387 9.78377 16.5537 9.23377C17.0304 8.0421 17.1679 7.1071 16.9387 6.32793C16.9204 6.24543 16.8929 6.16293 16.8562 6.0896C18.5612 6.9696 19.7254 8.77543 19.7254 10.8288Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const BriefcaseIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9954 15.7873V13.4617" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.6741 5.38623C18.2233 5.38623 19.4699 6.64206 19.4699 8.19123V11.3446C17.2149 12.6646 14.2358 13.4621 10.9908 13.4621C7.74575 13.4621 4.77575 12.6646 2.52075 11.3446V8.18206C2.52075 6.6329 3.77659 5.38623 5.32575 5.38623H16.6741Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.2038 5.38209V5.04659C14.2038 3.92825 13.2963 3.02075 12.1779 3.02075H9.81294C8.69461 3.02075 7.78711 3.92825 7.78711 5.04659V5.38209" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.54321 14.6929L2.71646 16.9928C2.8338 18.5429 4.12538 19.741 5.67913 19.741H16.3115C17.8653 19.741 19.1569 18.5429 19.2742 16.9928L19.4475 14.6929" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const SettingsIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.46458 4.45725C9.85508 2.84758 12.1449 2.84758 12.5354 4.45725C12.594 4.69907 12.7089 4.92363 12.8707 5.11267C13.0324 5.3017 13.2366 5.44987 13.4664 5.5451C13.6963 5.64033 13.9454 5.67995 14.1935 5.66071C14.4415 5.64148 14.6816 5.56394 14.894 5.43442C16.3084 4.57275 17.9282 6.19158 17.0665 7.60692C16.9372 7.81927 16.8597 8.05914 16.8406 8.30704C16.8214 8.55494 16.8609 8.80387 16.9561 9.0336C17.0512 9.26332 17.1992 9.46736 17.388 9.62913C17.5768 9.7909 17.8012 9.90583 18.0428 9.96458C19.6524 10.3551 19.6524 12.6449 18.0428 13.0354C17.8009 13.094 17.5764 13.2089 17.3873 13.3707C17.1983 13.5324 17.0501 13.7366 16.9549 13.9664C16.8597 14.1963 16.8201 14.4454 16.8393 14.6935C16.8585 14.9415 16.9361 15.1816 17.0656 15.394C17.9273 16.8084 16.3084 18.4282 14.8931 17.5665C14.6807 17.4372 14.4409 17.3597 14.193 17.3406C13.9451 17.3214 13.6961 17.3609 13.4664 17.4561C13.2367 17.5512 13.0326 17.6992 12.8709 17.888C12.7091 18.0768 12.5942 18.3012 12.5354 18.5428C12.1449 20.1524 9.85508 20.1524 9.46458 18.5428C9.40599 18.3009 9.29113 18.0764 9.12935 17.8873C8.96757 17.6983 8.76344 17.5501 8.53357 17.4549C8.3037 17.3597 8.0546 17.3201 7.80653 17.3393C7.55846 17.3585 7.31844 17.4361 7.106 17.5656C5.69158 18.4273 4.07183 16.8084 4.9335 15.3931C5.06284 15.1807 5.14025 14.9409 5.15944 14.693C5.17863 14.4451 5.13906 14.1961 5.04393 13.9664C4.94881 13.7367 4.80082 13.5326 4.612 13.3709C4.42318 13.2091 4.19885 13.0942 3.95725 13.0354C2.34758 12.6449 2.34758 10.3551 3.95725 9.96458C4.19907 9.90599 4.42363 9.79113 4.61267 9.62935C4.8017 9.46757 4.94987 9.26344 5.0451 9.03357C5.14033 8.8037 5.17995 8.5546 5.16071 8.30653C5.14148 8.05846 5.06394 7.81844 4.93442 7.606C4.07275 6.19158 5.69158 4.57183 7.10692 5.4335C8.02358 5.99083 9.21158 5.49767 9.46458 4.45725Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 14.25C12.5188 14.25 13.75 13.0188 13.75 11.5C13.75 9.98122 12.5188 8.75 11 8.75C9.48122 8.75 8.25 9.98122 8.25 11.5C8.25 13.0188 9.48122 14.25 11 14.25Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const QuestionCircleIcon = ({ color, secondaryColor }: { color?: string, secondaryColor: string }) => {
    return (
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0001 20.0166C16.6808 20.0166 20.4751 16.2223 20.4751 11.5416C20.4751 6.86104 16.6808 3.06665 12.0001 3.06665C7.31953 3.06665 3.52515 6.86104 3.52515 11.5416C3.52515 16.2223 7.31953 20.0166 12.0001 20.0166Z" fill={secondaryColor} stroke={secondaryColor} strokeWidth="1.4125" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 17.1917C12.5851 17.1917 13.0594 16.7174 13.0594 16.1324C13.0594 15.5473 12.5851 15.073 12 15.073C11.415 15.073 10.9407 15.5473 10.9407 16.1324C10.9407 16.7174 11.415 17.1917 12 17.1917Z" fill={color ? color : altColor} />
            <path d="M12 12.9542V12.248C12.4888 12.248 12.9668 12.103 13.3733 11.8314C13.7797 11.5598 14.0966 11.1737 14.2837 10.722C14.4708 10.2703 14.5197 9.77333 14.4243 9.29384C14.329 8.81434 14.0935 8.37389 13.7478 8.0282C13.4021 7.6825 12.9617 7.44707 12.4822 7.3517C12.0027 7.25632 11.5057 7.30527 11.054 7.49236C10.6023 7.67945 10.2163 7.99628 9.94466 8.40278C9.67305 8.80927 9.52808 9.28718 9.52808 9.77608" stroke={color ? color : altColor} strokeWidth="1.4125" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const BellIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6666 5.83333C11.6666 5.21449 11.9125 4.621 12.35 4.18342C12.7876 3.74583 13.3811 3.5 14 3.5C14.6188 3.5 15.2123 3.74583 15.6499 4.18342C16.0875 4.621 16.3333 5.21449 16.3333 5.83333C17.6731 6.46687 18.8153 7.45305 19.6373 8.68618C20.4594 9.91932 20.9305 11.3529 21 12.8333V16.3333C21.0878 17.0587 21.3446 17.7532 21.7499 18.3611C22.1552 18.9691 22.6975 19.4733 23.3333 19.8333H4.66663C5.30239 19.4733 5.84474 18.9691 6.25001 18.3611C6.65529 17.7532 6.91216 17.0587 6.99996 16.3333V12.8333C7.06945 11.3529 7.54048 9.91932 8.36257 8.68618C9.18466 7.45305 10.3268 6.46687 11.6666 5.83333" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 19.8333V20.9999C10.5 21.9282 10.8687 22.8184 11.5251 23.4748C12.1815 24.1312 13.0717 24.4999 14 24.4999C14.9283 24.4999 15.8185 24.1312 16.4749 23.4748C17.1313 22.8184 17.5 21.9282 17.5 20.9999V19.8333" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const ChevronDownIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke={color ? color : altColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const CoinSwapIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.97 11.4199L3.23 9.67993L1.5 11.4199" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.03 12.5801L21.77 14.3201L23.51 12.5801" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.76 14.32V12C21.76 6.88 17.61 2.73999 12.5 2.73999C9.58002 2.73999 6.97002 4.10002 5.27002 6.21002" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.23999 9.67993V11.9999C3.23999 17.1199 7.38999 21.2599 12.5 21.2599C15.42 21.2599 18.03 19.8999 19.73 17.7899" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 8.5H13.88C14.85 8.5 15.63 9.38 15.63 10.25C15.63 11.22 14.85 12 13.88 12H9.5V8.5Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 12H14.5C15.6 12 16.5 12.78 16.5 13.75C16.5 14.72 15.6 15.5 14.5 15.5H9.5V12Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3 15.5V17.25" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3 6.75V8.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const PaperIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.166 8.17463L10.4425 13.9592L3.93293 9.88767C3.00025 9.30414 3.19426 7.88744 4.24922 7.57893L19.7047 3.05277C20.6708 2.76963 21.5661 3.67283 21.2791 4.642L16.7066 20.0868C16.3933 21.1432 14.9847 21.332 14.4067 20.3953L10.4395 13.9602" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const ExchangeIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.7332 0L17.1332 5.60004H21.3332V15.4C21.3332 16.947 20.0803 18.2 18.5332 18.2C16.9862 18.2 15.7332 16.9471 15.7332 15.4V5.60004C15.7332 2.51304 13.2202 6.55889e-05 10.1332 6.55889e-05C7.04622 6.55889e-05 4.53325 2.51304 4.53325 5.60004V15.4H0.333252L5.93323 21L11.5333 15.4H7.33327V5.60004C7.33327 4.05306 8.58624 2.80002 10.1333 2.80002C11.6803 2.80002 12.9332 4.053 12.9332 5.60004V15.4C12.9332 18.487 15.4462 21 18.5332 21C21.6202 21 24.1332 18.487 24.1332 15.4V5.60004H28.3332L22.7332 0Z" fill={color ? color : altColor} />
        </svg>
    )
}

const BitCoinFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.0459" cy="11.8867" r="11.0459" fill="#20C9AC" />
            <path d="M9.43503 14.1258L7.19594 11.8867L6.43347 12.6438L9.43503 15.6454L15.8785 9.20193L15.1214 8.44482L9.43503 14.1258Z" fill={color ? color : altColor} />
            <g clipPath="url(#clip0_434_1035)">
                <path d="M21.759 14.559C20.2837 20.4764 14.2899 24.0774 8.37176 22.6021C2.45635 21.1268 -1.14495 15.133 0.330712 9.21587C1.80534 3.2977 7.79876 -0.303948 13.7152 1.17137C19.633 2.64668 23.234 8.64114 21.7587 14.559H21.759Z" fill={fillColor} />
                <path d="M15.9157 10.3123C16.1352 8.84256 15.0161 8.05243 13.4859 7.52534L13.9823 5.53432L12.77 5.23228L12.2868 7.17083C11.9685 7.09144 11.6413 7.01654 11.3161 6.94232L11.8028 4.991L10.5916 4.68896L10.0948 6.67929C9.83112 6.61923 9.57223 6.55986 9.32093 6.49738L9.32232 6.49117L7.65094 6.07384L7.32854 7.36828C7.32854 7.36828 8.22774 7.57435 8.20875 7.58713C8.69961 7.70967 8.78866 8.03448 8.77347 8.29199L8.20806 10.5602C8.24189 10.5688 8.28573 10.5812 8.33406 10.6006L8.20634 10.5688L7.41345 13.7462C7.35339 13.8954 7.20116 14.119 6.85805 14.0341C6.87013 14.0517 5.97714 13.8142 5.97714 13.8142L5.37549 15.2019L6.95298 15.595C7.24638 15.6686 7.53392 15.7455 7.81663 15.818L7.31507 17.8322L8.52563 18.1342L9.0227 16.1418C9.35304 16.2316 9.67406 16.3144 9.98817 16.3924L9.49318 18.3755L10.7051 18.6775L11.2067 16.6675C13.2733 17.0586 14.8276 16.9009 15.4811 15.032C16.0082 13.527 15.4552 12.6589 14.3679 12.0925C15.1597 11.9092 15.7562 11.3883 15.9153 10.3123H15.9157ZM13.1463 14.1953C12.7714 15.7003 10.2377 14.8871 9.41586 14.6827L10.0814 12.0148C10.9029 12.2198 13.537 12.6258 13.1466 14.1953H13.1463ZM13.5208 10.2906C13.179 11.6596 11.07 10.9641 10.3855 10.7935L10.9889 8.3738C11.6734 8.54432 13.877 8.86258 13.5208 10.2906Z" fill={color ? color : altColor} />
            </g>
            <defs>
                <clipPath id="clip0_434_1035">
                    <rect width="22.0917" height="22.0917" fill={color ? color : altColor} transform="translate(0 0.84082)" />
                </clipPath>
            </defs>
        </svg>

    )
}

const EtherumFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_628_7886)">
                <path d="M19.6988 12.4192C18.3631 17.7764 12.9369 21.0364 7.57908 19.7008C2.22377 18.3652 -1.03654 12.9389 0.299398 7.58206C1.6344 2.22425 7.06034 -1.03638 12.4166 0.299249C17.7741 1.63487 21.0341 7.06175 19.6985 12.4192H19.6988Z" fill={fillColor} />
                <path d="M10.3201 3V8.17525L14.6394 10.1298L10.3201 3Z" fill={color ? color : altColor} fillOpacity="0.602" />
                <path d="M10.3199 3L6 10.1298L10.3199 8.17525V3Z" fill={color ? color : altColor} />
                <path d="M10.3201 13.483V16.9995L14.6423 10.9438L10.3201 13.483Z" fill={color ? color : altColor} fillOpacity="0.602" />
                <path d="M10.3199 16.9995V13.4825L6 10.9438L10.3199 16.9995Z" fill={color ? color : altColor} />
                <path d="M10.3201 12.6695L14.6394 10.1297L10.3201 8.17627V12.6695Z" fill={color ? color : altColor} fillOpacity="0.2" />
                <path d="M6 10.1297L10.3199 12.6695V8.17627L6 10.1297Z" fill={color ? color : altColor} fillOpacity="0.602" />
            </g>
            <defs>
                <clipPath id="clip0_628_7886">
                    <rect width="20" height="20" fill={color ? color : altColor} />
                </clipPath>
            </defs>
        </svg>
    )
}

const DashCoinFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_542_2023)">
                <path d="M11.0459 22.9326C17.1463 22.9326 22.0917 17.9872 22.0917 11.8867C22.0917 5.78623 17.1463 0.84082 11.0459 0.84082C4.94541 0.84082 0 5.78623 0 11.8867C0 17.9872 4.94541 22.9326 11.0459 22.9326Z" fill={fillColor} />
                <path d="M13.4078 5.7002H7.85895L7.39929 8.27052L12.4087 8.27755C14.8759 8.27755 15.6052 9.17341 15.5841 10.6579C15.5724 11.4201 15.2441 12.7076 15.101 13.1251C14.7211 14.2367 13.9401 15.5078 11.0133 15.5031L6.14225 15.5007L5.68024 18.0734H11.2173C13.1709 18.0734 14.0011 17.8459 14.8806 17.4402C16.8318 16.5396 17.9927 14.6142 18.457 12.1026C19.1512 8.36198 18.2882 5.7002 13.4078 5.7002Z" fill={color ? color : altColor} />
                <path d="M5.4622 10.5945C4.00818 10.5945 3.79946 11.542 3.66344 12.1142C3.48286 12.8647 3.42422 13.1672 3.42422 13.1672H9.10663C10.5607 13.1672 10.7694 12.2197 10.9054 11.6475C11.086 10.897 11.1446 10.5945 11.1446 10.5945H5.4622Z" fill={color ? color : altColor} />
            </g>
            <defs>
                <clipPath id="clip0_542_2023">
                    <rect width="22.0917" height="22.0917" fill={color ? color : altColor} transform="translate(0 0.84082)" />
                </clipPath>
            </defs>
        </svg>
    )
}

const TetherCoinFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_542_2045)">
                <path d="M11.0459 0.840576C17.1461 0.840576 22.0917 5.78625 22.0917 11.8864C22.0917 17.9866 17.1458 22.9323 11.0459 22.9323C4.9459 22.9323 0 17.988 0 11.8864C0 5.78493 4.94501 0.840576 11.0459 0.840576Z" fill={fillColor} />
                <path d="M12.4092 10.4147V8.77149H16.1668V6.26782H5.93476V8.77149H9.69278V10.4134C6.6386 10.5536 4.34216 11.1585 4.34216 11.8831C4.34216 12.6077 6.6397 13.2126 9.69278 13.3538V18.6172H12.4101V13.3533C15.4587 13.2126 17.7505 12.6082 17.7505 11.8842C17.7505 11.1603 15.4587 10.5558 12.4101 10.4151L12.4092 10.4147ZM12.4101 12.9075V12.9062C12.3334 12.9111 11.9395 12.9347 11.0625 12.9347C10.3613 12.9347 9.86797 12.9148 9.69411 12.9058V12.908C6.99582 12.7884 4.98172 12.3186 4.98172 11.7563C4.98172 11.1941 6.99604 10.7248 9.69411 10.6051V12.4398C9.87084 12.452 10.3763 12.4818 11.074 12.4818C11.9119 12.4818 12.3332 12.4469 12.4105 12.4398V10.6051C15.1035 10.7251 17.113 11.1954 17.113 11.7557C17.113 12.3159 15.1026 12.7865 12.4105 12.9064" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_542_2045">
                    <rect width="22.0917" height="22.0917" fill={color ? color : altColor} transform="translate(0 0.840576)" />
                </clipPath>
            </defs>
        </svg>
    )
}

const UserOutlineIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
const LogoutOutlineIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33333 6.66658V4.99992C8.33333 4.55789 8.50893 4.13397 8.82149 3.82141C9.13405 3.50885 9.55797 3.33325 10 3.33325H15.8333C16.2754 3.33325 16.6993 3.50885 17.0118 3.82141C17.3244 4.13397 17.5 4.55789 17.5 4.99992V14.9999C17.5 15.4419 17.3244 15.8659 17.0118 16.1784C16.6993 16.491 16.2754 16.6666 15.8333 16.6666H10C9.55797 16.6666 9.13405 16.491 8.82149 16.1784C8.50893 15.8659 8.33333 15.4419 8.33333 14.9999V13.3333" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.1666 10H2.49996M2.49996 10L4.99996 7.5M2.49996 10L4.99996 12.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const CheckFilledIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.8335 9.99992L10.0002 14.1666L18.3335 5.83325" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.0001 9.99992L14.1667 5.83325M1.66675 9.99992L5.83341 14.1666L1.66675 9.99992Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const ActivityFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill={fillColor} />
            <path d="M28.8395 32.1642V18.5464" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32.9173 28.0681L28.8395 32.1648L24.7617 28.0681" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.9113 15.8328V29.4505" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.8335 19.9289L18.9113 15.8323L22.9891 19.9289" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const DownloadFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill={fillColor} />
            <path d="M33 27V31C33 31.5304 32.7893 32.0391 32.4142 32.4142C32.0391 32.7893 31.5304 33 31 33H17C16.4696 33 15.9609 32.7893 15.5858 32.4142C15.2107 32.0391 15 31.5304 15 31V27" stroke={color ? color : altColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 22L24 27L29 22" stroke={color ? color : altColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 27V15" stroke={color ? color : altColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const WalletDepositFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill={fillColor} />
            <path d="M14 20.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 28.5H20" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 28.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34 26.03V28.11C34 31.62 33.11 32.5 29.56 32.5H18.44C14.89 32.5 14 31.62 14 28.11V19.89C14 16.38 14.89 15.5 18.44 15.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 15.5V21.5L34 19.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 21.5L30 19.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const ArrowLeftIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 12.2739L19.25 12.2739" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.2998 18.2985L4.2498 12.2745L10.2998 6.24951" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const WalletDebitFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.0646973" y="0.166504" width="46.9259" height="46.9259" rx="23.463" fill={fillColor} />
            <path d="M14 20.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 28.5H20" stroke={color ? color : altColor} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 28.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34 26.03V28.11C34 31.62 33.11 32.5 29.56 32.5H18.44C14.89 32.5 14 31.62 14 28.11V19.89C14 16.38 14.89 15.5 18.44 15.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 21.5V15.5L34 17.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 15.5L30 17.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const CheckCircleFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_627_6646)">
                <rect x="43" y="37" width="115" height="115" rx="56.0976" fill={fillColor} />
                <path d="M122.939 77.6704L92.0854 108.524L78.061 94.4997" stroke={color ? color : altColor} strokeWidth="7.0122" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="38.7927" y="32.7927" width="123.415" height="123.415" rx="60.3049" stroke="#2972FF" strokeOpacity="0.05" strokeWidth="8.41463" />
            </g>
            <defs>
                <filter id="filter0_d_627_6646" x="0.926914" y="0.53667" width="199.146" height="199.146" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="5.60976" />
                    <feGaussianBlur stdDeviation="16.8293" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.160784 0 0 0 0 0.447059 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_627_6646" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_627_6646" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
export {
    HomeIcon,
    ChartIcon,
    WalletAddIcon,
    WalletIcon,
    BriefcaseIcon,
    SettingsIcon,
    QuestionCircleIcon,
    BellIcon,
    ChevronDownIcon,
    CoinSwapIcon,
    PaperIcon,
    ExchangeIcon,
    BitCoinFilledIcon,
    EtherumFilledIcon,
    DashCoinFilledIcon,
    TetherCoinFilledIcon,
    UserOutlineIcon,
    LogoutOutlineIcon,
    CheckFilledIcon,
    ActivityFilledIcon,
    DownloadFilledIcon,
    WalletDepositFilledIcon,
    ArrowLeftIcon,
    WalletDebitFilledIcon,
    CheckCircleFilledIcon
}