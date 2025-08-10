export enum FORTUNE_TYPE {
    NORMAL = "normal",
    DEV = "dev",
    MISFORTUNE = "misfortune"
}

export type Fortune = {
    text: string;
    type: FORTUNE_TYPE;
}

export const fortunes = [
    {
        text: 'An old friend will send you a meme today. Cherish it.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will find a clever solution in fewer lines of code.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Take a break before the code takes a break for you.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'A random act of kindness will ripple for weeks.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "A long walk will solve the problem your code can't.",
        type: FORTUNE_TYPE.DEV
    },
    {
        text: "You're two commits away from greatness.",
        type: FORTUNE_TYPE.DEV
    },
    {
        text: "Don't sleep on the power of sleep.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Step away from the screen. Come back enlightened.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Your future self will thank you for writing that doc.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: "You are the MVP—even if you're not in the MVP.",
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Merge conflicts build character.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Someone you help today will remember it for years.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your passion projects deserve your attention.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: "Celebrate small wins. They're the building blocks.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Adventure can be real happiness.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Someone will call you today with exciting news.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A pleasant surprise is waiting for you.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will soon embark on a business venture.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'An old acquaintance will reappear in your life.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will find something you thought was lost.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your talents will be recognized and suitably rewarded.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Big journeys begin with small steps.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A quiet evening brings peace of mind.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Let your inner voice guide you today.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A smile is your personal welcome mat.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You will soon gain something you've been seeking.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A new hobby will lead to lifelong friendships.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Be careful not to overspend this weekend.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A thrilling time is in your immediate future.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You are about to learn something new and valuable.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "Trust your intuition — it's not wrong.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will soon receive unexpected help.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your kindness will lead you to success.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A fresh start will put you on your way.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A golden opportunity is coming your way.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your curiosity will open doors.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "Don't be afraid to take the leap.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your patience is about to pay off.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Someone secretly admires you.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A good deed returns to you this week.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your energy attracts positive outcomes.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will laugh at something silly very soon.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Be open to changes — they bring growth.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'An important decision will become clear.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You are stronger than you think.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A financial opportunity is around the corner.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A dream you had will soon come true.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You'll discover joy in an unexpected place.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A new friend will brighten your day.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Serenity will find you when you slow down.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your hard work will soon be rewarded.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Let go of the past — the future is calling.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "An idea you've been sitting on is worth pursuing.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You are capable of amazing things.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Today is a good day to try something new.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A warm conversation will make your week.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Good luck will visit you soon.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will inspire someone close to you.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Joy comes when you least expect it.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Embrace the unknown — it holds your destiny.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will cross paths with someone important.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your honesty is your greatest strength.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A peaceful heart makes for a strong spirit.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Be bold — fortune favors the brave.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You're exactly where you need to be.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Trust the timing of your life.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You will conquer a long-standing fear.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Something lost will return to you.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Kind words will carry you far today.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A creative spark will lead to something big.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You'll find beauty in the everyday.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Listen — the answer is already within you.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Celebrate the little things.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Someone will thank you sincerely this week.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You're about to have a breakthrough.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Today is a fresh page — write something new.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Small wins lead to big changes.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You are loved more than you know.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Expect the unexpected — and smile.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Peace follows those who choose it.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Let your imagination lead the way.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Someone will surprise you with kindness.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You are on the right path — keep going.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A risk will lead to a reward.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your perspective brings light to others.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "Something you've been waiting for is coming.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A stranger will become a friend.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Clarity is on its way.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your future is full of color.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'An old mistake will bring a new lesson.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You have more influence than you realize.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Be patient — your time is near.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'One step at a time will get you there.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your efforts are creating ripples of change.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A little spontaneity will do you good.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your calm is your superpower.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Something beautiful is taking root.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You are ready, even if you don't feel it.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A challenge will reveal your strengths.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'You bring joy just by being you.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Success is closer than it seems.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your laughter is contagious — share it.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your dreams are calling — answer.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "Others see the light you don't notice in yourself.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A meaningful coincidence is about to occur.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You're building something meaningful.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You're more prepared than you think.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Let joy be your compass today.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Unexpected generosity is coming your way.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "Say yes — you'll be glad you did.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You are the answer to someone's question.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Every step forward counts.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'A long-awaited message will arrive soon.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: "You're about to start a new chapter.",
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'The best moments are still ahead.',
        type: FORTUNE_TYPE.NORMAL
    },
    {
        text: 'Your next deploy will be bug-free — believe it.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'A clever solution will come to you in the shower.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Clean code is in your future.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'A pull request today will lead to unexpected praise.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Refactoring will reveal hidden potential.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Trust your logic — the bug is where you think it is.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: "You'll soon ship something you're proud of.",
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'A new framework will reignite your excitement.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Someone will thank you for your documentation.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Your next sprint will feel like a breeze.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'A breakthrough is just a rubber duck away.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'You will discover joy in fixing legacy code.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Your code will pass all tests on the first run.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'An elegant solution will win you admiration.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Coffee and clean commits will guide your day.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: "You'll soon automate a task and feel like a wizard.",
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Merge conflicts will resolve in your favor.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Your side project has real potential — keep building.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'Debugging will lead to a moment of brilliance.',
        type: FORTUNE_TYPE.DEV
    },
    {
        text: "You're one commit away from something great.",
        type: FORTUNE_TYPE.DEV
    },
    {
        text: 'You will step in something unpleasant today.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'A minor inconvenience will feel major this afternoon.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: "You will forget something important until it's too late.",
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'Today is not the day to test your luck.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'Your confidence will be briefly but memorably misplaced.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'A surprise bill is in your near future.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: "That strange noise isn't going away.",
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'Someone will misunderstand your best intentions.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'You will lose a sock, then blame yourself.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'An awkward silence is coming your way.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'You will get exactly what you asked for — and regret it.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'Patience will not be enough today.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'You will remember the right thing at the wrong time.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'A small mistake will snowball impressively.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'Beware of cheerful strangers.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'Your snack will disappoint you.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'You will win the argument and lose the point.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'Your umbrella will break when you need it most.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: "Today's shortcut will become tomorrow's detour.",
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'You will wake up five minutes after you needed to.',
        type: FORTUNE_TYPE.MISFORTUNE
    },
    {
        text: 'You are not alone. Someone else has the same error.',
        type: FORTUNE_TYPE.MISFORTUNE
    }
]