const DIV_DEFAULTS = {
  "mas_informacion": "MAS INFORMACION",
  "sobre": "SOBRE",
  "el_numero_es": "EL NUMERO ES",
  "el_numero_de_la_lista": "EL NUMERO DE LA LISTA"
};

var DIVS_TO_INTERNATIONAL = {
  "mas_informacion": {
    "en": "MORE INFORMATION",
    "fr": "PLUS D'INFORMATION",
    "ht": "PLIS ENFOMASYON",
  },
  "sobre": {
    "en": "ON",
    "fr": "SUR",
    "ht": "SOU"
  },
  "el_numero_es": {
    "en": "THE NUMBER IS",
    "fr": "LE NOMBRE EST",
    "ht": "NIMEWO A SE",
  }, "el_numero_de_la_lista": {
    "en": "THE LIST NUMBER",
    "fr": "LE NOMBRE DE LA LISTE",
    "ht": "NIMEWO LIS LA"
  }
};


var QUESTIONS_TO_INTERNATIONAL = {
  "qWhatList": {
    "am": [
      `
      ዝርዝሩ ምንድን ነው?
      `,
      `
  ዝርዝሩ ዩናይትድ ስቴትስ ወደ አገሪቱ ለመግባት የሚችሉ ሰዎችን ቁጥር ለመገደብ የሚጠቀምበት ሥነ ምግባር የጎደለ እና የዘረኝነት ስርዓት ነው.
  `
    ],
    "en": [
      `
      What is the list?
      `, `
      The list is an immoral and racist system that the United States uses to limit the number of people who can enter the country.
      `
    ],
    "ar": [
      `ما هي القائمة؟`,
      `القائمة نظام غير أخلاقي وعنصري تستخدمه الولايات المتحدة للحد من عدد الأشخاص الذين يمكنهم الدخول إلى البلاد."
`
    ],
    "ru": [
      "Что такое список?",
      "Этот список является аморальной и расистской системой, которую Соединенные Штаты используют для ограничения числа людей, которые могут въехать в страну"
    ],
    "ht": [
      "Ki sa ki lis la?",
      "Lis la se yon sistèm imoral ak rasis ke Etazini sèvi ak limite kantite moun ki ka antre nan peyi a."
    ],
    "fr": [
      "Quelle est la liste?",
      "La liste est un système immoral et raciste que les États-Unis utilisent pour limiter le nombre de personnes pouvant entrer dans le pays"
    ]
  },
  "qHowList": {
    "am": [
      `
  ዝርዝሩ እንዴት ነው የሚሰራው?
  `,
      `
<BR/> ቁጥርን ለማግኘት ከጠዋቱ 7 እስከ ጠዋቱ 9 ሰዓት ድረስ ወደ ጎረቤትዎ ትሄዳላችሁ
ቁጥርዎን <BR/> ይጠብቃሉ
የእርስዎ ቁጥር ሲጠራ, ወደ ሌላኛው ወገን መሄድ ይችላሉ
`
    ],
    "en": [
      `
      How does the list work?
      `, `
You go to chaparral from 7 in the morning until 9 in the morning to get a number <BR/>
You wait for your number<BR/>
When your number is called, you can go to the other side
`
    ],
    "ar": [
      `كيف تعمل القائمة؟`,
      `تذهب إلى chaparral من 7 في الصباح حتى 9 في الصباح للحصول على رقم <BR/>
  انتظر رقمك <BR/>
  عندما يتم استدعاء رقمك ، يمكنك الذهاب إلى الجانب الآخر
    `
    ],
    "ru": [
      `Как работает список?`,
      `Вы идете в Чапараль с 7 утра до 9 утра, чтобы получить номер <BR/>
Вы ждете своего номера <BR/>
Когда ваш номер набирается, вы можете перейти на другую сторону`
    ],
    "ht": [`Kijan lis la travay?`,
      `Ou ale nan chaparral depi 7 a nan maten jiska 9 nan maten pou jwenn yon nimewo <BR/>
      Ou rete tann pou nimewo ou <BR/>
      Lè yo rele nimewo ou, ou ka ale nan lòt bò a`],
    "fr": [
      `Comment fonctionne la liste?`,
      `Vous allez à chaparral de 7 heures du matin à 9 heures du matin pour obtenir un numéro <BR/>
Vous attendez votre numéro <BR/>
Lorsque votre numéro est appelé, vous pouvez aller de l'autre côté`
    ]
  },
  "qWaitTime": {
    "am": [
      `
    ምን ያህል ጊዜ መጠበቅ አለብኝ?
    `,
      `
            ብዙ. አንድ ወር? ሁለት ወራት? ሶስት?
      `
    ],
    "en": [
      `How much time do I have to wait?
      `, `
      A lot. One month?  Two months?  Three?
      `
    ],
    "ar": [
      `كم من الوقت يجب علي الانتظار؟`
      , `كثير. شهر واحد؟ شهرين؟ ثلاثة؟"
    `
    ],
    "ru": [
      "Сколько времени мне ждать?",
      "Много. Один месяц? Два месяца? Три?"
    ],
    "ht": [
      `Konbyen tan m ap oblije tann?`,
      `Anpil. Yon mwa? De mwa? Twa? `
    ],
    "fr": [
      "Combien de temps devrai-je attendre?",
      `Beaucoup. Un mois? Deux mois? Trois? `
    ]
  },
  "qQuantity": {
    "am":  [
      `
      በየቀኑ ስንት ቁጥሮች ይባላሉ?
      `,
      `
    በየቀኑ የተለየ ነው. አንዳንድ ቀኖች በጣም ብዙ ናቸው. ከጥቂት ቀናት በኋላ. አንዳንድ ቀናት ምንም
    `
    ],
    "en": [
      `
      How many numbers are called each day?
      `, `
      It's different every day. Some days a lot. Some days a little.  Some days none
      `
    ],
    "ar": [
      `كم عدد الأرقام تسمى كل يوم؟`,
      `الأمر مختلف كل يوم. بعض الأيام كثيرا. بعض الأيام قليلا. في بعض الأيام لا شيء`
    ],
    "ru": [
      "Сколько номеров вызывается каждый день?",
      "Каждый день все по-другому. Несколько дней много. Несколько дней мало. Несколько дней нет"
    ],
    "ht": [
      `Konbyen nimewo yo rele chak jou?`,
      `Li diferan chak jou. Kèk jou anpil. Kèk jou yon ti kras. Kèk jou pèsonn`
    ],
    "fr": [
      `Combien de numéros sont appelés chaque jour?`,
      `C'est différent tous les jours. Certains jours beaucoup. Quelques jours un peu. Certains jours, personne`
    ]
  },
  "qCrossing": {
    "am":  [
      `
    ወደ ሌላኛው ከተሻገርኩ በኋላ ምን ይከሰታል?
    `,
      `
የአሜሪካ ባለሥልጣኖች ስለ ጥገኝነት ጉዳይዎ ምርመራ የሚያደርጉበት ጉዳይ ይሆናል. ይህ "ክሬነር ስጋርድ ቃለ መጠይቅ" <BR/> ይባላል
ምናልባት በእስር ቤት ውስጥ ሊቆዩ ይችላሉ
`
    ],
    "en": [
      `
      What will happen after I cross to the other side?
      `, `
The American authorities will interrogate you about your asylum case. This is called "The Credible Fear Interview "<BR/>
It is possible that you will be put in a detention facility
`
    ],
    "ar": [
      `ماذا سيحدث بعد عبوري إلى الجانب الآخر؟`,
      `ستستجوبك السلطات الأمريكية بشأن قضية اللجوء الخاصة بك. وهذا ما يسمى "مقابلة الخوف الموثوق بها" <BR/>
من الممكن أن يتم وضعك في مركز احتجاز
`
    ],
    "ru": [
      "Что будет после того, как я перейду на другую сторону?",
      `Американские власти допросят вас по поводу вашего дела о предоставлении убежища. Это называется «Интервью с достоверным страхом» <BR/>
Возможно, вас поместят в следственный изолятор.`
    ],
    "ht": [
      `Kisa ki pral rive apre mwen fin travèse lòt bò lanmè a?`,
      `Otorite Ameriken yo pral entèwoje ou sou ka azil ou an. Yo rele sa a "Entèvyou pè kredib" <BR/>
Li posib ke ou pral mete nan yon sant detansyon`
    ],
    "fr": [
      `Que se passera-t-il après avoir traversé de l'autre côté?`,
      `Les autorités américaines vous interrogeront sur votre cas d'asile. C’est ce qu’on appelle "L’interview sur la peur crédible" <BR/>
Il est possible que vous soyez placé dans un centre de détention`
    ]
  },
  "qWhatAsylum": {
    "am":   [
      `
      ጥገኝነት ምንድን ነው?
      `,
      `
    የጥገኝነት መብት ማናቸውም በሰብአዊ መብት አያያዝ ዓለም አቀፍ መብት ነው
  (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> Wikipedia </A>) ውስጥ የስደተኞችን ሁኔታ ያጠቃልላል.
    `
    ],

    "en": [
      `
      What is asylum?
      `, `
The right of asylum is an international right of human rights, which can be enjoyed by any
     person outside his country of origin in case of persecution (<A href="https://en.wikipedia.org/wiki/Right_of_asylum">Wikipedia</A>) 
`
    ],
    "ar": [
      `
      ما هو اللجوء؟
`,
      `حق اللجوء هو حق دولي لحقوق الإنسان ، يمكن لأي شخص التمتع به
شخص خارج بلده الأصلي في حالة الاضطهاد (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> ويكيبيديا </A>) `
    ],
    "ru": [
      `Что такое убежище?`,
      `Право на убежище является международным правом прав человека, которым могут пользоваться любые
лицо за пределами страны его происхождения в случае преследования (<A href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B2%D0%BE_%D1%83%D0%B1%D0%B5%D0%B6%D0%B8%D1%89%D0%B0"> Википедия </A>) `
    ],
    "ht": [
      'Kisa azil la ye?',
      `Dwa azil la se yon dwa entènasyonal sou dwa moun, ki ka jwi nenpòt ki
      moun ki pa nan peyi orijin li nan ka ta gen pèsekisyon (<A href="https://es.wikipedia.org/wiki/Derecho_de_asilo">Wikipedia</A>) `
    ],
    "fr": [
      `Qu'est-ce que l'asile?`,
      `Le droit d’asile est un droit international des droits de l’homme, qui peut être exercé par tout
      personne extérieure à son pays d'origine en cas de persécution (<A href="https://fr.wikipedia.org/wiki/Droit_d%27asile">Wikipedia</A>)`
    ]
  },
  "qCFI": {
    "am": [
      `
    "የሚታመን የደስታ ቃለ-ምልልስ ምንድን ነው?
      `,
      `
የአሜሪካ ባለሥልጣናት ሊጠይቁዎት ነው: "እሺ, ጌታ ሆይ ለምን
የተባበሩት መንግስታት? ለምን በራስዎ አገር አይቆዩም? ምን ፈሩ? <BR/>
በዚህ ቃለ መጠይቅ ወደ ሀገርዎ ለመመለስ መፍራት አለብዎት. ይህ ፍርሃት ነው. ይህ ፍርሃት ሊታመን የሚችል ነው
`
    ],
    "en": [
      `
      What is "The Credible Fear Interview? 
      `, `
The American authorities are going to ask you: "Well, sir, why do you want to enter the 
United States? Why can  you not stay in your own country? What is your fear? <BR/>
In this interview, you must explain that you are afraid to return to your country. This fear is real. This fear is credible
`
    ],
    "ar": [
      `
      ما هي "مقابلة الخوف الموثوق بها؟"
 `,
      `السلطات الأمريكية سوف تسألك:" حسنًا ، سيدي ، لماذا تريد أن تدخل
الولايات المتحدة الامريكانية؟ لماذا لا يمكنك البقاء في بلدك؟ ما هو خوفك؟ <BR/>
في هذه المقابلة ، يجب أن توضح أنك تخشى العودة إلى بلدك. هذا الخوف حقيقي. هذا الخوف ذو مصداقية
`
    ],
    "ru": [
      `Что такое «Интервью за Достоверный Страх?»`,
      `Американские власти спросят вас: «Ну, сэр, почему вы хотите войти в
Соединенные Штаты? Почему вы не можете остаться в своей стране? Что ты боишься?» <BR/>
  В этом интервью вы должны объяснить, что боитесь вернуться в свою страну. Этот страх настоящий. Этот страх заслуживает доверия`],
    "ht": [
      `Ki sa ki se "Entèvyou pou moun ki te pè nan kredib?" `,
      `Otorite Ameriken yo pral mande ou: "Oke, mesye, poukisa ou vle antre nan la
Etazini? Poukisa ou pa ka rete nan pwòp peyi ou? Ki sa ki gen krentif pou ou a? <BR/>
  Nan entèvyou sa a, ou dwe eksplike ke ou pè retounen nan peyi ou. Sa a pè se reyèl. Sa a pè se kredib`
    ],
    "fr": [
      `Qu'est-ce que "L'interview de la peur crédible?"`,
      `Les autorités américaines vont vous demander:" Eh bien, monsieur, pourquoi voulez-vous entrer dans le
États Unis? Pourquoi ne pouvez-vous pas rester dans votre propre pays? Quelle est ta peur? <BR/>
  Dans cette interview, vous devez expliquer que vous avez peur de retourner dans votre pays. Cette peur est réelle. Cette crainte est crédible`
    ]
  },
  "qMano": {
    "am": [
      `
      የቃለ መጠይቁ አስፈላጊ ክፍሎች ምንድን ናቸው
      `,
      `
  ምን ተፈጠረ? <BR/>
ማን አደረገ? <BR/>
ለምን ይሄን አደረገ? <BR/>
ወደ POLICE ሄደህ? <BR/>
እርስዎ የሚኖሩበት አገር ሌላ አገር አለን?
  `
    ],
    "en": [
      `
      What are the important parts of the interview
      `, `
WHAT happened? <BR/>
WHO did it? <BR/>
WHY did he do it? <BR/>
Did you go to the POLICE? <BR/>
Is there ANOTHER part of your country where you can live?
`
    ],
    "ar": [
      `    ما هي الأجزاء المهمة من المقابلة؟
`,
      `      
              ماذا حدث؟ <BR/>

  من فعلها؟ <BR/>
  لماذا هو فعل هذا؟ <BR/>
  هل ذهبت الى الشرطة؟ <BR/>
  هل هناك جزء آخر من بلدك حيث يمكنك العيش؟
 `
    ],
    "ru": [
      `Каковы важные части интервью`,
      `Что случилось? <BR/>
Кто это сделал? <BR/>
ПОЧЕМУ он это сделал? <BR/>
Вы ходили в полицию? <BR/>
Есть ли другая часть вашей страны, где вы можете жить?`
    ],
    "ht": [
      'Ki pati enpòtan nan entèvyou a?',
      `KISA te rive? <BR/>
KI MOUN KI te fè? <BR/>
POUKISA li te fè li? <BR/>
Eske ou te ale nan POLIS la? <BR/>
Èske gen yon LOT PATI nan peyi ou kote ou ka viv? `
    ],
    "fr": [
      `Quelles sont les parties importantes de l'interview? `,
      `QUE est-ce qui s'est passé? <BR/>
        QUI l'a fait? <BR/>
      POURQUOI l'a-t'il fait? <BR/>
        Êtes-vous allé à la POLICE? <BR/>
        Y a-t-il une AUTRE PARTIE de votre pays où vous pouvez vivre? `
    ]
  },
  "qPostCFI": {
    "am":  [
      `
  በቃለ መጠይቁ ላይ ሁሉም ነገር በደንብ ቢሰራ ምን ይሆናል?
  `,
      `
  በርካታ አማራጮችን አሉ <BR/>
እያንዳንዱ ሰው <EM> የዩ.ኤስ. የጉምሩክ እና የጠረፍ ፖሊስ </EM> እስር ቤት ውስጥ ገብቷል. ይህ <STRONG> the
ቀዝቃዛ </STRONG> <BR/>
ከዚህ በኋላ በአብዛኛው ሁኔታዎች ሁለት አማራጮች አሉ
<UL>
<LI> በአብዛኛው ሁኔታዎች ታዳጊ የሆኑ ልጆች ያላቸው ቤተሰቦች ይለቀቃሉ </LI>
<LI> በአብዛኛው, ሌሎች እስረኞች <EM> የዩናይትድ ስቴትስ ኢሚግሬሽንና ጉምሩክ ታሳሪዎች ናቸው
ማስከበር </EM> </LI>
</UL>
  `
    ],

    "en": [
      `
      What will happen if everything goes well with my interview?
      `,
      `
There are several possibilities <BR/>
Everyone goes into the detention of <EM> US Customs and Border Patrol </EM>. This is called <STRONG> the
    cooler </STRONG> <BR/>
After that there are two possibilities in most cases
    <UL>
    <LI> In most cases, families with children who are minors are released </LI>
    <LI> In most cases, the others to a detention of <EM> US Immigration and Customs
      Enforcement </EM> </LI>
    </UL> 
`
    ],
    "ar": [
      `
    ماذا سيحدث إذا سارت الأمور على ما يرام في مقابلتي؟
`,

      `هناك العديد من الاحتمالات <BR/>
يذهب الجميع إلى احتجاز <EM> دورية الجمارك والحدود الأمريكية </EM>. وهذا ما يسمى <STRONG> the
برودة </STRONG> <BR/>
بعد ذلك هناك احتمالان في معظم الحالات
<UL>
<LI> في معظم الحالات ، يتم إطلاق سراح العائلات التي لديها أطفال قاصرون </LI>
<LI> في معظم الحالات ، يتم احتجاز الآخرين في <EM> الهجرة والجمارك الأمريكية
التنفيذ </EM> </LI>
</UL> `
    ],
    "ru": [
      "Что будет, если все пойдет хорошо с моим интервью?",
      `Есть несколько возможностей <BR/>
Все попадают под стражу <EM> Таможенного и пограничного патруля США </EM>. Это называется <STRONG>
кулер </STRONG> <BR/>
После этого в большинстве случаев есть две возможности
<UL>
<LI> В большинстве случаев освобождаются семьи с несовершеннолетними детьми </LI>
<LI> В большинстве случаев остальные находятся под стражей иммиграционной и таможенной службы США.
Правоприменение </EM> </LI>
</UL> `
    ],
    "ht": [
      `Kisa ki pral rive si tout bagay mache byen ak entèvyou mwen an? `,
      `Gen plizyè posiblite <BR/>
Tout moun ale nan detansyon <EM> US Ladwàn ak Patwouy Border </EM>. Se sa yo rele <STRONG> la
pi fre </STRONG> <BR/>
Apre sa, gen de posibilite nan pifò ka yo
<UL>
<LI> Nan pifò ka yo, fanmi ki gen timoun ki minè yo lage </LI>
<LI> Nan pifò ka yo, lòt moun yo nan yon detansyon nan <EM> Imigrasyon US ak Ladwàn
Ranfòsman </EM> </LI>
</UL> `
    ],
    "fr": ["Que se passera-t-il si tout se passe bien avec mon entretien?",
      `Il y a plusieurs possibilités <BR/>
Tout le monde entre en détention par la <EM> patrouille des douanes et des frontières des États-Unis </EM>. Ceci est appelé <STRONG> le
glacière </STRONG> <BR/>
Après cela, il y a deux possibilités dans la plupart des cas
<UL>
<LI> Dans la plupart des cas, les familles avec enfants mineurs sont libérées </LI>
<LI> Dans la plupart des cas, les autres personnes placées en détention <EM> dans Immigration et douanes américaines
Application </EM> </LI>
</UL> `]
  },
  "qWhatHielera": {
    "am": [
      `
<STRONG> la hielera </STRONG> የ <EM> የዩ.ኤስ. የጉምሩክ እና የጠረፍ ፖሊስ ምንድነው? </EM>
`,
      `
ቀዝቃዛው በጣም አስቀያሚ ነው. <BR/>
እሥር ቤት ነው. <BR/>
አንድ መግለጫ
<BLOCKQUOTE>
የብርሃኑ መብራት በ 24 ሰዓታት ውስጥ ስለነበረ መተኛት የማይቻልበት ቀዝቃዛ ቦታ ነው
ሆን ተብሎ, የጊዜን ሀሳብ ታጣለህ, በንድፈ ሀሳብ ውስጥ ቦታ አለ
ሰዎች ምግብ ይቀበላሉ, ምግብ በጣም አሰቃቂ ነው, በጣም ቀዝቃዛ ነው. <BR/>
መሬት ላይ ወይም እንቅልፋቸው ማንም ሰው በማይተኛባቸው የብረት ማዕዘኖች ላይ ይተኛል (እንቅልፍ ይተኛል). <BR/>
ለሆድዎ ጎጂ ከሆኑት መጸዳጃዎች በድጋሜ የተጠማውን ውሃ መጠጣት ይኖርብዎታል. <BR/>
መታጠቢያ ቤቶችን ሲጠቀሙ ፊትዎን ፊት ለፊት መደርደር አለብዎ. <BR/>
በእያንዳንዱ ሴል ውስጥ ቢበዛ ከ 10 እስከ 15 ሰዎች ቢበዛ ነው. እዚያ ውስጥ እንደ ትንሽ ቦታ
4 ሜትር ርዝማኔ በ 3 ሜትር በ hancho.
</BLOCKQUOTE>
`
    ],
    "en": [
      `
What is <STRONG> the cooler </STRONG> of <EM> US Customs and Border Patrol? </EM>
`, `
The cooler is very ugly. <BR/>
     It's a jail. <BR/>
     A description:
<BLOCKQUOTE>
   It is a cold place where you can not sleep because the light is on 24 hours during the time
   Intentionally, you will lose the notion of time, there is a room that in theory is where
   people receive food, food is horrible, it's cold. <BR/>
   You sleep (try to sleep) on the floor or on the metal benches where hardly anyone can sleep. <BR/>
   You must drink recycled water from toilets that is harmful to your stomach. <BR/>
   When you use the bathrooms you have to do it in front of others. <BR/>
   Also in each cell they have around 10 to 15 people at most. That in a small space as in
   4 meters long by 3 meters of hancho.
</BLOCKQUOTE> 
`
    ],
    "ar": [
      `ما هو <STRONG> مبرد <STRONG> <EM> دورية الجمارك والحدود الأمريكية؟ </EM> `
      , `
   
           برودة القبيح جدا. <BR/>
  إنه سجن. <BR/>
  وصف:
    <BLOCKQUOTE>
      إنه مكان بارد لا يمكنك النوم فيه لأن الضوء يعمل على مدار 24 ساعة
      عن عمد ، ستفقد فكرة الوقت ، هناك مجال نظريًا هو المكان
      يتلقى الناس الطعام ، الطعام سيء ، بارد. <BR/>
      تنام (حاول أن تنام) على الأرض أو على المقاعد المعدنية حيث لا يستطيع أي شخص النوم. <BR/>
      يجب أن تشرب الماء المعاد تدويره من المراحيض الضارة بطنك. <BR/>
      عند استخدام الحمامات ، عليك أن تفعل ذلك أمام الآخرين. <BR/>
      في كل زنزانة أيضًا ، يوجد حوالي 10 إلى 15 شخصًا على الأكثر. هذا في مساحة صغيرة كما هو الحال في
      4 أمتار من قبل 3 أمتار من hancho.
    </BLOCKQUOTE> `
    ],
    "ru": [
      `Что такое <STRONG> кулер </STRONG> Таможенного и <EM> пограничного патруля США? </EM> `,
      `Кулер очень уродливый. <BR/>
Это тюрьма. <BR/>
Описание:
<BLOCKQUOTE>
Это холодное место, где вы не можете спать, потому что свет включен в течение 24 часов
Намеренно вы потеряете представление о времени, в теории есть место, где
люди получают еду, еда ужасна, холодно. <BR/>
Вы спите (пытаетесь уснуть) на полу или на металлических скамейках, где вряд ли кто-то может спать. <BR/>
Вы должны пить переработанную воду из туалетов, которая вредна для вашего желудка. <BR/>
Когда вы используете ванные комнаты, вы должны делать это на глазах у других. <BR/>
Также в каждой камере их максимум от 10 до 15 человек. Это в небольшом пространстве, как в
4 метра в длину и 3 метра Ханчо.
</BLOCKQUOTE> `
    ],
    "ht": [
      `Ki sa ki <STRONG> pi fre </STRONG> nan <EM> US Ladwàn ak Patwouy Border? </EM> `,
      `Pi fre a se trè lèd. <BR/>
Se yon prizon. <BR/>
Yon deskripsyon:
<BLOCKQUOTE>
Li se yon kote ki frèt kote ou pa ka dòmi paske limyè a se sou 24 èdtan pandan tan an
Entansyonèlman, ou pral pèdi nosyon de tan, gen yon chanm ki nan teyori se kote
moun resevwa manje, manje se terib, li frèt. <BR/>
Ou dòmi (eseye dòmi) sou planche a oswa sou bank metal yo kote diman nenpòt moun ka dòmi. <BR/>
Ou dwe bwè dlo resikle nan twalèt ki danjere nan vant ou. <BR/>
Lè ou itilize twalèt yo ou dwe fè l devan lòt moun. <BR/>
Epitou nan chak selil yo gen alantou 10 a 15 moun nan pi. Sa nan yon ti espas tankou nan
4 mèt nan 3 mèt longè.
</BLOCKQUOTE> `],
    "fr": [`Quel est le <STRONG> refroidisseur </STRONG> de <EM> la US Customs and Border Patrol? </EM> `,
      `La glacière est très moche. <BR/>
C'est une prison. <BR/>
Une description:
<BLOCKQUOTE>
C’est un endroit froid où vous ne pouvez pas dormir car la lumière est allumée 24 heures par jour.
Intentionnellement, vous allez perdre la notion du temps, il y a une salle qui est en théorie où
les gens reçoivent de la nourriture, la nourriture est horrible, il fait froid. <BR/>
Vous dormez (essayez de dormir) sur le sol ou sur des bancs métalliques où presque personne ne peut dormir. <BR/>
Vous devez boire de l'eau recyclée des toilettes qui soit nocive pour votre estomac. <BR/>
Lorsque vous utilisez les salles de bain, vous devez le faire devant les autres. <BR/>
De plus, dans chaque cellule, ils ont environ 10 à 15 personnes au maximum. Que dans un petit espace comme dans
4 mètres de long par 3 mètres de hancho.
</BLOCKQUOTE> `]
  },
  "qWhatDetencion": {
    "am": [
      `
<EM> የአሜሪካ ኢሚግሬሽን እና ጉምሩክ አስፈፃሚ </EM> ማቆም ምን ማለት ነው?
`
      ,
      `
      እስር ቤት ነው. በጣም አስቀያሚ ነው. መግለጫዎችን እያገኘሁ ነው ...
      `
    ],
    "en": [
      `
What is the detention of <EM> US Immigration and Customs Enforcement </EM> 
`
      ,
      `
      It's a prison. It is very ugly. I'm getting descriptions ...
      `
    ],
    "ar": [
      `
ما هو احتجاز <EM> مصلحة الهجرة والجمارك الأمريكية </EM>
`, `
       إنه سجن. انها قبيحة جدا. أتلقى أوصاف ...
       `],
    "ru": [
      `Что такое задержание <EM> Управления иммиграции и таможни США </EM>`,
      `Это тюрьма. Это очень некрасиво. Я получаю описания ... `
    ],
    "ht": [
      `Ki sa ki se detansyon an nan <EM> US Imigrasyon ak Ladwàn Ranfòsman </EM>`,
      `Se yon prizon. Li trè lèd. Mwen resevwa deskripsyon ...`
    ],
    "fr": [
      `Qu'est-ce que la détention de <EM> l'immigration des États-Unis et de la police </EM>`,
      `C'est une prison. C'est très moche. Je reçois des descriptions ...`
    ]
  },
  "qDetencionPrep": {
    "am":   [
      `
      ለቀጣዩ ቀዝቃዛ እና ለእስራት መዘጋጀት እንዴት እችላለሁ?
      `
      ,
      `
የስልክ ቁጥሮችዎን እና አድራሻዎችን እና ስለ የእጆችዎ አስፈላጊ ቁም ነገር ሁሉ ይጻፉ <BR/>
በ SHARPIE ቢግ ይፃፉ. አንድ መደበኛ ብዕር ከሰውነትዎ መታጠብ በጣም ቀላል ነው.
`
    ],
    "en": [
      `
      How can I prepare for the cooler and the detention?
      `
      ,
      `
Write the phone numbers and addresses and all the important things about your arm <BR/>
             Write it with a SHARPIE pen. It is very easy to wash a normal pen from your body.
`
    ],
    "ar": [
      `
       كيف يمكنني الاستعداد للبرودة والاحتجاز؟
       `
      ,
      `
اكتب أرقام الهواتف والعناوين وكل الأشياء المهمة عن ذراعك <BR/>
اكتبها بقلم SHARPIE. من السهل جدًا غسل قلم عادي من جسمك.
`
    ],
    "ru": [
      `How can I prepare for the cooler and the detention?`,
      `Write the phone numbers and addresses and all the important things about your arm <BR/>
             Write it with a SHARPIE pen. It is very easy to wash a normal pen from your body.`
    ],
    "ht": [
      "Kouman mwen ka prepare pou pi fre a ak detansyon an?",
      `Ekri nimewo telefòn yo ak adrès yo ak tout bagay sa yo enpòtan sou bra ou <BR/>
             Ekri l ak yon plim SHARPIE. Li trè fasil pou lave yon plim nòmal nan kò w`
    ],
    "fr": [
      `Comment puis-je me préparer pour la chambre froide et la détention?`,
      `Ecrivez les numéros de téléphone et adresses ainsi que toutes les informations importantes concernant votre bras<BR/>
      Ecris-le avec un stylo SHARPIE. Il est très facile de laver un stylo normal de votre corps.`
    ]
  },
  "qMyContact": {
    "am": [
      `
      ምንም ቁጥር ወይም አድራሻ የለኝም. እስር ቤት ስደርስ ለእርዳታ ለመጠየቅ ወይም ለመፃፍ ማን ሊረዳ ይችላል?
      `,
      `
<h1> እኔ </h1> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<address>
Mitchell Verter <BR/>
654 East San Ysidro Blvd / <BR/>
PMB 187 <BR/>
San Ysidro, CA 92173
</address>
<BR/>
በ SHARPIE ቢግ ይፃፉ. አንድ መደበኛ ብዕር ከሰውነትዎ መታጠብ በጣም ቀላል ነው.
  `
    ],
    "en": [
      `
      I do not have any number or address. Who can I call or write for help when I'm detained? 
      `, `
 <h1>Me</h1> <BR/>
            Mitchell Verter <BR/>
            +1 646 705 7784 <BR/>

            <Address>
                Mitchell Verter <BR/>
                654 East San Ysidro Blvd <BR/>
                PMB 187 <BR/>
                San Ysidro, CA 92173
            </address>
            <BR/>
            Write it with a SHARPIE pen. It is very easy to wash a normal pen from your body.
`
    ],
    "ar": [
      `
       ليس لدي أي رقم أو عنوان. من الذي يمكنني الاتصال به أو الكتابة للمساعدة عندما أكون معتقلاً؟
       `, `
  <h1> أنا </h1> <BR/>
ميتشل فيتر <BR/>
+1 646 705 7784 <BR/>

   <Address>
                Mitchell Verter <BR/>
                654 East San Ysidro Blvd <BR/>
                PMB 187 <BR/>
                San Ysidro, CA 92173
            </address>
        <BR/>
اكتبها بقلم SHARPIE. من السهل جدًا غسل قلم عادي من جسمك.
`
    ],
    "ru": [
      `У меня нет ни номера, ни адреса. Кому я могу позвонить или написать о помощи, когда меня задержат? `,
      `<h1> Я </h1> <BR/>
Митчелл Вертер <BR/>
+1 646 705 7784 <BR/>

           <Address>
                Mitchell Verter <BR/>
                654 East San Ysidro Blvd <BR/>
                PMB 187 <BR/>
                San Ysidro, CA 92173
            </address>
 <BR/>
Напишите это с ручкой SHARPIE. Очень легко вымыть нормальную ручку из своего тела.
`
    ],
    "ht": [
      `Mwen pa gen okenn nimewo oswa adrès. Ki moun mwen ka rele oswa ekri pou èd lè mwen arete? `,
      `<h1> Mwen </h1> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<Address>
Mitchell Vast <BR/>
654 East San Ysidro Blvd <BR/>
PMB 187 <BR/>
San Ysidro, CA 92173
</address>
<BR/>
Ekri l ak yon plim SHARPIE. Li trè fasil pou lave yon plim nòmal nan kò w.
`
    ],
    "fr": [
      `Je n'ai ni numéro ni adresse. Qui puis-je appeler ou demander de l'aide lorsque je suis détenu? `,
      `<h2> Moi </h2> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<Address>
Mitchell Verter <BR/>
654 East San Ysidro Blvd <BR/>
PMB 187 <BR/>
San Ysidro, CA 92173
</address>
<BR/>
Ecris-le avec un stylo SHARPIE. Il est très facile de laver un stylo normal de votre corps.
`
    ]
  },
  "qLeviticus": {
    "am":  [
      `
መጽሐፍ ቅዱስ ስለዚህ ሂደት ምን ያስባል?
  `,
      `
<BLOCKQUOTE>
በምድርህ ውስጥ የሚኖር የባዕድ አገር ሰው ከእናንተ ጋር በሚኖርበት ጊዜ አትጨቁን. <BR/>
ከእናንተ ጋር የሚኖረውን የባዕድ አገር ሰው በእናንተ መኖሩን ታስተውላላችሁ. እናንተ በግብፅ ምድር እንግዶች ነበራችሁና እርሱን እንደ ራስህ ውደድ.
</BLOCKQUOTE>
<cite> ዘሌዋውያን 19: 33-34 </cite>
`
    ],
    "en": [
      `
      What do The Bible think about this process? 
      `, `
<BLOCKQUOTE>
When a foreigner lives with you in your land, you must not oppress him. <BR/>
You must regard the foreigner who lives with you as the native-born among you. You are to love him as yourself, for you were foreigners in the land of Egypt.
            </BLOCKQUOTE>
            <cite> Leviticus 19: 33-34 </cite>
 `
    ],
    "ar": [
      `
       ماذا يفكر الكتاب المقدس في هذه العملية؟
       `, `
<BLOCKQUOTE>
عندما يعيش أجنبي معك في أرضك ، يجب ألا تضطهده. <BR/>
يجب أن تعتبر الأجنبي الذي يعيش معك هو المولود فيك. أنت تحبه بنفسك ، لأنك كنت أجنبياً في أرض مصر.
</BLOCKQUOTE>
<cite> سفر اللاويين 19: 33-34 </cite>
`
    ],
    "ru": [
      `Что Библия думает об этом процессе? `,
      `<BLOCKQUOTE>
    Когда иностранец живет с вами на вашей земле, вы не должны угнетать его. <BR/>
    Вы должны рассматривать иностранца, который живет с вами, как родного среди вас. Вы должны любить его как самого себя, потому что вы были иностранцами на земле Египетской.
  </BLOCKQUOTE>
  <cite> Левит 19: 33–34 </cite>
  `
    ],
    "ht": [
      `Kisa Bib la panse sou pwosesis sa a? `,
      `<BLOCKQUOTE>
Si yon moun lòt nasyon rete ak nou nan peyi nou an, nou p'ap gen pitye pou li. <BR/>
Se pou nou konsidere moun lòt nasyon yo tou ki ta viv lakay nou, menm jan ak nou. Se pou ou renmen l 'tankou ou menm, paske ou te etranje nan peyi Lejip la.
</BLOCKQUOTE>
<cite> Levitik 19: 33-34 </cite>
`
    ],
    "fr": [
      `Que pense la Bible de ce processus? `,
      `<BLOCKQUOTE>
Lorsqu'un étranger habite avec vous dans votre pays, vous ne devez pas l'opprimer. <BR/>
Vous devez considérer l'étranger qui vit avec vous comme un natif parmi vous. Vous devez l'aimer comme vous-même, car vous étiez étrangers au pays d'Égypte.
</BLOCKQUOTE>
<cite> Lévitique 19: 33-34 </cite>
`
    ]
  },
  "qACAB": {
    "am": [
      `
      አመንታኒስት ስለ ሂደቱ ምን ያስባሉ?
      `,
      `
<BLOCKQUOTE>
ይህ በራሱ ለግብርታዊ እና ፀረ-ፈላጭ ኢኮኖሚዊ ማህበራዊ አብዮት በቂ ነው, ግን ተጨማሪም አለ. በሜክሲኮ ውስጥ እስከ አራት ወይም ሃያ አምስት ዓመት ገደማ ድረስ አራት ሚልዮን ሕንዶች ይኖራሉ, መሬት, ውሃ, እና የደን ሳንቲሞች ባላቸው ማህበረሰቦች ውስጥ ይኖሩ ነበር. በነዚህ ማህበረሰቦች ውስጥ እርስ በርስ የሚደረገው እርዳታ በየትኛው ማኅበረሰብ ውስጥ ደንብ ነበር, በዚህ ስልጣን ላይ ባለስልጣን የታክስ ቀበሌው በየጊዜው ብቅ ሲል ወይም "ሠራተኞችን" ወደ ሠራዊቱ ለማስገባት ሲፈልጉ ብቻ ተገኝተዋል. በእነዚህ ማህበረሰቦች ውስጥ ምንም ዳኞች, ከንቲባዎች, ወሮበሎች አልነበሩም, በእንደዚህ አይነት አይነት የሚያስጨንቁ ህዝቦች የሉም. ሁሉም ሰው የመሬትን, ውኃውን ለማጠጣት ውሃን, ለማገዶ እንጨት እና ለትንንሾቹ ቤቶች ግንባታ እንጨት ወደ ጫካ ያመራል. ማረሻዎች በእጆቻቸው እንደ በሬዎች ነበሩ. እያንዳንዱ ቤተሰብ አስፈላጊ የሆነውን ነገር ለማሟላት በቂ እንደሆነ ያሰቡትን ያህል ብዙ ስራዎችን ሰርቷል, የአረም እና የመከር ሥራ በአጠቃላይ ማህበረሰቡ - በዛሬው ጊዜ, የፔድሮ መከር, ነገ ዮዋን እና ወዘተ. በማኅበረሰቡ ውስጥ ያሉ ሰዎች ሁሉ አንድ ቤት በሚነሳበት ጊዜ እጃቸውን ወደ ሥራው ያደርጉ ነበር.
</BLOCKQUOTE>
<cite>
<A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
  Ricardo Flores Magon, <EM> የሜክሲኮ ሰዎች ለአርኖክ ኮሚኒቲዎች ተስማሚ ናቸው </em> <BR/>
እንደገና መታደስ, ቁጥር. 53, መስከረም 2, 1911
</A>
</cite>
  `
    ],
    "en": [
      `
      What do the anarchists think about this process?
      `, `
         <BLOCKQUOTE>
This in itself is enough for a social revolution which is economic in na¬ture and anti-authoritarian, but there is more. Four million Indians live in Mexico who, until twenty or twenty-five years ago, lived in communities possessing the lands, the waters, and the forests in common. Mutual aid was the rule in these communities, in which authority was felt only when the tax collcctor appeared periodically or when "recruiters" showed up in search of men to force into the army. In these communities there were no judges, mayors, jailers, in fact no bothersome people at all of this type. Everyone had the right to the land, to the water to irrigate it, to the forests for firewood, and to the wood from the forests for the construction of small houses.The plows passed from hand to hand, as did yokes of oxen. Each family worked as much land as they thought was sufficient to pro¬duce what was necessary, and the work of weeding and harvesting was done in common by the entire community—today, Pedro's harvest, tomorrow Juan s, and so on. Everyone in the community put their hands to the work when a house was to be raised.
            </BLOCKQUOTE>
            <cite>
<A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
 Ricardo Flores Magon, <EM> The Mexican people are apt for anarcho-communism </EM> <BR/>
 Regeneration, num. 53, September 2, 1911.
</A>
            </cite>
`
    ],
    "ar": [
      `
      ماذا يفكر الأناركيون في هذه العملية؟
      `, `
<BLOCKQUOTE>
 هذا بالفعل أكثر من كافٍ لثورة اجتماعية ذات طبيعة اقتصادية ومعادية للسلطوية. لكن
 هناك أكثر. يعيش في المكسيك حوالي أربعة ملايين هندي ، عاشوا حتى قبل عشرين أو خمسة وعشرين عامًا
 في المجتمعات ، والتملك المشترك في الأراضي والمياه والغابات. وكان الدعم المتبادل هو القاعدة في
 تلك المجتمعات ، التي شعرت فيها السلطة فقط عندما كان وكيل جمع الإيجارات
 نحو مظهره الدوري أو عند وصول المناطق الريفية بحثًا عن الرجال لإدخالهم
 بالقوة للجيش. في هذه المجتمعات لم يكن هناك قضاة أو رؤساء بلديات أو سجناء أو أي
 فراشة من تلك الفئة. كان لكل شخص الحق في الأرض ، والمياه للري ، إلى الغابة
 الحطب والخشب لبناء الأكواخ. سار المحاريث من يد إلى آخر ، وكذلك النير
 من الثيران. عملت كل أسرة على امتداد الأرض التي تم حسابها لتكون كافية لإنتاج
 كان ضروريا ، وكان عمل إزالة الأعشاب الضارة ورفع المحاصيل مشتركا ، وجمع كل
 المجتمع ، اليوم ، لرفع حصاد بيدرو ، غدا لرفع خوان ، وهلم جرا.
 لجعل كوخ ، كل أفراد المجتمع للعمل.
</BLOCKQUOTE>
<cite> و
<A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
 ريكاردو فلوريس ماجون ، <EM> الشعب المكسيكي مستعد للشيوعية الأناركية </EM> <BR/>
 التجديد ، الأسطوانات. 53 ، 2 سبتمبر 1911.
</A>
</cite> و
`
    ],
    "ru": [
      `Что анархисты думают об этом процессе?`,
      `
<BLOCKQUOTE>
 Этого уже более чем достаточно для социальной революции экономического и антиавторитарного характера; но
 есть больше В Мексике живут около четырех миллионов индейцев, которые до двадцати или двадцати пяти лет назад жили
 в сообществах, владеющих совместно землями, водами и лесами. Взаимная поддержка была правилом в
 те общины, в которых Орган ощущался только тогда, когда агент по сбору ренты
 к его периодическому появлению или когда сельские прибыли в поисках людей, чтобы заставить их войти
 силой в армию. В этих общинах не было ни судей, ни мэров, ни тюремщиков, ни каких-либо
 моли этого класса. Каждый имеет право на землю, на воду для орошения, на лес для
 дрова и дрова для постройки хижин. Плуги ходили из рук в руки, а также хомуты
 быков Каждая семья работала над расширением земли, которая была рассчитана как достаточная для производства
 необходимо, и работа по прополке и выращиванию урожая была сделана совместно, собрав все
 Сообщество, сегодня, чтобы поднять урожай Педро, завтра, чтобы поднять Хуана, и так далее.
 Чтобы создать хижину, все члены сообщества отправляются на работу.
</BLOCKQUOTE>
<cite>
<A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
 Рикардо Флорес Магон, <EM> народ Мексики склонен к анархо-коммунизму </EM> <BR/>
 Регенерация, число 53, 2 сентября 1911 г.
</A>
</cite>
`
    ],
    "ht": [
      `Ki sa anarchis yo panse sou pwosesis sa a?`,
      `
         <BLOCKQUOTE>
 Sa a se deja plis pase ase pou yon revolisyon sosyal nan yon nati ekonomik ak anti-otoritè; men
 Gen plis. Nan Meksik ap viv sou kat milyon Endyen, ki moun ki jiska ven oswa ven-senk ane de sa te viv
 nan kominote yo, posede an komen tè ​​yo, dlo yo ak forè yo. Sipòte mityèl te règ la nan
 kominote sa yo, nan ki Otorite a te sèlman te santi lè ajan an nan koleksyon an nan pri lwaye
 nan direksyon pou aparans peryodik li yo oswa lè moun ki nan zòn riral yo te rive nan rechèch nan moun fè yo antre nan
 pa fòs nan lame a. Nan kominote sa yo pa te gen okenn jij, oswa majistra, oswa prizonye, ​​oswa nenpòt ki
 manman nan klas sa. Tout moun te gen dwa pou fè tè, dlo pou irigasyon, pou forè a
 bwa dife ak bwa yo bati kabin yo. Chaje yo soti nan men nan men, menm jan tou jouk yo
 nan bèf. Chak fanmi te travay pou ekstansyon peyi ki te kalkile ase pou pwodwi
 nesesè, ak travay la nan sarkle ak ogmante rekòt yo te fè an komen, ranmase tout la
 kominote a, jodi a, ogmante rekòt Pedro a, demen ogmante a Juan la, ak sou sa.
 Pou fè yon joupa, tout manm kominote a te travay.
            </BLOCKQUOTE>
            <cite>
<A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
 Ricardo Flores Magon, <EM> Moun Meksiken yo jis pou anarcho-kominis </EM> <BR/>
 Rejenerasyon, Num. 53 septanm 2, 1911.
</A>
            </cite>
`
    ],
    "fr": [
      `Que pensent les anarchistes de ce processus?`,
      `
         <BLOCKQUOTE>
 C'est déjà plus que suffisant pour une révolution sociale de nature économique et anti-autoritaire; mais
 il y a plus. Au Mexique vivent environ quatre millions d'Indiens, qui vivaient jusqu'à il y a vingt ou vingt-cinq ans
 dans les communautés, possédant en commun les terres, les eaux et les forêts. Le soutien mutuel était la règle dans
 ces communautés, dans lesquelles l’Autorité n’a été ressentie que lorsque l’agent de perception des loyers
 vers son apparition périodique ou quand les ruraux sont arrivés à la recherche d'hommes pour les faire entrer
 par la force à l'armée. Dans ces communautés, il n’y avait ni juge, ni maire, ni gardien de prison, ni aucun
 papillon de cette classe. Tout le monde avait le droit de terre, d’eau pour l’irrigation, de forêt pour
 bois de chauffage et bois pour construire des cabanes. Les charrues marchaient de main en main, ainsi que les jougs
 de bœufs. Chaque famille travaillait sur l’extension de la terre qui était jugée suffisante pour produire
 nécessaire, et le travail de désherbage et d’élevage a été effectué en commun, réunissant tous les
 la communauté, aujourd’hui, pour élever la récolte de Pedro, demain pour élever celle de Juan, et ainsi de suite.
 Pour faire une cabane, tous les membres de la communauté se mettent au travail.
            </BLOCKQUOTE>
            <cite>
<A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
 Ricardo Flores Magon, <EM> Le peuple mexicain est enclin à l'anarcho-communisme </EM> <BR/>
 Régénération, num. 53, 2 septembre 1911.
</A>
            </cite>
`
    ]
  },
  "qBusquedas": {
    "am":   [
      `
ወዳጄ ወይም ዘመድ ቀደም ሲል ወደ ዩናይትድ ስቴትስ ገብቷል. እሷ አሁን የት ነው?
  `,
      `
ምናልባትም በዩናይትድ ስቴትስ ውስጥ ታስሮ ሊሆን ይችላል. <BR/>
አንድ ሰው ድንበሩን አቋርጦ ሲያልፍ ወዲያውኑ ወደ ሂዬራ ይመለሳል. እስከ ሁለት ሳምንት ድረስ እዚያ ይቆያሉ. ስለእነሱ መረጃ ለማግኘት ምንም መንገድ የለም. <BR />

ከዚያ በኋላ ወደ ኢ.ኢ.ግ. እስር ቤት ይገቡ ይሆናል <BR/>
እነሱን ለመፈለግ ኦፊሴላዊው ገጽ እነሆ: <BR/>
<A href="https://locator.ice.gov/odls"> የመስመር ላይ የፓርቲው ተቆጣጣሪ ስርዓት - ICE </A> <BR/>
ለመጠቀም በጣም ከባድ ነው. ICE ዘረኛ, ፋሺስት ድርጅት ነው. ስለሰው ልጆች አያስቡም <BR/>
እኔ ሰዎችን ለመፈለግ እየሞከርኩ ነው, ነገር ግን በጣም ከባድ ነው. <BR>
እባክዎን ፍለጋ ለመጀመር ይህንን ገጽ ይጠቀሙ: <BR/>
<STRONG> <A href="detention.html"> SEARCH PAGE </A> </STRONG>
`
    ],
    "en": [
      `
            My friend or relative already crossed into the United States. Where is she right now?
`, `
            Possibly, she is being detained in the United States <BR/>
Right after a person crosses the border they go into the hielera.  They stay there for as long as two weeks.  There is no way to get information about them.<BR />

After this, they might go into ICE detention<BR/>
Here is the official page for search for them: <BR/>
<A href="https://locator.ice.gov/odls">Online Detainee Locator System - ICE</A><BR/>
It is very hard to use.  ICE is a racist, fascist organization.  They do not care about human beings<BR/>
I am trying to search for people too, but it is very difficult<BR>
            Please, use this page to start a search: <BR/>
            <STRONG> <A href="detention.html"> SEARCH PAGE </A> </STRONG> 
`
    ],
    "ar": [
      `
صديقي أو قريبي عبروا بالفعل إلى الولايات المتحدة. أين هي الآن؟
`, `
ربما ، هي محتجزة في الولايات المتحدة <BR/>
مباشرة بعد أن يعبر الشخص الحدود يذهبون إلى hielera. يقيمون هناك لمدة أسبوعين. لا توجد طريقة للحصول على معلومات عنها. <BR />

بعد ذلك ، قد يذهبون إلى حجز ICE <BR/>
فيما يلي الصفحة الرسمية للبحث عنها: <BR/>
<A href="https://locator.ice.gov/odls"> نظام محدد مواقع المحتجزين عبر الإنترنت - ICE </A> <BR/>
من الصعب جدا استخدامها. ICE هي منظمة فاشية عنصرية. إنهم لا يهتمون بالإنسان <BR/>
أحاول البحث عن أشخاص أيضًا ، لكنه صعب جدًا <BR>
يرجى استخدام هذه الصفحة لبدء البحث: <BR/>
<STRONG> <A href="detention.html"> صفحة البحث </A> </STRONG>
`
    ],

    "ht": [
      `
Zanmi mwen oswa fanmi mwen deja janbe nan Etazini yo. Kote li ye kounye a?
`,
      `
Li posib, li se ke yo te arete nan peyi Etazini <BR/>
Dwa apre yon moun kwaze fwontyè a yo ale nan Hielera la. Yo rete la pou lontan de semèn. Pa gen okenn fason pou jwenn enfòmasyon sou yo. <BR />

Apre sa, yo ka ale nan detansyon ICE la
Isit la se paj ofisyèl la pou rechèch pou yo: <BR/>
<A href="https://locator.ice.gov/odls"> Sistèm Lokalizasyon Lokal Detenab - ICE </A> <BR/>
Li trè difisil pou itilize. ICE se yon rasis, òganizasyon fachis. Yo pa pran swen sou èt imen <BR/>
Mwen ap eseye pou chèche moun tou, men li trè difisil <BR>
Tanpri, itilize paj sa a pou kòmanse yon rechèch: <BR/>
<STRONG> <A href="detention.html"> rechèch PAJ </A> </STRONG>
`
    ],
    "ru": [
      `
Мой друг или родственник уже въехал в Соединенные Штаты. Где она сейчас?
`,
      `
Возможно, ее задержали в Соединенных Штатах. <BR/>
Сразу после того, как человек пересекает границу, они уходят в гиелера Они остаются там до двух недель. Нет возможности получить информацию о них. <BR />

После этого они могут попасть под стражу ДВС. <BR/>
Вот официальная страница для их поиска: <BR/>
<A href="https://locator.ice.gov/odls"> Система обнаружения задержанных в Интернете - ICE </A> <BR/>
Это очень сложно использовать. ICE - расистская, фашистская организация. Они не заботятся о людях <BR/>
Я тоже пытаюсь искать людей, но это очень сложно <BR>
Пожалуйста, используйте эту страницу, чтобы начать поиск: <BR/>
<STRONG> <A href="detention.html"> ПОИСК СТРАНИЦЫ </A> </STRONG>
`
    ],
    "fr": [
      `
Mon ami ou un parent est déjà passé aux États-Unis. Où est-elle en ce moment?
`,
      `
Elle est peut-être détenue aux États-Unis. <BR/>
Dès qu'une personne traverse la frontière, elle entre dans la hielera. Ils y restent jusqu'à deux semaines. Il n'y a aucun moyen d'obtenir des informations à leur sujet. <BR />

Après cela, ils pourraient être placés en détention par ICE <BR/>
Voici la page officielle de recherche pour eux: <BR/>
<A href="https://locator.ice.gov/odls"> Système de localisation de détenus en ligne - ICE </A> <BR/>
C'est très difficile à utiliser. ICE est une organisation raciste et fasciste. Ils ne se soucient pas des êtres humains <BR/>
J'essaie aussi de rechercher des personnes, mais c'est très difficile. <BR>
Utilisez cette page pour lancer une recherche: <BR/>
<STRONG> <A href="detention.html"> PAGE DE RECHERCHE </A> </STRONG>
`
    ]
  },
  "qMutualAid": {
    "am": [
      `
      ለምንድን ነው ይህን ድር ጣቢያ የምሆነው?
      `,
      `
  ምክንያቱም እኔ በ <A href="https://en.wikipedia.org/wiki/Mutual_aid_(organization_theory)" target="_blank"> የጋራ መተባበር </A> የሚያምን ሰው ነኝ.
  `
    ],
    "en": [
      `
      Why do I make this website? 
      `, `
 Because I'm an anarchist, who believes in <A href="https://en.wikipedia.org/wiki/Mutual_aid_(organization_theory)" target="_blank"> mutual aid </A>
`
    ],
    "ar": [
      `
       لماذا أقوم بإنشاء هذا الموقع؟
       `, `      
        لأنني فوضوي ، أؤمن <A href="https://en.wikipedia.org/wiki/Mutual_aid_(organization_theory)" target="_blank"> بالمساعدة المتبادلة </A>
`
    ],
    "ru": [
      `Почему я делаю этот сайт? `,
      `
  Потому что я анархист, который верит в <A href="https://ru.wikipedia.org/wiki/%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C" target="_blank"> взаимную помощь </A>
`
    ],
    "ht": [
      `Poukisa mwen fè sit entènèt sa a? `,
      `
  Paske mwen se yon anarchist, ki moun ki mete konfyans yo nan <A href="https://es.wikipedia.org/wiki/Apoyo_mutuo" target="_blank"> sipò mityèl </A><BR/>
<h2>MEN ANPIL CHAY PA LOU</h2>
`
    ],
    "fr": [
      `Pourquoi est-ce que je crée ce site? `,
      `
  Parce que je suis un anarchiste, je crois au <A href="https://fr.wikipedia.org/wiki/Entraide_(%C3%A9conomie_politique)" target="_blank"> l'entraide </A>.
`
    ]
  },
};

var QUESTION_DEFAULTS = {
  "qWhatList": [
    "¿Que es la lista?",
    "La lista es un sistema inmoral y racista que los Estados Unidos utilizan para limitar el numero de personas que pueden ingresar al pais."
  ],
  "qHowList": [
    `¿Cómo funciona la lista?`,
    `Usted va a Chaparral desde las 7 de la mañana hasta las 9 de la mañana para obtener un número <BR/>
Esperas tu numero <BR/>
Cuando se llama su número, puede ir al otro lado`
  ],
  "qWaitTime": [
    `¿Cuánto tiempo tendré que esperar?`,
    `Mucho ¿Un mes? ¿Dos meses? ¿Tres? `
  ],
  "qQuantity": [
    `¿Cuántos números se llaman cada día?`,
    `Es diferente cada día. Algunos días mucho. Algunos días un poco. Algunos dias ninguno`
  ],
  "qCrossing": [
    `¿Qué pasará después de que cruce al otro lado?`,
    `Las autoridades estadounidenses lo interrogarán sobre su caso de asilo. Esto se llama "La entrevista de miedo creíble" <BR/>
Es posible que te pongan en un centro de detención`
  ],
  "qWhatAsylum": [
    `Que es asilo?`,
    `El Derecho de asilo es un derecho internacional de los derechos humanos, que puede disfrutar cualquier
    persona fuera de su pais de origen en caso de persecucion (<A href="https://es.wikipedia.org/wiki/Derecho_de_asilo">Wikipedia</A>)`
  ],
  "qCFI": [
    `¿Qué es la "Entrevista de miedo creíble?" `,
    `Las autoridades estadounidenses le preguntarán:" Bueno, señor, ¿por qué quiere ingresar a la
¿Estados Unidos? ¿Por qué no puedes quedarte en tu propio país? ¿Cuál es tu miedo? <BR/>
  En esta entrevista, debe explicar que tiene miedo de regresar a su país. Este miedo es real. Este miedo es creíble.`],
  "qMano": [
    `¿Cuáles son las partes importantes de la entrevista?
¿QUE pasó? <BR/>
¿QUIEN lo hizo? <BR/>
¿POR QUE lo hizo? <BR/>
¿Fuiste a la POLICIA? <BR/>
¿Hay OTRA PARTE de tu país donde puedas vivir? `
  ],
  "qPostCFI": [
    `¿Qué pasará si todo va bien con mi entrevista?`,
    `Hay varias posibilidades <BR/>
Todos entran en la detención de <EM> Aduanas y Patrulla Fronteriza de los Estados Unidos </EM>. Esto se llama <STRONG> la
enfriador </STRONG> <BR/>
Después de eso hay dos posibilidades en la mayoría de los casos.
<UL>
<LI> En la mayoría de los casos, las familias con hijos menores de edad son liberadas </LI>
<LI> En la mayoría de los casos, los demás están detenidos por <EM> Inmigración y aduanas de EE. UU.
Cumplimiento </EM> </LI>
</UL> `
  ],
  "qWhatHielera": [
    `Que es <STRONG>la hielera</STRONG> de <EM>US Customs and Border Patrol?</EM>`,
    `La hielera es muy feo. <BR/>
    Es un carcel. <BR/>
    Una descripcion:
<BLOCKQUOTE>
  Es un lugar frio en el que no puedes dormir porque la luz esta encendida 24 horas durante el tiempo que
  estes en dentencion perderas la nocion del tiempo, hay una habitacion que en teoria es donde las
  personas reciben la comida, la comida es horrible, esta fria. <BR/>
  Duermes (intentas dormir) en el suelo o en las bancas metalicas donde dificilmente alguien puede dormir.<BR/>
  Debes beber agua reciclada de los sanitarios que es perjudicial para el estomago.<BR/>
  Cuando utilizas los banos tienes que hacerlo frente a los demas. <BR/>
  Ademas en cada celda tienen alrededor de 10 a 15 personas como maximo. Eso en un espacio pequeno como en
  4 metros de largo por 3 metros de hancho.
</BLOCKQUOTE>`
  ],
  "qWhatDetencion": [
    `Que es la detencion de <EM>US Immigration and Customs Enforcement</EM>`,
    `Es una prision. Es muy feo. Estoy consiguiendo descripciones ...`,
  ],
  "qDetencionPrep": [
    `How can I prepare for the cooler and the detention?`,
    `Write the phone numbers and addresses and all the important things about your arm <BR/>
             Write it with a SHARPIE pen. It is very easy to wash a normal pen from your body.`
  ],
  "qMyContact": [
    `No tengo ningún número ni dirección. ¿A quién puedo llamar o escribir para pedir ayuda cuando estoy detenido? `,
    `<h2> Yo </h2> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<Address>
Mitchell Verter <BR/>
654 East San Ysidro Blvd <BR/>
PMB 187 <BR/>
San Ysidro, CA 92173
</address>
<BR/>
Escríbelo con un bolígrafo SHARPIE. Es muy fácil lavar una pluma normal de tu cuerpo.
`
  ],
  "qLeviticus": [
    `¿Qué piensa la Biblia sobre este proceso? `,
    `<BLOCKQUOTE>
    Cuando un extranjero vive contigo en tu tierra, no debes oprimirlo. <BR/>
    Debe considerar al extranjero que vive con usted como el nativo entre ustedes. Debes amarlo como a ti mismo, porque eras extranjero en la tierra de Egipto.
  </BLOCKQUOTE>
  <cite> Leviticus 19: 33-34 </cite>
  `
  ],
  "qACAB": [
    `Que piensan los anarquistas sobre todo esta proceso?`,
    `
         <BLOCKQUOTE>
 Esto es ya mas que suficiente para una revolucion social de caracter economico y antiautoritario; pero
 hay mas. En Mexico viven unos cuatro millones de indios, que hasta hace veinte o veinticinco anos vivian
 en comunidades, poseyendo en comun las tierras, las aguas y los bosques. El apoyo mutuo era la regla en
 esas comunidades, en las que la Autoridad solo era sentida cuando el agente de la recaudacion de rentas
 hacia su aparicion periodica o cuando los rurales llegaban en busca de varones para hacerlos ingresar
 por la fuerza al Ejercito. En estas comunidades no habia jueces, ni alcaldes, ni carceleros, ni ninguna
 polilla de esa clase. Todos tenian derecho a la tierra, al agua para los regadios, al bosque para la
 lena y a la madera para construir los jacales. Los arados andaban de mano en mano, asi como las yuntas
 de bueyes. Cada familia labraba la extension de terreno que calculaba ser suficiente para producir lo
 necesario, y el trabajo de escarda y de levantar las cosechas se hacia en comun, reuniendose toda la
 comunidad, hoy, para levantar la cosecha de Pedro, manana para levantar la de Juan y asi sucesivamente.
 Para fabricar un jacal, ponian manos a la obra todos los miembros de la comunidad.
            </BLOCKQUOTE>
            <cite>
<A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
 Ricardo Flores Magon, <EM>El pueblo mexicano es apto para el anarchocomunismo</EM> <BR/>
 Regeneracion, num. 53, septiembre 2, 1911.
</A>
            </cite>
`
  ],
  "qBusquedas": [
    `
Mi amigo o familiar ya cruzó a los Estados Unidos. ¿Dónde está ella ahora?
`,
    `
Posiblemente, ella está detenida en los Estados Unidos <BR/>
Justo después de que una persona cruza la frontera entran en la hielera. Se quedan allí hasta dos semanas. No hay manera de obtener información sobre ellos. <BR />

Después de esto, podrían ir a la detención de ICE <BR/>
Aquí está la página oficial para buscarlos: <BR/>
<A href="https://locator.ice.gov/odls"> Sistema de localización de detenidos en línea - ICE </A> <BR/>
Es muy difícil de usar. ICE es una organización racista, fascista. No les importan los seres humanos <BR/>
Estoy tratando de buscar personas también, pero es muy difícil <BR>
Por favor, use esta página para iniciar una búsqueda: <BR/>
<STRONG> <A href="detention.html"> BUSCAR PÁGINA </A> </STRONG>
`
  ],
  "qMutualAid": [
    `¿Por qué hago este sitio web? `,
    `
  Porque soy un anarquista, que cree en <A href="https://es.wikipedia.org/wiki/Apoyo_mutuo" target="_blank"> apoyo mutuo </A>
`
  ]
};

function hoy(language) {
  switch (language) {
    case "en":
      return "today";
    case "es":
      return "hoy";
    case "ht":
      return "jodi a";
    case "fr":
      return "aujourd'hui";
    default:
      return "hoy";
  }
}

function ayer(language) {
  switch (language) {
    case "en":
      return "yesterday";
    case "es":
      return "ayer";
    case "fr":
      return "aujourd'hui";
    case "ht":
      return "ye";
    default:
      return "ayer";
  }
}

function xDaysAgo(language, x) {
  switch (language) {
    case "en":
      return "yesterday";
    case "es":
      return "ayer";
    case "fr":
      return "aujourd'hui";
    case "ht":
      return "ye";
    default:
      return "ayer";
  }
}
function divToInternational(divName, language) {
  document.getElementById(divName).innerHTML =
    DIVS_TO_INTERNATIONAL[divName][language] ||
    DIV_DEFAULTS[divName];
}
function questionToInternational(questionName, language) {
  var divElement = document.getElementById(questionName);
  var qAndA = QUESTIONS_TO_INTERNATIONAL[questionName][language];
  if (!qAndA || qAndA.length < 2) {
    qAndA = QUESTION_DEFAULTS[questionName];
  }
  divElement.getElementsByTagName("dt")[0].innerHTML = qAndA[0];
  divElement.getElementsByTagName("dd")[0].innerHTML = qAndA[1];
}
