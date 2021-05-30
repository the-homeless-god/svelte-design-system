<script>
  import { writable } from 'svelte/store'
  import Card from './../../../components/card/Card.svelte'
  import Header from '../../../components/header/Header.svelte'
  import Slider from '../../../components/slider/Slider.svelte'
  import { getSize } from './../../../components/utils'
  import DefaultLogo from '../../../components/logo/DefaultLogo.svelte'
  import { Sizes } from '../../../components/types'
  import { getRootContent } from './Root.utils'

  import './Root.scss'

  const content = getRootContent()
  const isComponentView = writable(false)

  const showComponents = () => isComponentView.set(true)
</script>

{#if $isComponentView}
  <Slider id="root-slider" />
{:else}
  <div on:click={showComponents} class="root">
    <Header {content} />
    <Card size={getSize(Sizes.max)}>
      <DefaultLogo />
    </Card>
  </div>
{/if}
