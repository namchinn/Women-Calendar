const zovolgoonuud = [
    {
        name: 'Сарын тэмдэг гэж юу вэ?',
        image: require('../android/assets/information.png'),
        answer: '     Сар бүр бэлгийн бойжилт гүйцсэн эмэгтэй хүний өндгөвчнөөс өндгөн эс гарч Фаллопиевын гуурсаар дамжин умайг чиглэн явдаг. Энэ үед умай нь жирэмслэлтэнд бэлтгэгдэж умайн хана цус, зөөлөн эсээр баялаг болон зузаарч байдаг. Энэхүү ханыг эндометр гэдэг.Хэрэв өндгөн эс эр бэлгийн эстэй нийлэхгүй бол жирэмслэлт явагдахгүй ба умайн хана 3-7 хоногийн турш ховхрон үтрээгээр гадагшилдаг байна. Үүнийг сарын тэмдэг ирэх гэдэг. Энэхүү цикл нь өндгөвчинд өндгөн эс боловсорч эхлэснээр эхэлдэг ба 21-40 хоногийн мөчлөгтэй байна.'
    },
    {
        name: 'Сарын тэмдгийн мөчлөг гэж юу вэ?',
        image: require('../android/assets/information.png'),
        answer: '     Сарын тэмдэг ирсэн эхний өдрөөс дараагийн сарын тэмдэг ирэх эхний өдөр хүртэлх хоногийг мөчлөг гэнэ. Хэвийн мөчлөг дунджаар 21-40 хоног байна.'
    },
    {
        name: 'Овуляци гэж юу вэ?',
        image: require('../android/assets/information.png'),
        answer: '     Боловсорч гүйцсэн өндгөн эс сарын тэмдгийн мөчлөгийн дунд үед өндгөвчнөөс гадагшилж, умайн гуурсаар дамжин умай руу хөдлөх үйл явц юм.'
    },
    {
        name: 'Хэзээ жирэмслэх боломжтой вэ?',
        image: require('../android/assets/information.png'),
        answer: '     Жирэмсэн болох хамгийн өндөр магадлалтай үе бол овуляцийн өдөр юм. Мөчлөгийн уртаас 14-г хасахад овуляци болох хугацаа гарч ирэх ба түүнээс өмнөх 3 өдөр ч мөн адил өндөр магадлалтай байна. Мөчлөгийн эхний болон сүүлийн 7 хоногуудад жирэмслэх магадлал хамгийн бага байдаг байна. Гэвч энэ нь огт боломжгүй гэсэн үг биш юм. '
    },
    {
        name: 'Ариун цэврийн хэрэглэлээ сонгох',
        image: require('../android/assets/menstrual.png'),
        answer: '     Хөвөн, зөөлөн материалаар хийгдсэн, гадагшаа нэвтрүүлдэггүй, үтрээнээс гарах цусыг шингээх зориулалт бүхий хүний биед харшил үүсгэхгүй, тусгай ариун цэврийн хэрэглэлийг хэрэглэх нь тохиромжтой. Нимгэн, зузаан, уртаас хамааран өдөр шөнийн гэж ангилна. Тампон хэрэглэхээс татгалзах хэрэгтэй. '
    },
    {
        name: 'Ариун цэврийн хэрэглэлийг солих',
        image: require('../android/assets/menstrual.png'),
        answer: '     Цус хэр их гарч байгаагаас шалтгаалан өдөрт хэд хэдэн удаа солих шаардлагатай байдаг. Цус нь нянгийн үржих таатай нөхцөл болдог учир эвгүй үнэр гарах, шээс, үтрээний үрэвсэл үүсэх эрсдэлтэй байдаг учир ариун цэврийн хэрэглэлийг 3-4 цаг тутам солих хэрэгтэй. Хэрэглэсэн ариун цэврийн хэрэглэлээ жорлонгийн суултуурын хоолой болон ил задгай хаяхгүй байх. Цаасанд боон хогийн сав руу хаяж занших нь зүйтэй.'
    },
    {
        name: ' Бэлэг эрхтэнийг зөв угаах',
        image: require('../android/assets/menstrual.png'),
        answer: '     Сарын тэмдэг ирсэн өдрүүдэд хувийн ариун цэврийг сайтар сахиж, өдөр бүр шүршүүрт орох шаардлагатай.\n     Үтрээний хэвийн бичил биетнүүд нь гаднаас орж ирэх нян, вирүсыг өөрийн механизмаараа цэвэрлэж байдаг. Савантай ус болон бусад үтрээ угаагч шингэнийг хэрэглэсэнээр үтрээний хэвийн бичил биетнүүдийг устгадаг. Иймд зөвхөн бүлээн усыг хэрэглэх зохимжтой. \n     Ариун цэврийн хэрэглэлээ солих бүртээ бэлэг эрхтэнээ бүлээн усаар урдаас хойш чиглэлтэй угааж байх хэрэгтэй. Хойноос урагшаа буюу хошногоны амсраас урагшаа чиглэлтэй угаахыг хориглох хэрэгтэй. Учир нь хошногоны амсарт байрлах нян үтрээ болон шээс бэлгийн замын үрэвсэл үүсгэх эрсдэлтэй байдаг'
    },
    {
        name: 'Хөвөн даавуун дотуур өмд өмсөх',
        image: require('../android/assets/menstrual.png'),
        answer: '     Өдөр бүр цэвэр, биедээ эвтэйхэн, бариу дотоож өмсвөл илүү тохиромжтой. Хэрэв дотуур хувцсан дээр цусны толбо үүсвэл хүйтэн усаар савандаж угаавал цусны толбо хурдан арилна. '
    },
    {
        name: 'Сарын тэмдгийн өвдөлт',
        image: require('../android/assets/uterus.png'),
        answer: '     Өсвөр насны охидод сарын тэмдэг ирэхийн өмнөхөн эсвэл ирж байгаа үед хэвлийн доод хэсгээр базлах, ууц нуруу болон гуя руу чилж өвдөх шинж илэрч болно. Цөөн тохиолдолд энэ нь ямар 1 эмгэгтэй холбоотой байж болно. '
    },
    {
        name: 'Xэзээ эмчид хандах вэ?',
        image: require('../android/assets/uterus.png'),
        answer: '     Дараах шинж тэмдэг илэрвэл эмчид хандана уу. \n - Сарын тэмдэг 8 хоногоос дээш үргэлжлэх\n - 1-2 цаг тутамд тампон болон ариун цэврийн хэрэгсэл нэвтрэх\n - Шөнө ариун цэврийн хэрэгсэл болон тампоныг цус их гарч байгаагаас солих\n - Цустай хамт гарч буй нөжний хэмжээ 2.5 см-ээс их хэмжээтэй байх\n - Сарын тэмдгийн мөчлөг хооронд цус гарах\n - Хэрэв та жирэмсэн эсвэл жирэмсэн байж магадгүй гэж бодож байгаа бол эмчид үзүүлээрэй. '
    },
    {
        name: 'Их хэмжээний цус алдалт',
        image: require('../android/assets/uterus.png'),
        answer: '     Цус алдалт удаан үргэлжлэх нь төмөр дутагдлын цус багадалтанд хүргэнэ. Төмөр дутагдлын цус багадалтын үед дараах шинжүүд илэрнэ: \n - Бие сулрах, идэвхгүй байх\n - Амархан ядрах\n - Толгой өвдөх\n - Дасгал хийх болон ачааллын үед амьсгаадах\n - Зүрх дэлсэх гэх мэт шинж тэмдэг илэрнэ '
    },
    {
        name: 'Ямар үед яаралтай эмнэлэгт очих вэ?',
        image: require('../android/assets/uterus.png'),
        answer: '     Хэрэв 2 цагийн хугацаанд 4 болон түүнээс олон удаа ариун цэврийн хэрэгсэл эсвэл тампон соливол яаралтай эмнэлэгт очих хэрэгтэй. '
    },
    {
        name: 'Сарын тэмдэг өвдөлттэй ирэх үед',
        image: require('../android/assets/uterus.png'),
        answer: '     Сарын тэмдэг өвдөлттэй ирэх үед: \n - Бүлээн жин тавих\n - Бүлээн шүршүүрт орох\n - Эмчийн заавраар эм хэрэглэх\n - Сарын тэмдэг ирэхээс өмнө эсвэл дууссаны дараа өвдөлттэй байх, өвчин намдаах эмэнд намдахгүй байх, өвдөлт хүчтэй бол эмчид хандах хэрэгтэй.'
    },
    {
        name: 'Цусны хэмжээ',
        image: require('../android/assets/female.png'),
        answer: '     Сарын тэмдгийн үед алдах цусны хэвийн хэмжээ 40-60мл байх ба түүнээс их байвал эмгэгт тооцно  '
    },
    {
        name: 'Цусны өнгө',
        image: require('../android/assets/female.png'),
        answer: '     Ягаавтар\nСарын тэмдэг үргэлжлэх үеэр ягаавтар цус гарвал хэвийн. Харин нэг сарын тэмдэг дуусч, нөгөөх нь эхлэх хооронд ягаан цус гарвал сайтар ажиглана. Цус алдалт (жирэмслэлтийн эрт үеийн шинж тэмдэг) байж болох бөгөөд бага хэмжээтэй цайвар цус гарах нь дааврын хэлбэлзэл эсвэл нуугдмал гэмтлийн шинж байх талтай.\n     Цайвар улаан\nЦайвардуу улаан цус гарвал эрүүл байгаагийн шинж. Таны савны хана энгийн хурдаар гуужиж байгаа бөгөөд долоо хоногийн төгсгөл гэхэд тунгалаг өнгөтэй болно. Цайвар улаан цус гарч байгаа ч найм болон түүнээс дээш хоног сарын тэмдэг үргэлжилвэл та эмчид хандах хэрэгтэй.\n     Гүн хүрэн\nСарын тэмдэг хамгийн их ирэхэд гүн хүрэн өнгөтэй, нөжирхөг цус гарна. Гэхдээ их хэмжээтэй, ийм өнгөтэй цус их хэмжээгээр гарвал фибройд маягын хавдрын шинж гэж үзэх нь бий. Үүний зэрэгцээ сааралдуу өнгөтэй нөж гарвал зулбалтын эрт үеийн шинж байх талтай.\n     Улаандуу оранж\nОранж өнгө холилдсон цус гарвал сайтар анхаар. Ихэнх тохиолдолд умайн хүзүүнээс ялгарч буй шингэн цустай холилдсон, ямар ч сөрөг нөлөөгүй байх нь бий. Гэвч заримдаа үтрээнд халдвар орсны шинж байдаг. Улмаар цусны өнгийг цайвар, сонин үнэртэй болгодог. Энэ тохиолдолд эмчид үзүүлнэ.\n     Хар бор\nСарын тэмдгийн цус хар, бор өнгөтэй гарвал та айж цочирдох хэрэггүй. Өмнөх сарын тэмдгээс үлдсэн хуучин цус гарч байна. Ерөнхийдөө хэвийн боловч хар бор цус нэгээс дээш хоног гарч, цус алдвал та эмчид хандаарай.'
    },
    {
        name: 'Идэж болохгүй хүнс',
        image: require('../android/assets/lunch.png'),
        answer: '     Сарын тэмдгийн үед идэж болохгүй хүнс: \n - Давс ихтэй хоол\n - Халуун ногооотой хоол\n - Чихэрлэг зүйлс\n - Хүйтэн хоол хүнс, уух зүйлс \n - Алкохол болон кафэйн агуулсан зүйлс.'
    },
    {
        name: 'Идвэл зохих хүнс',
        image: require('../android/assets/lunch.png'),
        answer: '     Сарын тэмдгийн үед идвэл зохих хүнс: \n - Ногоон өнгийн хүнсний ногоо\n - Жимс\n - Бүхэл үрийн гурил\n - Мах \n - Хар шоколад'
    },
    {
        name: 'Дасгал хөдөлгөөн',
        image: require('../android/assets/meditation.png'),
        answer: '     Дасгал хөдөлгөөний тухай: \n - Сарын тэмдгийн үед хөнгөн, бага импакттай дасгал хийхэд энергийн түвшин нэмэгдэж, эрч хүчтэй болдог байна \n - Сарын тэмдэг ирснээс хойшхи 14 хоногийн хугацаанд дасгал хийхэд маш үр дүнтэй байдаг бөгөөд ялангуяа хүчний дасгалын үр өгөөжийг илт нэмэгдүүлдэг гэдгийг судалгаагаар тогтоожээ.\n - Дасгал хийх үед бета-эндорфин гэдэг байгалийн өвчин намдаагч бодис ялгардаг учраас сарын тэмдгийн үед нуруугаар хөших, хэвлийгээр хатгах зэрэг өвдөлтийг бууруулдаг.\n - Сарын тэмдгийн үед толгой чинь өвддөг бол зөөлхөн гүйж үзээрэй.\n - Биеийн температурыг бууруулна \n - Хэрвээ сарын тэмдгийн үед таны ааш хувирах гээд байдаг бол өдөрт 30 минут дасгал хийх нь маш их эерэг нөлөөтэй. Дасгал хийх үед эндорфин буюу баяр баясгалан авчирдаг гормон ялгарч, таны ааш зан хувирахаас сэргийлнэ.'
    },
    {
        name: 'Сонирхолтой баримтууд 1',
        image: require('../android/assets/ideaa.png'),
        answer: '     Нүднээс цус гарах үзэгдэл \n Эндометрийн эд цусны урсгалаар дамжих үед үтрээнээс гадна нүднээс цус урсаж биений юм үзэгдэх тохиолдол байдаг. Гэхдээ энэ нь маш ховор бүртгэгджээ.'
    },
    {
        name: 'Сонирхолтой баримтууд 2',
        image: require('../android/assets/ideaa.png'),
        answer: '     Сарын тэмдэг ирэх дөхөхөөр эмэгтэйчүүдийн 19-40 хувь нь багтраа болон харшлын шинж тэмдэг илрэх, хэдийн багтраатай бол өвчин нь сэдрэх зэрэг үзэгдэл бий болдог. Үүнийг сарын тэмдгийн өмнөх астма гэж нэрлэдэг байна.'
    },
    {
        name: 'Сонирхолтой баримтууд 3',
        image: require('../android/assets/ideaa.png'),
        answer: '     Дэлхий дээр сарын тэмдгийг орлуулж хэлэх 5000 гаруй үг байдаг байна. Францаар "газардалт, буулт" гэсэн үг байдаг бол Германаар "Гүзээлзгэний 7 хоног" ч гэдэг байна.'
    },
    {
        name: 'Сонирхолтой баримтууд 4',
        image: require('../android/assets/ideaa.png'),
        answer: '     Эмэгтэй хүний анхны сарын тэмдэг ирж эхэлснээс хойш цэвэрших хүртлээ дунджаар нийт 450 гаруй удаа сарын тэмдэг ирдэг байна.'
    },
    {
        name: 'Сонирхолтой баримтууд 5',
        image: require('../android/assets/ideaa.png'),
        answer: '     Эмэгтэй хүн сарын тэмдэг нь ирсэн үеэрээ илүү их дэлгүүр хэсэж, илүү их идэж, энгийн үеийнхээсээ илүү их мөнгө үрдэг болохыг тогтоосон байна.'
    },
];

export default zovolgoonuud;