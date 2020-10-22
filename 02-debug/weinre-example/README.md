# weinre
- 네이티브앱에서, inspect 가 미지원인 상황에서 디버깅하려고 하는 경우 활용 가능합니다.

## 설치
- [weinre installing](https://people.apache.org/~pmuellr/weinre/docs/latest/Installing.html)
```bash
sudo npm -g install weinre
```

## 실행
- 디버깅할 페이지에 스크립트를 주입, 간단히 테스트를 위해 index.html 은 vscode liveserver 로 실행
```html
    <script src="http://localhost:8080/target/target-script-min.js"></script>
```

- weinre 을 실행
```bash
npm run start
// "start": "weinre"
```

- weinre > http://localhost:8080/client/#anonymous 이동
- Remote 탭에서 연결된 대상을 확인하고, 디버깅

## 실행 예
