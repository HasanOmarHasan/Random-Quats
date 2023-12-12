const quotes = [
  {
    quote: `"ما لا يدرك كلة لا يترك كلة "`,
    author: `―  حكمة عربية `,
  },
  {
    quote: `” من جد وجد ومن زرع حصد ، ومن سار على الدرب وصل ” `,
    author: `―  مثل عربي `,
  },
  {
    quote: `"  رحلة الالف ميل يبدأ بخطوة واحدة"`,
    author: `―   حكمة `,
  },
  {
    quote: `"اذا استطعت العثور علي طريق خال من المعوقات فهو غالبا لا يؤدي الي اي مكان . "`,
    author: `―  فرانك كلارك`,
  },
  {
    quote: `“الثقة بالله أزكى أمل ، والتوكل عليه أوفى عمل”`,
    author: `―  مصطفى صادق الرافعي`,
  },
  {
    quote: `“فى اللغة اسماء ممنوعة من الصرف وفى القلب وجوه ممنوعة من النسيان”`,
    author: `― أدهم شرقاوي, كش ملك`,
  },
  {
    quote: `“أمقت الصوت العالى بشكل لا يوصف و من المؤسف اننامحاطون بأشخاص لا يملكون اى موهبة الا صوتهم العالى”`,
    author: `― احمد خالد توفيق`,
  },
  {
    quote: `“فى حياة كل انسان لحظة لا تعود الحياة بعدها كما كانت قبلها”
        `,
    author: `― احمد خالد توفيق`,
  },
  {
    quote: `“الحياة كوميدية بالنسبة للناس اللى دماغهم عاليه و مأساة بالنسبة للناس اللى احساسهم عالى”
        `,
    author: `― عمر طاهر, جر ناعم
        `,
  },
  {
    quote: `“مش مهم انك تغير الكون... المهم انك تخلي الكون ما يغيركش”
        `,
    author: `― عمر طاهر
        `,
  },
  {
    quote: `“لا معنى للفرحة مالم تقسمها مع أحد فتصبح أكبر على عكس قانون القسمة”
        `,
    author: `― عمر طاهر
        `,
  },
];
var quoteEl = document.getElementById("quote");
var authorEl = document.getElementById("author");

var rendemQoute = function () {

    var rendam = Math.floor(Math.random() * quotes.length);
    var randomCount = [];
    do {
        quoteEl.innerText = quotes[rendam].quote;
        authorEl.innerText = quotes[rendam].author;

    } while (randomCount.indexOf(rendam) !== -1);
    randomCount.push(rendam);


    // randomCount.push(rendam);
    // if (randomCount.indexOf(rendam) !== -1) {
    //     quoteEl.innerText = quotes[rendam].quote;
    //     authorEl.innerText = quotes[rendam].author;
    // }

    console.log(randomCount , rendam);

};



