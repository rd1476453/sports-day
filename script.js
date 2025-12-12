// Opening Ceremony
function OpeningCeremony(callback) {
  console.log("🏁 Opening ceremony has started...");

  let counter = 3;
  const interval = setInterval(() => {
    console.log(`Starting in ${counter}...`);
    counter--;

    if (counter < 0) {
      clearInterval(interval);

      let score = { red: 0, blue: 0, green: 0, yellow: 0 };
      console.log("✨ Let's begin the Sports Day!");
      callback(score, Race100M);
    }
  }, 1000);
}

// Race 100M
function Race100M(score, callback) {
  console.log("🏃‍♂️ Race 100M is starting...");

  setTimeout(() => {
    const raceTimes = {
      red: Math.floor(Math.random() * 6) + 10, // 10 to 15 sec
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };

    console.log("⏱️ Race 100M Times:", raceTimes);

    const sorted = Object.entries(raceTimes).sort((a, b) => a[1] - b[1]);

    // Allocate points
    score[sorted[0][0]] += 50; // 1st place
    score[sorted[1][0]] += 25; // 2nd place

    console.log("🏆 Updated Scores:", score);
    callback(score, LongJump);

  }, 3000);
}

// Long Jump
function LongJump(score, callback) {
  console.log("🏅 Long Jump is starting...");

  setTimeout(() => {
    const colors = ["red", "blue", "green", "yellow"];
    const winner = colors[Math.floor(Math.random() * colors.length)];

    console.log(`🏆 Long Jump Winner: ${winner}`);
    score[winner] += 100;

    console.log("Updated Scores:", score);
    callback(score, HighJump);

  }, 2000);
}

// High Jump
function HighJump(score, callback) {
  console.log("🤸 High Jump event started...");

  const userInput = prompt("Which color won the High Jump? (red/blue/green/yellow)");

  if (!userInput) {
    console.log("❌ Event was cancelled. No input provided.");
    return callback(score);
  }

  const color = userInput.toLowerCase();

  if (!score.hasOwnProperty(color)) {
    console.log("⚠️ Invalid color entered. No points awarded.");
  } else {
    score[color] += 150;
    console.log(`🏆 High Jump Winner: ${color}`);
  }

  console.log("Updated Scores:", score);
  callback(score, AwardCeremony);
}

// Award Ceremony
function AwardCeremony(score) {
  console.log("🎉 Award Ceremony Started!");
  console.log("🏁 Final Scores:", score);

  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

  console.log(`🥇 1st Place: ${sorted[0][0]} with ${sorted[0][1]} points`);
  console.log(`🥈 2nd Place: ${sorted[1][0]} with ${sorted[1][1]} points`);
  console.log(`🥉 3rd Place: ${sorted[2][0]} with ${sorted[2][1]} points`);
  console.log(`🎗️ 4th Place: ${sorted[3][0]} with ${sorted[3][1]} points`);
}

// Start the Sports Day
OpeningCeremony(Race100M);
