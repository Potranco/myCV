import { ReactNode } from 'react'
import './ButtonTooltip.css'

type props = {
    text: string,
    title?: string,
    href: string,
    target?: string,
    tooltip: string,
    icon?: ReactNode,
}
const ICON = (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="2em"
        height="2em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
    </svg>
)

const ButtonTooltip = ({
    text, tooltip, title, href, target = '_blank', icon = ICON
}:props) => {
    return (
        <a 
            href={href}
            className="absolute right-[-130px] bottom-2 z-50"
            target={target}
            rel='noopener noreferrer'
            role='link'
        >
        <div className="ButtonTooltip" data-tooltip={tooltip} title={title}>
            <div className="ButtonTooltip-wrapper">
                <div className="ButtonTooltip-text">{text}</div>
                <span className="ButtonTooltip-icon">
                    {icon}
                </span>
            </div>
        </div>
        </a>
    )
}

export default ButtonTooltip