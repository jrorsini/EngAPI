const string =
	"Infinitive Simple Past Past Participle | alight alighted, alit alighted, alit | arise arose arisen | awake awoke, awaked awoken, awaked | be was, were been | bear bore borne, born | beat beat beaten, beat | become became become | beget begot begotten | begin began begun | bend bent bent | bereave bereaved, bereft bereaved, bereft | beseech besought, beseeched besought, beseeched | bet bet, betted bet, betted | bid bade, bid bidden, bid, bade | bide bade, bided bided | bind bound bound | bite bit bitten | bleed bled bled | bless blessed, blest blessed, blest | blow blew blown | break broke broken | breed bred bred | bring brought brought | broadcast broadcast, broadcasted broadcast, broadcasted | build built built | burn burnt, burned burnt, burned | burst burst burst | bust bust, busted bust, busted | buy bought bought | can could (kein Participle) | cast cast cast | catch caught caught | choose chose chosen | cleave cleft, cleaved, clove cleft, cleaved, cloven | cling clung clung | clothe clothed, clad clothed, clad | come came come | cost cost cost | creep crept crept | crow crowed crew, crowed | cut cut cut | deal dealt dealt | dig dug dug | do did, didn't done | draw drew drawn | dream dreamt, dreamed dreamt, dreamed | drink drank drunk | drive drove driven | dwell dwelt, dwelled dwelt, dwelled | eat ate eaten | fall fell fallen | feed fed fed | feel felt felt | fight fought fought | find found found | flee fled fled | fling flung flung | fly flew flown | forbid forbad, forbade forbid, forbidden | forecast forecast, forecasted forecast, forecasted | forget forgot forgotten | forsake forsook forsaken | freeze froze frozen | geld gelded, gelt gelded, gelt | get got got, gotten | gild gilded, gilt gilded, gilt | give gave given | gnaw gnawed gnawed, gnawn | go went gone | grind ground ground | grip gripped, gript gripped, gript | grow grew grown | hang hung hung | have had had | hear heard heard | heave heaved, hove heaved, hove | hew hewed hewed, hewn | hide hid hidden, hid | hit hit hit | hold held held | hurt hurt hurt | keep kept kept | kneel knelt, kneeled knelt, kneeled | knit knitted, knit knitted, knit | know knew known | lay laid laid | lead led led | lean leant, leaned leant, leaned | leap leapt, leaped leapt, leaped | learn learnt, learned learnt, learned | leave left left | lend lent lent | let let let | lie lay lain | light lit, lighted lit, lighted | lose lost lost | make made made | may might (kein Participle) | mean meant meant | meet met met | melt melted molten, melted | mow mowed mown, mowed | pay paid paid | pen pent, penned pent, penned | plead pled, pleaded pled, pleaded | prove proved proven, proved | put put put | quit quit, quitted quit, quitted | read read read | rid rid, ridded rid, ridded | ride rode ridden | ring rang rung | rise rose risen | run ran run | saw sawed sawn, sawed | say said said | see saw seen | seek sought sought | sell sold sold | send sent sent | set set set | sew sewed sewn, sewed | shake shook shaken | shall should (kein Participle) | shear sheared shorn, sheared | shed shed shed | shine shone shone | shit shit, shitted, shat shit, shitted, shat | shoe shod, shoed shod, shoed | shoot shot shot | show showed shown, showed | shred shred, shredded shred, shredded | shrink shrank, shrunk shrunk | shut shut shut | sing sang sung | sink sank sunk | sit sat sat | slay slew slain | sleep slept slept | slide slid slid | sling slung slung | slink slunk slunk | slit slit slit | smell smelt, smelled smelt, smelled | smite smote smitten | sow sowed sown, sowed | speak spoke spoken | speed sped, speeded sped, speeded | spell spelt, spelled spelt, spelled | spend spent spent | spill spilt, spilled spilt, spilled | spin spun spun | spit spat spat | split split split | spoil spoilt, spoiled spoilt, spoiled | spread spread spread | spring sprang, sprung sprung | stand stood stood | steal stole stolen | stick stuck stuck | sting stung stung | stink stank, stunk stunk | stride strode stridden | strike struck struck | string strung strung | strive strove striven | swear swore sworn | sweat sweat, sweated sweat, sweated | sweep swept swept | swell swelled swollen, swelled | swim swam swum | swing swung swung | take took taken | teach taught taught | tear tore torn | telecast telecast, telecasted telecast, telecasted | tell told told | think thought thought | throw threw thrown | thrust thrust thrust | tread trod trodden | understand understood understood | wake woke, waked woken, waked | wear wore worn | weave wove woven | wed wed, wedded wed, wedded | weep wept wept | wet wet, wetted wet, wetted | win won won | wind wound wound | wring wrung wrung | write wrote written |";

const list = string.split('|').map(e =>
	e
		.trim()
		.split(/\b\s\b/gi)
		.map(e => e.split(/,\s/))
);

const isIrr = word => {
	word = word.replace(/[,]/gi, '').trim();
	res = false;
	list.map(e => {
		e.map(e => {
			e.map(e => {
				if (e === word) res = true;
			});
		});
	});
	return res;
};

const find = sentence => {
	const arr = sentence.split(/\s/g);
	let found = [];
	arr.map(word => {
		if (isIrr(word)) found.push(word);
	});

	return found;
};

module.exports = {
	list,
	find
};
