#!/bin/bash

set -Eeuo pipefail

APP_PORT=3010
LOG_FILE="main.log"
PID_FILE="site.pid"
BRANCH="main"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

cleanup() {
  log "Script failed at line $LINENO"
}
trap cleanup ERR

cd "$(dirname "$0")"

log "=== Site deploy started ==="

# 1. Stop existing process — always kill by port to handle stale PIDs
if [ -f "$PID_FILE" ]; then
  OLD_PID=$(cat "$PID_FILE")

  if ps -p $OLD_PID > /dev/null 2>&1; then
    log "Stopping existing site (PID $OLD_PID)"
    kill $OLD_PID || true

    for i in {1..10}; do
      if ps -p $OLD_PID > /dev/null; then
        sleep 1
      else
        break
      fi
    done

    if ps -p $OLD_PID > /dev/null; then
      log "Force killing site (PID $OLD_PID)"
      kill -9 $OLD_PID
    fi
  fi

  rm -f "$PID_FILE"
fi

lsof -ti :$APP_PORT | xargs -r kill -9 || true

# 2. Install deps (optional but safe)
# 1. Update code
log "Fetching latest code from $BRANCH"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

log "Installing dependencies"
npm i

# 3. Build with env
log "Building Next.js app"
NEXT_PUBLIC_API_URL="https://pura-api.renatoviolin.online" npm run build

# 4. Start server
log "Starting Next.js app"
nohup ./node_modules/.bin/next start -p "$APP_PORT" >> "$LOG_FILE" 2>&1 &

NEW_PID=$!
echo $NEW_PID > "$PID_FILE"

log "site started with PID: $NEW_PID"

# 5. Health check (basic)
log "Waiting for site..."
sleep 3

if curl -s "http://localhost:$APP_PORT" > /dev/null; then
  log "site is up ✅"
else
  log "site failed to start ❌"
  exit 1
fi

log "=== site deploy finished ==="