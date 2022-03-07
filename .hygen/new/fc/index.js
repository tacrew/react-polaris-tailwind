const categories = {
  features: 'features',
  ui: 'ui',
}

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'which category?',
        choices: Object.keys(categories),
      },
      {
        type: 'input',
        name: 'dir',
        message: 'which sub-category?',
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'what is component name?(ex: AuthLoginForm)',
      },
      {
        type: 'confirm',
        name: 'have_props',
        message: 'does it have props?',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir, have_props } = answers

      const sub_dir_path = `${dir ? `${dir}/` : ``}${component_name}`
      const path = `${category}/${sub_dir_path}`
      const abs_path = `src/components/${path}`

      // props
      const props_name = have_props ? `${component_name}Props` : ''
      const props = have_props ? `{}: ${props_name}` : ''

      const storybook_title = `${categories[category]}/${sub_dir_path}`
      return {
        ...answers,
        path,
        abs_path,
        props_name,
        props,
        storybook_title,
      }
    })
  },
}
