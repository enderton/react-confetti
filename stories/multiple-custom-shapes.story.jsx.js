import React from 'react'
import { storiesOf } from '@storybook/react'
import SizedConfetti from './SizedConfetti'

function drawFlag(ctx) {
  ctx.font = '42px Proxima Nova'
  ctx.fillText('🇬🇧', 0, 0)
}

function drawCrown(ctx) {
  ctx.font = '42px Proxima Nova'
  ctx.fillText('👑', 0, 0)
}

storiesOf('Props|Demos', module)
  .add('Multiple Shapes', () => (
    <SizedConfetti
      drawShapes={[drawFlag, drawCrown]}
    />
  ))
