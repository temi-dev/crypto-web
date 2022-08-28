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
            <path d="M14 20.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 28.5H20" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 28.5H26.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
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

const CancelIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9498 7.05029L7.05033 16.9498" stroke={color ? color : altColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.05029 7.05029L16.9498 16.9498" stroke={color ? color : altColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const NigeriaIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_812_17901" transform="translate(-0.208489 -0.209699) scale(0.00277226)" />
                </pattern>
                <image id="image0_812_17901" width="512" height="512" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    )
}

const NotificationBellIllustrationIcon = () => {
    return (
        <svg width="156" height="153" viewBox="0 0 156 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M76.5 153C118.75 153 153 118.75 153 76.5C153 34.2502 118.75 0 76.5 0C34.2502 0 0 34.2502 0 76.5C0 118.75 34.2502 153 76.5 153Z" fill="#EFF1FD" />
            <circle cx="18.36" cy="65.7905" r="3.06" fill="white" />
            <circle cx="107.865" cy="25.2455" r="0.765" fill="white" />
            <circle cx="17.5949" cy="25.2453" r="4.59" fill="white" />
            <circle cx="90.2701" cy="8.41512" r="2.295" fill="#152AB3" />
            <circle cx="82.6199" cy="133.11" r="2.295" fill="white" />
            <circle cx="110.925" cy="143.82" r="3.06" fill="#152AB3" />
            <circle cx="150.705" cy="62.7296" r="4.59" fill="#152AB3" />
            <circle cx="12.2399" cy="119.34" r="4.59" fill="#152AB3" />
            <path d="M103.841 76.7285C101.223 73.6717 100.034 71.0228 100.034 66.5225V64.9923C100.034 59.1279 98.6838 55.3493 95.7492 51.5708C91.2263 45.7027 83.6122 42.166 76.1583 42.166H75.8414C68.5442 42.166 61.1686 45.5403 56.5674 51.1702C53.4726 55.0245 51.9662 58.9655 51.9662 64.9923V66.5225C51.9662 71.0228 50.855 73.6717 48.1591 76.7285C46.1754 78.9804 45.5415 81.8748 45.5415 85.0073C45.5415 88.1434 46.5707 91.1135 48.6363 93.5279C51.3322 96.4222 55.1393 98.27 59.0283 98.5912C64.6588 99.2336 70.2892 99.4754 76.0016 99.4754C81.7104 99.4754 87.3409 99.0712 92.9749 98.5912C96.8604 98.27 100.667 96.4222 103.363 93.5279C105.425 91.1135 106.458 88.1434 106.458 85.0073C106.458 81.8748 105.824 78.9804 103.841 76.7285Z" fill="#1D38E4" />
            <path opacity="0.4" d="M83.1978 103.901C81.4065 103.519 70.491 103.519 68.6996 103.901C67.1682 104.255 65.5122 105.078 65.5122 106.882C65.6012 108.604 66.6091 110.123 68.0051 111.086L68.0016 111.09C69.8072 112.498 71.9262 113.393 74.1449 113.714C75.3273 113.876 76.531 113.869 77.7561 113.714C79.9712 113.393 82.0902 112.498 83.8958 111.09L83.8923 111.086C85.2883 110.123 86.2962 108.604 86.3852 106.882C86.3852 105.078 84.7292 104.255 83.1978 103.901Z" fill="#1D38E4" />
        </svg>

    )
}

const ArrowDownFilledIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.8046 7.28754C19.747 6.8632 19.3833 6.53613 18.9431 6.53613C18.463 6.53613 18.0737 6.92536 18.0737 7.40551V19.2244C17.6322 19.2329 17.1952 19.2483 16.7693 19.2707L16.006 19.3194C14.1364 19.4606 12.5858 19.7478 11.9968 20.1856L11.8917 20.2755C11.197 20.9711 11.7903 22.9539 12.9113 25.0828L13.2021 25.6175C13.3526 25.8856 13.5103 26.1546 13.6738 26.4221L14.008 26.9546C14.0648 27.0428 14.1222 27.1307 14.18 27.2182L14.5324 27.7376L14.8935 28.2432L15.2608 28.7311C16.6156 30.483 18.0411 31.7984 18.9516 31.7984C19.644 31.7984 20.6442 31.0069 21.6843 29.8346L22.0527 29.4057C22.3603 29.0362 22.6686 28.638 22.9708 28.2214L23.3302 27.7134L23.6811 27.1918L24.0209 26.6607C24.1876 26.3934 24.3492 26.1241 24.5042 25.8549L24.8049 25.3175L25.0854 24.7845C26.1186 22.7552 26.6483 20.9132 26.0116 20.2756C25.5389 19.8029 23.9181 19.4857 21.9289 19.3296L21.1672 19.2786C20.9086 19.2641 20.6457 19.2521 20.3802 19.2427L19.8125 19.2281V7.40551L19.8046 7.28754Z" fill={color ? color : altColor} />
        </svg>
    )
}

const ArrowRightTopFilledIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.6506 10.7934C16.9578 12.8186 16.0571 14.3493 15.1554 14.3499C14.2364 14.3499 12.1019 12.7046 10.0415 10.722L1.68471 19.0788C1.34519 19.4183 0.794737 19.4183 0.455226 19.0788C0.144007 18.7676 0.118072 18.2791 0.377421 17.9384L0.455226 17.8493L8.81354 9.49103C8.49601 9.15945 8.1871 8.82598 7.89213 8.49603L7.38961 7.92137C6.09349 6.40439 5.17162 5.03398 5.17162 4.36552C5.17219 3.54281 6.57033 2.69774 8.46176 2.02083L9.01482 1.83217L9.59002 1.65365C9.68748 1.62479 9.78566 1.5964 9.88447 1.5685L10.4841 1.40703L11.0942 1.25818C11.1965 1.23448 11.2991 1.21134 11.4017 1.18879L12.0187 1.0607L12.6344 0.947682L13.2442 0.850733L13.8432 0.770833C15.9159 0.522182 17.7068 0.605001 18.3117 1.20982C18.9848 1.88294 19.0393 3.97063 18.7121 6.28956L18.6182 6.89896L18.508 7.51419L18.3823 8.13058C18.3601 8.23314 18.3373 8.33557 18.3139 8.43774L18.1668 9.0471L18.0066 9.64595C17.9511 9.84329 17.8936 10.0381 17.8342 10.2296L17.6506 10.7934Z" fill={color ? color : altColor} />
        </svg>

    )
}

const ArrowSidewaysFilledIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.418 0.777565C17.0267 0.169685 18.6208 0.547961 20.4361 1.40302L20.9601 1.65986C21.0482 1.70468 21.1366 1.75047 21.2253 1.79718L21.7599 2.08799C22.1175 2.2886 22.4765 2.50211 22.8316 2.725L23.3607 3.06593L23.88 3.41829L24.3857 3.77943C26.3755 5.23805 27.9409 6.8442 27.9409 7.83752C27.9409 8.81505 26.3634 10.4059 24.3639 11.8567L23.8559 12.2161L23.3343 12.567L22.8032 12.9068C22.7141 12.9624 22.6248 13.0174 22.5353 13.0718L21.9974 13.3901L21.4599 13.6908L20.927 13.9713C18.8976 15.0045 17.0557 15.5342 16.4181 14.8975C15.9454 14.4248 15.6282 12.804 15.4721 10.8148L15.421 10.0531C15.4066 9.79448 15.3946 9.53162 15.3852 9.26605L15.3706 8.69892L3.54769 8.69892L3.42972 8.69099C3.00538 8.63342 2.67831 8.26968 2.67831 7.82955C2.67831 7.34941 3.06755 6.96017 3.54769 6.96017L15.3669 6.96017C15.3754 6.51848 15.3908 6.08122 15.4132 5.65517L15.4619 4.89186C15.6031 3.0223 15.8903 1.47171 16.3281 0.882736L16.418 0.777565ZM25.1398 23.7081C25.5641 23.6505 25.8912 23.2868 25.8912 22.8466C25.8912 22.3665 25.502 21.9772 25.0218 21.9772H13.2026C13.1941 21.5355 13.1787 21.0983 13.1563 20.6722L13.1076 19.9089C12.9664 18.0394 12.6792 16.4888 12.2414 15.8998L12.1515 15.7946C11.5428 15.1868 9.94868 15.565 8.13344 16.4201L7.60945 16.6769C7.52133 16.7218 7.43288 16.7675 7.34418 16.8143L6.80956 17.1051C6.452 17.3057 6.09303 17.5192 5.73792 17.7421L5.20881 18.083L4.68945 18.4354L4.18382 18.7965C2.19402 20.2551 0.628605 21.8613 0.628605 22.8546C0.628605 23.8321 2.20613 25.423 4.20562 26.8738L4.71361 27.2332L5.23517 27.5841L5.76629 27.9239C5.85538 27.9795 5.94471 28.0345 6.03418 28.0888L6.57211 28.4072L7.10957 28.7079L7.64254 28.9884C9.67186 30.0215 11.5138 30.5513 12.1514 29.9146C12.6241 29.4419 12.9413 27.821 13.0974 25.8319L13.1485 25.0702C13.1629 24.8116 13.1749 24.5487 13.1843 24.2831L13.1989 23.716H25.0218L25.1398 23.7081Z" fill={color ? color : altColor} />
        </svg>
    )
}

const WalletFilledIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.3055 5.34007C21.1394 4.64185 17.8591 4.64185 14.6929 5.34007L14.0299 5.48601C9.61361 6.45478 6.12658 9.84042 5.02797 14.2262C4.23086 17.4222 4.23086 20.765 5.02797 23.9609C6.12744 28.3459 9.61422 31.7307 14.0299 32.6995L14.6913 32.8455C17.8591 33.5434 21.141 33.5434 24.3071 32.8455L24.9686 32.6995C29.3849 31.7308 32.8719 28.3451 33.9705 23.9594C34.7677 20.7634 34.7677 17.4206 33.9705 14.2246C32.8714 9.83945 29.3844 6.45452 24.9686 5.48601L24.3071 5.34007H24.3055ZM28.9263 15.6157C29.5223 15.5142 30.1275 15.477 30.7314 15.5046C31.3913 15.5363 31.91 16.0519 32.0004 16.7038C32.2145 18.2901 32.2145 19.8969 32.0004 21.4816C31.9232 22.1354 31.3886 22.6399 30.7314 22.6792C30.1275 22.7074 29.5223 22.6707 28.9263 22.5697L28.8089 22.5507C27.2512 22.2858 26.0488 21.2341 25.6412 19.9112C25.4764 19.378 25.4764 18.8074 25.6412 18.2742C26.0488 16.9497 27.2512 15.8996 28.8089 15.6347L28.9263 15.6157ZM12.1169 14.299C12.1169 13.7676 12.5467 13.3393 13.0797 13.3393H19.4992C20.0306 13.3393 20.4621 13.7676 20.4621 14.2974C20.4617 14.5524 20.36 14.7967 20.1794 14.9767C19.9988 15.1566 19.7542 15.2575 19.4992 15.2571H13.0797C12.8248 15.2575 12.5801 15.1566 12.3995 14.9767C12.219 14.7967 12.1173 14.5524 12.1169 14.2974V14.299Z" fill={color ? color : altColor} />
        </svg>

    )
}

const CopyIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3336 10.501H12.8336C11.5449 10.501 10.5002 11.5456 10.5002 12.8343V23.3343C10.5002 24.623 11.5449 25.6676 12.8336 25.6676H23.3336C24.6222 25.6676 25.6669 24.623 25.6669 23.3343V12.8343C25.6669 11.5456 24.6222 10.501 23.3336 10.501Z" stroke="#1D38E4" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.8335 17.5007H4.66683C4.04799 17.5007 3.4545 17.2548 3.01691 16.8172C2.57933 16.3796 2.3335 15.7862 2.3335 15.1673V4.66732C2.3335 4.04848 2.57933 3.45499 3.01691 3.0174C3.4545 2.57982 4.04799 2.33398 4.66683 2.33398H15.1668C15.7857 2.33398 16.3792 2.57982 16.8167 3.0174C17.2543 3.45499 17.5002 4.04848 17.5002 4.66732V5.83398" stroke={color ? color : altColor} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const GraphUp = () => {
    return (
        <svg width="45" height="29" viewBox="0 0 45 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.2251 23.1935L4.28687 11.0613L7.34864 23.9687L10.4104 15.9525L13.4722 17.022L16.5339 10.7868L19.5957 6.25482L22.6575 5.53152L25.7192 7.5317L28.781 16.3334L31.8428 7.85914L34.9046 13.4022L37.9663 11.2255L41.0281 0.587891L44.0899 17.5866" stroke="#1355FF" strokeWidth="0.974199" />
            <path d="M4.28687 11.0613L1.2251 23.1935V28.8397H44.0899V17.5866L41.0281 0.587891L37.9663 11.2255L34.9046 13.4022L31.8428 7.85914L28.781 16.3334L25.7192 7.5317L22.6575 5.53152L19.5957 6.25482L16.5339 10.7868L13.4722 17.022L10.4104 15.9525L7.34864 23.9687L4.28687 11.0613Z" fill="url(#paint0_linear_862_19712)" />
            <defs>
                <linearGradient id="paint0_linear_862_19712" x1="22.6575" y1="5.94599" x2="22.6575" y2="28.8397" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1F28EB" stopOpacity="0.1" />
                    <stop offset="1" stopColor="#1F28EB" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const GraphDown = () => {
    return (
        <svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.22522 23.422L4.28699 11.2898L7.34876 24.1972L10.4105 16.181L13.4723 17.2505L16.5341 11.0153L19.5958 6.48333L22.6576 5.76003L25.7194 7.76022L28.7811 16.5619L31.8429 8.08765L34.9047 13.6308L37.9664 11.454L41.0282 0.816406L44.09 17.8151" stroke="#FC3400" strokeWidth="0.974199" />
            <path d="M4.28699 11.2898L1.22522 23.422V29.0682H44.09V17.8151L41.0282 0.816406L37.9664 11.454L34.9047 13.6308L31.8429 8.08766L28.7811 16.5619L25.7194 7.76022L22.6576 5.76003L19.5958 6.48333L16.5341 11.0153L13.4723 17.2505L10.4105 16.181L7.34876 24.1972L4.28699 11.2898Z" fill="url(#paint0_linear_862_19796)" />
            <defs>
                <linearGradient id="paint0_linear_862_19796" x1="22.6576" y1="6.1745" x2="22.6576" y2="29.0682" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FC3400" stopOpacity="0.1" />
                    <stop offset="1" stopColor="#FC3400" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const WalletPeerToPeerIcon = () => {
    return (
        <picture>
            <img src="/icons/peer-to-peer.svg" alt="peer to peer"></img>
        </picture>
    )
}

const BankCircleFilledIcon = () => {
    return (
        <picture>
            <img src="/icons/bank-filled.svg" alt="bank"></img>
        </picture>
    )
}

const HometownLogo = () => {
    return (
        <picture>
            <img src="/images/hometown.svg" alt="bank"></img>
        </picture>
    )
}

const RavenLogo = () => {
    return (
        <picture>
            <img src="/images/raven.svg" alt="bank"></img>
        </picture>
    )
}

const MenuBarFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21.75" fill={fillColor} stroke={fillColor} strokeWidth="0.5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.6 16C13.6 15.6817 13.7264 15.3765 13.9514 15.1515C14.1765 14.9264 14.4817 14.8 14.8 14.8H29.2C29.5182 14.8 29.8235 14.9264 30.0485 15.1515C30.2735 15.3765 30.4 15.6817 30.4 16C30.4 16.3182 30.2735 16.6235 30.0485 16.8485C29.8235 17.0736 29.5182 17.2 29.2 17.2H14.8C14.4817 17.2 14.1765 17.0736 13.9514 16.8485C13.7264 16.6235 13.6 16.3182 13.6 16ZM13.6 22C13.6 21.6817 13.7264 21.3765 13.9514 21.1515C14.1765 20.9264 14.4817 20.8 14.8 20.8H29.2C29.5182 20.8 29.8235 20.9264 30.0485 21.1515C30.2735 21.3765 30.4 21.6817 30.4 22C30.4 22.3182 30.2735 22.6235 30.0485 22.8485C29.8235 23.0736 29.5182 23.2 29.2 23.2H14.8C14.4817 23.2 14.1765 23.0736 13.9514 22.8485C13.7264 22.6235 13.6 22.3182 13.6 22ZM13.6 28C13.6 27.6817 13.7264 27.3765 13.9514 27.1515C14.1765 26.9264 14.4817 26.8 14.8 26.8H29.2C29.5182 26.8 29.8235 26.9264 30.0485 27.1515C30.2735 27.3765 30.4 27.6817 30.4 28C30.4 28.3182 30.2735 28.6235 30.0485 28.8485C29.8235 29.0736 29.5182 29.2 29.2 29.2H14.8C14.4817 29.2 14.1765 29.0736 13.9514 28.8485C13.7264 28.6235 13.6 28.3182 13.6 28Z" fill={color} />
        </svg>
    )
}

const WalletPlusIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 9V15C22 15.23 22 15.45 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.46 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.52002 7.10999H21.48" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.52002 2.10999V6.96997" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.48 2.10999V6.52002" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 18.5C23 18.86 22.96 19.21 22.87 19.55C22.76 20 22.58 20.43 22.35 20.82C21.57 22.12 20.14 23 18.5 23C17.42 23 16.44 22.62 15.68 21.98C15.67 21.98 15.67 21.98 15.67 21.98C15.61 21.93 15.56 21.89 15.51 21.84C15.5 21.83 15.49 21.82 15.47 21.81C15.15 21.53 14.87 21.19 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.28 14.48 16.17 15.27 15.36C16.09 14.52 17.24 14 18.5 14C19.81 14 21 14.56 21.81 15.46C21.82 15.47 21.83 15.49 21.84 15.5C21.89 15.55 21.94 15.61 21.98 15.67C22.62 16.44 23 17.43 23 18.5Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.1801 18.48H16.8201" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 16.84V20.2" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const WalletMinusIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 9V15C22 15.23 22 15.45 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.46 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.52002 7.10999H21.48" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.52002 2.10999V6.96997" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.48 2.10999V6.52002" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 18.5C23 18.86 22.96 19.21 22.87 19.55C22.76 20 22.58 20.43 22.35 20.82C21.57 22.12 20.14 23 18.5 23C17.42 23 16.44 22.62 15.68 21.98C15.67 21.98 15.67 21.98 15.67 21.98C15.61 21.93 15.56 21.89 15.51 21.84C15.5 21.83 15.49 21.82 15.47 21.81C15.15 21.53 14.87 21.19 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.28 14.48 16.17 15.27 15.36C16.09 14.52 17.24 14 18.5 14C19.81 14 21 14.56 21.81 15.46C21.82 15.47 21.83 15.49 21.84 15.5C21.89 15.55 21.94 15.61 21.98 15.67C22.62 16.44 23 17.43 23 18.5Z" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.1801 18.48H16.8201" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const WalletReceiveIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.5H14.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 16.5H8" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 16.5H14.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 3.5V9.5L22 7.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 9.5L18 7.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const WalletSendIcon = ({ color }: { color?: string }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.5H14.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 16.5H8" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 16.5H14.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 9.5V3.5L22 5.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 3.5L18 5.5" stroke={color ? color : altColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const CircleCancelFilledIcon = ({ color, fillColor }: { color?: string, fillColor: string }) => {
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21.75" fill={fillColor} stroke={fillColor} strokeWidth="0.5" />
            <g clipPath="url(#clip0_1500_26867)">
                <path d="M29 16.41L27.59 15L22 20.59L16.41 15L15 16.41L20.59 22L15 27.59L16.41 29L22 23.41L27.59 29L29 27.59L23.41 22L29 16.41Z" fill={color ? color : altColor} />
            </g>
            <defs>
                <clipPath id="clip0_1500_26867">
                    <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                </clipPath>
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
    CheckCircleFilledIcon,
    CancelIcon,
    NigeriaIcon,
    NotificationBellIllustrationIcon,
    ArrowDownFilledIcon,
    ArrowRightTopFilledIcon,
    ArrowSidewaysFilledIcon,
    WalletFilledIcon,
    CopyIcon,
    GraphUp,
    GraphDown,
    WalletPeerToPeerIcon,
    BankCircleFilledIcon,
    HometownLogo,
    RavenLogo,
    MenuBarFilledIcon,
    WalletPlusIcon,
    WalletMinusIcon,
    WalletSendIcon,
    WalletReceiveIcon,
    CircleCancelFilledIcon
}