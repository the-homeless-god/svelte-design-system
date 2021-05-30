<script>
  import { onMount } from 'svelte'
  import { initSlider } from './Slider.utils'
  import './Slider.scss'

  export let id: string
  export let sectionClass: string = 'section'
  export let pageClass: string = 'page'

  onMount(() => initSlider(id, sectionClass, pageClass))
</script>

<div {id} class="slider__container">
  <div class={sectionClass}>
    <div class={pageClass}>
      <h1>First section</h1>
      <p>..and it's first page</p>
    </div>

    <div class={pageClass}>
      <h1>First section</h1>
      <p>..and it's second page</p>
    </div>
  </div>

  <div class={sectionClass}>
    <div class={pageClass}>
      <h1>Second section</h1>
      <p>..and it's first page</p>
    </div>

    <div class={pageClass}>
      <h1>Second section</h1>
      <p>..and it's second page</p>
    </div>

    <div class={pageClass}>
      <h1>Second section</h1>
      <p>..and it's third page</p>
    </div>
  </div>
</div>
