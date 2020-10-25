# 각 브라우저별 디버깅 도구 정리
- 개인 pc 에 모바일 디버깅 환경을 구성하였으며, 리뷰가 진행될 경우 시연을 통해서 진행하는게 좋을 것으로 보입니다.

## 크롬 개발자 도구 학습

### 기기 모드
- [기기 모드](https://developers.google.com/web/tools/chrome-devtools#%EA%B8%B0%EA%B8%B0_%EB%AA%A8%EB%93%9C)
    - 기기 테스트의 경우, user agent 를 활용하는 경우가 많음 아래 `기기 프리셋 추가` 기능을 이용하여 디버깅에 활용 
    - 기기 프리셋 추가
        - Device Name : `iOS Chrome 84`
        - User agent string : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/84.0.4147.122 Mobile/15E148 Safari/604.1`
### Elements 패널
- [Elements 패널](https://developers.google.com/web/tools/chrome-devtools#elements_%ED%8C%A8%EB%84%90)

### Console 패널
- [Console 패널](https://developers.google.com/web/tools/chrome-devtools#console_%ED%8C%A8%EB%84%90)
    - [실행 컨텍스트 선택](https://developers.google.com/web/tools/chrome-devtools/console#execution-context)
        - console > frame
        - iframe 영역을 선택하고 console 디버깅을 할 수 있음.
    - [console.table](https://developers.google.com/web/tools/chrome-devtools/console/utilities#table)
        ```javascript
            var names = {
            0: { firstName: "John", lastName: "Smith" },
            1: { firstName: "Jane", lastName: "Doe" }
        };
        console.table(names);
        ```
    - console.time / console.timeEnd : time ~ timeEnd 호출 사이의 경과 시간을 알 수 있음.
        ```javascript
        function sleep(delay) {
           var start = new Date().getTime();
           while (new Date().getTime() < start + delay);
        }
        console.time('timeLabel');
        sleep(1000 * 2);
        console.timeEnd('timeLabel');
        ```
### Sources 패널
- [Sources 패널](https://developers.google.com/web/tools/chrome-devtools#sources_%ED%8C%A8%EB%84%90)
    - [모든 페이지에서 스니펫 실행](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets)
        - sources 패널 내에, snippets 메뉴에서 추가
        - 자주 확인하는 코드를 추가해 두고, 활용하면 좋을 것으로 보임

### Network 패널
- [Network 패널](https://developers.google.com/web/tools/chrome-devtools#network_%ED%8C%A8%EB%84%90)
    - 해당 패널의 기능을 통해, 불필요한 api 호출이나 pending 현상들을 확인 할 수 있음
    - 특히 네트워크 속도를 강제로 제어하는 기능이 있어, 이를 통해 네트워크가 느린 상태일때 코드 처리를 고려할 수 있음
    - `Preserve log` 옵션의 경우, 모든 네트워크 요청 내역이 유지 되므로 페이지가 리다이렉트 되는 케이스를 디버깅할때 유용하게 사용 가능

### Performence 패널
- [Performence 패널](https://developers.google.com/web/tools/chrome-devtools#performance_%ED%8C%A8%EB%84%90_%EC%9D%B4%EC%A0%84%EC%9D%98_timeline_%ED%8C%A8%EB%84%90)

### Memory 패널
- [Memory 패널](https://developers.google.com/web/tools/chrome-devtools#memory_%ED%8C%A8%EB%84%90_%EC%9D%B4%EC%A0%84%EC%9D%98_profiles_%ED%8C%A8%EB%84%90)

### Application 패널
- [Application 패널](https://developers.google.com/web/tools/chrome-devtools#application_%ED%8C%A8%EB%84%90_%EC%9D%B4%EC%A0%84%EC%9D%98_resources_%ED%8C%A8%EB%84%90)

### Security 패널
- [Security 패널](https://developers.google.com/web/tools/chrome-devtools#security_%ED%8C%A8%EB%84%90)

### 기타
    - rendering
        - dark mode test
            - iOS 다크모드 설정을 테스트해 볼 수 있음.
        - vision

## 모바일 디버깅 도구 학습(android, ios)
- android
    - 에뮬레이터 활용
        - [android studio](https://developer.android.com/studio)
    - 기기 활용
        - 기기를 PC 에 연결하여 디버깅하는 경우
    - chrome inspect
        - [chrome inspect](https://developers.google.com/web/tools/chrome-devtools/remote-debugging)

- ios
    - 에뮬레이터 활용
        - xcode
    - 기기 활용
        - 기기를 PC 에 연결하여 디버깅하는 경우
    - safari 개발자 도구
        - 연결이 안 될 경우, preview 버전으로 설치

- weinre
    - [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/Home.html)
    - inspect, safari 개발자 도구등이 제대로 접근 안되는 경우 대응 방법
    - 예전에 사용했던 기억이 나서 우선 정리함
