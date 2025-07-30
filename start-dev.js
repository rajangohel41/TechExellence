import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Student Dashboard Development Environment...\n');

// Start MongoDB (if using Docker)
console.log('📦 Starting MongoDB...');
const mongo = spawn('docker', ['run', '--rm', '-d', '-p', '27017:27017', '--name', 'student-dashboard-mongo', 'mongo:latest'], {
  stdio: 'inherit'
});

// Wait a bit for MongoDB to start
setTimeout(() => {
  // Start Backend
  console.log('🔧 Starting Backend Server...');
  const backend = spawn('node', ['server.js'], {
    stdio: 'inherit',
    cwd: __dirname
  });

  // Start Frontend
  setTimeout(() => {
    console.log('🎨 Starting Frontend...');
    const frontend = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      cwd: __dirname
    });
  }, 3000);
}, 5000);