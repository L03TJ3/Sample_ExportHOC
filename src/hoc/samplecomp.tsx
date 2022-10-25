import React from 'react';
import { withTheme } from './samplehoc';


const TestComponent = () => {
  return (
    <div>Test</div>
  )
}

export default withTheme()(TestComponent);