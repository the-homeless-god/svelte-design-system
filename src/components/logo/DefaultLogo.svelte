<script>
  import Logo from './Logo.svelte'
  import { getLogo } from './Logo.utils'

  const logo = getLogo()
</script>

<Logo {logo} />
