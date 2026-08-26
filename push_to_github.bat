@echo off
echo ==============================================
echo   Pushing latest changes to GitHub repository
echo ==============================================
echo.
git add .
git commit -m "Auto-update project files"
git push origin main
echo.
echo ==============================================
echo   Successfully synced and pushed to GitHub!
echo ==============================================
pause
