const STEPS = [
    { id: "01", title: "Відкриті дані", description: "Реальні зупинки, маршрути й розклад Львова (GTFS), далі аптеки, школи, укриття, станції SaveEcoBot. Пайплайн однаковий для будь-якого міста." },
    { id: "02", title: "Гексагони H3", description: "Місто розбите на комірки ~300 м. Відстань до об'єктів перетворюється в бал 0–100 з плавним згасанням, без різкого «є/нема»." },
    { id: "03", title: "Куди доїдете", description: "Наведіть на гексагон: Okil знайде найближчі зупинки й підсвітить комірки, куди можна доїхати громадським транспортом за 15 хвилин, годину чи навіть дві." },
];

export default function Info() {
    return (
        <section className="bg-[#F3F3F9] px-6 py-24">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
                {STEPS.map((step) => (
                    <article key={step.id} className="rounded-2xl bg-white p-6 shadow-sm">
                        <span className="text-sm font-semibold text-blue-500">{step.id}</span>
                        <h3 className="mt-4 text-xl font-semibold text-black">{step.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}