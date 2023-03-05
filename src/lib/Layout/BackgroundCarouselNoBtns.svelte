<script lang="ts">
    import { onMount } from "svelte";


export let images:string[] = [];

const basename = (img:string) => {
    let parts = img.split('/')
    let bname = parts[parts.length-1]    
    return bname
}

let currentImage = 1;
const handleClick = (i:number) => {
    // clearTimeout(timer);
    currentImage += i
    if (currentImage > images.length - 1) {
        currentImage = 0
    } else if (currentImage < 0) {
        currentImage = images.length - 1
    }
    timer = setTimeout(() => handleClick(1), 5000);
}


const handleGoTo = (i:number) => {
    if (i > images.length - 1) {
        currentImage = 0
    } else if (i < 0) {
        currentImage = images.length - 1
    } else {
        currentImage = i
    }
}

let timer:any;
onMount(() => {
    clearTimeout(timer);
    timer = setTimeout(() => handleClick(1), 5000);

})

</script>

<div class="w-full carousel carousel-end rounded-box place-items-center"> 
    {#each images as image, i}
        <div class="carousel-item w-full h-[36rem] object-cover" id="{basename(image)}">            
            <img src={image} alt="{basename(image)}" class="w-full object-cover"/>
        </div>
        {/each}       
    <!-- <div class="w-full bg-cover bg-center bg-no-repeat">        
        <img
            class="w-full h-[36rem] z-[-100]" 
            src={images[currentImage]}
            alt={basename(images[currentImage])}
        />
    </div>        -->
</div>   


    
