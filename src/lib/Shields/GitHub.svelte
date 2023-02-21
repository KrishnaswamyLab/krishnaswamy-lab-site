<script lang="ts">
    export let href: string
    const githubShield = "https://img.shields.io/static/v1?label=Download from&message=GitHub&color=yellow&logo=GitHub"
</script>
<a {href} class="{$$props.class}">
    <img src="{githubShield}" class="h-4 m-0" alt="Download from GitHub">
</a>