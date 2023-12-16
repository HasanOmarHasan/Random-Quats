const quotes = [
  {
    quote: `ما لا يدرك كلة لا يترك كلة `,
    author: `―  حكمة عربية `,
    img : `img/image.png`
  },
  {
    quote: `  من جد وجد ومن زرع حصد ، ومن سار على الدرب وصل   `,
    author: `―  مثل عربي `,
    img : `img/image.png`
  },
  {
    quote: `  رحلة الالف ميل يبدأ بخطوة واحدة`,
    author: `―   حكمة `,
    img : `img/image.png`
  },
  {
    quote: `اذا استطعت العثور علي طريق خال من المعوقات فهو غالبا لا يؤدي الي اي مكان . `,
    author: `―  فرانك كلارك`,
    img : `img/image.png`
  },
  {
    quote: ` الثقة بالله أزكى أمل ، والتوكل عليه أوفى عمل `,
    author: `―  مصطفى صادق الرافعي`,
    img : `img/مصطفى صادق الرافعي.jpg`
  },
  {
    quote: ` فى اللغة اسماء ممنوعة من الصرف وفى القلب وجوه ممنوعة من النسيان `,
    author: `― أدهم شرقاوي, كش ملك`,
    img : `img/ادهم شرقاوي.jpg`
  },
  {
    quote: ` أمقت الصوت العالى بشكل لا يوصف و من المؤسف اننامحاطون بأشخاص لا يملكون اى موهبة الا صوتهم العالى `,
    author: `― احمد خالد توفيق`,
    img : `img/احمد خالد توفيق.jpg`
  },
  {
    quote: ` فى حياة كل انسان لحظة لا تعود الحياة بعدها كما كانت قبلها `,
    author: `― احمد خالد توفيق`,
    img : `img/احمد خالد توفيق.jpg`
  },
  {
    quote: ` الحياة كوميدية بالنسبة للناس اللى دماغهم عاليه و مأساة بالنسبة للناس اللى احساسهم عالى `,
    author: `― عمر طاهر, جر ناعم`,
    img : `img/عمر طاهر.jpg`
}, 
  {
    quote: ` مش مهم انك تغير الكون... المهم انك تخلي الكون ما يغيركش `,
    author: `― عمر طاهر `,
    img : `img/عمر طاهر.jpg`
}, 
  {
    quote: ` لا معنى للفرحة مالم تقسمها مع أحد فتصبح أكبر على عكس قانون القسمة `,
    author: `― عمر طاهر
        `,
    img : `img/عمر طاهر.jpg`

   },
];

let quoteEl = document.getElementById("quote");
let authorEl = document.getElementById("author");
let imgEl = document.getElementById("img");


var lastRandom = 0,
  random = 0;

function randomNumber() {
  let randomCount = [];
  random = Math.floor(Math.random() * quotes.length);

    if (lastRandom !== random) {
      console.log(random + " randem " + lastRandom + " lastRandom ");
      lastRandom = random;
      return random;
    } else {
      console.log(random + " randem " + lastRandom + " lastRandom");
      randomNumber();
      lastRandom = random;
      return random;
    }

}

const rendemQoute = function () {
  let random = randomNumber();
  quoteEl.innerText = quotes[random].quote;
  authorEl.innerText = quotes[random].author;
  imgEl.innerHTML = `<img class="img rounded-circle" src="${quotes[random].img}" alt="${quotes[random].author}" />`;
  

};
