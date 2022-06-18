export const changeCssVariable = theme => {
  const root = document.querySelector(':root')

  const cssVariables = ['text', 'bg']

  cssVariables.forEach(element => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    )
  })
}