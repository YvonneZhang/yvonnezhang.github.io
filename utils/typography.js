import Typography from 'typography'
import theme from 'typography-theme-sutro'

const typography = new Typography({
  ...theme,
  overrideStyles: () => ({
    a: {
      color: '#E1A206',
      textDecoration: 'none'
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
