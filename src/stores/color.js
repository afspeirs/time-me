import { get, writable } from 'svelte/store';
import dayjs from 'dayjs';

import { twelveHourClock } from '@stores/settings';

const date = writable(dayjs());
const format = writable('');

// Convert a number in hexadecimal form and we make sure to add two digits
const toHex = (digit) => (`0${Number(digit).toString(16)}`).slice(-2).toUpperCase();

const getColorByBackgroundColor = (bgColor) => {
	if (!bgColor) return '';

	return (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2) ? '#000' : '#fff';
};

const hexTime = () => {
	date.set(dayjs());

	const seconds = get(date).format('ss');
	const secondsHex = parseInt((seconds * 255) / 59, 10);
	const minutes = get(date).format('mm');
	const minutesHex = parseInt((minutes * 255) / 59, 10);
	const hours = get(date).format(get(twelveHourClock) ? 'hh' : 'HH');
	const hoursHex = parseInt((hours * 255) / 23, 10);

	return `#${toHex(hoursHex)}${toHex(minutesHex)}${toHex(secondsHex)}`;
};

const colorInverted = writable(getColorByBackgroundColor('#6E2281'));
const color = writable('#6E2281', (set) => {
	const interval = setInterval(() => {
		const newHex = hexTime();
		const newInvertedHex = getColorByBackgroundColor(newHex);
		set(newHex);

		if (get(colorInverted) !== newInvertedHex) {
			colorInverted.set(newInvertedHex);
		}
	}, 1000);

	return () => clearInterval(interval);
});

twelveHourClock.subscribe((value) => format.set(`${value ? 'hh' : 'HH'}[:]mm[:]ss`));

export {
	color,
	colorInverted,
	date,
	format,
};
