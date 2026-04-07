export const menuData = {
  sections: [
    {
      id: "breakfast",
      name: { ar: "وجبات فطور", he: "ארוחות בוקר", en: "Breakfast" },
      items: [
        {
          name: { ar: "وجبة فطور قروية زوجية/ فردية", he: "ארוחת בוקר יחיד/זוגית", en: "Village Breakfast (Single/Couple)" },
          description: {
            ar: "لبنة, زيتون, مشوشة, محمرة متبل, كوسا, سلطة قروية, خبز تركي, بيض اومليت حسب الطلب, قهوة",
            he: "לבנה, זיתים, משאוושה, חצילים, מתבל, קישואים, סלט כפרי, לחם טורקי, חביתה לפי בחירה, קפה",
            en: "Labneh, olives, mshaosheh, roasted eggplant, mutabal, zucchini, village salad, Turkish bread, omelette of choice, coffee",
          },
          price: "70/135",
        },
        {
          name: { ar: "شكشوكة تركية", he: "שקשוקה בסגנון טורקי", en: "Turkish Shakshuka" },
          description: {
            ar: "صلصة بندورة/ لحمة عجل, فلفل, ثوم, بيض, خبز تركي وخضار",
            he: "עגבניות תמר מרוסקות/בשר עגל, פלפלים, שום, ביצים, לחם בסגנון טורקי, ירקות גינה",
            en: "Tomato sauce / veal, peppers, garlic, eggs, Turkish bread and garden vegetables",
          },
          price: "49/65",
        },
        {
          name: { ar: "مناقيش ستي", he: "מנאק׳יש סבתא", en: "Grandma's Manaqish" },
          description: {
            ar: "3مناقيش بطعمات مختلفة زعتر/ جبنة/ لبنة/ محمر, يقدم مع سلطة خضار/ سلطة قروية",
            he: "3 מנאקיש בטעם: זעתר/גבינה/לבנה/מחמר, מוגש עם סלט כפרי",
            en: "3 manaqish with zaatar / cheese / labneh / muhammara, served with village salad",
          },
          price: "55",
        },
        {
          name: { ar: "فوكاتشا", he: "פוקצ׳ה", en: "Focaccia" },
          description: {
            ar: "فوكاتشا مع زيت زيتون وملح خشن واكليل الجبل (روزمارين).",
            he: "בציפוי פריך של מלח גס, שמן זית, ורוזמרין. מוגש עם מתבלים.",
            en: "Focaccia with olive oil, coarse salt, and rosemary. Served with seasonings.",
          },
          price: "20",
        },
      ],
    },
    {
      id: "salads",
      name: { ar: "سلطة", he: "סלטים", en: "Salads" },
      items: [
        {
          name: { ar: "سلطة توست", he: "סלט טוסט", en: "Toast Salad" },
          description: {
            ar: "خس, بندورة شيري, جزر, توست اجبان, بصل ليلكي, زبدة الثوم, وجبنة بلغاريت",
            he: "קוביות טוסט בגבינה צהובה ופסטו, חסה, עגבניות שר, גזר, בצל סגול, חמאת שום, גבינה בולגרית",
            en: "Lettuce, cherry tomatoes, carrots, cheese toast, purple onion, garlic butter, Bulgarian cheese",
          },
          price: "58",
        },
        {
          name: { ar: "سلطة قيصر", he: "סלט קיסר", en: "Caesar Salad" },
          description: {
            ar: "خسة عربية, صدر دجاج, بصل ليلكي, خبز محمص مع صلصة قيصر",
            he: "חסה, חזה עוף, בצל סגול, קרוטונים, מוגש ברוטב קיסר",
            en: "Lettuce, chicken breast, purple onion, croutons, served with Caesar dressing",
          },
          price: "68",
        },
        {
          name: { ar: "سلطة حلومي مقرمشة", he: "סלט חלומי קראנצ׳י", en: "Crunchy Halloumi Salad" },
          description: {
            ar: "خسة ملونة, فلفل مشوي, بندورة شيري, تشيبس بطاطا حلوة, جبنة حلومي",
            he: "חסה צבעונית, פלפלים קלויים, עגבניות שרי, גבינת חלומי",
            en: "Mixed lettuce, roasted peppers, cherry tomatoes, sweet potato chips, halloumi cheese",
          },
          price: "65",
        },
        {
          name: { ar: "سلطة فتوش", he: "סלט פתוש", en: "Fattoush Salad" },
          description: {
            ar: "خيار, بندورة, بصل, سماق, فلفل اخضر, زيتون, جبنة, زعتر وخبز محمص",
            he: "מלפפון, עגבנייה, בצל, סומק, פלפל ירוק, זיתים, גבינה, זעתר, לחם קלוי",
            en: "Cucumber, tomato, onion, sumac, green pepper, olives, cheese, zaatar, toasted bread",
          },
          price: "43",
        },
        {
          name: { ar: "سلطة تبولة", he: "סלט תבולה", en: "Tabbouleh Salad" },
          description: {
            ar: "برغل, بقدونس, نعنع, بندورة",
            he: "פטרוזיליה קצוצה, עשבי תיבול, בורגול, עגבניות",
            en: "Bulgur, parsley, mint, tomatoes",
          },
          price: "42",
        },
      ],
    },
    {
      id: "toasts",
      name: { ar: "توستات وشطائر", he: "טוסטים וסנדוויצ׳ים", en: "Toasts & Sandwiches" },
      items: [
        {
          name: { ar: "توست ايطالي", he: "טוסט איטלקי", en: "Italian Toast" },
          description: {
            ar: "خبزة البيجلي, بيستو, جبنة موتساريلا, بندورة, ريحان, زيت زيتون وبندورة مجففة",
            he: "בייגל טוסט, ממרח פסטו, גבינת מוצרלה, עגבנייה, בזיליקום, שמן זית ועגבניות מיובשות",
            en: "Bagel toast, pesto, mozzarella, tomato, basil, olive oil and sun-dried tomatoes",
          },
          price: "53",
        },
        {
          name: { ar: "توست اربع اجبان", he: "טוסט ארבע גבינות", en: "Four Cheese Toast" },
          description: {
            ar: "خبزة البيجلي, جبنة بيضاء, جبنة صفراء, جبنة موتساريلا, جبنة فيتا, باذنجان, وفلفل",
            he: "בייגל טוסט עם גבינה לבנה, צהובה, מוצרלה וגבינת פטה עם חצילים קלויים ופלפל קלוי",
            en: "Bagel toast with white cheese, yellow cheese, mozzarella, feta, roasted eggplant and pepper",
          },
          price: "65",
        },
        {
          name: { ar: "توست جاردن", he: "טוסט הבית", en: "Garden Toast" },
          description: {
            ar: "خبزة البيجلي, جبنة جاودا, زبدة, بصل, بندورة وبيض مسلوق",
            he: "בייגל טוסט עם גבינת גאודה, חמאה, בצל, עגבנייה וביצה קשה",
            en: "Bagel toast with Gouda cheese, butter, onion, tomato and boiled egg",
          },
          price: "55",
        },
        {
          name: { ar: "توست بالطابون", he: "טוסט טאבון פתוח", en: "Open Taboon Toast" },
          description: {
            ar: "بيجلي توست مفتوح, زبدة, جبنة موتساريلا, جبنة صفرا, بندورةو زيتون, فطاريش وسلامي",
            he: "בייגל טוסט פתוח עם חמאה, גבינת מוצרלה, גבינה צהובה, עגבניות, זיתים, פטריות וסלמי",
            en: "Open bagel toast with butter, mozzarella, yellow cheese, tomatoes, olives, mushrooms and salami",
          },
          price: "62",
        },
        {
          name: { ar: "شطيرة جبيتا", he: "כריך ג׳בטה", en: "Ciabatta Sandwich" },
          description: {
            ar: "بيض اومليت, خضار, جبنة ماعز, خسة, بندورة وخيار",
            he: "חביתת ירק עם גבינת עיזים, חסה, עגבנייה ומלפפון",
            en: "Vegetable omelette with goat cheese, lettuce, tomato and cucumber",
          },
          price: "47",
        },
      ],
    },
    {
      id: "garden",
      name: { ar: "وجبات الجاردن", he: "מיוחדים", en: "Garden Specials" },
      items: [
        {
          name: { ar: "رافيولي", he: "רביולי", en: "Ravioli" },
          description: {
            ar: "باستا رافيولي بحشوات جبنة/ بطاطا مع فطاريش وصلصة بشاميل",
            he: "פסטה רביולי במילוי גבינה/בטטה ופטריות, מוגש ברוטב שמנת פטריות",
            en: "Ravioli pasta filled with cheese / sweet potato and mushrooms, served with creamy mushroom sauce",
          },
          price: "55",
        },
      ],
    },
    {
      id: "taboon",
      name: { ar: "وجبات الطابون", he: "מנות טאבון", en: "Taboon Dishes" },
      items: [
        {
          name: { ar: "بيتسا شخصية", he: "פיצה אישית", en: "Personal Pizza" },
          description: {
            ar: "صلصة بندورة كلاسيك مع جبنة موتساريلا",
            he: "עם רוטב עגבניות קלאסי וגבינת מוצרלה",
            en: "Classic tomato sauce with mozzarella cheese",
          },
          price: "45",
          note: { ar: "مع اضافات", he: "עם תוספות", en: "with toppings" },
        },
        {
          name: { ar: "بيتسا بشاميل", he: "פיצה שמנת", en: "Bechamel Pizza" },
          description: {
            ar: "صلصلة بشاميل, صدر دجاج, جبنة موتساريلا وبرمزان",
            he: "רוטב שמנת, חזה עוף, גבינת מוצרלה ופרמזן",
            en: "Bechamel sauce, chicken breast, mozzarella and parmesan",
          },
          price: "61",
        },
        {
          name: { ar: "بيتسا بيستو", he: "פיצה פסטו", en: "Pesto Pizza" },
          description: {
            ar: "صلصة بيستو, روكات, جبنة موتساريلا, وبرمزان",
            he: "רוטב פסטו, רוקט, גבינת מוצרלה ופרמזן",
            en: "Pesto sauce, arugula, mozzarella and parmesan",
          },
          price: "56",
        },
        {
          name: { ar: "بيتسا بوميراجي", he: "פיצה פורמג׳י", en: "Formaggi Pizza" },
          description: {
            ar: "صلصة بندورة كلاسيك, جبنة بولغاريت, جبنة صفراء, جبنة موتساريلا وبرمزان",
            he: "רוטב עגבניות קלאסי, גבינה בולגרית, גבינה צהובה, מוצרלה, פרמזן",
            en: "Classic tomato sauce, Bulgarian cheese, yellow cheese, mozzarella, parmesan",
          },
          price: "60",
        },
      ],
    },
    {
      id: "pastries",
      name: { ar: "فطائر", he: "מאפים", en: "Pastries" },
      items: [
        {
          name: { ar: "فطيرة جبنة", he: "מאפה גבינה", en: "Cheese Pastry" },
          description: null,
          price: "39",
        },
        {
          name: { ar: "فطيرة لحمة عجل", he: "מאפה בשר עגל", en: "Veal Pastry" },
          description: null,
          price: "44",
        },
        {
          name: { ar: "فطيرة سبانخ", he: "מאפה תרד", en: "Spinach Pastry" },
          description: null,
          price: "39",
        },
      ],
    },
    {
      id: "hot-drinks",
      name: { ar: "مشروبات ساخنة", he: "משקאות חמים", en: "Hot Drinks" },
      items: [
        {
          name: { ar: "اسبرسو قصير/ طويل", he: "אספרסו קצר/ארוך", en: "Espresso Short / Long" },
          description: null,
          price: "9/12",
        },
        {
          name: { ar: "قهوة عربية", he: "קפה ערבי", en: "Arabic Coffee" },
          description: null,
          price: "25",
        },
        {
          name: { ar: "شاي", he: "תה", en: "Tea" },
          description: null,
          price: "9",
        },
        {
          name: { ar: "كابوتشينو", he: "הפוך", en: "Cappuccino" },
          description: null,
          price: "14/18",
        },
      ],
    },
    {
      id: "cold-drinks",
      name: { ar: "مشروبات باردة", he: "משקאות קרים", en: "Cold Drinks" },
      items: [
        {
          name: { ar: "عصير برتقال طبيعي", he: "תפוזים", en: "Fresh Orange Juice" },
          description: null,
          price: "20",
        },
        {
          name: { ar: "ليمونادة", he: "גרוס", en: "Lemonade" },
          description: null,
          price: "20",
        },
        {
          name: { ar: "عصير جزر", he: "גזר", en: "Carrot Juice" },
          description: null,
          price: "20",
        },
      ],
    },
  ],
};
