function toggleText(element) {
    const textBlocks = {
        "block1": [
            `<span class="colored-text" style="color: red;">She saw her ghost self put a pill on her ghost tongue, walk to the ghost trick and stick it in his mouth. She saw the ghost trick swallow it and pass out. Her ghost self then rummaged through the ghost trick’s coat pocket, grabbed his wallet, and bailed.</span>`,
            `<span class="colored-text" style="color: blue;">She saw her ghost self having sex with the ghost trick. Afterwards, as the ghost trick was sleeping, her ghost self sat down on the floor, took a loaded syringe from her purse, shot up and nodded off. The ghost trick woke up a while later, took her purse, and took off.</span>`,
            `<span class="colored-text" style="color: green;">She saw ghost self giving the ghost trick a few oxys. She noticed that her ghost self put a benzo in there by accident. The ghost trick crushed the pills and smoked them. He lay down in bed and after a while he stopped breathing. Her ghost self tried to shake him out of it but couldn’t. She said “oh shit” and bolted.</span>`
        ],
        "block2": [
            `<span class="colored-text" style="color: red;">“Fuck off,” she said.<br>“Don’t be like that, now, how about fifty?”<br>“Eat shit, you bastard, I’m fourteen.”<br>“Stuck-up bitch” he said and left, trailing booze stink behind him.</span>`,
            `<span class="colored-text" style="color: blue;">“Make it a hundred” she said.<br>“Fifty” he said.<br>“A hundred or I’m calling the cops” she said.<br>“Fine…” He said, “fuckin’ gold diggers startin’ early these days…”</span>`,
            `<span class="colored-text" style="color: green;">“Fuck you even talking to me for? I’m gonna call my dad!”<br>“Call him, he’s a bitch”<br>“Dad!”<br>“No, wait, shitfire, shush, ok, I’m going” he said, and left.</span>`
        ],
        "block3": [
            `<span class="colored-text" style="color: red;">“Just give me the black tar,” she said.<br>“Fine, suit yerself,” he said, swiveling back to his desk and opening the bottom drawer.</span>`,
            `<span class="colored-text" style="color: blue;">“Ok, but gimme a fresh one” she said.<br>“Shit, I think I might have one in here for the princess…” he said, rummaging through the middle drawer.</span>`,
            `<span class="colored-text" style="color: green;">“Fine, but can I borrow some cash? I need to get a tooth fixed. Tricks are complainin’,” She said.<br>“Shitfire… Sure, give me a second,” he grabbed the key ring from his belt and unlocked the top drawer. She swung her leg back, yanking a cord running from behind her to hook around Owen’s swivel chair. He toppled over, the computer keyboard and monitor went with him. She went over, grabbed the monitor, and smashed it into his head. He went limp. She grabbed the cash from the drawer and left the office.</span>`
        ],
        "block4": [
            `<span class="colored-text" style="color: red;">“I can’t, Haley… I’ve tried…”<br>“Try again… You’re not a junkie, Maggie, you know that…”<br>“Just give me a few months… I’ll find somewhere else to stay, I just need a few months…”<br>“You’ve said that before”<br>“Just a few months, so I can get my shit in order.”<br>“No, Maggie… I’m either driving you to the rehab center right now or you’re on your own.”<br>Maggie looked her sister in the eye, “Haley, you’re being mean.”<br>Haley wiped her tears, looked away. “I’m sorry Maggie… You should pack up, now.”</span>`,
            `<span class="colored-text" style="color: blue;">“I can’t, Haley…”<br>“Why? Me and Darryl will cover the expenses!”<br>“That’s not it…<br>“What is it, then?”<br>“Something happened last time,” Maggie said.<br>“What happened?”<br>“My roommate there… She did stuff to me…”<br>“Oh my God, Maggie… Maggie, oh my God, why didn’t you tell me?”<br>“I don’t know…”<br>“Listen, we’ll take you to a different one… Would you be okay with that? Could we do that?”<br>Ghost Maggie went silent, took a drag from the cigarette.<br>“Maggie, please say yes,” Haley said.<br>“Okay,” Maggie said.<br>“Okay?”<br>“Okay” Maggie said, between sobs.<br>“Okay, grab some clothes and your toothbrush, I’ll drive you there and we’ll bring you more stuff tomorrow.”</span>`,
            `<span class="colored-text" style="color: green;">“I can’t Haley, it’s too much,” Maggie said.<br>“It’s too much for me too, Maggie.”<br>Maggie blurted, “oh fuck off…<br>“Sorry?” Haley said.<br>Maggie turned to her sister, “Too much? Here, with fucking Darryl paying all the bills and you just kick back and watch podcasts all day? Give me a break.”<br>“Watch it, Maggie, he’s paying your bills, too.”<br>Maggie got up, “Yeah, well, he’s fucking the sales manager at his little car dealership! I know it, you fucking know it, what’s that worth, huh?” she gestured around the house, “is all this shit worth your dignity?”<br>“Oh, that’s special, coming from you! That’s real special! You sell your body for a living, Maggie!”<br>“You’re right! I shoulda sold it for a house!”<br>“Get out of here! Now!”</span>`
        ],
        "block5": [
            `<span class="colored-text" style="color: red;">shooting up her arm, closing her eyes, and dying, thick spit trickling down her hung head.</span>`,
            `<span class="colored-text" style="color: blue;">shooting up her neck, rolling her eyes until it was all white like a statue
            <span class="colored-text" style="color: blue;">shooting up her neck, rolling her eyes until it was all white like a statue, and dying.</span>`,
            `<span class="colored-text" style="color: green;">taking off her heels and shooting up between her toes and slumping over, dead, arms outstretched like a sleeping child, a little blood from the head from slamming on the ground.</span>`,
            `<span class="colored-text" style="color: purple;">shooting up the artery and flopping around in agony like a fish on a boat, screaming so hard her voice cracked and vanished, then dying with her hip thrust in the air like a yoga pose.</span>`,
            `<span class="colored-text" style="color: pink;">dying in the middle of the bandstand.</span>`,
            `<span class="colored-text" style="color: magenta;">dying at the entrance of the bandstand.</span>`,
            `<span class="colored-text" style="color: lightpink;">dying facing out.</span>`,
            `<span class="colored-text" style="color: #000000;">dying facing in.</span>`,
            `<span class="colored-text" style="color: #333333;">dying facing up.</span>`,
            `<span class="colored-text" style="color: #666666;">dying facing down.</span>`,
            `<span class="colored-text" style="color: #999999;">dying.</span>`,
            `<span class="colored-text" style="color: #CCCCCC;">dying.</span>`,
            `<span class="colored-text" style="color: #DDDDDD;">dying.</span>`,
            `<span class="colored-text" style="color: #EEEEEE;">dying.</span>`
        ]
    };

    const blockId = element.dataset.block;
    const currentIndex = parseInt(element.dataset.index, 10);
    const nextIndex = (currentIndex + 1) % textBlocks[blockId].length;

    // Hide all text blocks of the same category
    document.querySelectorAll(`.colored-text[data-block="${blockId}"]`).forEach(block => {
        block.style.display = 'none';
    });

    element.innerHTML = textBlocks[blockId][nextIndex];
    element.dataset.index = nextIndex;
    element.style.color = getColorForText(blockId, nextIndex);
    element.style.display = 'inline'; // Display the current block
}

function getColorForText(blockId, index) {
    const colors = {
        "block1": ["red", "blue", "green"],
        "block2": ["red", "blue", "green"],
        "block3": ["red", "blue", "green"],
        "block4": ["red", "blue", "green"],
        "block5": [
            "red", "blue", "green", "purple", "pink", "magenta", "lightpink", 
            "#000000", "#333333", "#666666", "#999999", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"
        ]
    };
    return colors[blockId][index] || "black";
}
