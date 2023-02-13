import { goto } from '$app/navigation';
import { browser } from '$app/environment';

export const openUrlInNewTab = (url:string) => {
    if (
        browser &&
        (window !== null) && 
        (typeof window !== "undefined")
    ) {                                        
        const res = window.open(url, '_blank')
        res?.focus()            
    } else {
        goto(url)
    }
}

export const LabTwitterLink = 'https://twitter.com/KrishnaswamyLab'
export const LabGitHubLink = 'https://github.com/KrishnaswamyLab'

export const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere 
    lectus libero, non feugiat odio finibus sed. Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit. Ut sollicitudin interdum metus sit amet pretium. In hac habitasse platea dictumst. Fusce 
    auctor nibh ante, porttitor commodo felis faucibus eget. Donec purus nunc, sollicitudin sed pharetra 
    quis, posuere a leo. Integer pellentesque lorem eget lobortis auctor. Nullam in tellus ac risus 
    luctus pharetra. Nunc et scelerisque erat, at sodales mauris. `
