<script>
  import Card from './../../../components/card/Card.svelte'
  import Header from '../../../components/header/Header.svelte'
  import DefaultLogo from '../../../components/logo/DefaultLogo.svelte'

  import { getRootContent } from './Root.utils'
  import './Root.scss'

  const content = getRootContent()
</script>

<div class="root">
  <Header {content} />
  <Card>
    <DefaultLogo />
  </Card>
</div>
