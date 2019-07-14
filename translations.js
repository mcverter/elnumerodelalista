const DIV_DEFAULTS = {
  "mas-informacion": "MAS INFORMACION",
  "sobre": "SOBRE",
  "el-numero-es": "EL NUMERO ES",
  "el-numero-de-la-lista": "EL NUMERO DE LA LISTA",
  "language-picker-label" : "CAMBIA EL IDIOMA &nbsp;",
  "dont-bug-me": "Por favor, no llamame. Solo mandame mensajes de texto.",
  "disclaimer":
  `
         <h3> NOTICIA LEGAL </H3>
            No estoy afiliado con ningun gobierno.<br/>
            No estoy afiliado con ningun ONG tampoco. <br/>
            Asi es un proyecto independiente y el creador tomo toda responsabilidad por eso.
            <br/>
  `,
};

const DIVS_TO_INTERNATIONAL = {
  "mas-informacion": {
    "am": "ተጨማሪ መረጃ",
    "en": "MORE INFORMATION",
    "ar": "معلومات اكثر",
    "ru": "ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ",
    "fr": "PLUS D'INFORMATION",
    "ht": "PLIS ENFOMASYON",
  },
  "sobre": {
    "en": "ON",
    "fr": "SUR",
    "ht": "SOU",
    "am": "በርቷል",
    "ar": "على",
    "ru": "НА",
  },
  "el-numero-es": {
    "en": "THE NUMBER IS",
    "fr": "LE NOMBRE EST",
    "ht": "NIMEWO A SE",
    "am": "ቁጥር ነው",
    "ar": "الرقم هو",
    "ru": "НОМЕР ЕСТЬ",
  }, 
  "el-numero-de-la-lista": {
    "en": "THE LIST NUMBER",
    "fr": "LE NOMBRE DE LA LISTE",
    "ht": "NIMEWO LIS LA",
    "am": "የዝርዝር ዝርዝር",
    "ar": "رقم القائمة",
    "ru": "СПИСОК НОМЕР",
  },
  "language-picker-label": {
    "am": "ቋንቋውን ቀይር",
    "en": "CHANGE LANGUAGE",
    "ar": "غير اللغة",
    "ru": "ИЗМЕНИТЬ ЯЗЫК",
    "fr": "CHANGER DE LANGUE",
    "ht": "CHANJE LANG",
  },
  "dont-bug-me": {
    "am": "እባክዎን አይደውኙኝ. የጽሑፍ መልዕክቶችን ብቻ ላክልኝ",
    "en": "Please do not call me.  Only send me text messages",
    "ar": "من فضلك لا تتصل بي. فقط أرسل لي رسائل نصية",
    "ru": "Пожалуйста, не звоните мне. Отправляйте мне только текстовые сообщения",
    "fr": "S'il vous plaît ne m'appelez pas. Envoyez-moi seulement des SMS",
    "ht": "Tanpri, pa rele m '. Se sèlman voye m 'mesaj tèks",
  },
  "disclaimer" : {
    "am": `
    <h3> የህግ ማሳሰቢያ </H3>
ከማንም መንግስት ጋር አልተገናኘሁም. <br/>
ከማንኛውም መንግስታዊ ያልሆነ ድርጅት ጋር አልተገናኘሁም. <br/>
ይህ ገለልተኛ የሆነ ፕሮጀክት እና ፈጣሪ ለዛ ኃላፊነት በሙሉ ይወስዳል.
<br/>
    `,
    "en": `
    <h3> LEGAL NOTICE </H3>
             I am not affiliated with any government. <br/>
             I am not affiliated with any NGO either. <br/>
             This is an independent project and the creator takes all responsibility for that.
             <br/>
    `,
    "ar": `
    <h3> إشعار قانوني </H3>
أنا لا أنتمي لأي حكومة. <BR/>
أنا لست مرتبطًا بأي منظمة غير حكومية. <BR/>
هذا مشروع مستقل ويتحمل المبدع كل المسؤولية عن ذلك.
<BR/>
    `,
    "ru": `
    <h3> ЮРИДИЧЕСКОЕ УВЕДОМЛЕНИЕ </h3>
Я не связан ни с одним правительством. <br/>
Я также не связан ни с одной НПО. <br/>
Это независимый проект, и создатель берет на себя всю ответственность за это.
<br/>
    `,
    "fr": `
    <h3> MENTIONS LÉGALES </h3>
Je ne suis affilié à aucun gouvernement. <br/>
Je ne suis affilié à aucune ONG non plus. <br/>
C'est un projet indépendant et le créateur en assume l'entière responsabilité.
<br/>
    `,
    "ht": `
    <H3> AVI LEGAL </h3>
Mwen pa afilye ak okenn gouvènman. <br/>
Mwen pa afilye ak okenn ONG swa. <br/>
Sa a se yon pwojè endepandan epi kreyatè a pran tout responsablite pou sa.
<br/>
    `,
  }
};

const QUESTIONS_TO_INTERNATIONAL = {
  "qWhySoSlow": {
    "en": [`
    Why is the list moving so slowly now?
    `,`
    I don't know.  In the end, the movement of the list is determined by the US Government.  They determine how many people can enter the Port of Entry each day.  I would guess that there is some problem there: they are unable to take in people. Maybe Trump did something?  Maybe the Attorney General Did Something? Maybe the detention centers are too full?  Maybe the protests against the horrible conditions is slowing things down?
<br />
   This is what a journalist wrote to me on July 10, 2019: 
<blockquote>
                Border Patrol said that because ICE detention is out of space and funding, single adults are spending 300 hours in custody before transfer.  That's more than 12 days.  He wasn't speaking about CBP facilities but they transfer to the same places/agency. (Because parole of single adults basically stopped in January 2017 per executive order.)
</blockquote>
    `],
    "am": [
      `
     ለምንድን ነው ዝርዝሩ በዝግታ እየተጓዘ ያለው?
     `, `
      እኔ አላውቅም. በመጨረሻም የዝርዝሩ እንቅስቃሴ የሚወሰነው በአሜሪካ መንግሥት ነው. በየቀኑ ምን ያህል ሰዎች ወደ መግቢያ መግቢያ ምን ያህል ሰዎች መግባት እንደሚችሉ ይወስናሉ. እዚያ ውስጥ ችግር እንዳለ እገምታለሁ; ለሰዎች ለመውሰድ አይችሉም. ምናልባት ክርፕስ አንድ ነገር ሰርጎ ሊሆን ይችላል? ምናልባት የጠበቃው ጠቅላይ ፍርድ ቤት የእስር ማቆያ ማዕከሎች በጣም ብዙ ናቸው? ምናልባት አስከፊ ከሆነው ሁኔታ ጋር የሚደረገው ተቃውሞ ነገሮችን ማቅለል ሊሆን ይችላል?
<br />
    ይህ ጋዜጠኛ ሐምሌ 10 ቀን 2019 ለእኔ የጻፈኝ ነው.
<blockquote>
                 የጠረፍ ፖሊስ እንደገለጹት የቃለ መጠይቅ ክፍተት ከቦታ እና የገንዘብ ድጋፍ ስለማይኖር ነጠላ አዋቂዎች ከማስተላለፉ በፊት 300 ሰዓታት በእስር እንደሚቆዩ ነው. ይሄ ከ 12 ቀናት በላይ ነው. እርሱ ስለ CBP መገልገያዎች እያወራ አልነበረም ነገር ግን ወደ ተመሳሳይ ቦታዎች / ኤጀንሲዎች ይዛወራሉ. (ምክንያቱም በአንዳንድ የአዋቂዎች ቃል ተፈርዶ መሰረት በመሰረቱ በአስተዳደር ስራ አመራር ጃንዋሪ 2017 መሰረት አቁሟቸዋል.)
</blockquote>
  `
    ],
    "pt": [
    `
     Por que a lista está se movendo tão devagar agora?
     `,`
     Eu não sei. No final, o movimento da lista é determinado pelo governo dos EUA. Eles determinam quantas pessoas podem entrar no Porto de Entrada todos os dias. Eu acho que há algum problema lá: eles são incapazes de absorver as pessoas. Talvez o Trump tenha feito alguma coisa? Talvez o procurador-geral tenha feito alguma coisa? Talvez os centros de detenção estejam cheios demais? Talvez os protestos contra as condições horríveis estejam atrasando as coisas?
<br />
    Isso é o que um jornalista escreveu para mim em 10 de julho de 2019:
<blockquote>
                 A Patrulha de Fronteira disse que, como a detenção do ICE está sem espaço e financiamento, os adultos solteiros estão passando 300 horas sob custódia antes da transferência. Isso é mais que 12 dias. Ele não estava falando sobre as instalações do CBP, mas elas se transferem para os mesmos lugares / agências. (Porque a liberdade condicional de adultos solteiros parou basicamente em janeiro de 2017 por ordem executiva).
</blockquote>
     `
    ],
    "bn": [
    `
     কেন তালিকা এত ধীরে ধীরে এখন চলন্ত?
     `,`
     আমি জানি না। শেষ পর্যন্ত, তালিকার আন্দোলন মার্কিন সরকার দ্বারা নির্ধারিত হয়। তারা নির্ধারণ করে যে প্রতিদিন কত জন প্রবেশপথ প্রবেশ করতে পারে। আমি অনুমান করবো যে সেখানে কিছু সমস্যা রয়েছে: তারা জনগণকে নিতে পারে না। হয়তো ট্রাম্প কিছু করেছে? হয়তো অ্যাটর্নি জেনারেল কি কিছু করেছিলেন? হয়তো আটক কেন্দ্রগুলো কি খুব পূর্ণ? হয়তো ভয়ঙ্কর অবস্থার বিরুদ্ধে বিক্ষোভের গতি কমে যাচ্ছে?
<br />
    10 জুলাই, ২019 তারিখে একজন সাংবাদিক আমাকে লিখেছিলেন:
<blockquote>
                 বর্ডার প্যাট্রোল বলেছে যে আইসিই আটক স্থান এবং তহবিলের বাইরে, একক প্রাপ্তবয়স্করা হস্তান্তর করার আগে 300 ঘন্টা হেফাজতে ব্যয় করে। যে 12 দিন বেশী। তিনি সিবিপি সুবিধা সম্পর্কে কথা বলছিলেন না তবে তারা একই স্থান / সংস্থায় স্থানান্তর করেন। (কারন একক প্রাপ্তবয়স্কদের প্যারোল মূলত ২017 সালের জানুয়ারী মাসে নির্বাহী আদেশে বন্ধ হয়ে গেছে।)
</blockquote>
     `
    ],
    "zh": [
    `
     为什么列表现在移动得这么慢？
    `,`
     我不知道。 最后，名单的移动由美国政府决定。 他们确定每天有多少人可以进入入境港。 我猜那里有一些问题：他们无法接纳人。 也许特朗普做了什么？ 也许司法部长做了什么？ 也许拘留中心太满了？ 也许针对恶劣条件的抗议活动正在减缓事态的发展？
<br />
    这是记者在2019年7月10日写给我的内容：
<BLOCKQUOTE>
                 边境巡逻队表示，由于ICE拘留的空间和资金不足，单身成年人在转移前会被拘留300个小时。 那是超过12天。 他不是在谈论CBP设施，而是转移到相同的地方/机构。 （因为每个行政命令，单身成人的假释基本上在2017年1月停止了。）
</BLOCKQUOTE>
    `
    ],
    "ha": [
    `
     Me ya sa jerin ke motsi sosai a hankali a yanzu?
     `,`
     Ban sani ba. A ƙarshe, Gwamnatin Amirka ta ƙaddamar motsi na lissafi. Sun ƙayyade yawancin mutane zasu iya shigar da Port of Entry kowace rana. Ina tsammani akwai matsala a can: ba su iya daukar mutane. Wata kila Trump ya yi wani abu? Wata kila Babban Babban Shari'a Kome Kashi? Wataƙila wuraren cibiyoyin sun cika? Watakila boren da ake yi a kan mummunan yanayi yana rage abubuwa?
<br />
    Wannan shine abin da jarida ya rubuta a ran 10 ga Yuli, 2019:
<blockquote>
                 Ma'aikatar Border ta bayyana cewa, saboda tsarewar na ICE ba shi da sararin samaniya da kuma kudade, masu balagaggu suna ciyar da awa 300 a tsare kafin a canja wurin. Wannan ya wuce kwanaki 12. Bai magana game da wuraren CBP ba, amma sun canja wuri a wurin. (Domin maganganun mazan aure ya tsaya a watan Janairu 2017 ta kowane tsari.)
</blockquote>
     `
],
    "sw": [
    `
     Kwa nini orodha hiyo inaendelea polepole sasa?
     `, `
     Sijui. Mwishoni, harakati ya orodha hiyo imedhamiriwa na Serikali ya Marekani. Wao huamua jinsi watu wengi wanaweza kuingia kwenye Bandari ya Kuingia kila siku. Napenda nadhani kuwa kuna tatizo fulani pale: hawawezi kuchukua watu. Labda Trump alifanya kitu? Labda Mwanasheria Mkuu Alifanya Kitu? Labda vituo vya kufungwa ni kamili sana? Labda maandamano dhidi ya hali mbaya hupungua mambo?
<br />
    Hii ni nini mwandishi wa habari aliandika kwangu Julai 10, 2019:
<blockquote>
                 Mpaka Patrol alisema kuwa kwa sababu kizuizini cha ICE hakikuwepo nafasi na fedha, watu wazima moja hutumia masaa 300 chini ya uhamisho kabla ya kuhamishwa. Hiyo ni zaidi ya siku 12. Hakuzungumza kuhusu vituo vya CBP lakini wao huhamishia mahali sawa / shirika. (Kwa sababu parole ya watu wazima moja kwa moja kimesimamishwa Januari 2017 kwa utaratibu mkuu.)
</blockquote>
     `
    ],
    "fa": [
    `
     چرا لیست در حال حرکت به آرامی در حال حاضر؟
     `,`
     من نمی دانم. در پایان، حرکت این فهرست توسط دولت ایالات متحده تعیین می شود. آنها تعیین می کنند که چه تعداد از مردم می توانند هر روز وارد بندر ورودی شوند. من حدس می زنم که مشکلی وجود دارد: آنها نمی توانند مردم را بگیرند. شاید Trump کاری انجام داد؟ شاید دادخواست کلیشه کرد؟ شاید بازداشتگاه ها بیش از حد پر است؟ شاید اعتراضات علیه شرایط وحشتناک، کارها را کند می کند؟
<br />
    این چیزی است که یک روزنامه نگار به من در 10 ژوئیه 2019 نوشت:
<blockquote>
                 گشت مرزی گفت که از آنجا که بازداشت ICE از فضای و بودجه نیست، تنها بزرگسالان قبل از انتقال به بازداشت 300 ساعت می رسند. این بیش از 12 روز است. او درباره امکانات CBP حرف نمی زد اما آنها به همان مکان ها / آژانس انتقال می دادند. (از آنجا که اموال افراد بزرگسال تنها اساسا در ژانویه 2017 در هر دستور اجرایی متوقف شد)
</blockquote>
     `
],
    "tr": [
    `
     Liste neden bu kadar yavaş ilerliyor?
     `,`
     Bilmiyorum. Sonunda, listenin hareketi ABD Hükümeti tarafından belirlenir. Her gün Giriş Limanı'na kaç kişinin girebileceğini belirlerler. Orada bir sorun olduğunu tahmin ediyorum: İnsanları alamıyorlar. Belki Trump bir şey yaptı? Belki Başsavcı Bir Şey Yaptı? Belki gözaltı merkezleri çok dolu? Belki de korkunç koşullara karşı protestolar işleri yavaşlatıyor?
<br>
    Bir gazetecinin 10 Temmuz 2019'da bana yazdığı şey buydu:
<Blockquote>
                 Sınır Devriyesi, ICE'nin gözaltına alınmasının alan ve finansman sağlamadığı için bekar yetişkinlerin transferden önce 300 saatini gözaltında geçirdiğini söyledi. Bu 12 günden fazla. CBP tesisleri hakkında konuşmuyor ama aynı yerlere / ajanslara transfer oluyorlar. (Çünkü bekar yetişkinlerin şartlı tahliyesi Ocak 2017'de icra emriyle temelde durdu.)
</Blockquote>
     `
],
    "uk": [
    `
     Чому зараз цей список так повільно рухається?
     `,`
     Не знаю. Зрештою, перелік списку визначається урядом США. Вони визначають, скільки людей може входити до порту щодня. Я думаю, що є певна проблема: вони не можуть взяти людей. Може, Трамп щось зробив? Можливо, Генеральний прокурор щось зробив? Можливо, центри затримання надто повні? Можливо, протести проти жахливих умов сповільнюють ситуацію?
<br>
    Це журналіст написав мені 10 липня 2019 року:
<blockquote>
                 Прикордонний патруль повідомив, що оскільки затримання ICE не має місця і фінансування, дорослі одинокі витрачають 300 годин під вартою до переведення. Це більше 12 днів. Він не говорив про CBP об'єкти, але вони переходять до тих самих місць / агентства. (Оскільки звільнення від дорослих дорослих в основному припинилося у січні 2017 року за виконавчим наказом.)
</blockquote>
     `
    ],
    "ar": [
    `
     لماذا تتحرك القائمة ببطء شديد الآن؟
     `,`
     لا أدري، لا أعرف. في النهاية ، يتم تحديد حركة القائمة من قبل حكومة الولايات المتحدة. وهي تحدد عدد الأشخاص الذين يمكنهم الدخول إلى ميناء الدخول كل يوم. أعتقد أن هناك بعض المشكلات هناك: فهم غير قادرين على استقبال الناس. ربما فعلت ترامب شيئا؟ ربما فعل النائب العام شيء؟ ربما مراكز الاحتجاز مليئة جدا؟ ربما الاحتجاجات ضد الظروف الرهيبة تبطئ الأمور؟
<BR>
    هذا ما كتبه لي صحفي في 10 يوليو 2019:
<blockquote>
                 قالت حرس الحدود أنه بسبب احتجاز ICE خارج الفضاء والتمويل ، يقضي البالغون 300 شخص في الحجز قبل النقل. هذا أكثر من 12 يومًا. لم يكن يتحدث عن مرافق CBP لكنهم ينتقلون إلى نفس الأماكن / الوكالة. (بسبب توقف الإفراج المشروط عن البالغين في الأساس في يناير 2017 لكل أمر تنفيذي.)
   </blockquote>
     `
],
    "ru": [
    `
     Почему список движется так медленно сейчас?
     `,`
     Я не знаю. В конце концов, движение по списку определяется правительством США. Они определяют, сколько людей могут заходить в порт въезда каждый день. Я предполагаю, что здесь есть какая-то проблема: они не могут принимать людей. Может быть, Трамп что-то сделал? Может быть, генеральный прокурор что-то сделал? Может быть, центры заключения слишком переполнены? Может быть, протесты против ужасных условий замедляют ход событий?
<br>
    Вот что журналист написал мне 10 июля 2019 года:
<BLOCKQUOTE>
                 Пограничный патруль сказал, что из-за нехватки места и финансирования ICE, одинокие взрослые проводят 300 часов в заключении до перевода. Это более 12 дней. Он не говорил об объектах CBP, но они переводят в те же места / агентства. (Потому что условно-досрочное освобождение взрослых не состоялось в январе 2017 года в соответствии с распоряжением.)
</BLOCKQUOTE>
  `
    ],
    "ht": [
    `
     Poukisa lis la ap deplase tèlman dousman kounye a?
     `,`
     M pa konnen. Nan fen a, se mouvman an nan lis la detèmine pa gouvènman ameriken an. Yo detèmine konbyen moun ki ka antre nan Pò a nan antre chak jou. Mwen ta devine ke gen kèk pwoblèm la: yo kapab pran nan moun. Petèt Trump te fè yon bagay? Petèt Pwokirè Jeneral la fè yon bagay? Petèt sant detansyon yo twò plen? Petèt manifestasyon yo kont kondisyon terib yo ralanti bagay sa yo desann?
<br>
    Se sa yon jounalis te ekri pou mwen sou 10 jiyè 2019:
<blockquote>
                 Patwouy Border te di ke paske detansyon ICE a soti nan espas ak finansman, granmoun sèl ap depanse 300 èdtan nan prizon anvan transfè. Sa se plis pase 12 jou. Li pa t 'pale sou enstalasyon CBP men yo transfere nan kote yo menm / ajans. (Paske libète pwovizwa granmoun nan yon sèl fondamantalman sispann nan mwa janvye 2017 pou chak lòd egzekitif la.)
</blockquote>
     `
    ],
    "fr": [
    `
     Pourquoi la liste se déplace si lentement maintenant?
     `,`
     Je ne sais pas. Finalement, le mouvement de la liste est déterminé par le gouvernement américain. Ils déterminent combien de personnes peuvent entrer dans le port d'entrée chaque jour. Je suppose qu’il ya un problème là-bas: ils ne peuvent pas accueillir de personnes. Peut-être que Trump a fait quelque chose? Peut-être que le procureur général a fait quelque chose? Peut-être que les centres de détention sont trop pleins? Peut-être que les manifestations contre les conditions horribles ralentissent les choses?
<br>
    Voici ce qu'un journaliste m'a écrit le 10 juillet 2019:
<blockquote>
                 La patrouille des frontières a déclaré que, comme la détention de l'ICE est insuffisante, les adultes célibataires passent 300 heures en détention avant leur transfert. C'est plus de 12 jours. Il ne parlait pas des installations du CBP mais celles-ci ont été transférées aux mêmes endroits / agences. (Parce que la libération conditionnelle d'adultes célibataires s'est essentiellement arrêtée en janvier 2017 par décret.)
</blockquote>
     `
    ],
  },
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
  "pt": [
    `
      Qual é a lista?
      `,`
      A lista é um sistema imoral e racista que os Estados Unidos usam para limitar o número de pessoas que podem entrar no país.
      `
      ],
    "bn": [
      `
      তালিকা কি?
      `,`
      এই তালিকাটি একটি অনৈতিক ও বর্ণবাদী ব্যবস্থা যা আমেরিকা দেশটিতে প্রবেশ করতে পারে এমন ব্যক্তিদের সংখ্যা সীমিত করতে ব্যবহার করে।
      `
    ],
  "zh": [
    `
      列表是什么？
      `, `
      该清单是一种不道德和种族主义的制度，美国用它来限制可以进入该国的人数。
      `
  ],
"ha": [
    `
      Mene ne jerin?
      `,`
      Jerin wannan tsari ne mai lalata da tsarin wariyar launin fata wanda {asar Amirka ke amfani da ita don iyakance yawan mutanen da za su shiga cikin} asa.
      `
  ],
  "sw": [
    `
      Orodha ni nini?
      `, `
      Orodha ni mfumo wa uasherati na ubaguzi ambao Marekani hutumia ili kupunguza idadi ya watu ambao wanaweza kuingia nchini.
      `
  ],
    "fa": [
      `
      لیست چیست؟
      `,`
      این فهرست یک سیستم غیر اخلاقی و نژادپرستانه است که ایالات متحده از آن برای محدود کردن تعداد افرادی که می توانند وارد کشور شوند استفاده می کنند.
      `
    ],
   "tr": [
      `
      Liste nedir?
      `,`
      Liste, Amerika Birleşik Devletleri'nin ülkeye girebilecek kişi sayısını sınırlamak için kullandığı ahlaki ve ırkçı bir sistemdir.
      `
    ],
    "uk": [
      `
      Що таке список?
      `,`
      Цей список є аморальною і расистською системою, яку Сполучені Штати використовують для обмеження кількості людей, які можуть в'їхати в країну.
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
        "pt": [
    `
      Como a lista funciona?
      `,`
Você vai para o chaparral das 7 da manhã até as 9 da manhã para pegar um número <BR/>
Você espera pelo seu número <BR/>
Quando seu número é chamado, você pode ir para o outro lado
`
  ],


    "bn": [
      `
      কিভাবে তালিকা কাজ করে?
      `,`
সকাল সাড়ে 7 টা থেকে সকাল 9 টা পর্যন্ত চ্যাপারাল যান এবং নম্বর পেতে <BR/>
আপনি আপনার নম্বর <BR/> জন্য অপেক্ষা করুন
যখন আপনার নাম বলা হয়, আপনি অন্য দিকে যেতে পারেন
`
    ],
"ha": [
    `
      Ta yaya jerin ke aiki?
      `,`
Kuna tafiya zuwa kaso daga 7 na safe har zuwa 9 na safe don samun lamba <BR/>
Kuna jiran lambarku <BR/>
Lokacin da aka kira lambarka, za ka iya zuwa wancan gefe
`
  ],
  "zh": [
    `
      该清单如何运作？
      `, `
你从早上7点到早上9点去丛林，得到一个数字<BR/>
你等待你的号码<BR/>
拨打电话号码后，您可以转到另一侧
`
  ],
  "sw": [
    `
      Orodha hiyo inafanya kazi?
      `,`
Unakwenda kwenye mkutano kutoka 7 asubuhi mpaka 9 asubuhi ili kupata namba <BR/>
Unasubiri nambari yako <BR/>
Wakati nambari yako inaitwa, unaweza kwenda upande mwingine
`
  ],
    "fa": [
      `
      لیست چگونه کار می کند؟
      `,`
شما می توانید از ساعت 7 صبح تا 9 صبح به ساعت رسمی بروید تا شماره <BR/> دریافت کنید
شما برای تعداد شما صبر کنید <BR/>
هنگامی که شماره شما نامیده می شود، می توانید به طرف دیگر بروید
`
    ],
     "tr": [
      `
      Liste nasıl çalışır?
      `,`
Bir numara almak için sabah 7'den sabah 9'a kadar chaparral'a gidersin <BR/>
Numaranızı bekliyorsunuz <BR/>
Numaranız arandığında, diğer tarafa gidebilirsiniz.
`
    ],
    "uk": [
      `
      Як працює список?
      `,`
Ви йдете в чапарал з 7 ранку до 9 ранку, щоб отримати номер <BR/>
Ви чекаєте свого номера <BR/>
Коли ваш номер викликається, ви можете перейти на іншу сторону
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
	        
  "pt": [
  `
    Quanto tempo tenho que esperar?
      `,`
      Muito. Um mês? Dois meses? Três?
      `
  ],
    "bn": [
      `
      আমার কতক্ষণ অপেক্ষা করতে হবে?
        `,`
        অনেক. এক মাস? দুই মাস? তিন?
        `
    ],
      
  "zh": [
    `
    “我需要等多少时间？
      `, `
      很多。一个月？两个月？三？
      `
  ],

  "ha": [
    `Nawa lokaci zan jira?
      ` , `
      Mai yawa. Wata wata? Watanni biyu? Uku?
      `
  ],
  "sw": [
    `Ni lazima nisubiri muda gani?
      `, `
      Mengi. Mwezi mmoja? Miezi miwili? Tatu?
      `
  ],
    "fa": [
      `چقدر وقت باید صبر کنم؟
      `,`
      زیاد. یک ماه؟ دو ماه؟ سه؟
      `
    ],
    "uk": [
      `Скільки часу я повинен чекати?
      `,`
      Багато. Один місяць? Два місяці? Три?
      `
    ],

    "tr": [
      `Ne kadar zaman beklemeliyim?
      `,`
      Çok. Bir ay? İki ay? Üç?
      `
    ],


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
	  
  "pt": [
    `
      Quantos números são chamados a cada dia?
      `,`
      É diferente a cada dia. Alguns dias muito. Alguns dias um pouco. Alguns dias nenhum
      `
  ],

    "bn": [
      `
        কত নম্বর প্রতিটি দিন বলা হয়?
        `,`
        এটা প্রতিদিন ভিন্ন। কিছু দিন অনেক। কিছু দিন একটু। কিছু দিন কেউ নেই
  `
    ],
      
  "zh": [
    `
      每天拨打多少个号码？
      `,`
      它每天都不同。有些日子很多。有一天一点点。有些日子没有
      `
  ],

  "ha": [
    `
      Lambobi nawa ne ake kira kowace rana?
      `,`
      Ya bambanta kowace rana. Wasu kwanaki mai yawa. Wasu kwanaki kadan. Wasu kwanakin babu
      `
  ],

  "sw": [
    `
      Nambari ngapi zinaitwa kila siku?
      `, `
      Ni tofauti kila siku. Siku kadhaa mengi. Siku kadhaa kidogo. Siku kadhaa hakuna
      `
      ],
    "tr": [
      `
      Her gün kaç numara aranır?
      `,`
      Her gün farklı. Bazı günler çok fazla. Bazı günler biraz. Bazı günler hiçbiri
      `
    ],
      
    "fa": [
      `
      چند شماره هر روز نامیده می شود؟
      `,`
      هر روز متفاوت است. چند روز زیاد است چند روز کمی. چند روز هیچ
      `
    ],

    "uk": [
      `
      Скільки номерів називається щодня?
      `,`
      Різниця щодня. Кілька днів багато. Кілька днів. Кілька днів немає
      `
    ],


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
	    "pt": [
    `
      O que acontecerá depois que eu cruzar para o outro lado?
      `,`
As autoridades americanas irão interrogá-lo sobre o seu caso de asilo. Isso é chamado de "The Credible Fear Interview" <BR/>
É possível que você seja colocado em um centro de detenção
`
  ],

    "bn": [
      `
আমি কি পার্শ্ব পার হয়ে যাব?
  `,`
  আমেরিকান কর্তৃপক্ষ আপনার আশ্রয়ের মামলা সম্পর্কে আপনাকে জিজ্ঞাসাবাদ করবে। এটি "বিশ্বাসযোগ্য ভয় সাক্ষাত্কার" বলা হয় <BR/>
এটা সম্ভব যে আপনি একটি আটক সুবিধা করা হবে
  `
    ],

  "zh": [
    `
      我穿过另一边后会发生什么？
      `,`
美国当局将审问您的庇护案件。这被称为“可靠的恐惧访谈”<BR/>
您可能会被关押在拘留所
`
  ],
    "tr": [
      `
      Diğer tarafa geçtikten sonra ne olacak?
      `,`
Amerikan makamları sizi iltica davası hakkında sorgulayacaktır. Buna "İnanılmaz Korku Röportajı" deniyor <BR/>
Bir gözaltı merkezine koymanız mümkündür.
`
    ], 

  "ha": [
    `
      Menene zai faru bayan na haye zuwa wancan gefe?
      `,`
Hukumomin Amurka za su yi maka tambayoyi game da asibiti. Wannan ake kira "Interview Tsanani Na Farko" <BR/>
Zai yiwu za a saka ku a wurin tsare
`
  ],
  "sw": [
    `
      Nini kitatokea baada ya kuvuka kwa upande mwingine?
      `, `
Mamlaka ya Amerika atawahoji kuhusu kesi yako ya kukimbia. Hii inaitwa "Mahojiano ya Hofu ya Kuaminika" <BR/>
Inawezekana kwamba utawekwa kwenye kituo cha kizuizini
`
  ],
    "fa": [
      `
      چه اتفاقی می افتد بعد از عبور از طرف دیگر؟
      `,`
مقامات آمریکایی شما را در مورد پرونده پناهندگی شما مورد بازجویی قرار خواهند داد. این «مصاحبه ترس و تردید واقعی» نامیده می شود <BR/>
ممکن است که شما در بازداشتگاه قرار دهید
`
    ],

    "uk": [
      `
      Що станеться після того, як я перейду на іншу сторону?
      `,`
Американські власті будуть допитувати вас про вашу справу про надання притулку. Це називається "Довіра інтерв'ю страху" <BR/>
Можливо, ви потрапите в слідчий ізолятор
`
    ],

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
	        
        "pt": [
    `
      O que é asilo?
      `,`
O direito de asilo é um direito internacional dos direitos humanos, que pode ser desfrutado por qualquer
pessoa fora de seu país de origem em caso de perseguição (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> Wikipedia </A>)
`
  ],

    "bn": [
      `
আশ্রয় কি?
  `,`
  আশ্রয়ের অধিকার মানবাধিকারের আন্তর্জাতিক অধিকার, যা কোনও উপভোগ করতে পারে
নিপীড়নের ক্ষেত্রে তার দেশের মূল ব্যক্তির বাইরে (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> উইকিপিডিয়াএইচএটিএ)
`
    ],

  "zh": [
    `
      什么是庇护？
      `,`
庇护权是一项国际人权权利，任何人都可以享有
在受到迫害的情况下在原籍国以外的人（<A href="https://en.wikipedia.org/wiki/Right_of_asylum">维基百科</A>）
`
  ],
  "ha": [
    `
      Menene mafaka?
      `,`
Hakki na mafaka shi ne haƙƙin haƙƙin haƙƙin ɗan adam na kasa da kasa, wanda kowane abu zai iya jin dadin shi
mutum a waje da asalin asalinsa idan aka tsananta (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> Wikipedia </A>)
`
  ],
  "sw": [
    `
      Nini hifadhi?
      `, `
Haki ya hifadhi ni haki ya kimataifa ya haki za binadamu, ambayo inaweza kupendezwa na yoyote
mtu nje ya nchi yake ya asili wakati wa mateso (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> Wikipedia </A>)
`
  ],
    "fa": [
      `
      پناهندگی چیست؟
      `,`
حق پناهندگی حقوق بین الملل حقوق بشر است که می تواند توسط هر فردی مورد بهره برداری قرار گیرد
فرد خارج از کشور مبدا در مورد آزار و شکنجه (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> ویکی پدیا </A>)
`
    ],

         "tr": [
      `
      İltica nedir?
      `,`
İltica hakkı, herhangi bir kişinin yararlanabileceği uluslararası insan hakları hakkıdır.
zulüm durumunda menşei ülkesinin dışındaki kişi (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> Wikipedia </A>)
`
    ],
    "uk": [
      `
      Що таке притулок?
      `,`
Право притулку є міжнародним правом прав людини, яким може користуватися будь-який
за межами своєї країни походження у випадку переслідування (<A href="https://en.wikipedia.org/wiki/Right_of_asylum"> Вікіпедія
    `
    ],

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
	    "pt": [
    `
      O que é "The Credible Fear Interview?"
      `,`
As autoridades americanas vão lhe perguntar: "Bem, senhor, por que você quer entrar no
Estados Unidos? Por que você não pode ficar no seu próprio país? Qual é o seu medo? <BR/>
Nesta entrevista, você deve explicar que tem medo de voltar ao seu país. Esse medo é real. Esse medo é credível
`
  ],
      "bn": [
      `
"অবিশ্বাস্য ভয় সাক্ষাৎকার কি?
  `,`
আমেরিকান কর্তৃপক্ষ আপনাকে জিজ্ঞাসা করবে: "আচ্ছা স্যার, আপনি কেন প্রবেশ করতে চান
যুক্তরাষ্ট্র? কেন আপনি আপনার নিজের দেশে থাকতে পারে না? আপনার ভয় কি? <br/>
এই সাক্ষাত্কারে, আপনাকে ব্যাখ্যা করতে হবে যে আপনি আপনার দেশে ফিরে যাওয়ার জন্য ভীত। এই ভয় বাস্তব। এই ভয় বিশ্বাসযোগ্য
  `
      ],
        "uk": [
    `
          Що таке "Довіра інтерв'ю страху?"
          `,`
    Американська влада збирається запитати вас: «Ну, сер, чому ви хочете увійти до
    Сполучені Штати? Чому ви не можете залишитися у своїй країні? Який ваш страх? <BR/>
    У цьому інтерв'ю ви повинні пояснити, що ви боїтеся повернутися у свою країну. Цей страх реальний. Цей страх є надійним
    `
  ],

  "zh": [
    `
      什么是“可靠的恐惧访谈？
      `, `
美国当局会问你：“好吧，先生，你为什么要进入
美国？为什么你不能留在自己的国家？你害怕什么？ <BR/>
在这次采访中，你必须说明你害怕回到自己的国家。这种恐惧是真实的。这种担心是可信的
`
  ],
  "ha": [
    `
      Mene ne "Taron Tambaya Ta Musamman?
      `,`
Hukumomin Amirka za su tambaye ku: "To, sir, me yasa kuke so ku shiga
Amurka? Me yasa ba za ku iya zama a kasarku ba? Mene ne tsoronku? <BR/>
A cikin wannan hira, dole ne ka bayyana cewa kana jin tsoron komawa kasarka. Wannan tsoro shi ne ainihin. Wannan tsoro yana da gaskiya
`
  ],
  "sw": [
    `
      Ni nini "Hofu ya Kuaminika?
      `, `
Mamlaka ya Marekani wataenda kukuuliza: "Sawa, bwana, kwa nini unataka kuingia
Marekani? Kwa nini huwezi kukaa katika nchi yako mwenyewe? Hofu yako ni nini? <BR/>
Katika mahojiano haya, lazima ueleze kwamba unaogopa kurudi nchi yako. Hofu hii ni kweli. Hofu hii ni ya kuaminika
`
      ],
    "fa": [
      `
      مصاحبه "ترس و وفادار قابل اعتماد" چیست؟
      `,`
مقامات آمریکایی می خواهند از شما بپرسند: "خب، آقا، چرا می خواهید وارد شوید
ایالات متحده؟ چرا نمی توانید در کشور خود بمانید؟ ترس شما چیست؟ <BR/>
در این مصاحبه، شما باید توضیح دهید که می ترسید به کشور خود بازگردید. این ترس واقعی است این ترس اعتبار دارد
`
    ],
  "tr": [
  `
      "İnanılmaz Korku Röportajı" nedir?
      `,`
Amerikan makamları size soracaklar: "Peki efendim, neden girmek istiyorsun?
Amerika Birleşik Devletleri? Neden kendi ülkenizde kalamıyorsunuz? Korkun nedir? <BR/>
Bu röportajda ülkenize dönmekten korktuğunuzu açıklamalısınız. Bu korku gerçek. Bu korku güvenilir
`
],

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
	    "pt": [
    `
      Quais são as partes importantes da entrevista?
      `,`
O que aconteceu? <BR/>
Quem fez isso? <BR/>
Por que ele fez isso? <BR/>
Você foi à POLÍCIA? <BR/>
Existe outra parte do seu país onde você pode viver?
`
      ],
        "fa": [
      `
      بخش های مهم مصاحبه چیست؟
      `,`
چی شد؟ <BR/>
کی اینکار رو کرد؟ <BR/>
چرا او این کار را کرد؟ <BR/>
آیا شما به پلیس رفتید؟ <BR/>
آیا بخش دیگری از کشور شما وجود دارد که در آن شما می توانید زندگی کنید؟
`
    ],

    "bn": [
      `
ইন্টারভিউ গুরুত্বপূর্ণ অংশ কি কি
  `,`
কি হলো? <br/>
কে এটা করেছিল? <br/>
কেন সে এটা করেছিল? <br/>
আপনি কি পুলিশ যান? <br/>
আপনার দেশের অন্য অংশ কি আপনি বসবাস করতে পারেন?
  `
    ],
        "uk": [
    `
          Які важливі частини інтерв'ю
          `,`
    Що трапилось? <BR/>
    Хто це зробив? <BR/>
    Чому він це зробив? <BR/>
    Ви пішли до поліції? <BR/>
    Чи є інша частина вашої країни, де ви можете жити?
    `
  ],


  "zh": [
    `
      面试的重要部分是什么？
      `, `
发生了什么？ <BR/>
谁干的？ <BR/>
为什么他这样做？ <BR/>
你去警察局了吗？ <BR/>
您所在国家的另一部分是否可以居住？
`
  ],
  "ha": [
    `
      Mene ne muhimmin ɓangare na hira?
      `,`
Me ya faru? <BR/>
WHO ya yi hakan? <BR/>
Me ya sa ya yi haka? <BR/>
Shin, kun je POLICE? <BR/>
Shin akwai wani ɓangare na ƙasarku inda za ku zauna?
`
  ],
  "sw": [
    `
      Je, sehemu muhimu za mahojiano ni nini?
      `, `
Nini kimetokea? <BR/>
WHO alifanya hivyo? <BR/>
NINI alifanya hivyo? <BR/>
Ulikwenda POLICE? <BR/>
Je, kuna sehemu nyingine ya nchi yako ambapo unaweza kuishi?
`
  ],
  "tr": [
  `
      Röportajın önemli kısımları nelerdir?
      `,`
Ne oldu? <BR/>
Kim yaptı? <BR/>
Neden bunu yaptı? <BR/>
POLİS'e gittiniz mi? <BR/>
Ülkenizde yaşayabileceğiniz başka bir yer var mı?
`
],

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

	        
  "pt": [
    `
      O que vai acontecer se tudo correr bem com a minha entrevista?
      `,
    `
Existem várias possibilidades <BR/>
Todos vão para a detenção de <EM> Alfândega e Patrulha de Fronteira dos EUA </EM>. Isso é chamado de <STRONG>
    refrigerador </STRONG> <BR/>
Depois disso, existem duas possibilidades na maioria dos casos
<UL>
    <LI> Na maioria dos casos, famílias com filhos menores são liberadas </LI>
    <LI> Na maioria dos casos, os outros a uma detenção da <EM> Imigração e Alfândega dos EUA
        Execução </EM> </LI>
</UL>
`
  ],
    "bn": [
      `
  সবকিছু আমার সাক্ষাত্কারে ভাল যায় যদি কি হবে?
  `,
      `
  বিভিন্ন সম্ভাবনার <BR/> আছে
প্রত্যেকেরই <em> মার্কিন কাস্টমস এবং বর্ডার প্যাট্রোল </EM> আটকানো যায়। এই <strong> বলা হয়
শীতল </STRONG> <BR/>
তারপরে বেশিরভাগ ক্ষেত্রেই দুটি সম্ভাবনা রয়েছে
<Ul>
<LI> বেশিরভাগ ক্ষেত্রে, বাচ্চাদের বাচ্চাদের সাথে বাচ্চাদের মুক্তি দেওয়া হয় </LI>
<LI> বেশিরভাগ ক্ষেত্রে, অন্যরা <em> মার্কিন ইমিগ্রেশন এবং কাস্টমস আটকায়
প্রয়োগকারী </EM> </LI>
</Ul>
  `
    ],
  "uk": [
    `
          Що станеться, якщо з моїм інтерв'ю все буде добре?
          `,
    `
    Є кілька можливостей <BR/>
    Кожен піде на затримання митного <em> та прикордонного патруля США </EM>. Це називається <STRONG>
        кулер </STRONG> <BR/>
        Після цього в більшості випадків є дві можливості
        <UL>
            <LI> У більшості випадків сім'ї з дітьми, які є неповнолітніми, звільняються </LI>
            <LI> У більшості випадків інші затримання імміграції та митниці США <EM>
                Виконання </EM> </LI>
        </UL>
        `
  ],
          "fa": [
      `
      چه اتفاقی می افتد اگر همه چیز با مصاحبه من خوب باشد؟
      `,
      `
چندین امکان وجود دارد <BR/>
هر کس به بازداشت <EM> گمرک گمرک و مرزی ایالات متحده </EM> می رود این <strong> the
    کولر </strong> <BR/>
پس از آن دو مورد در بیشتر موارد وجود دارد
<UL>
    <LI> در بیشتر موارد، خانواده هایی با کودکان که سالم هستند آزاد می شوند </LI>
    <LI> در بیشتر موارد، دیگران به بازداشت <EM> مهاجرت و گمرک ایالات متحده
        اجرای </EM> </LI>
</UL>
`
    ],

  "zh": [
    `
      如果我的采访一切顺利，会发生什么？
      `,
      `
有几种可能性<BR/>
每个人都被拘留在<EM>美国海关和边境巡逻队</EM>。这称为<STRONG>
    冷却器</STRONG> <BR/>
之后，在大多数情况下有两种可能性
<UL>
    <LI>在大多数情况下，有孩子的未成年人家庭被释放</LI>
    <LI>在大多数情况下，其他人被拘留<EM>美国移民和海关
        执法</EM> </LI>
</UL>
`
  ],
  "sw": [
    `
      Nini kitatokea ikiwa kila kitu kinaendelea vizuri na mahojiano yangu?
      `,
    `
Kuna uwezekano wa <BR/>
Kila mtu huingia kizuizini cha <EM> Forodha ya Marekani na Mpaka Patron </EM>. Hii inaitwa <STRONG>
    baridi </STRONG> <BR/>
Baada ya hayo kuna uwezekano mawili katika kesi nyingi
<UL>
    <LI> Mara nyingi, familia na watoto ambao ni watoto hutolewa </LI>
    <LI> Mara nyingi, wengine kwa kizuizini cha <EM> Uhamiaji na Ushuru wa Marekani
        Utekelezaji </EM> </LI>
</UL>
`
  ],
  "tr": [
  `
      Röportajımda her şey yolunda giderse ne olacak?
      `,
  `
Birkaç olasılık var <BR/>
Herkes <EM> ABD Gümrükleri ve Sınır Devriyesi </EM> gözaltına alındı. Buna <STRONG> denir.
    soğutucu </STRONG> <BR/>
Bundan sonra çoğu durumda iki olasılık var
<Ul>
    <LI> Çoğu durumda, küçük çocukları olan aileler serbest bırakılır </LI>
    <LI> Çoğu durumda diğerleri <EM> ABD Göçmenlik ve Gümrük Gözaltına alındı
        Yürürlük </EM> </LI>
</Ul>
`
],
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
        "pt": [
    `
O que é <STRONG> o mais legal </STRONG> da <EM> Alfândega e Patrulha de Fronteira dos EUA? </EM>
`,`
O cooler é muito feio. <BR/>
É uma cadeia. <BR/>
Uma descrição:
<BLOCKQUOTE>
    É um lugar frio onde você não consegue dormir porque a luz está acesa 24 horas durante o tempo
    Intencionalmente, você perderá a noção de tempo, há uma sala que em teoria é onde
    as pessoas recebem comida, a comida é horrível, está fria. <BR/>
    Você dorme (tente dormir) no chão ou nos bancos de metal onde dificilmente alguém consegue dormir. <BR/>
    Você deve beber água reciclada de banheiros que é prejudicial ao seu estômago. <BR/>
    Quando você usa os banheiros, você tem que fazê-lo na frente dos outros. <BR/>
    Também em cada célula eles têm cerca de 10 a 15 pessoas no máximo. Isso em um pequeno espaço como em
    4 metros de comprimento por 3 metros de hancho.
</BLOCKQUOTE>
`
  ],

    "bn": [
      `
<em> মার্কিন কাস্টমস এবং বর্ডার প্যাট্রোল <strong> শীতল </STRONG> কী? </Em>
`,`
শীতল খুব কুশ্রী হয়। <br/>
এটা একটা কারাগার। <br/>
একটি বর্ণনা:
  <blockquote>
এটি একটি ঠান্ডা জায়গা যেখানে আপনি ঘুমাতে পারেন না কারণ আলোটি ২4 ঘন্টার মধ্যে থাকে
ইচ্ছাকৃতভাবে, আপনি সময় ধারণা হারাবেন, সেখানে একটি রুম আছে যা তত্ত্বের মধ্যে
মানুষ খাদ্য পায়, খাদ্য ভয়ঙ্কর, এটা ঠান্ডা। <br/>
আপনি ঘুমাতে বা ঘুমানোর জন্য মেটাল benches যেখানে ঘুমানোর (ঘুমানোর চেষ্টা)। <br/>
আপনি আপনার পেট ক্ষতিকারক যে টয়লেট থেকে পুনর্ব্যবহৃত পানি পান করতে হবে। <br/>
যখন আপনি বাথরুম ব্যবহার করেন তখন আপনাকে অন্যদের সামনে এটি করতে হবে। <br/>
এছাড়াও প্রতিটি কোষে তাদের প্রায় 10 থেকে 15 জন লোক থাকে। যে হিসাবে একটি ছোট স্থান
4 মিটার দীর্ঘ হানচো 3 মিটার।
</blockquote>
  `
    ],
  "uk": [
    `
        Що таке <STRONG> кулер </STRONG> митного та прикордонного патруля США? </EM>
    `,`
    Кулер дуже потворний. <BR/>
    Це в'язниця. <BR/>
    Опис:
    <BLOCKQUOTE>
        Це холодне місце, де ви не можете спати, тому що світло знаходиться на 24 години протягом часу
        Навмисно, ви втратите поняття часу, є кімната, де теоретично є
        люди отримують їжу, їжа жахлива, холодна. <BR/>
        Ви спите (намагайтеся спати) на підлозі або на металевих лавочках, де навряд чи хто-небудь може заснути. <BR/>
        Ви повинні пити відновлену воду з туалетів, що шкідливо для вашого шлунка. <BR/>
        Коли ви використовуєте ванні кімнати, ви повинні робити це перед іншими. <BR/>
        Крім того, у кожній камері не більше 10-15 осіб. Що в невеликому просторі, як в
        4 метри завдовжки на 3 метри hancho.
    </BLOCKQUOTE>
    `
  ],
      
            "fa": [
      `
<strong> cooler </strong> <EM> گمرک گمرک و مرزی ایالات متحده چیست؟ </EM>
`,`
کولر بسیار زشت است <BR/>
این یک زندان است <BR/>
یک شرح:
<BLOCKQUOTE>
    این یک محل سرد است که در آن شما نمی توانید بخوابید زیرا نور در طول زمان 24 ساعت است
    به لحاظ ذهنی، مفهوم زمان را از دست خواهید داد، اتاقی است که در نظریه جایی است
    مردم غذا می خورند، غذا وحشتناک است، سرد است. <BR/>
    شما خواب (سعی کنید در خواب) روی زمین یا روی نیمکت های فلزی که در آن به سختی کسی می تواند بخوابد خواب می رود. <BR/>
    شما باید آب بازیافت شده از توالت را که برای معده مضر است، بخورید. <BR/>
    هنگامی که از حمام استفاده می کنید باید آن را در مقابل دیگران انجام دهید. <BR/>
    همچنین در هر سلول، آنها بیشتر از 10 تا 15 نفر دارند. که در یک فضای کوچک به عنوان
    4 متر طول و 3 متر از هانچو.
</BLOCKQUOTE>
`
    ],

  "zh": [
    `
什么是<EM>美国海关和边境巡逻队的<STRONG>冷却器</STRONG>？ </EM>
`, `
冷却器非常难看。 <BR/>
这是一所监狱。 <BR/>
说明：
<BLOCKQUOTE>
    这是一个寒冷的地方，你无法入睡，因为在这段时间里光线是24小时
    故意，你会失去时间的概念，理论上有一个空间
    人们收到食物，食物很可怕，很冷。 <BR/>
    你在地板上或几乎没人能睡觉的金属长凳上睡觉（试着睡觉）。 <BR/>
    你必须从厕所里喝回收的水对你的胃有害。 <BR/>
    当您使用浴室时，您必须在其他人面前进行。 <BR/>
    同样在每个单元格中，他们最多只有10到15个人。那在一个狭小的空间里面
    4米长，3米长的hancho。
</BLOCKQUOTE>
`
  ],
  "ha": [
    `
Mene ne <strong> mai sanyaya </STRONG> na <EM> Kwamfuta na Kwastam da Border Amurka? </EM>
`,`
Mai sanyaya yana da mummunan aiki. <BR/>
Yana da kurkuku. <BR/>
A bayanin:
<BLOCKQUOTE>
    Yana da wuri mai sanyi inda ba za ku iya barci ba saboda hasken yana kan sa'o'i 24 a lokacin
    Da gangan, za ku rasa ra'ayi na lokaci, akwai dakin da ka'idar ke nan
    mutane suna samun abinci, abinci mai tsanani ne, sanyi ne. <BR/>
    Kuna barci (yayi barci) a kasa ko a benci inda babu wanda zai iya barci. <BR/>
    Dole ne ku sha ruwa mai tsabta daga bayan gida wanda ke cutar da ciki. <BR/>
    Lokacin da kake yin amfani da wanan wanka dole kuyi shi a gaban wasu. <BR/>
    Har ila yau, a kowace tantanin halitta suna da kusan mutane 10 zuwa 15 a mafi yawancin. Wannan a cikin karamin fili kamar yadda yake
    4 mita tsawo da mita 3 na hancho.
</BLOCKQUOTE>
`
  ],
  "sw": [
    `
Nini <STRONG> baridi </STRONG> ya <EM> US Customs na Border Patrol? </EM>
`, `
Baridi ni mbaya sana. <BR/>
Ni jela. <BR/>
Maelezo:
<BLOCKQUOTE>
    Ni mahali pa baridi ambapo huwezi kulala kwa sababu mwanga ni saa 24 wakati huo
    Kwa makusudi, utapoteza dhana ya wakati, kuna chumba ambacho kwa nadharia ni wapi
    watu wanapata chakula, chakula ni cha kutisha, ni baridi. <BR/>
    Ulala (jaribu kulala) kwenye sakafu au kwenye madawati ya chuma ambako hakuna mtu anayeweza kulala. <BR/>
    Unapaswa kunywa maji yaliyotengenezwa kutoka kwenye vyoo ambavyo vina hatari kwa tumbo lako. <BR/>
    Unapotumia bafu unapaswa kufanya mbele ya wengine. <BR/>
    Pia katika kiini kila wao wana karibu watu 10 hadi 15 kwa zaidi. Kwamba katika nafasi ndogo kama ilivyo
    Mita 4 kwa muda mrefu na mita 3 za hancho.
</BLOCKQUOTE>
`
  ],

  "tr": [
  `
<EM> ABD Gümrük ve Sınır Devriyesi'nin <STRONG> soğutucusu </STRONG> nedir? </EM>
`,`
Soğutucu çok çirkin. <BR/>
Bu bir hapishane. <BR/>
Bir tanım:
<Blockquote>
    Uyuyamadığınız soğuk bir yer çünkü ışık 24 saat açık.
    Kasıtlı olarak, zaman kavramını kaybedeceksiniz, teoride olduğu bir yer var.
    insanlar yiyecek alır, yiyecek korkunçtur, soğuktur. <BR/>
    Yerde ya da neredeyse hiç kimsenin uyuyamadığı metal banklarda uyur (uyumaya çalışırsınız). <BR/>
    Mideniz için zararlı olan tuvaletlerden geri dönüştürülmüş su içmelisiniz. <BR/>
    Banyoları kullanırken diğerlerinin önünde yapmak zorundasınız. <BR/>
    Ayrıca her hücrede en fazla 10 ila 15 kişi var. Bu küçük bir alanda olduğu gibi
    4 metre uzunluğunda, 3 metre hancho.
</Blockquote>
`
],


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

    
  "pt": [
    `
Qual é a detenção de <EM> Imigração e Alfândega dos EUA </EM>
`
    ,
    `
      É uma prisão. É muito feio. Estou recebendo descrições ...
      `
  ],
    "bn": [
      `
<em> মার্কিন ইমিগ্রেশন এবং কাস্টমস এনফোর্সমেন্ট </EM> আটক রাখা হয়
  `
      ,
      `
এটা একটা কারাগার। এটা খুব কুৎসিত। আমি বর্ণনা পাচ্ছি ...
`
    ],
      
  "uk": [
    `
    Що таке затримання <EM> імміграційного та митного контролю США </EM>
    `
    ,
    `
          Це в'язниця. Це дуже потворно. Я отримую описи ...
          `
  ],
          "fa": [
      `
بازداشت <EM> مهاجرت و اجرای آداب و رسوم ایالات متحده </EM> چیست؟
`
      ,
      `
      این یک زندان است خیلی زشت است من توصیف می کنم ...
      `
    ],

  "zh": [
    `
什么是<EM>美国移民和海关执法局的拘留</EM>
`,
    `
      这是一所监狱。这非常难看。我正在描述......
      `
  ],

  "ha": [
    `
Mene ne tsarewar <EM> Shige da Fice na Amurka da kuma Aiwatar da Dokoki </EM>
`
    ,
    `
      Yana da kurkuku. Yana da mummunan aiki. Ina samun kwatancin ...
      `
  ],

  "sw": [
    `
Ni kizuizini cha <EM> Uhamiaji wa Marekani na Utekelezaji wa Forodha </EM>
`
    ,
    `
      Ni jela. Ni mbaya sana. Ninapata maelezo ...
      `
  ],
  "tr": [
  `
<EM> ABD Göçmenlik ve Gümrük İfadesi </EM> 'nin alıkonması nedir?
`
  ,
  `
      Bu bir hapishane. Çok çirkin. Açıklamalar alıyorum ...
      `
],

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
	    "pt": [
    `
      Como posso me preparar para o refrigerador e a detenção?
      `
    ,
    `
Escreva os números de telefone e endereços e todas as coisas importantes sobre o seu braço <BR/>
Escreva com uma caneta SHARPIE. É muito fácil lavar uma caneta normal do seu corpo.
`
  ],

  "bn": [
      `
আমি কিভাবে শীতল এবং আটক জন্য প্রস্তুত করতে পারেন?
  `
      ,
      `
  ফোন নম্বর এবং ঠিকানা এবং আপনার বাহু সম্পর্কে সমস্ত গুরুত্বপূর্ণ জিনিসগুলি লিখুন <BR/>
একটি SHARPIE কলম সঙ্গে এটি লিখুন। এটা আপনার শরীর থেকে একটি স্বাভাবিক কলম ধোয়া খুব সহজ।
`
  ],
      "fa": [
      `
      چگونه می توانم برای کولر و بازداشت آماده کنم؟
      `
      ,
      `
شماره تلفن ها و آدرس ها و همه چیز مهم را در مورد بازوی خود <BR/> بنویسید
آن را با قلم SHARPIE بنویسید. یک قلم طبیعی از بدن شما بسیار ساده است.
`
    ],
  "uk": [
    `
          Як я можу підготуватися до кулера і затримання?
          `
    ,
    `
    Напишіть номери телефонів і адреси, а також всі важливі речі щодо вашої руки. <BR/>
    Напишіть його за допомогою пера SHARPIE. Мити нормальну ручку з вашого тіла дуже легко.
    `
  ],

  "zh": [
    `
      我怎样才能为冷却器和拘留做准备？
      `
    ,
    `
写下电话号码和地址以及关于你手臂的所有重要事项<BR/>
用SHARPIE笔书写。从你的身体上洗一支普通的笔非常容易。
`
  ],

  "ha": [
    `
      Yaya zan iya shirya don mai sanyaya da kuma tsare?
      `
    ,
    `
Rubuta lambobin waya da adiresoshin da duk abubuwan da ke da muhimmanci game da hannunka <BR/>
Rubuta shi tare da takarda SHARPIE. Yana da sauƙin wanke wanke adon ku daga jiki.
`
  ],
  "sw": [
    `
      Ninawezaje kujiandaa kwa ajili ya baridi na kizuizini?
      `
    ,
    `
Andika namba za simu na anwani na mambo yote muhimu kuhusu mkono wako <BR/>
Andika kwa kalamu ya SHARPIE. Ni rahisi sana kuosha kalamu ya kawaida kutoka kwenye mwili wako.
`
  ],

  "tr": [
  `
      Soğutucu ve gözaltı için nasıl hazırlanabilirim?
      `
  ,
  `
Telefon numaralarını, adresleri ve kolunla ilgili tüm önemli şeyleri yaz <BR/>
Bir SHARPIE kalemi ile yaz. Normal bir kalemi vücudunuzdan yıkamak çok kolaydır.
`
],
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
	    "pt": [
    `
      Eu não tenho nenhum número ou endereço. Para quem posso ligar ou escrever pedindo ajuda quando estou detido?
      `,`
 <h1> Eu </h1> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<Address>
    Mitchell Verter <BR/>
    654 East San Ysidro Blvd <BR/>
    PMB 187 <BR/>
    San Ysidro, CA 92173
</address>
<BR/>
Escreva com uma caneta SHARPIE. É muito fácil lavar uma caneta normal do seu corpo.
`
  ],


  "bn": [
      `
আমি কোন সংখ্যা বা ঠিকানা নেই। আমি আটক থাকাকালীন সাহায্যের জন্য কাকে কল বা লিখতে পারি?
  `,`
  <h1> আমি </h1> <BR/>
  মিচেল ভের্টার <BR/>
  +1 646 705 7784 <BR/>

<address>
মিচেল ভের্টার <BR/>
654 পূর্ব সান Ysidro Blvd <BR/>
পিএমবি 187 <BR/>
সান ইয়সিড্রো, CA 92173
</address>
<br/>
একটি SHARPIE কলম সঙ্গে এটি লিখুন। এটা আপনার শরীর থেকে একটি স্বাভাবিক কলম ধোয়া খুব সহজ।
`
  ],

      "fa": [
      `
      من هیچ شماره یا نشانی ندارم وقتی من بازداشت شدم، می توانم تماس بگیرم یا برای کمک نامه بنویسم؟
      `,`
 <h1> من </h1> <BR/>
میچل ورتر <BR/>
+1 646 705 7784 <BR/>

<address>
    میچل ورتر <BR/>
    654 خیابان شرق سان یزدو <BR/>
    PMB 187 <BR/>
    San Ysidro، CA 92173
</address>
<BR/>
آن را با قلم SHARPIE بنویسید. یک قلم طبیعی از بدن شما بسیار ساده است.
`
    ],
  "zh": [
    `
      我没有任何号码或地址。我被拘留时，谁可以打电话或写信寻求帮助？
      `, `
 <h1>我</h1> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<address>
    Mitchell Verter <BR/>
    654 East San Ysidro Blvd <BR/>
    PMB 187 <BR/>
    San Ysidro，CA 92173
</address>
<BR/>
用SHARPIE笔书写。从你的身体上洗一支普通的笔非常容易。
`
  ],
  "ha": [
    `
      Ba ni da lambar ko adireshin. Wanene zan iya kira ko rubuta don taimako lokacin da aka kulle ni?
      `,`
 <h1> Ni </h1> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<address>
    Mitchell Verter <BR/>
    654 East San Ysidro Blvd <BR/>
    PMB 187 <BR/>
    San Ysidro, CA 92173
</address>
<BR/>
Rubuta shi tare da takarda SHARPIE. Yana da sauƙin wanke wanke adon ku daga jiki.
`
  ],
  "sw": [
    `
      Sina idadi yoyote au anwani. Ni nani ninayeweza kumuita au kuandika msaada ili nimefungwa?
      `, `
 <h1> Me </h1> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<address>
    Mitchell Verter <BR/>
    654 East San Ysidro Blvd <BR/>
    PMB 187 <BR/>
    San Ysidro, CA 92173
</address>
<BR/>
Andika kwa kalamu ya SHARPIE. Ni rahisi sana kuosha kalamu ya kawaida kutoka kwenye mwili wako.
`
    ],

  "tr": [
  `
      Hiçbir numara veya adresim yok. Alıkonulduğumda yardım için kimi arayabilir veya yazabilirim?
      `,`
 <h1> Me </h1> <BR/>
Mitchell Verter <BR/>
+1 646 705 7784 <BR/>

<address>
    Mitchell Verter <BR/>
    654 Doğu San Ysidro Blvd <BR/>
    PMB 187 <BR/>
    San Ysidro, CA 92173
</address>
<BR/>
Bir SHARPIE kalemi ile yaz. Normal bir kalemi vücudunuzdan yıkamak çok kolaydır.
`
  ],
        "uk": [
    `
          Я не маю жодного номера або адреси. Кого я можу зателефонувати або написати на допомогу, коли я затриманий?
          `,`
     <h1> Мені </h1> <BR/>
    Mitchell Verter <BR/>
    +1 646 705 7784 <BR/>

    <address>
        Mitchell Verter <BR/>
        654 East San Ysidro бульвар <BR/>
        PMB 187 <BR/>
        San Ysidro, CA 92173
        </address>
        <BR/>
        Напишіть його за допомогою ручки SHARPIE. Мити нормальну ручку з вашого тіла дуже легко.
        `
  ],


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
	  

        "pt": [
    `
      O que a Bíblia pensa sobre esse processo?
      `,`
<BLOCKQUOTE>
    Quando um estrangeiro vive com você em sua terra, você não deve oprimi-lo. <BR/>
    Você deve considerar o estrangeiro que vive com você como nativo entre você. Você deve amá-lo como a si mesmo, pois você era estrangeiro na terra do Egito.
</BLOCKQUOTE>
<cite> Levítico 19: 33-34 </cite>
`
  ],

    "bn": [
      `
বাইবেল এই প্রক্রিয়া সম্পর্কে কি মনে করেন?
  `,`
  <blockquote>
  যখন বিদেশী আপনার দেশে আপনার সাথে বসবাস করবে, তখন অবশ্যই তাকে অত্যাচার করা উচিত নয়। <br/>
তোমাদের মধ্যে বসবাসকারী বিদেশীকে অবশ্যই আপনার সাথে বসবাস করতে হবে। তুমি তাকে নিজের মতো ভালবাসবে, কারণ তুমি মিসর দেশে বিদেশী ছিল।
</blockquote>
<cite> লেবীয় পুস্তক 19: 33-34 </cite>
  `
    ],

          "fa": [
      `
      کتاب مقدس در مورد این روند چه فکر می کند؟
      `,`
<BLOCKQUOTE>
    هنگامی که یک خارجی با شما در زمین خود زندگی می کند، نباید او را ستایش کنید. <BR/>
    شما باید خارجی را که با شما زندگی می کند به عنوان متولد بومی در میان شما در نظر بگیرید. شما او را به عنوان خودتان دوست خواهید داشت زیرا شما در سرزمین مصر بیگانه بودید.
</BLOCKQUOTE>
<cite> Leviticus 19: 33-34 </quote>
`
    ],
      "ha": [
    `
      Menene Littafi Mai-Tsarki ke tunani akan wannan tsari?
      `,`
<BLOCKQUOTE>
    Lokacin da baƙo ya zauna tare da ku a cikin ƙasarku, kada ku zalunta shi. <BR/>
    Dole ne ku kula da baƙo wanda yake tare da ku kamar yadda aka haifa a cikin ku. Dole ku ƙaunace shi kamar kanku, gama kun kasance baƙi a ƙasar Masar.
</BLOCKQUOTE>
<cite> Leviticus 19: 33-34 </cite>
`
      ],
        "uk": [
    `
              Що думає Біблія про цей процес?
              `,`
        <BLOCKQUOTE>
            Коли іноземець живе з вами на вашій землі, ви не повинні гнобити його. <BR/>
            Ви повинні вважати іноземця, який живе з вами, як рідних між вами. Ви любите Його, як себе, бо ви були іноземцями в єгипетській землі.
        </BLOCKQUOTE>
        <cite> Левит 19: 33-34 </cite>
        `
  ],
  "zh": [
    `
      圣经对这个过程的看法是什么？
      `, `
<BLOCKQUOTE>
    当一个外国人和你一起住在你的土地上时，你不能压迫他。 <BR/>
    你必须把住在你身边的外国人当作你在土生土长的人。你要像他一样爱他，因为你是埃及地的外国人。
</BLOCKQUOTE>
<cite>利未记19：33-34 </cite>
`
  ],
  "ha": [
    `
      Menene Littafi Mai-Tsarki ke tunani akan wannan tsari?
      `,`
<BLOCKQUOTE>
    Lokacin da baƙo ya zauna tare da ku a cikin ƙasarku, kada ku zalunta shi. <BR/>
    Dole ne ku kula da baƙo wanda yake tare da ku kamar yadda aka haifa a cikin ku. Dole ku ƙaunace shi kamar kanku, gama kun kasance baƙi a ƙasar Masar.
</BLOCKQUOTE>
<cite> Leviticus 19: 33-34 </cite>
`
  ],
  "sw": [
    `
      Biblia inafikiria nini kuhusu mchakato huu?
      `, `
<BLOCKQUOTE>
    Wakati mgeni anaishi pamoja nawe katika nchi yako, usipasue. <BR/>
    Unapaswa kumwona mgeni ambaye anaishi nawe kama mzaliwa wa asili kati yenu. Unapaswa kumpenda kama wewe mwenyewe, kwa sababu ulikuwa wageni katika nchi ya Misri.
</BLOCKQUOTE>
<cite> Mambo ya Walawi 19: 33-34 </cite>
`
  ],
  "tr": [
  `
      İncil bu süreç hakkında ne düşünüyor?
      `,`
<Blockquote>
    Bir yabancı senin ülkende yaşadığında, ona baskı yapmamalısın. <BR/>
    Yanınızda yaşayan yabancıyı, aramızda doğmuş olarak kabul etmelisiniz. Onu kendin gibi seveceksin, çünkü Mısır topraklarında yabancısın.
</Blockquote>
<cite> Leviticus 19: 33-34 </cite>
`
],


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
  "qRFM": {

      
  "zh": [
    `
      无政府主义者对这个过程有何看法？
      `, `
<BLOCKQUOTE>
    这本身就足以进行社会革命，这种革命在经济和反独裁方面是经济的，但还有更多。四百万印度人生活在墨西哥，直到二十五或二十五年前，他们生活在拥有土地，水域和森林的社区。互助是这些社区的统治，只有在税收集体定期出现或者“招募人员”出现以寻找男子强行入伍时才会感受到权力。在这些社区中，没有任何法官，市长，狱卒，事实上，在这种类型中，没有任何麻烦的人。每个人都有权利到土地，水到灌溉，到森林寻找木柴，从森林里的木头建造小房子。犁从一只手到另一只手，牛的轭也是如此。每个家庭都按照他们认为足够的土地来生产必要的土地，除草和收获的工作是由整个社区共同完成的 - 今天，佩德罗的收获，明天的胡安，等等。当一个房子被养大时，社区中的每个人都会把手放在工作上。
</BLOCKQUOTE>
<cite>
    <A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
         Ricardo Flores Magon，<EM>墨西哥人民倾向于无政府共产主义</EM> <BR>
         再生，数量5311年9月2日。
    </A>
</cite>
`
  ],

  "ha": [
    `
      Mene ne masanan sunyi tunanin wannan tsari?
      `,`
<BLOCKQUOTE>
    Wannan a cikin kansa ya isa ga juyin juya halin zamantakewar al'umma wanda yake tattalin arziki a cikin gida da masu mulkin mallaka, amma akwai karin. Miliyoyin Indiyawan da ke zaune a Mexico wadanda, har zuwa ashirin ko ashirin da biyar da suka wuce, sun zauna a cikin al'ummomin dake mallakan ƙasashe, da ruwa, da kuma gandun daji na kowa. Taimakawa ta Mutual ita ce tsarin mulki a cikin wadannan al'ummomin, inda aka ji aikinsu ne kawai a yayin da ake karbar harajin haraji a lokaci-lokaci ko kuma lokacin da '' masu neman '' '' suka fara neman mutanen su tilasta wa sojojin. A cikin wadannan al'ummomi babu alƙalai, magajin gari, masu tsaron gida, a gaskiya babu mawuyacin mutane a kowane irin wannan. Kowane mutum na da hakkin ya shiga ƙasar, zuwa ruwa don shayar da shi, zuwa gandun daji na itace, da kuma itace daga gandun daji don gina kananan gidaje. Kullun da aka kwashe daga hannu zuwa hannu, kamar yayyan shanu. Kowane iyali ya yi aiki sosai kamar yadda suke tsammani ya ishe shi don ya samar da abin da ya kamata, kuma aikin da aka shuka da girbi ya yi daidai da dukan jama'a-a yau, girbin Pedro, gobe Juan s, da sauransu. Kowane mutum a cikin al'umma ya sanya hannayensu zuwa aikin lokacin da za'a tashe gidan.
</BLOCKQUOTE>
<cite>
    <A href="http://archivomagon.net/obras-completas/art-periodisticos-1900-1918/1911/1911-130/">
         Ricardo Flores Magon, <EM> Mutanen Mexico sun dace da kwaminisancin anarcho / / EM> <BR/>
         Sabuntawa, num. 53, Satumba 2, 1911.
    </A>
</cite>
`
  ],
    
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
	    "zh": [
    `
      我为什么要建这个网站？
      `, `
 因为我是一名无政府主义者，他相信<A href="https://en.wikipedia.org/wiki/Mutual_aid_(organization_theory)" target="_blank">互助</A>
`
  ],
  "ha": [
    `
      Me ya sa nake yin wannan shafin intanet?
      `,`
 Domin ina da wani anarchist, wanda ya yi imanin <A href="https://en.wikipedia.org/wiki/Mutual_aid_(organization_theory)" target="_blank"> taimakon juna </A>
`
  ],
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

const QUESTION_DEFAULTS = {
  "qWhySoSlow": [
    `¿Por qué la lista se está moviendo tan lenta ahora?
    `,`
    No lo sé. Al final, el movimiento de la lista está determinado por el gobierno de los Estados Unidos. Ellos determinan cuántas personas pueden ingresar al Puerto de Entrada cada día. Supongo que hay algún problema allí: son incapaces de asimilar a las personas. Tal vez Trump hizo algo? Tal vez el fiscal general hizo algo? Tal vez los centros de detención están demasiado llenos? ¿Quizás las protestas contra las horribles condiciones están ralentizando las cosas?
	  <br />
            Esto es lo que me escribió una periodista el 10 de julio de 2019:
            <blockquote>
                La Patrulla Fronteriza dijo que debido a que la detención de ICE se ha quedado sin espacio y sin fondos, los adultos solteros pasan 300 horas en custodia antes de ser transferidos. Eso es más de 12 días. No hablaba de las instalaciones de CBP, pero se transfirieron a los mismos lugares / agencia. (Debido a que la libertad condicional de adultos solteros básicamente se detuvo en enero de 2017 por orden ejecutiva).
            </blockquote>
    `
  ],
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
  "qRFM": [
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
  if (!DIVS_TO_INTERNATIONAL[divName] || ! DIV_DEFAULTS[divName]) return;

  document.getElementById(divName).innerHTML =
    DIVS_TO_INTERNATIONAL[divName][language] ||
    DIV_DEFAULTS[divName];
}
function questionToInternational(questionName, language) {
  if (!QUESTIONS_TO_INTERNATIONAL[questionName] || ! QUESTION_DEFAULTS[questionName]) return;

  var divElement = document.getElementById(questionName);
  var qAndA = QUESTIONS_TO_INTERNATIONAL[questionName][language];
  if (!qAndA || qAndA.length < 2) {
    qAndA = QUESTION_DEFAULTS[questionName];
  }
  divElement.getElementsByTagName("dt")[0].innerHTML = qAndA[0];
  divElement.getElementsByTagName("dd")[0].innerHTML = qAndA[1];
}
