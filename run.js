const { exec } = require('child_process');

// Get the project directory path from command line arguments
const projectPath = process.argv[2];

if (!projectPath) {
  console.error('Please provide the project directory path.');
  process.exit(1);
}

// Assume default entry HTML file as "index.html"
const entryHtml = 'index.html';

// Additional options, if needed
const additionalOptions = process.argv.slice(3).join(' ');

// Start the live server with specified entry HTML file
const liveServerProcess = exec(`live-server "${projectPath}" ${additionalOptions}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting the live server: ${error.message}`);
    process.exit(1);
  }
  console.log(stdout);

  // Extract and display the local server address
  const match = stdout.match(/(http:\/\/localhost:\d+)/);
  if (match) {
    console.log(`Local server running at: ${match[1]}`);
  } else {
    console.warn('Unable to determine the local server address.');
  }
});
