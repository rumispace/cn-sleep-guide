#!/bin/bash
# 사용법: bash deploy.sh "바꾼 내용"
cd "$(dirname "$0")"
git add -A && git commit -qm "${1:-업데이트}" && git push -q origin main && echo "올림 완료: https://rumispace.github.io/cn-sleep-guide/" || echo "올리기 실패 — 위 메시지 확인"
