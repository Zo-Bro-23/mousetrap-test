import Mousetrap from 'mousetrap'

Mousetrap.bind('x', () => console.log('x'), 'keydown')
Mousetrap.bind('x', () => console.log('x up'), 'keyup')