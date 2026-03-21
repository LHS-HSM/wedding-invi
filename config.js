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
    phone: "010-2044-5513", // 추가
    father: "이영국",
    fatherPhone: "010-1111-2222", // 추가
    mother: "류순미",
    motherPhone: "010-3333-4444", // 추가
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "수민",
    nameEn: "SooMin",
    phone: "010-4908-5752", // 추가
    father: "한주학",
    fatherPhone: "010-2144-5752", // 추가
    mother: "홍연화",
    motherPhone: "010-2837-5752", // 추가
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-21",
    time: "14:00",
    venue: "ICT밸리컨벤션",
    hall: "그랑데홀",
    address: "경기 용인시 기흥구 기흥로 58-1",
    tel: "031-630-3600",
    mapLinks: {
      kakao: "https://kko.to/AMhyemcPZh",
      naver: "https://naver.me/xucpDpQz"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로의 삶에 따스한 빛이 되어\n믿음과 사랑으로 함께 걸어온 두 사람이\n이제 부부의 연으로 새로운 길을 시작합니다.\n\n소중한 자리 귀한 발걸음으로 오셔서\n저희의 시작을 축복해 주시기 바랍니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)
  // 오시는 길 안내 문구 추가
    transport: {
      subway: "수인분당선 기흥역\n\n- 도보 이용시 : 수인분당선 기흥역 2번 출구 도보 400m\n- 셔틀 이용시 : 기흥역 1번 출구 셔틀버스 승차",
      bus: "기흥역.백남준아트센터 정류장 하차\n\n(일반 10, 55, 66, 66-4, 94, 690, 820\n직행 5000A, 5000B, 5001, 5003A, 5003B, 5005, 5600)",
      parking: "ICT밸리컨벤션 지하 주차장 이용\n동시 주차 1,600대 가능 (무료)"
    }
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이해석", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "이영국", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "류순미", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "한수민", bank: "신한은행", number: "110-309-464725" },
      { role: "아버지", name: "한주학", bank: "국민은행", number: "027-21-0459-261" },
      { role: "어머니", name: "홍연화", bank: "농협은행", number: "302-2837-5752-91" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이해석 ♥ 한수민 결혼합니다",
    description: "2026년 6월 21일, 소중한 분들을 초대합니다."
  }
};
