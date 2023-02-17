<script lang="ts">
    export let href: string;
    export let howClass:string = '';
</script>

<div class="card card-bordered border-slate-700 grid-cols-1">
    <div class="card-body place-items-center">
        <div class="card-title">
            <span class="capitalize">
                <slot name="what">

                </slot>
            </span>
        </div>
        <a {href} class="py-2">
            <slot name="icon">

            </slot>
        </a>                        
        <a 
            {href}
            class="link link-hover break-all {howClass}"
        >
            <slot name="how">
                smita.krishnaswamy@yale.edu
            </slot>
        </a>
    </div>                    
</div>