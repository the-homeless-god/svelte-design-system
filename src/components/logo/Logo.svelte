<script>
  import type { Logo } from './Logo.types'
  import './Logo.scss'

  export let logo: Logo
</script>

<div class="logo__container"><img {...logo} alt={logo.alt} /></div>
