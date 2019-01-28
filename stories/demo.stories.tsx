import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'semantic-ui-react'
import Hideable from '../components/Hideable';
// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//   )); 

const HideableContainer = storiesOf('Hideable', module)

HideableContainer
    .add('unhidden', () => (<Hideable><Button>This button is not hidden</Button></Hideable>))
    .add('hidden',() => (<Hideable hidden><Button>This button is hidden</Button></Hideable>))