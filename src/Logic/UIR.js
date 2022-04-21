import config from '../config'

export function setTitle(title){
    const t = title ? `${title} - ${config.SiteName}` : config.SiteName
    document.title = t
    window.scrollTo(0, 0)
}