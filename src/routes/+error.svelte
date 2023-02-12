<script>
    import { page } from '$app/stores';
</script>

<div class="bg-primary h-16"></div>

<div class="flex place-content-center place-items-center">
    <div class="card">
        <div class="card-body ">
            <div class="text-center text-8xl font-extralight">
                {$page.status}
            </div>
            <h1 class="text-4xl text-error">
                {$page.error.message}
            </h1>
        </div>
    </div>
    
</div>
