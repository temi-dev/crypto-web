import { ChevronLeftIcon } from "../icons/icons"

const SettingsMenuCta = ({ cta }: { cta: any }) => {
    return (

        <div className="mobile-settings-page-title" onClick={cta} >
            <button><ChevronLeftIcon></ChevronLeftIcon></button > Settings menu
        </div>

    )
}

export default SettingsMenuCta