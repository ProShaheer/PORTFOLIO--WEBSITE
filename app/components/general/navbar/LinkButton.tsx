import Link from 'next/link'
import { IconType } from 'react-icons'

interface LinkButtonProps {
    href: string,
    text: string,
    icon?: IconType,
    IconPosition?: "right" | "left",
    rounded ?: boolean,
    download: boolean

}

export default function LinkButton({
    href,
    text,
    icon: Icon,
    IconPosition = "right",
    rounded,
    download = false,
}: LinkButtonProps) {
    return (
        <Link href={href} download={download} className={`px-8 py-3
        bg-linear-to-r from-blue-900 to
        hover:from-blue-800 to bg-purple-700
        text-white font-medium
        transition-all duration-300
        hover:scale-[1.02] active:scale-[0.98]
        inline-flex items-center justify-center gap-2
        ${rounded ? "rounded-full" : "rounded-lg"}
        `}>
            {Icon && IconPosition === "left" && <Icon className="w-5 h-5" />}
            {text}
            {Icon && IconPosition === "right" && <Icon className="w-5 h-5" />}
        </Link>
    )
}
