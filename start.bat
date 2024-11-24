@echo off
REM Navigate to backend and start Flask server
cd backend
echo Starting Flask server...
start "" "C:\Users\teama\AppData\Local\Programs\Python\Python39\python.exe" app.py

REM Navigate to frontend and start React server
cd ../frontend
echo Starting React server...
start npm start

REM Keep the command prompt open
pause