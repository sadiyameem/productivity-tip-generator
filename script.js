const productivityTips = [
    "Dedicate specific time slots to individual tasks. Deep focus work and reducing multitasking. - Time Blocking",
    "Work in 25 minute bursts with short breaks. Maintaining focus and preventing burnout. - Pomodoro Technique",
    "Complete any task taking under two minutes immediately. Clearing small tasks before they pile up. - Two Minute Rule",
    "Categorize tasks by urgency and importance. Prioritizing what to tackle first. - Eisenhower Matrix",
    "Focus on the 20% of tasks driving 80% of results. Identifying high impact work. - 80/20-Rule (Pareto Principle)",
    "Tackle your hardest task first thing. Building momentum and reducing procrastination. - Eat That Frog",
    "Group similar tasks and complete them together. Minimizing context switching. - Task Batching",
    "Plan one big, three medium, and five small daily tasks. Balanced daily planning without overwhelm. - 1-3-5 Rule",
    "Standardize recurring tasks with reusable formats. Saving time on repetitive work. - Productivity Templates",
    "Assign tasks to others based on skills and availability. Reclaming manual busywork. - Delegation",
    "Set up systems to handle repetitive processes. Eliminating manual busywork. - Automation",
    "Track how you spend every minute. Identifying time wasters and inefficiencies. - Time Audits",
    "Redesign your workspace for focus. Breaking mental ruts and boosting mood. - Environment Optimization",
    "List six priorities the night before and tackle them in order. Simple daily structure and single tasking. - Ivy Lee Method",
    "Get all your thoughts out of your head onto paper. Clearing mental clutter and capturing ideas. - Brain Dumps",
    "Decline tasks that don’t align with your goals. Protecting focus time for what matters. - Saying No",
    "Build rest periods into your calendar. Preventing burnout and restoring energy. - Scheduled Breaks",
    "Set specific, measurable, achievable, relevant, time bound objectives. Long term direction and accountability. - SMART Goals",
    "Review progress and adjust your approach. Continuous improvement and course correction. - Weekly Reflection",
    "Set alerts for deadlines and important tasks. Avoiding missed deadlines and overlooked details. - Reminders",
];

let lastTipIndex = -1;

function generateTip() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * productivityTips.length);
    } while (randomIndex === lastTipIndex && productivityTips.length > 1);

    lastTipIndex = randomIndex;

    const tipElement = document.getElementById("tipText");
    const tipContainer = document.getElementById("tipContainer");

    setTimeout(() => {
        tipElement.textContent = productivityTips[randomIndex];
    }, 50);
}