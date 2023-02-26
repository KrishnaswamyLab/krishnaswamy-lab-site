<script lang="ts">
export let images:string[] = [];

const basename = (img:string) => {
    let parts = img.split('/')
    let bname = parts[parts.length-1]    
    return bname
}
</script>


<div>
<div class="carousel carousel-end w-full rounded-box place-items-center">                    
    {#each images as image, i}
    <div class="carousel-item w-full relative" id="{basename(image)}">
        <img src={image} alt="{basename(image)}" class="w-full"/>

        <div class="
            absolute flex justify-between 
            transform -translate-y-1/2 left-5 right-5 
            top-1/2
        ">
            {#if i == 0}
                <a href="#{basename(images[images.length-1])}" class="btn btn-circle">
                    ❮
                </a> 
            {:else}
                <a href="#{basename(images[i-1])}" class="btn btn-circle">
                    ❮
                </a> 
            {/if}

            {#if i == images.length-1}
                <a href="#{basename(images[0])}" class="btn btn-circle">
                    ❯
                </a> 
            {:else}
                <a href="#{basename(images[i+1])}" class="btn btn-circle">
                    ❯
                </a> 
            {/if}            
        </div>
    </div> 
    {/each}
</div>


<div class="flex justify-center w-full py-2 gap-2 relative bottom-0">
    {#each images as image, i}
        <a href="#{basename(image)}" class="btn btn-xs">{i+1}</a> 
    {/each}        
</div>
</div>

    
