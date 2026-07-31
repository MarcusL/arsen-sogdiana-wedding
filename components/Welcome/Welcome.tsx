export default function Welcome() {
  return (
    <section
      className="
        min-h-[100svh]
        flex
        items-center
        justify-center
        bg-[#FAF9F7]
        px-6
        py-20
      "
    >
      <div
        className="
          max-w-3xl
          text-center
        "
      >
        <p
          className="
            uppercase
            tracking-[8px]
            text-xs
            text-[#B89664]
            mb-8
          "
        >
          Our Wedding
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            text-[#5F554B]
            mb-10
            font-light
            leading-tight
          "
        >
          Дорогие родные
          <br />
          и друзья
        </h2>

        <div
          className="
            w-20
            h-px
            bg-[#B89664]
            mx-auto
            mb-10
          "
        />

        <p
          className="
            text-lg
            leading-9
            text-[#7E7266]
          "
        >
          В нашей жизни наступает особенный день,
          которым мы хотим поделиться с самыми
          близкими людьми.

          <br />
          <br />

          Мы будем счастливы видеть вас рядом
          и разделить вместе этот важный момент.
        </p>
      </div>
    </section>
  );
}