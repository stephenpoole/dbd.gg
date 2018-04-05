export const KillerPerks = {
    STRIDOR: {
        index: 'STRIDOR',
        name: 'Stridor',
        owner: 'NURSE',
        rarity: ['COMMON', 'UNCOMMON', 'RARE'],
        description:
            'Breathing of Survivors in pain is %s% louder. Regular Survivor breathing is now also %s% louder.',
        flavor: "If you don't stop and catch your breath... she will.",
        image: 'stridor',
        tiers: [[25, 0], [50, 0], [50, 25]]
    },
    THANATOPHOBIA: {
        index: 'THANATOPHOBIA',
        name: 'Thanatophobia',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NURSE',
        description:
            'All Survivors receive penalties to repair, healing and sabotage speeds for each injured, dying or hooked Survivor.\n1 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.\n2 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.\n3 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.\n4 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.',
        flavor: 'She plays with us and revels in our pain.',
        image: 'thatanophobia',
        tiers: [[4, 7, 10, 13], [5, 8, 11, 14], [6, 9, 12, 15]]
    },
    A_NURSES_CALLING: {
        index: 'A_NURSES_CALLING',
        name: "A Nurse's Calling",
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'NURSE',
        description:
            "Unlocks potential in one's Aura reading ability. The Auras of Survivors who are healing or being healed are revealed to you when they are within %s metres of range.",
        flavor:
            'Still attached to the fragments of her past life, she is drawn to those in need of help.',
        image: 'aNursesCalling',
        tiers: [[20], [24], [28]]
    },
    UNNERVING_PRESENCE: {
        index: 'UNNERVING_PRESENCE',
        name: 'Unnerving Presence',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'TRAPPER',
        description:
            "Your presence alone instils great fear. Survivors within your Terror Radius have a %s% greater chance of triggering Skill Checks when repairing, healing or sabotaging. Triggered Skill Checks' success zones are reduced by %s%.",
        flavor: 'Its presence befalls us.',
        image: 'unnervingPresence',
        tiers: [[6, 40], [8, 50], [10, 60]]
    },
    BRUTAL_STRENGTH: {
        index: 'BRUTAL_STRENGTH',
        name: 'Brutal Strength',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'TRAPPER',
        description:
            "Your great strength allows you to shred through your prey's defences. Destroy dropped Pallets %s% faster.",
        flavor: "It's more than muscles. A dark power motivates the beast.",
        image: 'brutalStrength',
        tiers: [[10], [15], [20]]
    },
    AGITATION: {
        index: 'AGITATION',
        name: 'Agitation',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'TRAPPER',
        description:
            'You get excited in anticipation of hooking your prey. Increases your speed while transporting bodies by %s%. While transporting a body, your Terror Radius is increased by %s metres.',
        flavor:
            'At some point, the excitement of hooking one of us becomes more important than the desire to kill us.',
        image: 'agitation',
        tiers: [[6, 6], [8, 12], [12, 18]]
    },
    PREDATOR: {
        index: 'PREDATOR',
        name: 'Predator',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'WRAITH',
        description:
            'Your acute tracking ability allows you to follow disturbances left by passing prey over a longer period of time. Footstep marks stay visible %s seconds longer than normal.',
        flavor:
            "Never stop moving and hope you're always two steps ahead of the beast.",
        image: 'predator',
        tiers: [[1], [2], [3]]
    },
    BLOODHOUND: {
        index: 'BLOODHOUND',
        name: 'Bloodhound',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'WRAITH',
        description:
            'Like a hunting scent hound, you smell traces of blood at a great distance. Fresh Blood Stains are %s more discernible than normal and can be tracked for %s seconds longer than normal.',
        flavor:
            'Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow.',
        image: 'bloodhound',
        tiers: [['slightly', 2], ['moderately', 3], ['considerably', 4]]
    },
    SHADOWBORN: {
        index: 'SHADOWBORN',
        name: 'Shadowborn',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'WRAITH',
        description:
            'You have a keen vision in the darkness of the night. Your vision is %s% clearer and your field of view is %s wider than normal. Highly sensitive to light, you get blinded %s% faster than normal and take 50% more time to recover from this condition.',
        flavor:
            'Shining in the darkest dark, his eyes pierce the night and sting your soul.',
        image: 'shadowborn',
        tiers: [[25, 'not', 20], [30, 'slightly', 25], [35, 'considerably', 30]]
    },
    ENDURING: {
        index: 'ENDURING',
        name: 'Enduring',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'HILLBILLY',
        description:
            'You are resilient to pain. Your rate of recovery from stuns is increased by %s%.',
        flavor: 'He stops at nothing.',
        image: 'enduring',
        tiers: [[50], [60], [75]]
    },
    LIGHTBORN: {
        index: 'LIGHTBORN',
        name: 'Lightborn',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HILLBILLY',
        description:
            'Unlike other beasts of the fog, you have adapted to light. Resistance to blindness is increased by %s%. Recovery from blindness is increased by 50%.',
        flavor:
            'These monsters... they adapt! They emerge with strange new abilities.',
        image: 'lightborn',
        tiers: [[20], [40], [60]]
    },
    TINKERER: {
        index: 'TINKERER',
        name: 'Tinkerer',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'HILLBILLY',
        description:
            'Add-ons that affect the charge time of your Power are %s% more effective.',
        flavor:
            "The Crooked makes impressive tools out of scraps... Tools aimed at maiming us in creative ways... It's horrifying to think it's actually intelligent.",
        image: 'tinkerer',
        tiers: [[6], [8], [10]]
    },
    SAVE_THE_BEST_FOR_LAST: {
        index: 'SAVE_THE_BEST_FOR_LAST',
        name: 'Save The Best For Last',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'SHAPE',
        description:
            'You become obsessed with one Survivor. As long as your Obsession is alive, after being in a chase for 20 seconds the cooldown for your next successful attack is decreased by %s%. Your successful attack cooldown remains active for 5 seconds seconds after a chase. Re-initialising a chase before the 5 seconds have lapsed will reset the successful attack cooldown timer.\nOnly one Obsession per match.',
        flavor: 'Death has come to your little town, Sheriff.',
        image: 'saveTheBestForLast',
        tiers: [[30], [35], [40]]
    },
    PLAY_WITH_YOUR_FOOD: {
        index: 'PLAY_WITH_YOUR_FOOD',
        name: 'Play With Your Food',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'SHAPE',
        description:
            'You become obsessed with one Survivor. Every time you chase your Obsession and let them escape, you receive a Token up to a maximum of 3 Tokens. Each Token increases your movement speed by %s%. Each offensive action spends one Token.\nOnly one Obsession per match.',
        flavor: "You've fooled them, haven't you Michael? But not me.",
        image: 'playWithYourFood',
        tiers: [[3], [4], [5]]
    },
    DYING_LIGHT: {
        index: 'DYING_LIGHT',
        name: 'Dying Light',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'SHAPE',
        description:
            "You become obsessed with one Survivor. Your Obsession's altruistic action speed is increased by %s%. Once the Obsession is killed or sacrificed, every other Survivor gets a penalty of %s% to repair, healing and sabotage speed.",
        flavor: "This isn't a man...",
        image: 'dyingLight',
        tiers: [[38, 19], [44, 22], [50, 25]]
    },
    HEX_THE_THIRD_SEAL: {
        index: 'HEX_THE_THIRD_SEAL',
        name: 'Hex: The Third Seal',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HAG',
        description:
            "A Hex that hinders one's Aura reading ability. Hitting a Survivor while the Hex Totem is active reduces the effectiveness of their Aura reading ability by 100%. This effect applies to the last %s Survivors hit.\nThe Hex effects persist as long as the related Hex Totem is standing.",
        flavor: "She touched your skin, you bear the witch's mark!",
        image: 'theThirdSeal',
        tiers: [[2], [3], [4]]
    },
    HEX_RUIN: {
        index: 'HEX_RUIN',
        name: 'Hex: Ruin',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'HAG',
        description:
            "A Hex that affects the Survivors' skills at repairing Generators. %s Survivors are affected by Ruin, which causes Good Skill Checks to result in 5% regression on the Generator and Great Skill Checks grant 0% in progression.\nThe Hex effects persist as long as the related Hex Totem is standing.",
        flavor: 'A curse is upon you. It will cause your ruin.',
        image: 'ruin',
        tiers: [[2], [3], [4]]
    },
    HEX_DEVOUR_HOPE: {
        index: 'HEX_DEVOUR_HOPE',
        name: 'Hex: Devour Hope',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'HAG',
        description:
            'A Hex rooting its power on hope. The false hope of Survivors ignites your hunger. When a Survivor is rescued from a hook at least 24 metres away, Devour Hope receives a Token.\n2 Tokens: %s\n3 Tokens: %s\n5 Tokens: %s\nThe Hex effects persist as long as the related Hex Totem is standing.',
        flavor:
            'If you do nothing, you have their blood on your hands. If you save them, her hunger grows.',
        image: 'devourHope',
        tiers: [
            [
                '-',
                '-',
                'Grants the ability to kill Survivors by your own hand.'
            ],
            [
                '-',
                'Attacks put Survivors into the dying state automatically.',
                'Grants the ability to kill Survivors by your own hand.'
            ],
            [
                'Gain a 5% speed burst for 10 seconds after hooking a Survivor. Speed burst triggers 10 seconds after hooking a Survivor.',
                'Attacks put Survivors into the dying state automatically.',
                'Grants the ability to kill Survivors by your own hand.'
            ]
        ]
    },
    OVERWHELMING_PRESENCE: {
        index: 'OVERWHELMING_PRESENCE',
        name: 'Overwhelming Presence',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DOCTOR',
        description:
            "Your presence alone instils great fear. Survivors within your Terror Radius suffer from inefficiency. Affected Survivors' Item consumption rates are increased by %s%",
        flavor: 'Shit!! I dropped the gauze!',
        image: 'overwhelmingPresence',
        tiers: [[80], [90], [100]]
    },
    MONITOR_AND_ABUSE: {
        index: 'MONITOR_AND_ABUSE',
        name: 'Monitor & Abuse',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DOCTOR',
        description:
            'Meticulous in your approach, terrifying in your application. While in a chase, your Terror Radius is increased by %s metres. Otherwise your Terror Radius is decreased by %s metres and your field of view is %s increased. Field of view gains do not stack.',
        flavor: "It's time for your treatment!",
        images: 'monitorAndAbuse',
        tiers: [
            [6, 6, 'slightly'],
            [7, 7, 'moderately'],
            [8, 8, 'considerably']
        ]
    },
    OVERCHARGE: {
        index: 'OVERCHARGE',
        name: 'Overcharge',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DOCTOR',
        description:
            'You are fuelled by your hate for progress. Overcharge a Generator by performing the Damage Generator action. The next Survivor interacting with that Generator is faced with a %s difficult Skill Check. Failing the Skill Check results in an additional %s% Generator regression.',
        flavor: 'It is a trap. But a trap one must step in...',
        image: 'generatorOvercharge',
        tiers: [['moderately', 3], ['considerably', 4], ['tremendously', 5]]
    },
    BEAST_OF_PREY: {
        index: 'BEAST_OF_PREY',
        name: 'Beast Of Prey',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'HUNTRESS',
        description:
            'Your lust for a kill is so intense that your connection with the Entity is momentarily lost, making you totally unpredictable. The Red Stain disappears for %s seconds when Bloodlust activates.\nBeast of Prey has a cooldown of 120 seconds.',
        flavor: 'Where did she go?',
        image: 'BeastOfPrey',
        tiers: [[15], [20], [25]]
    },
    TERRITORIAL_IMPERATIVE: {
        index: 'TERRITORIAL_IMPERATIVE',
        name: 'Territorial Imperative',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HUNTRESS',
        description:
            "Unlocks potential in one's Aura reading ability. Survivors' Auras are revealed to you for 3 seconds when they enter the and you are more than 32 metres away from the Basement entrance.\nTerritorial Imperative can only be triggered once every %s seconds.",
        flavor: "We're not safe anywhere...",
        image: 'TerritorialImperative',
        tiers: [[60], [45], [30]]
    },
    HEX_HUNTRESS_LULLABY: {
        index: 'HEX_HUNTRESS_LULLABY',
        name: 'Hex: Huntress Lullaby',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HUNTRESS',
        description:
            'A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey’s attention. Survivors receive a %s% regression penalty when missing any Skill Check.\n\nEach time a Survivor is hooked, Huntress Lullaby grows in power: 1 to 4 Tokens: Time between the Skill Check warning sound and the Skill Check becomes shorter.\n5 Tokens: No Skill Check warning.\nThe Hex effects persist as long as the related Hex Totem Icon is standing.',
        flavor: 'That song, it drives me crazy!',
        image: 'HuntressLullaby',
        tiers: [[2], [4], [6]]
    },
    KNOCK_OUT: {
        index: 'KNOCK_OUT',
        name: 'Knock Out',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'CANNIBAL',
        description:
            "The trauma caused by your brutal attacks makes crying for help painfully difficult. Dying Survivors' Auras are not revealed to other Survivors when they are standing outside of %s metres of range.",
        flavor:
            "Oh, that gun's no good. The old way... with a sledge! You see, that way's better. They die better that way.",
        image: 'knockOut',
        tiers: [[32], [24], [16]]
    },
    BARBECUE_AND_CHILI: {
        index: 'BARBECUE_AND_CHILI',
        name: 'Barbecue & Chili',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'CANNIBAL',
        description:
            "A deep bond with The Entity unlocks potential in one's Aura reading ability. After hooking a Survivor, all other Survivors' Auras are revealed to you for 4 seconds when they are further than %s metres from the Hook.\nEach time a Survivor is hooked for the first time, gain a %s% stackable Bonus to all Bloodpoint gains.",
        flavor:
            "I just can't take no pleasure in killing. There's just some things you gotta do. Don't mean you have to like it.",
        image: 'BBQAndChili',
        tiers: [[52, 15], [46, 20], [40, 25]]
    },
    FRANKLINS_DEMISE: {
        index: 'FRANKLINS_DEMISE',
        name: "Franklin's Demise",
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'CANNIBAL',
        description:
            'Your vicious attacks make the Survivors drop their Item on impact. The lost item is damaged in the fall, losing %s% of its base amount of Charges.',
        flavor: 'Sally, I hear something. Stop! Stop!',
        image: 'franklinsLoss',
        tiers: [[0], [5], [10]]
    },
    FIRE_UP: {
        index: 'FIRE_UP',
        name: 'Fire Up',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'NIGHTMARE',
        description:
            'The increased pressure of losing your preys fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a Generator, Fire Up grows in power and grants speed bonus to pick up, drop, Pallet break, Generator break and vaults.\n2 Tokens: Receive %s% action speed bonus.\n3 Tokens: Receive %s% action speed bonus.\n4 Tokens: Receive %s% action speed bonus.',
        flavor: '',
        image: 'fireUp',
        tiers: [[6, 8, 10], [8, 10, 12], [10, 12, 14]]
    },
    REMEMBER_ME: {
        index: 'REMEMBER_ME',
        name: 'Remember Me',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NIGHTMARE',
        description:
            'You become obsessed with one Survivor. Each time you hit your Obsession, you increase the opening time of the Exit Gates by 5 seconds up to a maximum of %s seconds. The Obsession is not affected by Remember Me.\nOnly one Obsession per match.',
        flavor: '',
        image: 'rememberMe',
        tiers: [[20], [25], [30]]
    },
    BLOOD_WARDEN: {
        index: 'BLOOD_WARDEN',
        name: 'Blood Warden',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NIGHTMARE',
        description:
            'Once per match, once at least one Exit Gate is opened, hooking a Survivor summons The Entity to block the exits for all Survivors for %s seconds. While Blood Warden is active, Auras of Survivors located within the Exit Gates are revealed to you.',
        flavor: '',
        image: 'bloodWarden',
        tiers: [[30], [40], [60]]
    },
    HANGMANS_TRICK: {
        index: 'HANGMANS_TRICK',
        name: "Hangman's Trick",
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'PIG',
        description:
            'Your ingenious modifications to Hooks prevent tampering and permanent damage. Hooks destroyed by sabotage or sacrifices repair automatically after %s seconds.\nGain a notification when someone starts sabotaging the Hooks.',
        flavor: '"No excuses, no equivocations... No crying." — Amanda Young',
        image: 'hangmansTrick',
        tiers: [[30], [20], [10]]
    },
    SURVEILLANCE: {
        index: 'SURVEILLANCE',
        name: 'Surveillance',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'PIG',
        description:
            "Unlocks potential in one's Aura reading ability. The last %s Aura(s) are indicated in white to you for 16 seconds.",
        flavor: '"Are you gonna behave?" — Amanda Young',
        image: 'surveillance',
        tiers: [
            ["1 regressing Generator's"],
            ["2 regressing Generator's"],
            ["3 regressing Generator's"]
        ]
    },
    MAKE_YOUR_CHOICE: {
        index: 'MAKE_YOUR_CHOICE',
        name: 'Make Your Choice',
        rarity: ['RARE', 'RARE', 'VERY_RARE'],
        owner: 'PIG',
        description:
            'When a Survivor rescues another from a Hook at least %s metres away from you, Make Your Choice triggers and applies the Exposed Status Effect on the rescuer for 60 seconds.',
        flavor:
            '"You\'d be surprised what tools can save a life." — Amanda Young',
        image: 'makeYourChoice',
        tiers: [[48], [40], [32]]
    }
};

export const SurvivorPerks = {
    BOND: {
        index: 'BOND',
        name: 'Bond',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DWIGHT_FAIRFIELD',
        description:
            "Unlocks potential in one's aura reading ability. Allies' Auras are revealed to you when they are within a %s metres.",
        flavor:
            'We have to work as a team, I need you to survive so that I can survive!',
        image: 'bond',
        tiers: [[12], [24], [36]]
    },
    PROVE_THYSELF: {
        index: 'PROVE_THYSELF',
        name: 'Prove Thyself',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DWIGHT_FAIRFIELD',
        description:
            'Receive an incremental speed bonus to repair, healing and sabotage actions when other Survivors are within an 8 metre range.\n1 nearby survivor grants %s% increased speed.\n2 nearby survivor grants %s% increased speed.3 nearby survivor grants %s% increased speed.',
        flavor: "I'll show you what I can do!",
        image: 'proveThyself',
        tiers: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
    },
    LEADER: {
        index: 'LEADER',
        name: 'Leader',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'DWIGHT_FAIRFIELD',
        description:
            "You're able to organize a team to cooperate more efficiently. Increases the other Survivors' Repair, Healing and Sabotage speed by %s% when they are within an 8 metre range from you.",
        flavor: "I'll show you what I can do!",
        image: 'leader',
        tiers: [[3], [6], [9]]
    },
    QUICK_AND_QUIET: {
        index: 'QUICK_AND_QUIET',
        name: 'Quick & Quiet',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'MEG_THOMAS',
        description:
            "You do not make as much noise as others when quickly vaulting over obstacles or hiding in Lockers. The vault and hide actions' noise detection range is reduced by %s%. This effect can only be triggered every %s seconds.",
        image: 'quickAndQuiet',
        tiers: [[100, 30], [100, 25], [100, 20]]
    },
    SPRINT_BURST: {
        index: 'SPRINT_BURST',
        name: 'Sprint Burst',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'MEG_THOMAS',
        description:
            'When starting to run, break into a sprint at 150% your normal running speed for a maximum of 3 seconds.\nCauses Exhaustion for %s seconds.',
        image: 'sprintBurst',
        tiers: [[60], [50], [40]]
    },
    ADRENALINE: {
        index: 'ADRENALINE',
        name: 'Adrenaline',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'MEG_THOMAS',
        description:
            'You are fuelled by unexpected energy when on the verge of escape. Instantly heal one Health State and sprint at 150% your normal running speed for 5 seconds when the Exit Gates are powered.\nAdrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.\nAdrenaline will wake you up if you are asleep when it triggers.\nAdrenaline ignores Exhaustion.\nCauses Exhaustion IconStatusEffects exhausted.png for %s seconds.',
        image: 'adrenaline',
        tiers: [[60], [50], [40]]
    },
    EMPATHY: {
        index: 'EMPATHY',
        name: 'Empathy',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'CLAUDETTE_MOREL',
        description:
            "Unlocks potential in one's Aura reading ability. Dying or injured allies' Auras are revealed to you when within %s metres. Empathy does not reveal Auras of allies when they are in the Killer's direct contact.",
        image: 'empathy',
        tiers: [[32], [64], ['∞']]
    },
    BOTANY_KNOWLEDGE: {
        index: 'BOTANY_KNOWLEDGE',
        name: 'Botany Knowledge',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'CLAUDETTE_MOREL',
        description:
            'You transform plants found around The Campfire into tinctures that slow down bleeding. Healing speed is increased by %s% and the efficiency of Med-Kits IconItems firstAidKit.png is increased by %s%.',
        flavor:
            '"Basic Botany knowledge could save your life someday." — Claudette Morel',
        image: 'botanyKnowledge',
        tiers: [[10, 10], [15, 15], [20, 20]]
    },
    SELF_CARE: {
        index: 'SELF_CARE',
        name: 'Self Care',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'CLAUDETTE_MOREL',
        description:
            'Unlocks the ability to heal yourself without a Med-Kit at 50% the normal healing speed. Increases the efficiency of Med-Kit self-heal by %s%.',
        image: 'selfCare',
        tiers: [[10], [15], [20]]
    },
    IRON_WILL: {
        index: 'IRON_WILL',
        name: 'Iron Will',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'JAKE_PARK',
        description:
            "You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by %s% %s.",
        image: 'ironWill',
        tiers: [
            [50, 'while staying still'],
            [100, 'while staying still'],
            [100, 'at any time']
        ]
    },
    CALM_SPIRIT: {
        index: 'CALM_SPIRIT',
        name: 'Calm Spirit',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'JAKE_PARK',
        description:
            'Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting Crows by %s%.',
        image: 'calmSpirit',
        tiers: [[80], [90], [100]]
    },
    SABOTEUR: {
        index: 'SABOTEUR',
        name: 'Saboteur',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'JAKE_PARK',
        description:
            'Unlocks the ability to sabotage without a Toolbox at %s% the normal sabotage speed. Skill Checks triggered in this situation have success zones reduced by %s%. Increases efficiency of Toolbox sabotage by %s%.',
        image: 'saboteur',
        tiers: [[30, 0, 50], [40, 10, 75], [50, 20, 100]]
    },
    BALANCED_LANDING: {
        index: 'BALANCED_LANDING',
        name: 'Balanced Landing',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'NEA_KARLSSON',
        description:
            'When Balanced Landing is active, stagger effects from long falls are reduced by %s%.\nTier III only: Upon landing, start sprinting at 150% your normal running speed for a maximum of 3 seconds if not exhausted.\nCauses Exhaustion for 40 seconds.',
        flavor: '"I\'ve jumped from higher places." — Nea Karlsson',
        image: 'balancedLanding',
        tiers: [[50], [75], [75]]
    },
    URBAN_EVASION: {
        index: 'URBAN_EVASION',
        name: 'Urban Evasion',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NEA_KARLSSON',
        description: 'Your movement speed while crouching is increased by %s%.',
        flavor: '"The paint is still fresh but I\'m long gone." — Nea Karlsson',
        image: 'urbanEvasion',
        tiers: [[90], [95], [100]]
    },
    STREETWISE: {
        index: 'STREETWISE',
        name: 'Streetwise',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'NEA_KARLSSON',
        description:
            "Long nights out taught you to do a lot with what you've got. Reduce consumption rate of charge by %s% for you and allies within an 8 metre range.",
        flavor:
            '"You\'re doing it wrong! Let me show you how it\'s done." — Nea Karlsson',
        image: 'streetwise',
        tiers: [[10], [12], [15]]
    },
    LEFT_BEHIND: {
        index: 'LEFT_BEHIND',
        name: 'Left Behind',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'WILLIAM_OVERBECK',
        description:
            "You'll get the job done... No matter the cost. If you are the last person remaining in the trial, for each Generator that needs to be repaired, gain a %s% bonus to Repair speed.",
        flavor:
            "\"I'm not horseshittin' around. I'm doing this alone!\" — Bill Overbeck",
        image: 'leftBehind',
        tiers: [[19], [22], [25]]
    },
    BORROWED_TIME: {
        index: 'BORROWED_TIME',
        name: 'Borrowed Time',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'WILLIAM_OVERBECK',
        description:
            "You are fuelled with an unexpected energy when saving an ally from a hook within the Killer's Terror Radius. Once per match, for 15 seconds after unhooking a Survivor within the Killer's Terror Radius, any damage taken that would put you or the unhooked Survivor into the dying state will instead trigger a %s seconds bleed-out timer. Taking any damage during or reaching the end of the bleed-out timer will put you into the Dying State.",
        flavor:
            '"Probably stings like hell, but it ain\'t gonna kill ya. Up and at \'em soldier. Time to move!" — Bill Overbeck',
        image: 'borrowedTime',
        tiers: [[15], [20], [25]]
    },
    UNBREAKABLE: {
        index: 'UNBREAKABLE',
        name: 'Unbreakable',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'WILLIAM_OVERBECK',
        description:
            'Past battles have taught you a thing or two about survival. Grants the ability to fully recover from the dying state once per trial. Increases dying recovery by %s%.',
        flavor: '"Goddammit, I am seriously FUBAR!" — Bill Overbeck',
        image: 'unbreakable',
        tiers: [[15], [20], [25]]
    },
    WERE_GONNA_LIVE_FOREVER: {
        index: 'WERE_GONNA_LIVE_FOREVER',
        name: "We're Gonna Live Forever",
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DAVID_KING',
        description:
            'Your few friends deserve the best protection. Each time you rescue or take a hit to protect a Survivor, gain 25% stackable bonus to all Bloodpoint gains up to a maximum of %s%.\nThe Bonus Bloodpoints are only awarded post-trial.',
        flavor:
            "\"Come on then, let's 'ave it! I don't give a shit pal.\" — David King",
        image: 'WereGonnaLiveForever',
        tiers: [[50], [75], [100]]
    },
    DEAD_HARD: {
        index: 'DEAD_HARD',
        name: 'Dead Hard',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DAVID_KING',
        description:
            'You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage. Press the activate ability button while running to dash forward. During the dash, you avoid damage.\nCauses Exhaustion for %s seconds.',
        flavor:
            "\"We were walkin' through t'ginnel one night when a beer bottle flew past me, then another, and another. I thought to myself \"Gonna 'ave some fun 'ere lads, let's get stuck in!' \". It were a right dust up, I swear down!\" — David King",
        image: 'DeadHard',
        tiers: [[60], [50], [40]]
    },
    NO_MITHER: {
        index: 'NO_MITHER',
        name: 'No Mither',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DAVID_KING',
        description:
            "Go on kid, it's just a scratch. You start the trial injured and won't let anyone heal you beyond this state. Your thick blood coagulates practically instantly. You cannot be healed to healthy. You don't leave pools of blood. Grunts of pain caused by injuries are reduced by %s% at any time. Grants the ability to fully recover from the dying state.",
        flavor:
            "\"I lost it. Just lamped him one.. They went and banned me didn't they.. Went t'pub afterwards, had a few pints and moved on to the next chapter. I couldn't be mithered with it all anyway, you know what I mean? Can't be arsed.\" — David King",
        image: 'NoMither',
        tiers: [[0], [25], [50]]
    },
    SOLE_SURVIVOR: {
        index: 'SOLE_SURVIVOR',
        name: 'Sole Survivor',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'LAURIE_STRODE',
        description:
            "Each Survivor killed or sacrificed disrupts the Killer's Aura IconHelp auras.png reading ability.\n1 killed or sacrificed: Reduces the Killer's Aura reading range by %s%\n2 killed or sacrificed: Reduces the Killer's Aura reading range by %s%\n3 killed or sacrificed: Reduces the Killer's Aura reading range by %s%",
        flavor: '"It was the boogeyman." — Laurie Strode',
        image: 'soleSurvivor',
        tiers: [[40, 40, 40], [45, 60, 75], [40, 75, 100]]
    },
    OBJECT_OF_OBSESSION: {
        index: 'OBJECT_OF_OBSESSION',
        name: 'Object of Obsession',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'LAURIE_STRODE',
        description:
            "If you are the Killer's Obsession and look in the Killer's direction, your link will reveal your to each other. This effect applies only if you are outside the Killer's Terror Radius, to a maximum range of %s metres. Otherwise, it applies to a maximum range of %s metres.",
        flavor: '"He was watching me!" — Laurie Strode',
        image: 'objectOfObsession',
        tiers: [[56, 44], [64, 56], [72, 64]]
    },
    DECISIVE_STRIKE: {
        index: 'DECISIVE_STRIKE',
        name: 'Decisive Strike',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'LAURIE_STRODE',
        description:
            "Once per match, when the Killer's Obsession, succeed a Skill Check to automatically escape the Killer's grasp and stun them for 3/3.5/4 seconds. When not the Killer's Obsession, when the wiggle meter is at %s% succeed in a Skill Check to escape the grasp.",
        flavor: '"There\'s nothing to be scared of." — Laurie Strode',
        image: 'decisiveStrike',
        tiers: [[3, 45], [3.5, 40], [4, 35]]
    },
    OPEN_HANDED: {
        index: 'OPEN_HANDED',
        name: 'Open Handed',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ACE_VISCONTI',
        description:
            "Strengthens the potential of you and your team's Aura reading abilities. Increases Aura reading ranges by %s metres.",
        flavor:
            '"Paying attention is what kept me alive through the years. That, and my good looks of course." — Ace Visconti',
        image: 'openHanded',
        tiers: [[4], [6], [8]]
    },
    UP_THE_ANTE: {
        index: 'UP_THE_ANTE',
        name: 'Up The Ante',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'ACE_VISCONTI',
        description:
            'For each other Survivor still alive, grant a %s% bonus to Luck to all remaining Survivors.',
        flavor:
            '"What can I say? I\'m just a very lucky guy... I\'m sure some of it will rub off on you." — Ace Visconti',
        image: 'upTheAnte',
        tiers: [[1], [2], [3]]
    },
    ACE_IN_THE_HOLE: {
        index: 'ACE_IN_THE_HOLE',
        name: 'Ace in The Hole',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'ACE_VISCONTI',
        description:
            'Lady Luck always seems to be throwing something good your way. When retrieving an Item from a Chest, there is a 50% chance that an Add-on of %s rarity or lower will be attached to it.',
        flavor:
            '"Everything that glitters isn\'t gold. But gold isn\'t worth a damn in this place, so this should come in handy." — Ace Visconti',
        image: 'aceInTheHole',
        tiers: [['Uncommon'], ['Rare'], ['Very Rare']]
    },
    TECHNICIAN: {
        index: 'TECHNICIAN',
        name: 'Technician',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'FENG_MIN',
        description:
            'The noises caused by your repairs and their hearing distance are reduced by %s metres. On a failed repair Skill Checks, there is a %s% chance the Generator explosion will be prevented.',
        flavor: '"I\'m gonna stealth this one." — Feng Min',
        image: 'technician',
        tiers: [[0, 30], [4, 40], [8, 50]]
    },
    LITHE: {
        index: 'LITHE',
        name: 'Lithe',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'FENG_MIN',
        description:
            'After performing a vault, break into a sprint at 150% of your normal running speed for a maximum of 3 seconds. Activates in chases only.\nCauses Exhaustion for %s seconds.',
        flavor: '"U mad?" — Feng Min',
        image: 'lithe',
        tiers: [[60], [50], [40]]
    },
    ALERT: {
        index: 'ALERT',
        name: 'Alert',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'FENG_MIN',
        description:
            "Your acute senses are on high alert. When the Killer performs the break action within %s metres of range, the Killer's Aura is revealed to you for 6 seconds. This effect can only be triggered once every %s seconds.",
        flavor: '"I have true sight." — Feng Min',
        image: 'alert',
        tiers: [[12, 60], [24, 45], [36, 30]]
    },
    WAKE_UP: {
        index: 'WAKE_UP',
        name: 'Wake Up!',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'QUENTIN_SMITH',
        description:
            "Unlocks potential in one's Aura reading ability. Once all Generators are powered, Exit Gates are revealed to you when within %s metres of range. While opening the Exit Gates, reveal your Aura to other Survivors within %s metres of range.\nWhile Wake Up! is active, you open the Exit Gates %s% faster.",
        image: 'wakeUp',
        tiers: [[24, 24, 5], [48, 48, 10], ['∞', '∞', 15]]
    },
    PHARMACY: {
        index: 'PHARMACY',
        name: 'Pharmacy',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'QUENTIN_SMITH',
        description:
            'You have a knack for finding medicine. Searches through Chests are %s% faster.\nTier III only: The noises caused by searches along with their hearing distances are reduced by 8 metres.\nPharmacy guarantees an Emergency Med-Kit on your first completed Chest search.',
        image: 'pharmacy',
        tiers: [[40], [60], [80]]
    },
    VIGIL: {
        index: 'VIGIL',
        name: 'Vigil',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'QUENTIN_SMITH',
        description:
            'You look over your friends even in dire situations. You and your allies within an 8 metre range recover from Exhausted, Hemorrhage, Mangled, Hindered and Blindness Status Effects %s% faster.',
        image: 'vigil',
        tiers: [[10], [15], [20]]
    },
    TENACITY: {
        index: 'TENACITY',
        name: 'Tenacity',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DAVID_TAPP',
        description:
            'There is nothing stopping you. Your ferocious tenacity in dire situations allows you to crawl %s% faster and recover at the same time.',
        flavor:
            '"What the hell is this? I\'m taking this bastard down!" — Detective David Tapp',
        image: 'tenacity',
        tiers: [[30], [40], [50]]
    },
    DETECTIVES_HUNCH: {
        index: 'DETECTIVES_HUNCH',
        name: "Detective's Hunch",
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'DAVID_TAPP',
        description:
            "Unlocks potential in one's Aura reading ability. When completing a Generator, the Auras of Generators, Chests and Totems within %s metres are revealed to you for 5 seconds.\nIf you are holding a Map that can track Objectives, Generators revealed by Detective's Hunch are added to the Map.",
        flavor:
            '"Are you able to tell us where you were last night?" — Detective David Tapp',
        image: 'detectivesHunch',
        tiers: [[32], [48], [64]]
    },
    STAKE_OUT: {
        index: 'STAKE_OUT',
        name: 'Stake Out',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'DAVID_TAPP',
        description:
            "Getting close to the Killer fills you with determination. For each 15 seconds you are standing within the Killer's Terror Radius and are not in a Chase, you gain a Token up to a maximum of %s Tokens.\nWhen Stake Out has at least 1 Token, Good Skill Checks are considered Great Skill Checks and consume 1 Token.",
        flavor:
            "\"I had you, I had you on your knees. You're runnin' scared because we had you. We're gonna close this case!\" — Detective David Tapp",
        image: 'stakeOut',
        tiers: [[32], [48], [64]]
    }
};
