<script>
  import type { Size } from '../types'

  import './Card.scss'

  export let size: Size
</script>

<div class="card" {...size}>
  <slot />
</div>
