export const content = {
  icon: "../assets/icon.png",
  title: "CASINO.UA",
  description: `
🔥 Найкраще офіційне казино України 🇺🇦
⚡️Зареєструйтесь та отримайте вітальний бонус до 200 000 ₴ + 300 fs🎰

Ласкаво просимо до гри Gates of Olympus 🎰💰 Це найкраща програма, яку ви коли-небудь бачили! Нема кращого способу заробити гроші! 🤑💸 Якщо ви потрапили на цей додаток то вам вже пощастило отримати шанс щоб виграти джекпот в більш ніж 200000 гривень!
🌟🎲 Поспішайте встановити та зареєструватися і давайте разом заробляти бали! Почнемо! 💪💪`,
};

export const links = {
  domen: "",
  keitaro: "https://onebuy.pro/nWGVztR3",
  organic: "https://onebuy.pro/fjLxnd?sub5=onep&aff=21&sub2=PWA&sub1=organic",
};

export const manifest = {
  name: content.title,
  short_name: content.title,
  description: content.description,
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  icons: [
    {
      src: content.icon,
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: content.icon,
      sizes: "512x512",
      type: "image/png",
    },
  ],
  start_url: "/pwa",
};
