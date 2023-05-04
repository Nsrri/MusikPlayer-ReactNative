
const changeCase = require('change-case');

module.exports = {
    prompt: async ({prompter: {prompt}}) => {
        const {name} = await prompt([
            {
            type: 'input',
            name: 'name',
            message: 'whta is the name of the component or view you want to create?',
            result: (name) => changeCase.pascal(name),
            validate: (name) => name.length > 2,
    },
]);
        return {
            name,
            title: `${name}`,
            path:`${name}`,
            root: './src',
        };
    },
   
};