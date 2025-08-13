export interface Link {
  title: string;
  link: string;
}

export interface InterestItem {
  title: string;
  link?: string;
  linkText?: string;
}

export interface Book {
  title: string;
  author: string;
  link: string;
}

export const PLAYLISTS: Link[] = [
  {
    title: '자몽살구클럽 - 한로로',
    link: 'https://open.spotify.com/album/2DV7iVJ7L5DRQijgjyqLyQ',
  },
  {
    title: 'play with earth! 0.03 - wave to earth',
    link: 'https://open.spotify.com/album/527e8WrlMvJBEmlmt7kJCj',
  },
  {
    title: '나의 정원에서 - 윤지영',
    link: 'https://open.spotify.com/album/5eptzTFZfkY4V2LtbnDE5d',
  },
];

export const CONCERTS: Link[] = [
  {
    title: '2024 Wave to Earth 단독공연 [play with earth! Seoul]',
    link: 'https://tickets.interpark.com/goods/24015393',
  },
  {
    title: 'THE VOLUNTEERS ASIA TOUR 2024 - SEOUL',
    link: 'https://tickets.interpark.com/goods/24010553',
  },
  {
    title: "Noel Gallagher's High Flying Birds",
    link: 'https://tickets.interpark.com/goods/24003561',
  },
  {
    title: "한로로 2nd EP 발매기념 단독콘서트 '집'",
    link: 'https://ticket.melon.com/performance/index.htm?prodId=209915',
  },
  {
    title: '2024 실리카겔 단독공연 〈Syn.THE.Size Ⅲ〉',
    link: 'https://tickets.interpark.com/goods/24004957',
  },
  {
    title: '2024 윤하 20주년 기념 콘서트 〈스물〉',
    link: 'https://tickets.interpark.com/goods/23018640',
  },
  {
    title: "10CM WINTER CONCERT '9+1'",
    link: 'https://tickets.interpark.com/goods/23015862',
  },
  {
    title: '2023 검정치마 연말공연 [201 DAYS OF HOLIDAY]',
    link: 'https://ticket.yes24.com/Perf/47823',
  },
  {
    title: "한로로 1st 단독콘서트 '이상비행'",
    link: 'https://ticket.melon.com/performance/index.htm?prodId=208666',
  },
];

export const INTERESTS: InterestItem[] = [
  {
    title: 'Chess',
    link: 'https://www.chess.com/member/wookhyungx',
    linkText: '(Chess.com)',
  },
  {
    title: 'Electric Guitar',
  },
];

export const BOOKS_BY_YEAR: Record<number, Book[]> = {
  2025: [
    {
      title: '결혼ㆍ여름',
      author: '알베르 카뮈',
      link: 'https://product.kyobobook.co.kr/detail/S000203197818',
    },
    {
      title: '동물 농장',
      author: '조지 오웰',
      link: 'https://product.kyobobook.co.kr/detail/S000000620142',
    },
    {
      title: '어떤 비밀',
      author: '최진영',
      link: 'https://product.kyobobook.co.kr/detail/S000214526764',
    },
    {
      title: '미키 7',
      author: '에드워드 애슈턴',
      link: 'https://product.kyobobook.co.kr/detail/S000061532777',
    },
  ],
  2024: [
    {
      title: '지구 끝의 온실',
      author: '김초엽',
      link: 'https://product.kyobobook.co.kr/detail/S000001953324',
    },
    {
      title: '이중 하나는 거짓말',
      author: '김애란',
      link: 'https://product.kyobobook.co.kr/detail/S000214032055',
    },
    {
      title: '쓰게 될 것',
      author: '최진영',
      link: 'https://product.kyobobook.co.kr/detail/S000213546473',
    },
    {
      title: '급류',
      author: '정대건',
      link: 'https://product.kyobobook.co.kr/detail/S000200550189',
    },
    {
      title: '밝은 밤',
      author: '최은영',
      link: 'https://product.kyobobook.co.kr/detail/S000000781066',
    },
    {
      title: '백의 그림자',
      author: '황정은',
      link: 'https://product.kyobobook.co.kr/detail/S000000610837',
    },
    {
      title: '원도',
      author: '최진영',
      link: 'https://product.kyobobook.co.kr/detail/S000212754943',
    },
    {
      title: '참을 수 없는 존재의 가벼움',
      author: '밀란 쿤데라',
      link: 'https://product.kyobobook.co.kr/detail/S000000619722',
    },
    {
      title: '모순',
      author: '양귀자',
      link: 'https://product.kyobobook.co.kr/detail/S000001632467',
    },
    {
      title: '홍학의 자리',
      author: '정해연',
      link: 'https://product.kyobobook.co.kr/detail/S000000781065',
    },
    {
      title: '눈부신 안부',
      author: '백수린',
      link: 'https://product.kyobobook.co.kr/detail/S000202230179',
    },
    {
      title: '이방인',
      author: '알베르 카뮈',
      link: 'https://product.kyobobook.co.kr/detail/S000000619973',
    },
    {
      title: '천 개의 파랑',
      author: '천선란',
      link: 'https://product.kyobobook.co.kr/detail/S000001935255',
    },
    {
      title: '살인자의 기억법',
      author: '김영하',
      link: 'https://product.kyobobook.co.kr/detail/S000001982913',
    },
    {
      title: '1984',
      author: '조지 오웰',
      link: 'https://product.kyobobook.co.kr/detail/S000000620214',
    },
    {
      title: '해가 지는 곳으로',
      author: '최진영',
      link: 'https://product.kyobobook.co.kr/detail/S000000620599',
    },
    {
      title: '종의 기원',
      author: '정유정',
      link: 'https://product.kyobobook.co.kr/detail/S000000828491',
    },
  ],
  2023: [
    {
      title: '칵테일, 러브, 좀비',
      author: '조예은',
      link: 'https://product.kyobobook.co.kr/detail/S000001936854',
    },
    {
      title: '단 한 사람',
      author: '최진영',
      link: 'https://product.kyobobook.co.kr/detail/S000209209050',
    },
    {
      title: '미드나잇 라이브러리',
      author: '매트 헤이그',
      link: 'https://product.kyobobook.co.kr/detail/S000001947560',
    },
    {
      title: '아주 희미한 빛으로도',
      author: '최은영',
      link: 'https://product.kyobobook.co.kr/detail/S000203331812',
    },
    {
      title: '인간 실격',
      author: '다자이 오사무',
      link: 'https://product.kyobobook.co.kr/detail/S000000620240',
    },
    {
      title: '구의 증명',
      author: '최진영',
      link: 'https://product.kyobobook.co.kr/detail/S000201621499',
    },
    {
      title: '애쓰지 않아도',
      author: '최은영',
      link: 'https://product.kyobobook.co.kr/detail/S000000939081',
    },
    {
      title: '쇼코의 미소',
      author: '최은영',
      link: 'https://product.kyobobook.co.kr/detail/S000000779649',
    },
    {
      title: '내게 무해한 사람',
      author: '최은영',
      link: 'https://product.kyobobook.co.kr/detail/S000000780120',
    },
  ],
};
