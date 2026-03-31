/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "해석",
    nameEn: "HeaSeok",
    father: "이영국",
    mother: "류순미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "수민",
    nameEn: "Soomin",
    father: "한주학",
    mother: "홍연화",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-21",
    time: "14:00",
    venue: "ICT밸리컨벤션",
    hall: "그랑데홀",
    address: "경기 용인시 기흥구 기흥로 58-1\n기흥ICT밸리 A동 Lobby",
    tel: "031-630-3600",
    mapLinks: {
      kakao: "https://place.map.kakao.com/641722539",
      naver: "https://naver.me/xucpDpQz"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "우리가 서로 사랑하면,\n하느님께서 우리 안에 머무르시고\n그분 사랑이 우리에게서 완성됩니다. (1요한 4, 12)\n\n이 말씀을 마음에 새기며\n\저희 두 사람, 사랑으로 하나가 됩니다.\n소중한 날, 함께해 주시면 기쁨이 되겠습니다."
  },
  
  // ── 축하 연락처 ──
  contact: {
    title: "축하 연락처",
    groom: [
      { role: "신랑", name: "이해석", phone: "010-2044-5513" },
      { role: "아버지", name: "이영국", phone: "010-6244-0363" },
      { role: "어머니", name: "류순미", phone: "010-9787-5513" }
    ],
    bride: [
      { role: "신부", name: "한수민", phone: "010-4908-5752" },
      { role: "아버지", name: "한주학", phone: "010-2144-5752" },
      { role: "어머니", name: "홍연화", phone: "010-2837-5752" }
    ]
  },


  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께하면 더 편하고, 더 재밌어서\n인생이라는 긴 여정을 함께 시작하려 합니다.\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)
  
  // ── 오시는 길 상세 안내──
  transport: {
    subway: "도보 이용시 : 기흥역 2번출구 도보 400m\n셔틀 이용시 : 기흥역 1번출구 셔틀버스 승차\n(15분 간격 : 매시 10분, 25분, 40분, 55분 출발)",
    bus: "기흥역 정류장 하차\n- 일반 버스 : 10, 55, 66, 66-4, 94, 690, 820\n- 직행 버스 : 5000A, 5000B, 5001, 5003A, 5003B, 5005, 5600",
    parking: "네비게이션 : [기흥ICT밸리] 검색\nICT밸리컨벤션 지하 주차장 이용\n동시 주차 1,600대 가능(무료)"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이해석", bank: "카카오뱅크", number: "3333-05-5350999" },
      { role: "아버지", name: "이영국", bank: "국민은행", number: "601502-96-105765" },
      { role: "어머니", name: "류순미", bank: "국민은행", number: "593102-04-016752" }
    ],
    bride: [
      { role: "신부", name: "한수민", bank: "신한은행", number: "110-309-464725" },
      { role: "아버지", name: "한주학", bank: "국민은행", number: "027-21-0459-261" },
      { role: "어머니", name: "홍연화", bank: "농협은행", number: "302-2837-5752-91" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "해석 ♥ 수민 결혼합니다",
    description: "2026년 6월 21일, 소중한 분들을 초대합니다."
  }
};
