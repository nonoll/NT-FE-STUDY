# 각 브라우저별 디버깅 도구 정리
- 개인 pc 에 모바일 디버깅 환경을 구성하였으며, 리뷰가 진행될 경우 시연을 통해서 진행하는게 좋을 것으로 보입니다.

## 크롬 개발자 도구 학습
- console > frame
    - iframe 영역을 선택하고 console 디버깅을 할 수 있음.
- rendering
    - dark mode test
        - iOS 다크모드 설정을 테스트해 볼 수 있음.
    - vision
- 그외 일반적인 디버깅 케이스

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

- weinre
    - [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/Home.html)
    - inspect, safari 개발자 도구등이 제대로 접근 안되는 경우 대응 방법
    - 예전에 사용했던 기억이 나서 우선 정리함
