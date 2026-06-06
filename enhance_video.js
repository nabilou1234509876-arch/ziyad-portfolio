const fs = require('fs');

const pageFile = 'C:/Users/ziyad/portfolio/src/app/page.tsx';
let code = fs.readFileSync(pageFile, 'utf8');

// Bust cache and enhance the transition effect
code = code.replace(`src="/edit.mp4"`, `src="/edit.mp4?v=3"`);

// Let's also ensure the video is crisp by adding some styling properties and ensuring it fades out to a smooth, elegant opacity
code = code.replace(`showContent ? 'opacity-20 blur-sm scale-105' : 'opacity-0'`, `showContent ? 'opacity-25 blur-[4px] scale-[1.02] brightness-75' : 'opacity-0'`);

// 3 second delay is already there. Let's make the transition duration for the video slightly longer and smoother
code = code.replace(`duration-1000`, `duration-[2000ms] ease-in-out`);

fs.writeFileSync(pageFile, code, 'utf8');
console.log('Updated video transition effects and busted cache.');
