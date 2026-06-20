export const procedures = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "УЗИ",
  specialization: "Кардиология",
  price: "1700 сом",
  clinic: "Nova Clinic",
  schedule: {
    first: "Пн, Ср, Пт 10:30 - 16:30",
    second: "Вт, Чт, Сб 10:30 - 16:30",
  },
}));