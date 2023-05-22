
const ChangeCase = require('change-case')

module.exports = {
    prompt: async ({ prompter: { prompt } }) => {
        const { name } = await prompt([
            {
                type: 'input',
                name: 'name',
                message: 'whta is the name of the component or view you want to create?',
                result: (name) => ChangeCase.pascalCase(name),
                validate: (name) => name.length > 2,
            },

        ]);
        const { type } = await prompt([
            {
                type: 'select',
                name: 'type',
                message: 'is this a component?',
                choices: ['component', 'other']

            }

        ]);

        const directoryName = { component: 'components', other: 'other' }[type]
        if (directoryName == 'components') {
            return {
                name,
                type,
                title: `${directoryName}/${name}`,
                path: `${directoryName}/${name}`,
                root: './src',
            };
        }

        return {
            name,
            type,
            title: `${name}`,
            path: `${name}`,
            root: './src',
        };
    }
};