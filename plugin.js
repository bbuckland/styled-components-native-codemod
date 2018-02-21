module.exports = function(babel) {
  const { types: t } = babel
  // could just use https://www.npmjs.com/package/is-builtin-module
  const pathToReplace = 'styled-components/native'
  const pathToReplaceWith = 'styled-components'

  return {
    visitor: {
        CallExpression(path) {
            var callee = path.get('callee');
            var arg = path.get('arguments.0');

            if (callee.isIdentifier() 
                && callee.node.name === 'require'
                && arg
                && arg.isLiteral()
                && arg.node.value === pathToReplace
            ) {
                arg.node.value = pathToReplaceWith
            }
        },
        

        ImportDeclaration(path) {
            if (path.node.source.value !== pathToReplace)
                return;


            path.node.source.value = pathToReplaceWith;
        }
    }
  }
}
