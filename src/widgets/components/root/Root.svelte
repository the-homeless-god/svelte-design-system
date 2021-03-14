<script>
  import Card from './../../../components/card/Card.svelte'
  import Header from '../../../components/header/Header.svelte'
  import { getSize } from './../../../components/utils'
  import DefaultLogo from '../../../components/logo/DefaultLogo.svelte'
  import { Sizes } from '../../../components/types'
  import { getRootContent } from './Root.utils'

  import './Root.scss'

  const content = getRootContent()
</script>

<div class="root">
  <Header {content} />
  <Card size={getSize(Sizes.max)}>
    <DefaultLogo />
  </Card>
</div>
