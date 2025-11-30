import { Suspense } from "react";

import UserList from "./user-list";
import RecentPosts from "./recent-posts";
import Statistics from "./statistics";

export default function UsersPage() {
  return (
    <div>
      <h1>사용자 목록</h1>
      {/* 빠르게 로드되는 섹션 */}
      <Suspense fallback={<div>사용자 목록 로딩 중...</div>}>
        <UserList /> {/* /users 엔드포인트 fetch */}
      </Suspense>
      <h1>최근 게시물</h1>
      {/* 느리게 로드되는 섹션 (3초 지연) */}
      <Suspense fallback={<div>최근 게시글 로딩 중...</div>}>
        <RecentPosts /> {/* /posts?_limit=5 fetch + 3초 delay */}
      </Suspense>
      <h1>코멘트</h1>
      {/* 매우 느리게 로드되는 섹션 (5초 지연) */}
      <Suspense fallback={<div>통계 데이터 로딩 중...</div>}>
        <Statistics /> {/* /comments?_limit=1 fetch + 5초 delay */}
      </Suspense>
    </div>
  );
}
