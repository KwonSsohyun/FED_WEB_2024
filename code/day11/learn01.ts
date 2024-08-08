// ▶ Node.js
/*
    ▶ Node.js의 기본 명령어

    1. node 명령어
       nodejs를 실행하는 명령어

       → node 파일명
         ☞ 파일명에 적힌 코드를 실행한다.
            ex) 터미널 → node test.js

       → node -v
         ☞ 노드 버전 확인 명령어
            ex) v20.14.0
            거의 오류가 나는 이유는 오타 또는 버전 문제
            극한의 확률 → OS문제



    2. npm
       패키지 관리 명령어
       npm 뒤에 어떤 옵션을 붙히냐

       → npm init -y
         ☞ 관리 저장소를 생성하는 명령어(package.json)
            '-y' 옵션은 없어도 가능하지만 없으면 추가입력 해야한다.
            'package.json' 관리저장소 필요


       → npm install name1 name2
         ☞ 다운로드 명령어
            install 대신 'i'적어도 가능(약어)
            ex) npm i typescript

         ☞ 다운로드된 패키지들이 'node_modules'라는 폴더에 저장된다.
            https://www.npmjs.com
            여기에 정의되어있는 업로드된걸 다운로드 받는다.

         ☞ '-g' 옵션 (글로벌 설치)
            글로벌 설치(nodejs 자체 폴더에 저장됨)
            일반설치는 'node_modules'폴더에 저장됨
            ex) npm i -g name1 name2

         ☞ '-D' 옵션 (개발자 옵션)
            ex) npm i -D react      


       → npm uninstall name1 name2
         ☞ 설치한 패키지 삭제 명령어
            '-g'를 옵션을 붙히면 글로벌 삭제


       → npm update name2 name2
         ☞ 설치한 패키지 업데이트 명령어
            '-g'를 옵션을 붙히면 글로벌 업데이트


       → npm ls
         ☞ 현재 사용하고 있는 패키지만 띄우는 명령어
            ex) 추가적으로 더 설치해보자 → npm i ts-node react-router
                ├── react-router@6.26.0
                ├── ts-node@10.9.2
                └── typescript@5.5.4
                    * ts-node가 기존에 깔려있어도 해당 명령어 날리면 호환되는 버전으로 업데이트 된다.


       → npm prune
         ☞ 현재 사용중인 패키지들 중 안쓰는걸 일괄 정리 
            1) 'package.json' 파일 → dependencies에 안쓰는 항목 코드 지우고
            2) 터미널 → 'npm prune' 해당 패키지 삭제된다.(node_modules파일안 해당 패키지 삭제됨)


       → npm search, npm outdated, npm cache clean, ...
         일반적으로는 안쓰이는 명령어

       → npm start, npm test, npm build, npm run name
         'package.json'에 대해 이해한 후 사용



    3. npx
       ★ 패키지 실행 명령어

       → npx commandName option1 option2
         ☞ 해당하는 명령어를 실행하는 코드
            npx는 node_modules에 설치된 패키지만 실행

            ex) npx ts-node test.ts
                → 'test.ts'파일 실행해줌

            약간의 장점 → 자동 설치도 지원(설치가 만약 안되어있으면, 알아서 설치도 해줌)
            
            글로벌 설치는 이걸로 설치 못한다.
            글로벌 패키지는 앞에 npx를 빼고 사용
            commandName option1 option2



    4. package.json
       ★ 패키지 관리 저장소
       패키지의 필요정보가 다 있다.

       → name, version, Major, Minor, Patch, description
         ☞ 현재 만드는 중인 패키지의 설명       

       → main
         ☞ 패키지 첫 번째 실행할 '파일명' 작성
            ex) "main": "test.js"
                 test.js 기반으로 동작한다.

       → type
         ☞ commonjs, module 방식을 선택하는 속성
            ex) "type": "commonjs"


       → scripts
         ☞ 명령어를 미리 작성해두고 간편하게 명령어를 실행하는 
            단축 명령어 집합
            ex) "scripts": {
                        "start": "node -v",
                        "test": "echo \"Error: no test specified\" && exit 1"
                }
                터미널 → npm start

         ☞ npm start   → "start":"명령어" 가 실행
            npm build   → "build":"명령어" 가 실행
            npm test    → "test":"명령어"  가 실행

         ☞ start, build, test 는 그냥 사용이 가능한데
            그 외 이름을 가진 스크립트는 
            npm run Name 식으로 작성해야 실행(run 붙힌다.)
            ex) "scripts": {
                        "tt": "node -v",
                        "start": "node -v",
                        "test": "echo \"Error: no test specified\" && exit 1"
                }
                터미널 → npm run tt


       → dependencies
         ☞ 의존성 목록
            설치하고 싶은 패키지 목록 또는 설치된 패키지 목록
            의존성 목록 작성 시 버전이 매우 중요하다!!!!!
            프로그램 파트에서 버전은 3버전 방식을 쓴다.
            → (0.0.1) (메이저.마이너.패치)
               패치      : 자잘한 수정
               마이너    : 기능 수정/추가
               메이저    : 대규모 업데이트

         ☞ 버전을 명시하는 여러가지 방법
            1.2.3       → 정확한 버전 명시
            <1.2.3      → 해당 버전 미만 낮은거 쓸거야 명시
            >=1.2.3     → 해당 버전 이상 쓸거야 명시     
            1.2 - 1.4   → 해당 버전 사이 명시     
            ~1.2        → patch 버전 상관없음 명시(메이저.마이너만 맞으면 됨)
            ~1          → minor 버전까지 상관없음 명시(메이저만 맞으면 됨)
            ^1.2.3      → 해당 버전과 호환되는 버전 명시
                          내가 1.2.3으로 개발했는데
                          이걸로 호환되는걸로 최근 버전으로 사용해라는 뜻


       → devDependencies
         ☞ 의존성 목록
            패키지를 개발에만 이용하는 경우
            개발할때만 쓰고, 추출/실행할 때는 안됨

            ex) 터미널 → npm i -D react
                'package.json' 파일 → 아래와 같이 코드 추가됨
                    "devDependencies": {
                            "react": "^18.3.1"
                    }



    ▶ 다른 사용자가 만들어둔 코드의 목록(패키지)를 다운로드한 후 
       불러오는 방법

    5. 패키지 로드 방법
       → 패키지를 로드하는 방법에는
         commonjs방식 / module방식
       → 기본적으로는 commonjs방식을 사용한다.
         nodejs가 commonjs와 궁합이 뛰어나기 때문이다.

       → react는 module방식을 사용한다.
         module방식이 react와 궁합이 뛰어나기 때문이다.

*/