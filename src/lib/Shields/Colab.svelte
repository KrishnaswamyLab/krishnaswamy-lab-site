<script lang="ts">
    export let href: string
    const colabShield = "https://img.shields.io/static/v1?label=Run in&message=Google Colab&color=orange&logo=Google Cloud"
</script>
<a {href}>
    <img src="{colabShield}" class="h-4 m-0"  alt="Run in Google Colab">
</a>