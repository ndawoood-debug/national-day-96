/*
  إعدادات الشاشة التفاعلية لليوم الوطني ٩٦
  عدّل هذا الملف فقط، ثم ارفعه مع بقية الملفات.

  تنبيه: استخدم المفتاح العام (anon / publishable) فقط.
  لا تضع مفتاح service_role هنا أبدًا.
*/
window.APP_CONFIG = {
  // من Supabase: Project Settings ← API
  SUPABASE_URL: "https://ecdsaqiryzabczfhcjhk.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_lUqPh0KjT9KP657S-maVyQ_U8JlteTP",

  // الاسم الظاهر في ترويسة الشاشة (عدّله كما تريد)
  COLLEGE_NAME: "فرع الكلية التطبيقية بحريملاء",

  // رابط صفحة الطالب الذي يظهر في رمز QR.
  // اتركه فارغًا ليُحسب تلقائيًا من رابط الشاشة (index.html بجوار screen.html)
  STUDENT_URL: "",

  // مدة تبديل البطاقات على الجدار (بالثواني)
  ROTATE_SECONDS: 6,

  // مدة إبراز البطاقة الجديدة في وسط الشاشة (بالثواني)
  SPOTLIGHT_SECONDS: 9
};
