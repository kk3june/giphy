<p align="center">
    <img src="https://gifyu.com/image/SvLie" width="500" />
</p>;

### [Demo ⚙️](https://jiphy.site)
> 사용자들이 애니메이션 GIF 파일과 짧은 동영상들을 공유할 수 있는 미국의 Giphy.com 을 모티브로 제작하였습니다.
> 현재는 vercel 사용량 초과로 인해 배포 중단된 상태입니다.

## 프로젝트 소개
기획부터 배포까지 오롯이 혼자 진행한 개인 프로젝트이며 기능을 추가하거나 다양한 기술스택을 도입하는 등 학습을 목적으로 제작되었습니다.
프론트엔드만 구현하였으며 사용된 API 들은 GIPHY 에서 제공되는 오픈 API를 활용하였습니다.

## 구현 기능
- 환경 설정 / 퍼블리싱 / 프론트엔드 개발을 전부 직접 진행
- VAC 컴포넌트 디자인 패턴을 사용하여 UI / 비즈니스 로직 분리
- 효율적인 컴포넌트 재활용을 위해 Atomic 디자인 사용
- `intersection observer API` 를 활용한 `Infinite scroll` 기능 구현
- css- props 의 장점을 활용하기 위해 `emotion`을 사용하였습니다.
- UX 개선을 위한 `스켈레톤 컴포넌트` 추가
- `Redux-toolkit` 사용하여 전역상태 관리 및 비동기 처리
- `react-query` 이용한 API 요청 및 클라이언트 캐싱 기능 구현
- Vercel을 활용한 웹 배포 및 개인 도메인 등록
- ESLint, Prettier 를 통해 코드 포맷팅 적용
- `SEO 성능 최적화` 작업
    - Semantic tag 사용
    - Meta tag 및 Open Graphy tag 추가
- Lighthouse 점수 개선
    - SEO 탭 점수 80점 → 100점
    - Accessibility 74점 → 96점
    - Best Practices 75점 → 83점
    - Performance 44점 → 62점
- 프로토 타입 배포 후 프론트 엔드 [성능 최적화](https://kk3june.tistory.com/73) 작업 진행
    - `CLS(Cumulative Layout Shift) 개선`
        - 동적인 레이아웃 구현을 위해 image 의 layout 속성을 사용하는 방법 대신 width, height 값을 고정 값으로 할당할 수 있는 로직 추가
        - 0.163 → 0.062

## 기술스택
- NextJS
- TypeScript
- React-Query (Redux-toolkit)
- styled-component
- emotion
