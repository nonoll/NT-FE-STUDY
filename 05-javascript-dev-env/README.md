# JavaScript 개발 환경

## ESlint
- 정적 분석 도구

### 정적 분석기의 필요성
- 코딩컨벤션을 자동으로 검증하고 잠재에러를 찾아내 자바스크립트의 단점을 보완

### ESLint의 특징 및 설정 방법
- 특징
  - 대표적인 정적 분석 도구
    - `Prettier` : 코드 스타일과 자동 포맷팅 기능만을 강조해서 나온 도구이다.
    - `JSLint` : 더글라스 크록포드가 2002년에 만들었다. 설정이나 확장이 불가능하다.
    - `JSHint` : JSLint를 발전시켜 설정이나 확장성을 추가하였다.
    - `ESLint` : 가장 최근에 만들어졌고, 유연성/확장성 높다.
    > eslint 이전에는 JSHint 를 주로 사용, JSLint 의 설정이 너무 까다로웠었음..
  - ESLint 가 JSLint, JSHint 와 다른점
    - [Espree](https://github.com/eslint/espree) 를 이용하여 자바 스크립트 구문 분석.
    - AST를 사용하여 코드의 패턴을 평가합니다.
      - Abstract Syntax Tree
        - 프로그래밍 언어의 문법에 따라 소스 코드 구조를 표시하는 계층적 프로그램 표현 (respresentation)
        - 각 AST 노드는 소스 코드의 항목(item)에 해당합니다.
      - 소스 코드를 계층적으로 처리하여 판단하는 의미 인듯.
    - 완전히 플러그 가능하며 모든 단일 규칙은 플러그인이며 런타임에 더 추가 할 수 있습니다.
- 설정 방법
  - [설치](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
    ```bash
    npm install eslint --save-dev

    # or

    yarn add eslint --dev
    ```
  - 실행
    ```bash
    $ npx eslint --init

    # or

    $ yarn run eslint --init
    ```
    ```bash
    $ npx eslint yourfile.js

    # or

    $ yarn run eslint yourfile.js
    ```
  - 설정
    ```bash
    module.exports = {
      parserOptions: {          // 파서 옵션 설정: https://eslint.org/docs/user-guide/configuring#specifying-parser-options
        ...
      },
      env: {                    // 코드가 실행되는 환경 설정: https://eslint.org/docs/user-guide/configuring#specifying-environments
        ...
      },
      extends: [                // 미리 지정해 놓은 규칙 세트를 사용: https://eslint.org/docs/user-guide/configuring#extending-configuration-files
        ...
      ],
      rules: {                  // extends에서 지정한 규칙 세트에서 새로운 규칙을 확장하거나 재정의: https://eslint.org/docs/rules/
        ...
      }
    };
    ```
* * *

## Webpack

### 번들러의 역할과 종류
- 역할
  - 모듈
    - 전통적인 개발 방식에선 의존성 있는 코드 사이에 순서 보장이 어려웠고, 여러 개의 파일을 로드할 때 일부 파일의 문제로 전체 스크립트를 실행하지 못할 수도 있다.
    - 이러한 문제를 해결하기 위해 모듈 단위의 개발 방식이 등장하게 되었다.
    - 그리고 모듈 단위 스코프를 지원하지 않는 브라우저 환경에서 모듈 단위 개발을 위한 노력이 계속되면서 다양한 모듈 포맷이 등장하게 되었다.
  - 번들러
    - 번들러는 의존성이 있는 모듈 코드를 하나(또는 여러 개)의 파일로 만들어주는 도구
    - 브라우저 환경에서는 CommonJS나 일부 ES6 Module로 작성된 코드는 바로 실행할 수가 없으므로 모듈 코드를 분석하고 자바스크립트 모듈 스펙에 따라 새로운 코드로 가공이 필요하다.
    - 브라우저 환경에서 잘 실행될 수 있도록 가공해주는 것이 번들러의 역할이다
    - [https://webpack.js.org/concepts/modules/](https://webpack.js.org/concepts/modules/)

- 종류
  - [RequireJS](https://requirejs.org/)
  - [Browserify](http://browserify.org/)
  - [Rollup](https://rollupjs.org/guide/en/)
  - [Parcel](https://parceljs.org/)
  - [Webpack](https://webpack.js.org/)


### Webpack의 특징과 설정 방법
- 특징
  - webpack은 현재 가장 널리 쓰이는 번들러
  - CommonJS, AMD, ES6 Module(v2부터) 포맷을 모두 지원하며, 자바스크립트뿐만 아니라 CSS, Image 파일 등 리소스의 의존성도 관리한다.
  - 또한 트랜스파일 외 Minify/Uglify, Banner, CSS Preprocess 작업을 자동화해 주는 Task Runner 기능을 포함하고 있다.
  - 이 외에도 Code Spliting과 Dynamic imports(Lazy Loading), Tree Shaking, Dev Server(Node.js Express 웹서버) 등 효율적인 자바스크립트 개발을 위한 기능을 제공하고 있다.

- 설치
  - package.json 파일 생성
    ```bash
    npm init
    ```
  - webpack 설치
    ```bash
    npm install --save-dev webpack webpack-cli
    ```
  - src/index.js 생성
  - webpack 실행
    ```bash
    node_modules/.bin/webpack --mode development

    # or

    npx webpack --mode development
    ```

- 설정
  ```javascript
  // webpack.config.js
  module.export = {
    mode: '',                       // 환경별 빌드 설정을 다르게 할때 : https://webpack.js.org/concepts/#mode
    entry: {                        // 번들링할 대상들 지정: https://webpack.js.org/concepts/#entry
      // ...
    },
    output: {                       // 번들 파일 위치와 이름을 지정: https://webpack.js.org/concepts/#output
      // ...
    },
    resolve: {                      // https://webpack.js.org/configuration/resolve/#root
      // ...
    },
    module: {                       // 다양한 모듈 설정: https://webpack.js.org/configuration/module/#root
      // ...
    },
    devServer: {                    // 개발용 로컬 서버: https://webpack.js.org/configuration/dev-server/#root
      // ...
    },
    plugins: [                      // 플러그인 설정: https://webpack.js.org/concepts/#plugins
      // ...
    ],
    optimization: {                 // 최적화 설정: https://webpack.js.org/configuration/optimization/#root
      // ...
    }
  }
  ```
### SourceMap의 개념 및 Webpack 설정 방법
- SourceMap
  - 소스맵(Source Map)은 트랜스파일, 압축/난독화된 코드를 실제 코드와 대응시켜주는 기술

- Webpack 설정
  ```javascript
  // webpack.config.js
  module.exports = {
    // ...

    devtool: 'source-map'      // https://webpack.js.org/configuration/devtool/#devtool

    // ...
  }
  ```

* * *

## commonJS / ES Module

### CommonJS 문법
- CommonJS?
  - `javascript: not just for browsers any more!`
  - [CommonJS](http://www.commonjs.org/) 는 JavaScript를 브라우저에서뿐만 아니라, 서버사이드 애플리케이션이나 데스크톱 애플리케이션에서도 사용하려고 조직한 자발적 워킹 그룹
  - Nodejs는 기본적으로 CommonJS의 규칙을 따름
- 문법
  - CommonJS의 모듈 제공 방식: module.exports와 exports, 두가지
  - module.exports
    ```javascript
    // fileA.js
    var a = 3,
    b = 4;
    exports.sum = function(c, d) {
      return a + b + c + d;  
    }
    ```
    ```javascript
    // fileB.js
    var a = 5,
    b = 6;
    var moduleA = require("fileA");
    moduleA.sum(a,b); // 3 + 4 + 5 + 6 = 18  
    ```
  - exports
    ```javascript
    // 📁 utils.js
    exports.PI = 3.14;
    console.log(module.exports === exports); // true

    console.log(exports); // { PI: 3.14 }
    ```
### ES Module 문법
- ES6부터 지원되는 자바스크립트 자체 모듈 시스템
- 문법
  - 이름 붙인 내보내기(Named export)
  ```javascript
  // filter.js
  export const crop = function() {};
  export const rotate = function() {};

  // graphics.js
  import {crop, rotate} from './filter';

  crop();

  rotate();
  ```
  ```javascript
  // filters.js
  const filterNames = ['retro', 'sharpen'];

  export default filterNames;

  // command
  import filters from './filters'; 

  filters[0]; // 'retro'
  filters[1]; // 'sharpen'
  ```
  ```javascript
  import {add, average} from 'mathmatics'; // 이름 붙인 가져오기
  import TextBox from 'textBox';           // 기본값 가져오기
  //...
  ```

* * *

## npm
- 만약 script 태그로 자바스크립트 파일들을 로드한다면, 필요한 패키지를 의존성에 맞게 일일이 나열해야 하고 각 패키지의 버전을 알맞게 관리해야 한다.
- 하지만 npm을 사용하면 이 모든 것들을 package.json으로 관리할 수 있다.
  - npm은 자바스크립트 패키지(모듈) 저장소
- 누구나 npm에 자신이 만든 패키지를 공개할 수 있는데, 이때 패키지의 정보는 package.json라는 설정 파일에 기입해야 한다.
- package.json에는 패키지 이름과 버전 등의 기본적인 정보뿐만 아니라 해당 패키지의 의존성까지 기입해야 한다.
- 따라서 package.json을 통해서 패키지의 의존성을 확인할 수 있다.

### package.json 각 프라퍼티의 용도 및 역할
```javascript
// package.json
{
    "name": "",           // 패키지의 이름
    "version": "",        // 패키지의 버전
    "description": "",    // 패키지의 설명
    "main": "",           // 패키지의 시작점이 되는 파일
    "scripts": {          // node_modules를 상대경로로 사용하는 간단한 스크립트를 등록
      ...
    },
    "repository": "",     // 저장소 위치
    "keywords": [         // npm keyword
      ...
    ],
    "author": "",         // 제작자
    "license": "",        // 라이센스
    "dependencies": {     // 이 패키지를 실행하기 위해 필요한 의존성을 정의, 해당 패키지가 동작하는 데 필요한 패키지이므로 배포나 번들 시에 포함
      ...
    },
    "devDependencies": {  // 이 패키지를 개발할 때 필요한 의존성을 정의, 개발 단계에서만 필요한 패키지이므로 배포나 번들 시에 포함되지 않는다. 
      ...
    }
}
```


### Semantic Versioning의 개념 및 Major, Minor, Patch의 차이
- [semver](https://semver.org/)
- Semantic Versioning은 MAJOR, MINOR, PATCH 버전으로 이루어져 있고 버전 표기는 `MAJOR.MINOR.PATCH`와 같이 작성
  - `MAJOR 버전` : 하위 호환성을 보장하지 않는 API 변경이 발생하면 MAJOR 버전을 변경한다.
  - `MINOR 버전` : 하위 호환성을 보장하는 API 및 기능이 추가되면 MINOR 버전을 변경한다.
  - `PATCH 버전` : 하위 호환성을 보장하면서 버그가 수정된 것이면 PATCH 버전을 변경한다.

### ^(caret)과 ~(tilde)의 용도
- ^(caret) 범위
  - 하위 호환성이 보장되는 업데이트를 진행.
  - ^1.2.3 : >= 1.2.3 < 2.0.0
  - ^1.2 : >= 1.2.0 < 2.0.0
  - ^1 : >= 1.0.0 < 2.0.0
  - ^0.1.2 : >= 0.1.2 < 0.2.0 (예외: 버전이 1.0.0 미만인 경우 API 변경이 수시로 일어날 수 있으므로 Tilde처럼 동작한다.)

- ~(tilde) 범위
  - MINOR 버전이 명시된 경우 PATCH 변경만 허용하고, MINOR 버전이 명시되지 않으면 MINOR 변경까지도 허용.
  - ~1.2.3 : >= 1.2.3 < 1.3.0
  - ~1.2 : >= 1.2.0 < 1.3.0 : 1.2.x
  - ~1 : >= 1.0.0 < 2.0.0 : 1.x

### CalVer
- [Calver](https://calver.org/)
- 날짜 기반 버전관리
  - 개인적으로 npm module 이 아닌, 흔히 구성하는 프로젝트에 version 은 날짜 기반이 적절하지 않을까 생각
  - 배포 기점에 날짜를 관리하고 changelog 를 작성하면 의미가 있지 않을지

### npm 주요 CLI 명령어
- npm init : package.json을 생성한다.
- npm install : package.json에 명시된 의존성 패키지들을 모두 설치한다.
- npm install `패키지명` : 해당 패키지를 설치 후 package.json의 dependencies에 추가한다.
- npm install `패키지명` -g : 해당 패키지를 전역으로 설치한다.
- npm install `패키지명` --save-dev : 해당 패키지를 설치 후 package.json의 devDependencies에 의존성을 추가한다.
- npm update : package.json의 dependencies와 devDependencies 패키지들을 모두 업데이트 후 package.json에 버전 정보를 갱신한다.
- npm update `패키지명` : 해당 패키지를 업데이트 후 package.json에 버전 정보를 갱신한다.
- npm update `패키지명` --no-save : 해당 패키지를 업데이트만 하고 package.json에 버전 정보를 갱신하지 않는다.
- npm prune : package.json에 명시되지 않은 패키지를 모두 제거한다.

### npm script 사용법
- package.json `scripts` 항목에 등록
```javascript
// package.json
...

  "scripts": {          // node_modules를 상대경로로 사용하는 간단한 스크립트를 등록
    "start": "webpack",
    ...
  },
...
```
```bash
$ npm run <스크립트_이름>  // 스크립트_이름 으로 실행
```

### import / require(..) 실행시에 경로를 찾아가는 우선순위 (npm 으로 설치한 패키지 사용하기)
- require('jquery') 시에 파일 탐색 우선순위
  1. require를 한 소스의 폴더에 있는 jquery 파일
  2. require를 한 소스의 폴더에 있는 jquery.js 파일
  3. require를 한 소스의 폴더에 있는 jquery.json 파일
  4. require를 한 소스의 폴더에 있는 jquery.node 파일
  5. 해당 패키지 루트에 있는 node_modules/jquery 디렉터리 확인
    - 5.1. package.json의 main에 정의된 파일
    - 5.2. index.js
    - 5.3. index.json
    - 5.4. index.node
  6. 해당 패키지의 상위 패키지 에서 node_modules/jquery 디렉터리 확인

* * *

## 참고 
- [https://ui.toast.com/fe-guide/ko_STATIC-ANALYSIS/](https://ui.toast.com/fe-guide/ko_STATIC-ANALYSIS/)
- [https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started)
- [https://gyujincho.github.io/2018-06-19/AST-for-JS-devlopers](https://gyujincho.github.io/2018-06-19/AST-for-JS-devlopers)
- [https://github.com/nhn/tui.eslint.config](https://github.com/nhn/tui.eslint.config)
- [https://ui.toast.com/fe-guide/ko_BUNDLER/](https://ui.toast.com/fe-guide/ko_BUNDLER/)
- [https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)
- [https://d2.naver.com/helloworld/12864](https://d2.naver.com/helloworld/12864)
- [https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73](https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73)
- [https://velog.io/@zeros0623/JavaScript-ModuleCommonJS-Nodejs-RequireJS-AMD-ESM-UMD](https://velog.io/@zeros0623/JavaScript-ModuleCommonJS-Nodejs-RequireJS-AMD-ESM-UMD)
- [https://ui.toast.com/weekly-pick/ko_20190418/](https://ui.toast.com/weekly-pick/ko_20190418/)
- [https://ui.toast.com/fe-guide/ko_DEPENDENCY-MANAGE/](https://ui.toast.com/fe-guide/ko_DEPENDENCY-MANAGE/)
- [https://semver.org/](https://semver.org/)
