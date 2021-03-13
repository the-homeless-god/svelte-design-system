import Root from './widgets/components/root/Root.svelte'

import { getWidget } from './widgets'
import { Widgets } from './widgets/widget.types'

export default getWidget(Root, Widgets.root)
