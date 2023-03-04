<script lang="ts">
export let images:string[] = [];

const basename = (img:string) => {
    let parts = img.split('/')
    let bname = parts[parts.length-1]    
    return bname
}

let currentImage = 0;
const handleClick = (i:number) => {
    currentImage += i
    if (currentImage > images.length - 1) {
        currentImage = 0
    } else if (currentImage < 0) {
        currentImage = images.length - 1
    }
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

</script>
<div class="{$$props.class}">
    <div class="carousel carousel-end w-full rounded-box place-items-center">    
        
        <div class="carousel-item w-full relative" id="{basename(images[currentImage])}">
            <div class="bg-cover bg-no-repeat bg-center w-full h-96" style="background-image: url({images[currentImage]})"></div>
            <div class="
                absolute flex justify-between 
                transform -translate-y-1/2 left-5 right-5 
                top-1/2
            ">                
                    <div on:click={()=>handleClick(-1)} on:keydown={()=>handleClick(-1)} class="btn btn-circle">
                        ❮
                    </div> 
                                
                    <div on:click={()=>handleClick(1)} on:keydown={()=>handleClick(1)} class="btn btn-circle">
                        ❯
                    </div>                 
            </div>
        </div> 
    </div>


    <div class="flex justify-center w-full py-2 gap-2 relative bottom-0">
        {#each images as image, i}
        <div on:click={()=>handleGoTo(i)} on:keydown={()=>handleGoTo(i)} class="btn btn-xs">{i+1}</div> 
        {/each}        
    </div>
</div>

    
