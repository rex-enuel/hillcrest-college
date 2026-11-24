@echo off
title Hillcrest College - Dev Server
cd /d "C:\Users\Hp extra\hillcrest-college-project"
echo Starting Hillcrest College dev server...
echo.
echo Once running, open in Chrome:
echo   Local:      http://localhost:3000
echo   Tailscale:  https://desktop-fg89mt8.tail5f7645.ts.net/
echo.
echo Press Ctrl+C to stop the server
echo.
npx next dev
pause