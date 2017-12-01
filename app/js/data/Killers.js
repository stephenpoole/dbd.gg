const Killers = {
	NURSE: {
		index: 'NURSE',
		name: 'The Nurse',
		power: 'SPENCERS_LAST_BREATH',
		abilities: [
			'Blink up to <span class="font-regular-bold">20 meters</span> on charge activation.',
			'Can blink twice before becoming fatigued.',
			'Can perform a lethal blink attack after blinking.'
		],
		perks: ['STRIDOR', 'THANATOPHOBIA', 'A_NURSES_CALLING'],
		effects: ['ACCURACY', 'RANGE', 'MOVEMENT_SPEED', 'CHAIN_WINDOW', 'CHARGE_SPEED', 'FATIGUE_TIME', 'BLINK_COUNT', 'LANDING_AREA'],
		image: 'images/56px-IconChar_theNurse2.png'
	}
}

export default Killers