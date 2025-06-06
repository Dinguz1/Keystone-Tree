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

export type HomeCard = {
    image: string,
    title: string,
    content: string
}