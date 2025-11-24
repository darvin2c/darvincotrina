import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://darvincotrina.com"

    // Main pages and sections from navigation
    const routes = [
        "",
        "#inicio",
        "#sobre-mi",
        "#experiencia",
        "#educacion",
        "#proyectos",
        "#habilidades",
        "#contacto",
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }))
}
