import Head from 'next/head';
import AppContainer from 'components/app-container';
import utilStyles from 'components/utils.module.scss';
import loveLetterStyles from 'components/love-letter.module.scss';
import React, { useState } from 'react';
import classNames from 'classnames';

const letters = {
    "Ashley O'Sullivan": [
        "I'm so stoked your coaching us Ash, please don't leave (ever) haha. ~ Max <3",
        "I'm so glad you've joined the team this year. I really value your strategic insights and differing perspectives. It's the missing piece we didn't even know we needed.  ~ Tim",
        "A superstar coach thats respected by all. An absolute sset to have in our corner. Cant wait to get to our first tournaments and to dtart running circles around other teams ~ Rob <3",
        "Dear ash, I don’t know a lot about you other than you like rocks and golf. I am excited about the new perspective you’ll add to the team with your coaching and from what I’ve heard you are a very boss boy. Looking forward to getting to know you better and enjoying the season we have ahead 🥰  ~ "
    ],
    "Emma Berresford": [
        "Emma, I'm so excited to be working with you this season. The effort and energy you put into Lippy has been so beneficial and I can't wait to see what we achieve together this year! ~ Max <3",
        "Let's go for round 2! I'm so excited for you to be taking the reigns more and making your impact now. Your insights are useful and the way you work with the rest of leadership is so smooth. ~ Tim",
        "Cant wait to watch you build on the success youve worked so hard to create in previous seasons. Its great leading/coaching with you an another season is exciting and promising! ~ Rob <3",
        "Imma, You are a fab coach and I love having you around. You are a calming steady presence amongst the absolute shit that we all talk, and I don’t think you are appreciated enough. Looking forward to the season and hopefully many more xo  ~ "
    ],
    "Angus Wicks": [
        `Gus, been so exciting to see your growth over the past few seasons. Its a big year for you with Goanna's and I'm so excited to see all the hard work pay off for you this season and at Worlds. Keep pushing and I can't wait to hit the field with you soon. ~ Max <3`,
        `Gussy, this is going to be your year. I can feel it my shin bones. You've got all the ingredients to be the best player in the country. With some extra dedication and a sprinkling of luck to stay injury free, you'll get to show the world what I see.  ~ Tim`,
        `GUUUUS. You're a star in the making. You absolutely crushed it with goeys, got a sick layout block on me, and I cannot wait to see you continue to shine. You can be truly elite this season, and I can't wait to see it in action first hand. ~ Rob <3`,
        `GGGGUUUUUUSSSSSYYYY, the world has been sleeping on gussy fr. They put him on lip but they don’t let him play (until now). You were looking dummy good when you tripped Rob over and this is your thyme. Can’t wait to say some borderline shit with you on the sidelines at natty. Keep being you boo  ~ `,
    ],
    "Hardie Sue": [
        `I love the way you continue to push yourself at training. Coming to Ellipsis has been a massive jump for you and I appreciate and respect the resilience and effort you show. Looking forward to playing together this season brother.  ~ Pete`,
        `Its never easy coming into a new team Hardie, but you've done a great job adapting and rising to the challenge Hardie. Thanks for your hard work and perserverance. Excited to play and see your growth this season! ~ Max <3`,
        `I'm so glad you're playing the season with us. You're going to learn so much and have a great time doing it. Can't wait to hear more about your culinary adventures.  ~ Tim`,
        `New to the team, but fitting in so well. Your committment, asking questions, and being a lovely person make you an unreal teammate. Cant wait to take the field with you at nats and see you improve exponentially! ~ Rob <3`,
        `Hardy SUUUUUIIIIIII, Welcome to lippy and I hope you’ve been having a good time. You’ve been developing great and I’m sure you’ll smash the uni scene after this season. You also have a very impressive squat PR which is very nosss. Keep smashing it at training and I’m sure there’s a big season ahead of you. Looking forward to the season ahead 😈 🥰  ~ `,
        `Work hard and improve! The team can teach you lots.  ~ Clement`,
    ],
    "Cameron Lyon": [
        `Love you Cam <3 stop watering the chickens in QLD.  ~ Pete`,
        `Cam, I love you mate, please never change. I know the injuries have been frustrating this season but having you at training, hootin and hollerin, is so great for the team and really helps me push to greater heights. Keep up the rehab and can't WAIT to actually hit the field with you. I've got such a good feeling about this season. ~ Max <3`,
        `Cammy, I know it's been a tough start to the season for you, but please don't let that discourage you. You're doing all the right things and will have a huge impact when yoit back on the field. I can't wait to unleash thicc Cam on the other teams.  ~ Tim`,
        `I love how you've been there for the team every moment despite injuries and setbacks. Cant wait to have you running back around, getting around everyone, and to have everyone getting around you like you've done for them. ~ Rob <3`,
        `It’s me  ~ `,
        `You have some sick man-marking skills(Armbar king) ~ Clement`,
    ],
    "Damon Prendergast": [
        `Super excited for you this year Damo. With Nats and Dingos, I feel like its going to be your breakout year. Keep working hard, I can't wait to absolutely rip up some defences with you. Please imagine me giving you the finger.  ~ Max <3`,
        `Damo, I wish we got to see more of you. You're a great player and I can see you're finding ways to have a bigger impact in the game. Keep at it, I'm excited to see what you bring this season.  ~ Tim`,
        ` A big year in store for you and the chance to reach new heights. The sky's the limit this season, and I cant wait to see you taking your WUCC learnings and really developing into a start player for us and for Goeys. ~ Rob <3`,
        `Dame thyme, You are a silent assassin but I know deep down you are a deviant just like the rest of us. I forget how young you are because you are honestly very mature for your age (or everyone else is immature). Keep being a skilled young boy, I’m excited to see what you’re gonna achieve in the coming years because it’s gonna be a big juan 😈 🥰  ~ `,
    ],
    "James Walker": [
        `Lets go Jimmy. I'm pumped to play another season with you. You've got a massive year and I know you will crush it.  ~ Pete`,
        `Jimmy, I don't know what to say about you that I haven't already said a million times. I love your tenaciousness, I love your kindness and care, I love your passion, I love your work rate, I love your humour. Everything you bring to this team is so valuable and I really feel like this season, with Goannas on the horizon, is going to be a year where everyone else sees how brightly you shine. ~ Max <3`,
        `Jimbo, I miss seeing you at Wednesday trainings :( you're such a legend and have a massive opportunity to push your frisbee and leadership skills to the next level. I'm stoked that I'll get to witness it.  ~ Tim`,
        `Watching you take your learnings from WUCC, put it into Goeys, and clming to lippy with classic Jimmy fire and intensity will be an absolute pleasure. Big things are coming for you this year and youre going to take your game to the next level. ~ Rob <3`,
        `Jizzy James, I keep forgetting how young you are because you are a genuinely amazing player and I just really enjoy talking shit with you. James, even though you fuck and sometimes DNF you never DNF with the team. Keep playing with lip and keep me young  ~ `,
    ],
    "Jireh Loo": [
        `Can't wait to see you shred this season together <3 it's going to be sick. ~ Pete`,
        `Jireh, I cannot wait for you to get back and hit the field with you. You've got so much talent and such a great attitude - the sky's the limit this season! ~ Max <3`,
        `Legend, I can't wait for you to be back and smashing it out at training. You're so quick, technically excellent at defending, and thoughtful when it comes to possession. You're going to be the hero of our d points. I can feel it.  ~ Tim`,
        `Can't wait to have you back here in Aus taking your game to the bext kevel. You have a great opportunity to become a stabdout piayer for us and I can't wait to watch it happen first hand. ~ Rob <3`,

        `Jizzy Jireh, You are probably the player I’m most excited to play with this season. Thank you for putting up with my shit jokes and I’m sure we’re gonna have a fab year. I admire that you’re able to do this all while studying med. you probably a baddie at time management and being an absolute chief. Love you 🥰  ~ `,
        `Represent SINGAPORE WELL - CL ~ Clement`,
    ],
    "John McNaughton": [
        `JMac, I know from experience just how hard it can be to move cities and to find a new rhythm, new circles to move in, new everything. But its so great that you've found your groove and the team is so much richer for your experience, attitude and skills. Very excited that we get to play together for a full season, thanks for all the work you put in to make it so special. ~ Max <3`,
        `Johnny, I'm so glad we finally get to play together again. Your 'tell it like it is' comms style is really refreshing and I value your perspective so highly. Keep pushing and forging that chemistry. We're going to take on the country and the world together.  ~ Tim`,
        `Building on success at WUCC, settling into Melbourne, and building a team/club to be proud of are all on the cards this year. Looking forward to making it happen with you, and absolutely crushing it at nats. ~ Rob <3`,
        `Big Johnny. Welcome to Melbourne and I hope you feel welcomed by the club as a whole. I look forward to learning from all your experience and you undoubtedly have a lot of guidance and mentorship to give lot of players in the club. Also happy to see you grinding and beating those young kids in GML today. Looking forward to an eventful season 😈  ~ `,
        `Your throws are second to none!!! ~ Clement`,
    ],
    "Josh Howard": [
        `You're not natty and I love it. Lets win again. ~ Pete`,
        `Josh, you are not natty. I'm sad that you'll no longer be the best kept secret in Australian Ultimate after this year but its a price I'm willing to pay for the rest of the country knowing how good you are. Thank you for sticking around at Lippy and pushing hard for yourself and others on the team. It's always appreciated and I can't wait for the rest of this season (and beyond). ~ Max <3`,
        `Josh, I don't think I could be part of the team this year if you weren't on it. I deeply value your perspective and our friendship.  ~ Tim`,
        `Another season and another season of reaching new heights and getting even better. With the backdrop of AOUGC and experience at WUCC, youre going to be an absolute weapon. No meed to fly under the radar or anything like that, youll be an integral part of our success this season and I cant wait to see it. ~ Rob <3`,
        `Smokey J, You really are the most underrated player in Australian ultimate and you have been slept on for so long but now you’re finally getting your dues. You are one of the players on the team that consistently gives a shit and you also squat like 8 plates and you are not natty (wada has been called). You also made wucc the enjoyable experience that it was and it genuinely wouldn’t have been the same without you. Looking forward to what the rest of the season will bring 🥰  ~ `,
    ],
    "Oliver Loughnan": [
        `You're such a great leader Olly, on field and off. It's been so great shaping this season with you. Such a massive year for you, excited to help push you to even greater heights ~ Max <3`,
        `Beautiful young Oliver. Thank you for superceding me as lead cat herder. You're doing an incredible job and your insights are always valuable. I can't wait to see other teams try to stop marathon fit Ol because there's just no chance.  ~ Tim`,
        `Excited for a season of leading with you, learning from you, and watching you thrive on field. Seeing you take your game and leadership skills to new heights will be an absolute pleasure. ~ Rob <3`,
        `Olly, I really like the growth I have seen in your leadership this season. You have always been elite but the way you have been giving back to the club through trainings and all of the initiatives behind the scenes is unparalleled. Though sometimes I may foul you i promise not to do it again. Let’s have a cute time and play u22s together again. Lots of love 🥰  ~ `,
    ],
    "Matt Daly": [
        `Your advice and demeanor when giving feedback is fantastic. I genuinely appreciate it and love you. 3sum?  ~ Pete`,
        `Daly, its kinda crazy reflecting on the last two years and the growth I feel like we've both experienced as players (and probably as people as well). I'm very grateful for all the time we've gotten to spend together and the attitude, energy and passion you've brought from Day 1 at Lippy. It's a pleasure being your teammate and friend and I can't wait to see where it takes us next! ~ Max <3`,
        `If I'm ever not vibing at training, I just need to look over and see your dumb, cheesy grin, and everything becomes okay. To another season at lip and maybe a post-season AOUC campaign 🤞 ~ Tim`,
        `With AOUGC on the horizon, full training programs, and what seems like a bit of stability woth work and home life, cant wait to see you develop into an absolute weapon on the field. ~ Rob <3`,
        `hey Matt! Thanks for always hi-fiving me every time we complete a drill or a point saying “good stuff”. It’s really super encouraging for me!  ~ Hardie`,
        `The true Daly double, You fucking big chief. Your work rate is unparalleled and I love to see you absolutely power through every session like the deviant you are. I hope you never leave lippy because you have been one of the few positive contributors to the season so far. Never stop being you and can’t wait for the rest of the season xx  ~ `,
        `Your friendly and helpful attitude is one that boosts the team morale and also their abilities!  ~ Clement`,
    ],
    "Peter Eley": [
        `Pete, its been such a pleasure living with you this year and playing with you for the past few years. You're such a fierce competitor but also such a kind person and it's been great to see both those sides of you up close. You're a great teammate, housemate and friend and I'm very grateful that time has brought us back together like it has. Love you mate. ~ Max <3`,
        `Until we have a master's team, you're stuck with us. Your read of the game and ability to insert yourself is second to none. I can't wait to see what another season on 69/420 gets us. ~ Tim`,
        `Youre a legend on and off the field. Stoked to be doing it again with you. Its gonna be great ~ Rob <3`,
        `Pete my g! Thanks for always checking up on me once in awhile seeing how i’m doing! It’s always very encouraging to hear from you! Can’t wait to learn more from you! ~ Hardie`,
        `Feeter mealey 🦶 You devious boy. You keep me young with your humor and remind me that no matter how old I get I will always be an immature dog. Thanks for putting up with our shit jokes and piling them on as wel when necessary. You are juan of the main reasons why I wouldnt play anywhere else. I love angry Pete and I hope he never goes away 😈 Love your work 🥰  ~ `,
        `You are a strong and dependable teammate  ~ Clement`,
    ],
    "Oliver Foster": [
        `Gutted to hear about your injury :( I'm sure you'll crush the rehab and be back in no time!  ~ Pete`,
        `Ollie, obviously the injury sucks, but I'm really hoping that we can get you back out on the field soon. I know from experience what a challenge it can be to move cities and find your new rhythm, circles, home etc, but you've done it with a great attitude and an infectious smile. The focus and intent you brought to training was really paying off and I'm excited to have you back as soon as possible.  ~ Max <3`,
        `It's been a rough start to the season for you, but I'm so glad you're with us. We've got a lot of hanging out to do and plants to froth about.  ~ Tim`,
        `Obviously a tough start to the season, but hopefully the team and club can repay your willingness to learn and open mindedness with what feels like home. Its great watching you get better and imrpove in real-time and already cant wait to have you back on the field. ~ Rob <3`,
        `My favourite Olly, Even though you’ve only been with the team for a short thyme you are fitting in superbly and I’m excited to see what we can achieve together. It’s unfortunate that your elbow broke (hopefully not terminal) but I know your bounce back will be impressive. The best is yet to come and so am I. Love you and see you soon ~ `,
    ],
    "Max Halden": [`Njce man ~ Max <3`,
        `Maxy, you've grown so much as a player and leader in the last few seasons and I'm so glad we get to have more of that this season. I hate it at the time, but our matchups push me to be better like nobody else does. Let's go take on the country and the rest of the world together 💗 ~ Tim`,
        `A great pleasure and privilege to be leading with you. Looking forward to a season of sun, siles and success (it's alliteration so must be true). Have loved every minute of workibg with you. ~ Rob <3`,
        `hiya Max! Thanks for being the voice of the team, and also bringing the fun and humor to trainings as well! as well as always encouraging me on the field! ~ Hardie`,
        `MHole, The big chief himself. You are an unbelievably presence for not only me but the team as a whole. Please keep quoting UK Hun with me and just walking through zone D and lifting big weights like you have been you absolute Adonis of a man. Can’t wait to see what we achieve together 🥰 ~ `
    ],
    "Sam McGuckin": [
        `I love having you back brother <3  ~ Pete`,
        `So glad you're back on the green team Sammy. Cannot wait to shred defences with you. ~ Max <3`,
        `Sammy, I was so excited when I heard youd be moving back to Melbourne, welcome back! I'm really glad you get to share your learnings from the past year with the team, and to push your skills even further in this context. Let's make it 3 in a row for you.  ~ Tim`,
        `BPC's unite. Lets go fuck up the others and do what we do best <3 ~ Rob <3`,
        `Samuel L McGackson.
Good to have you back on the team, can’t wait to see you continue to do absolutely fucked up shit on the field for us 🥰 
Hope you acclimatize back to melb easily enough.
Ps you have a very cute dog 🇫🇷  ~ `,
    ],
    "Thomas Bissett": [
        `Your work ethic inspires me always Biss <3 you are a weapon.  ~ Pete`,
        `Biss, there is nobody like you in the universe. You are such a special mix of hard work, lightheartedness, big brain, smooth brain, bull-in-a-china-shop, surgical knife precision. I love spending time with you and having you at trainings, whether you're able to play or not, makes such a difference to my enjoyment, motivation, drive and performance. You are an absolute success multiplier on any team you're on. I know injuries have been a struggle this season but I have so much faith in you that I know whenever you step on the field, you're going to execute. Thanks for bringing all of you to everything you do. ~ Max <3`,
        `Legend, Tom, Bjssjet, deviously, I'm so glad you chose to play the season with Lip. Your work ethic is ridiculously sick and you're the architect of our team culture. Soon you'll be injury free and crush noobs and it's going to be great. ~ Tim`,
        `Your work rate and commitment has been absolutely elite. You're a team player and by putting the team first, you'll get the rewards later in the season. Cant wait for your best season yet, and seeing you take it to all the other teams ~ Rob <3`,
        `BISSETT! Thanks for being the joker of the team! Really brings out the joy of our intensive trainings!  ~ Hardie`,
        `My dear best man,
You look like someone that could benefit from counting their calories. I cannot put into word on this forum how much you mean to me. But we ride together we die together fr fr common Biss W, he just like me fr. Keep gymming with me, maybe I’ll start lifting actual weight one day but probs not until TReN kicks in. Love you as much as I love anabolic steroids.  ~ `,
        `Your sick throws are always on flick!  ~ Clement`,
    ],
    "Timocles Copland": [
        "Thank you for putting this together and for always thinking about (and more importantly, actioning) things that can make the team better, on field and off. It's so exciting to see you reaching the peak of your frisbee powers and I'm so excited for what the year has ahead. You are so special and I'm thankful to call you my partner and teammate. I love you.",
        "You're maybe feeling a little burnt out right now, with lots of emotions at every training session, but keep wading through it and remember to enjoy the good bits. The pay off will be worth it. ",
        "Friend! Youve been an absolute delight this season, putting in work and crewting a culture of care, support and performance. Im excited to watch you crush it on field, with upcoming AOUGC <3",
        "Heyy Tim! Thanks for teaching me all the small little tricks you do in frisbee! They really helped me a lot these past few months and I can’t wait to learn more from you this season! ",
        "Tall timbo, You are in my mind the man that puts in all the silent and boring work. The shit that I’d hard to consistently do but you are doing it. Despite already being quite elite I see the effort you put into continually improving and the results are *chef kiss*. Keep being you and I look forward to what the season will bring 🥰 ",
        "You have a great layout Ds and strong pressure and skills. ",
    ],
    "Tom Tulett": [
        `Tom, I still find it kind of funny that we're playing together again after all these years. It has been a joy getting to reconnect in the past two years and to get to take on the challenges of the past few seasons together. Cannot wait to have you back at trainings and excited for what we can do together in the next few years. ~ Max <3`,
        `Cuppy, I can't wait for you to be back. I've loved seeing you grow over the past few years and am excited to see what this season brings. ~ Tim`,
        `Let's do it all again <3 ~ Rob <3`,

        `Cup,
You are fucked good. I don’t understand how because Australia is kinda ass low key on the world stage, and we only really have 2 legitimate clubs in the country so it really is just a testament to how good you are. Keep being good and hating people. Look forward to some ice cream dates @ nats xo  ~ `,
    ],
    "Rob Andrews": [`Rob, you're a star mate. Its been a pleasure leading with you so far. I'm so excited to see what we can do with this team and this club in 2023. Thank you for all the hard work you put in, on the track, on the field, behind the scenes, to make this club what it is. ~ Max <3`,
        `Robbie, sometimes I think of myself as the budget Rob Andrews and that's actually pretty alright. Thank you for putting up your hand to do it all again, and pushing us for more by leading by example. ~ Tim`,

        `hey rob! Thanks for always being so patient and nurturing when guiding me in ultimate! Really appreciate it!  ~ Hardie`,
        `The foot long
    Thank you for always putting up with my shit and being an amazing presence and player. You’re going to be greatly missed while you’re in New Zealand. Maybe one day I can show you why the median is a better measure of average than the mean. ~ `,
        `Sky and armbar all the opponents !!! ~ Clement`,
    ],
    "Clement Lam": [
        `Clement, I miss you already! Your attitude and focus at training was really something special and it has really paid off, even in just a few months. Please come back so I can play with you again! ~ Max <3`,
        `Clem, you're such a ball of positivity that it's infectious. Your curiousity and desire to get better are second to none. Thank you for investing so much with us, even though you knew it would end quickly. See you at nationals, maybe? ~ Tim`,
        `We're already missing you so much! Please come back!!! :'( ~ Rob <3`,
        `Clam,
Please come back to lippy I miss you and your dog.Even though you were only with the team for a short period of time you gelled instantly and were such a welcome addition, even getting around all the foot fetish nonsense 😈
    Hope this isn’t the last time we play together, until next time xo  ~ `,
    ],
};

const users = {
    '56tXcrLV': "Ashley O'Sullivan",
    'ewteqBYq': "Emma Berresford",
    'xGKslcTA': "Angus Wicks",
    '4FuRVU4d': "Hardie Sue",
    '7bP8px2v': "Cameron Lyon",
    'DWxhlAHa': "Damon Prendergast",
    't09eugTd': "James Walker",
    '1Lm6KVxP': "Jireh Loo",
    'Pze4AH6t': "John McNaughton",
    'vEpdIOjO': "Josh Howard",
    'ODkeKyE8': "Oliver Loughnan",
    'QuisJWPD': "Matt Daly",
    'sVLfLV7b': "Peter Eley",
    'AIZiJEay': "Oliver Foster",
    'wq2osqs9': "Max Halden",
    'w1h3Hypz': "Sam McGuckin",
    'qmJtumFb': "Thomas Bissett",
    'ZjDXbWIx': "Timocles Copland",
    'RTth0f5D': "Tom Tulett",
    'sWyn4pYl': "Rob Andrews",
    'UJQOySth': "Clement Lam",
};

const LoveLetters: React.FunctionComponent = function () {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState('');

    const handleInput = (e) => {
        if (Object.hasOwn(users, e.target.value)) {

            setIsLoading(true);
            setTimeout(
                () => {
                    setUser(users[e.target.value]);
                    setIsLoading(false);
                },
                2000
            );
        }
    };

    return <AppContainer home={false} background={'pink'} fullWidth={true}>
        <Head>
            <title>Lippy Love Letters | timocles.com</title>
        </Head>
        <div className={classNames(loveLetterStyles.container, { [loveLetterStyles.isLoading]: isLoading })}>
            <h1 className={loveLetterStyles.title}>Happy Valentines!</h1>
            <div className={isLoading && loveLetterStyles.outer}>
                {
                    user ?
                        <>
                            {letters[user].map(
                                (letter) => (<div key={letter} className={loveLetterStyles.letter}>
                                    {letter}
                                </div>)
                            )}
                        </>
                        :
                        <>
                            <div className={loveLetterStyles.letters}>
                                <p>There is something undeniably romantic about the written word, especially when it comes to love letters written by your dear teammates.</p>
                                <p>Put in your unique password below to receive some sickly sweet words.</p>
                            </div>
                            <div className={loveLetterStyles.inputRow}>
                                <label htmlFor="password" className={loveLetterStyles.label}>Password:</label><input id="password" className={loveLetterStyles.input} onChange={handleInput} />
                            </div>
                        </>
                }
            </div>
        </div>
    </AppContainer >
}

export default LoveLetters;
