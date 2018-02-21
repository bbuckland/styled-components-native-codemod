# styled-components-native-codemod


This codemod corrects issues for codebases which import from 'styled-components/native' and updates them to point to 'styled-components'

```
// in
import /* ... */ from 'styled-components/native';
require('styled-components/native');

// out
import /* ... */ from 'styled-components';
require('styled-components');
```

The plugin can be run by installing codemod
```
yarn global add babel-codemod
```
and then executing by pointing to the plugin.js and your src directory.
```
codemod --plugin ./plugin.js src/
```