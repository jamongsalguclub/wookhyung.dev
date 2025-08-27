interface StudyGroup {
  title: string;
  link?: string;
  items: string[] | { title: string; link: string }[];
}

export const BOOK_STUDY_GROUPS: StudyGroup[] = [
  {
    title: 'Personal',
    items: [
      {
        title: '함께 자라기',
        link: 'https://product.kyobobook.co.kr/detail/S000001033071',
      },
      {
        title: '소프트웨어 엔지니어 가이드북',
        link: 'https://product.kyobobook.co.kr/detail/S000214576874',
      },
      {
        title: '쏙쏙 들어오는 함수형 코딩',
        link: 'https://product.kyobobook.co.kr/detail/S000001952246',
      },
    ],
  },
  {
    title: 'Frontend Book Study',
    link: 'https://github.com/frontend-book-study/frontend-log',
    items: [
      '모던 리액트 Deep Dive 완독 스터디',
      '우아한 타입스크립트 with 리액트 스터디',
      '리팩터링 2판 스터디',
    ],
  },
  {
    title: '월간 CS 스터디',
    link: 'https://github.com/monthly-cs',
    items: [
      {
        title: '이펙티브 타입스크립트 스터디',
        link: 'https://github.com/monthly-cs/2024-05-effective-typescript',
      },
      {
        title: '모던 자바스크립트 Deep Dive 스터디',
        link: 'https://github.com/monthly-cs/2024-07-modern-javascript-deep-dive',
      },
    ],
  },
] as const;
