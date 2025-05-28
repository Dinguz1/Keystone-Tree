/**
 * Defines the content of the route objects used in navigation
 */
export type Route = {
    txt: string,
    href?: string | undefined
    links: {
        txt: string,
        href: string
    }[]
}