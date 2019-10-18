# SVG Graphics

This is important. **Graphics** used here are basically SVG, but not quite.
They have been modified into fully fledged React classes whose
job is simply to display the vector graphic. Because they are in the
React world, they can accept properties like colour values.

## But why?

> But React already handles SVG and if not then you can just run them
> through SVGO to solve any problems?

Well, yes. But better still would be to craft the graphics properly
instead of doing a smart arsed job of trying too hard to automate and
generisize. That's the problem with Front End developers who have no graphics
background. That's not Front End Dev. It's just Dev.

## Usage

The Graphic will resize itself to whatever DOM object contrains it. Drop
them into a grid or use CSS to achieve the size you want.

All graphics are exported from `index.js` and should be imported and used
like this

- Import required graphic

```javascript
import { GraphicOne } from "./graphics";
```

- Render graphic with props

```javascript
render (
    <GraphicOne
        colours={
            colour1: '#eee',
            colour2: 'red'
        }
    />
)

```
