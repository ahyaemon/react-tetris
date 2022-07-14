import {useMediaQuery} from "react-responsive";

export function useResponsive(): { isDesktop: boolean, isMobile: boolean } {

    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    return {
        isDesktop,
        isMobile: !isDesktop,
    }
}
