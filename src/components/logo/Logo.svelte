<script>
  import type { Logo } from './Logo.types'
  import './Logo.scss'

  export let logo: Logo
</script>

<div class="logo__container"><img alt="logo" {...logo} /></div>
